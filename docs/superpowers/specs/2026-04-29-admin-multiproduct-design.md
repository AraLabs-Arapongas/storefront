# Admin AraLabs — Estrutura multi-produto

**Status:** Decisão tomada em 2026-04-29. Spec do shape do admin antes de começar a implementação.

**Contexto:** o `aralabs-storefront` é o hub admin de **todos os produtos AraLabs**. Hoje só fala com `ara-agenda` (Supabase `sixgkgiirifigoiqbyow`); horizonte de 12-18 meses prevê 3-5 produtos. Cada produto tem seu próprio Supabase. Storefront acessa via **secret key server-to-server** (bypassa RLS).

Spec original do hand-off vive em `ara-agenda/docs/superpowers/specs/2026-04-19-platform-admin-handoff.md` — este doc é o **complemento**: define como a UI do admin é estruturada quando há N produtos.

---

## 1. Padrão de navegação

**Product switcher global no topo + rota especial `/admin/overview`** pra visão consolidada.

```
┌──────────────────────────────────────────────────┐
│ AraLabs Admin   [▾ ara-agenda ▾]      Thiago ▾  │
│                  ├─ 📊 Overview AraLabs (consol) │
│                  ├─ ara-agenda                   │
│                  ├─ ara-X                        │
│                  └─ ara-Y                        │
├──────────────────────────────────────────────────┤
│ Sidebar (contextual ao produto selecionado):     │
│  Dashboard                                        │
│  Tenants                                          │
│  Plans                                            │
│  Users                                            │
│  Audit log                                        │
└──────────────────────────────────────────────────┘
```

**Por que esse padrão:**

- Telas core são **as mesmas** entre produtos (tenants, plans, users, audit) — switcher mantém UI consistente, só os dados mudam.
- Padrão familiar (Vercel, GitHub, Linear, Stripe) — onboarding do próximo admin é zero.
- Escala sem mexer em layout: produto novo = item novo no dropdown.
- Operação fica explicitamente **dentro do escopo de um produto** — sem confusão de "estou criando tenant no produto certo?".

**Alternativas consideradas e descartadas:**

- **Dashboard consolidado como home + drill-down.** Bom pra "saúde do negócio", ruim pra operação diária. Resolvido oferecendo isso como rota especial (`/admin/overview`) em vez de home padrão.
- **Sidebar com produtos como seções.** Faz sentido se cada produto tiver telas únicas — mas hoje compartilham 90% das telas. Reabrir se algum produto tiver UI muito diferente.

---

## 2. URL structure

| Rota | Conteúdo |
|---|---|
| `/admin` | Redirect pro último produto usado (cookie) ou `/admin/overview` se não tiver. |
| `/admin/overview` | Dashboard consolidado AraLabs (read-only). |
| `/admin/[product]/dashboard` | Dashboard daquele produto (KPIs, alerts). |
| `/admin/[product]/tenants` | Listagem + busca + filtros. |
| `/admin/[product]/tenants/new` | Criar tenant. |
| `/admin/[product]/tenants/[id]` | Editar tenant (branding, billing, ops). |
| `/admin/[product]/plans` | CRUD de plans. |
| `/admin/[product]/users` | Users cross-tenant **dentro daquele produto**. |
| `/admin/[product]/audit` | Audit log daquele produto. |

`[product]` é slug — `ara-agenda`, `ara-X`, etc. Hard-coded numa enum/config no storefront por enquanto (3-5 produtos não precisa de tabela).

---

## 3. Comportamento do switcher

- **Persiste produto ativo** em cookie (`aralabs.admin.active_product`) ou localStorage. Voltou ao admin? Cai no último produto usado.
- **Trocar produto preserva tela equivalente** quando faz sentido (`tenants` → `tenants`); quando produto destino não tem a tela, cai em `dashboard` daquele produto.
- **"📊 Overview AraLabs" sempre primeiro** no dropdown; demais produtos em ordem alfabética.
- **Acesso restrito por permissão** — usuário com role `PRODUCT_ADMIN` só vê produtos atribuídos (ver §6); só vê Overview se tiver acesso a 2+ produtos.

---

## 4. Overview AraLabs (rota consolidada)

