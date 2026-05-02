# Futuro do aralabs-storefront

> Site institucional + admin AraLabs. Doc de pensamento de produto:
> decisões adiadas, backlog priorizado, tech debt.
>
> **Não confundir com:**
> - `docs/superpowers/plans/` — planos executáveis.
> - `docs/superpowers/specs/` — design técnico de feature.

---

## Tech debt

- **SEO local pra Arapongas/PR.**
  Site não aparece em buscas tipo "software em arapongas",
  "programas em arapongas", "aplicativos em arapongas". Três causas
  sobrepostas:
  1. **Sem Google Business Profile.** Buscas com cidade disparam
     Map Pack antes de qualquer orgânico — sem GBP, fora da primeira
     tela por design. Cadastrar com categoria "Empresa de software" /
     "Desenvolvedora de software", endereço Rua Guarauna 288 - Jardim
     Primavera, Arapongas/PR, telefone, horário.
  2. **Sitemap não submetido no Google Search Console** (verificar).
     Sem submissão, indexação depende de discovery passivo — mais lento.
  3. **Conteúdo não menciona Arapongas em copy visível.** Endereço só
     aparece em JSON-LD (metadado). Adicionar 2-3 menções naturais em
     `/empresa` e home: "lab brasileiro sediado em Arapongas/PR", etc.
     Sem keyword stuffing — só presença natural.

  **Ordem de execução quando virar prioridade:**
  (1) GBP — 1 hora, grátis, maior impacto.
  (2) GSC + sitemap submission + monitoring.
  (3) Copy local em `/empresa` + home.
  (4) Backlinks locais (Acian, portais regionais) — longo prazo.

---

## Backlog priorizado

_(Vazio por enquanto — popular conforme aparecer.)_

---

## Decisões adiadas

- **Admin AraLabs no storefront — postergado em 2026-04-29.**
  Spec completa em `docs/superpowers/specs/2026-04-29-admin-multiproduct-design.md`.
  Enquanto ara-agenda for produto único, o admin vive dentro do próprio
  ara-agenda: zero infra nova (sem Supabase do storefront, sem auth,
  sem BFF), lógica de write co-localizada com o produto, e
  `pnpm provision-tenant` continua sendo o caminho oficial até virar
  RPC/UI dentro do ara-agenda.

  **Reabrir quando:** ara-X (segundo produto) entrar em planejamento.
  Aí decide se migra os dois admins pro storefront ou mantém separados —
  com dados reais de "quanto admin do ara-agenda eu reuso?" em vez de
  adivinhação.

  Análise feita na spec cobre: padrão de navegação (switcher + Overview),
  URL structure, permissões (SUPER_ADMIN/PRODUCT_ADMIN/SUPPORT), audit
  log per-product, opções de auth (Sign in with Vercel vs Supabase Auth),
  e três estratégias pra writes cross-product (secret key direto, BFF
  HTTP, RPC no Supabase do produto — escolhida foi RPC). Tudo isso
  continua válido como ponto de partida na reabertura.

---

## Ideias em aberto

_(Vazio.)_

---

## Não vamos fazer

_(Vazio.)_