`/admin/overview` agrega dados de todos os produtos via **N secret clients no servidor** (1 por produto). Renderização Server Component, sem CRUD.

**Conteúdo:**

- **MRR total** = soma `monthly_price_cents` onde `billing_status=ACTIVE`, todos produtos.
- **Tenants total por status** (ACTIVE / SUSPENDED / ARCHIVED), agregando produtos. Distribuição em barra ou pizza.
- **Trials vencendo em 7d** — lista cross-product, badge do produto em cada item, link pro `/admin/[product]/tenants/[id]` correspondente.
- **Churn da semana** (tenants que mudaram pra SUSPENDED/ARCHIVED nos últimos 7d) — lista cross-product.
- **Distribuição de receita por produto** — barra simples mostrando peso de cada produto no MRR total.

**Cache:** ISR ou `revalidate: 60` — Overview não precisa ser realtime, custa N round-trips.

**Acesso:** somente `SUPER_ADMIN` ou `PRODUCT_ADMIN` com 2+ produtos atribuídos.

---

## 5. Configuração de produtos

`src/lib/admin/products.ts` exporta a config dos produtos suportados:

```ts
export type AdminProduct = {
  slug: string                     // 'ara-agenda'
  name: string                     // 'ara-agenda'
  description: string              // 'Agenda online + presença digital'
  supabase: {
    url: string                    // env: ARA_AGENDA_SUPABASE_URL
    secretKey: string              // env: ARA_AGENDA_SECRET_KEY
  }
  // Telas que esse produto suporta. Default: todas as 5.
  // Se algum produto não tiver "plans" (ex: produto não-comercial),
  // remover daqui esconde do sidebar.
  features: ('dashboard' | 'tenants' | 'plans' | 'users' | 'audit')[]
}

export const ADMIN_PRODUCTS: AdminProduct[] = [
  {
    slug: 'ara-agenda',
    name: 'ara-agenda',
    description: 'Agenda online + presença digital',
    supabase: {
      url: process.env.ARA_AGENDA_SUPABASE_URL!,
      secretKey: process.env.ARA_AGENDA_SECRET_KEY!,
    },
    features: ['dashboard', 'tenants', 'plans', 'users', 'audit'],
  },
]
```

Adicionar produto novo = entrada nova no array + env vars no Vercel. Sem migration.

---

## 6. Permissões

Storefront tem própria tabela de admins (não compartilha auth com produtos):

```sql
-- supabase do storefront (ou tabela em DB próprio do storefront)
admin_users (
  id, email, name, role enum('SUPER_ADMIN','PRODUCT_ADMIN','SUPPORT'),
  created_at, last_login_at, is_active
)

admin_user_products (
  admin_user_id, product_slug,  -- 'ara-agenda', 'ara-X'
  primary key (admin_user_id, product_slug)
)
```

**Roles:**

- `SUPER_ADMIN` — todos produtos + Overview. Bypass de `admin_user_products`.
- `PRODUCT_ADMIN` — produtos listados em `admin_user_products`. Switcher só lista esses. Overview visível só se 2+ produtos.
- `SUPPORT` — leitura em todos produtos atribuídos + ações específicas (reset senha de owner, reativar tenant suspenso). Sem CRUD de plans nem criar tenant.

Auth do storefront pode ser **Sign in with Vercel** (OAuth — produto Vercel, GA Nov/2025) pra simplificar — admins AraLabs já têm conta Vercel. Alternativa: Supabase Auth próprio do storefront.

---

## 7. Audit log: por produto (sem agregação cross)

**Decisão:** cada `/admin/[product]/audit` lê **diretamente** a tabela `audit_log` do Supabase daquele produto via secret key. Storefront não tem tabela `audit_log` própria.

**Tradeoff aceito:**

- ✅ Implementação simples (sem webhooks, sem replicação).
- ✅ Source of truth fica no produto — alteração lá é imediatamente visível aqui.
- ❌ Investigação cross-product ("o que o admin Thiago mexeu hoje em todos produtos?") exige abrir 1 tela por produto.

**Quando reabrir:** se aparecer dor real de investigação cross (auditoria, incidente de segurança), criar:

1. Webhooks em cada produto → endpoint storefront (`POST /api/internal/audit-ingest`).
2. Tabela `audit_log_aggregated` no DB do storefront.
3. Tela `/admin/overview/audit` cross-product.

Marcar como Fase 3 no `docs/futuro.md` do storefront quando virar prioridade.

---

## 8. Stack & dependências

- **Next.js 16** + App Router (igual storefront público).
- **Supabase JS client** (`@supabase/supabase-js`) — N instâncias, 1 por produto.
- **Sign in with Vercel** ou Supabase Auth próprio (decidir antes de implementar).
- **Tipos TS** copiados de `ara-agenda/src/lib/supabase/types.ts` ou regenerados via MCP. Quando `ara-X` existir, mesma rotina.
- **shadcn/ui** ou design system existente do storefront (verificar `design-system/`).

**Env vars necessárias (Vercel):**

```
# Storefront-próprio (auth + cookies)
STOREFRONT_SUPABASE_URL=...
STOREFRONT_SUPABASE_SECRET=...

# Por produto:
ARA_AGENDA_SUPABASE_URL=https://sixgkgiirifigoiqbyow.supabase.co
ARA_AGENDA_SECRET_KEY=sb_secret_...
ARA_AGENDA_PUBLISHABLE_KEY=sb_publishable_...

# Quando ara-X existir:
ARA_X_SUPABASE_URL=...
ARA_X_SECRET_KEY=...
```

---

## 9. Roadmap de implementação (ordem sugerida)

1. **Auth do storefront admin** — login + roles + middleware guard.
2. **Config de produtos** (`lib/admin/products.ts`) + helper `getProductSecretClient(slug)`.
3. **Layout admin com switcher** + sidebar contextual.
4. **`/admin/[product]/dashboard`** — primeiros KPIs do `ara-agenda` (count tenants, MRR).
5. **`/admin/[product]/tenants`** — listagem + busca + filtros.
6. **`/admin/[product]/tenants/new`** — criar tenant (substitui `pnpm provision-tenant`).
7. **`/admin/[product]/tenants/[id]`** — editar (branding, billing, ops).
8. **`/admin/[product]/plans`** — CRUD.
9. **`/admin/[product]/users`** — listagem cross-tenant + reset senha + desativar.
10. **`/admin/[product]/audit`** — listagem do `audit_log`.
11. **`/admin/overview`** — dashboard consolidado (deixar por último, depende dos outros).

Etapas 1-6 dão o MVP funcional; 7-11 completam.

---

## 10. Fora do escopo desta spec

- **Webhooks ara-agenda → storefront** pra real-time sync. Hoje é polling/secret key sob demanda; webhooks só quando dor justificar.
- **Audit log agregado cross-product.** Ver §7.
- **Multi-region / multi-Supabase pra mesmo produto.** Cada produto = 1 Supabase. Reabrir se algum produto crescer pra ponto de exigir sharding.
- **API HTTP `/api/admin/*` no ara-agenda** como camada entre storefront e DB direto. Ainda Épico 10 Task 12 do ara-agenda — quando existir, refatorar a config pra apontar pro endpoint em vez do Supabase URL. Não bloqueia MVP.
- **Telas de billing avançado** (revenue chart histórico, cohort, LTV). Sai pro Tier 3 do roadmap quando MVP tiver tração.

---

## 11. Critério de sucesso

- Admin loga, troca de produto pelo switcher, executa as 5 telas (dashboard, tenants, plans, users, audit) num produto.
- Operação que hoje é manual (provisionar tenant via CLI no ara-agenda) é feita inteira pelo admin.
- Adicionar produto novo no futuro = entrada nova em `ADMIN_PRODUCTS` + env vars; sem mexer em layout, sem mexer em rotas.

---

## Referências

- `ara-agenda/docs/superpowers/specs/2026-04-19-platform-admin-handoff.md` — spec original do hand-off (backend ara-agenda, RLS, role `PLATFORM_ADMIN`).
- `ara-agenda/docs/superpowers/plans/2026-04-18-epic-07-platform-admin-billing.md` — requisitos de comportamento do admin billing.
- `ara-agenda/docs/futuro.md` — decisões de produto cross-repo.
