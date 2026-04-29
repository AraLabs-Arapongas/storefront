# Storefront Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reposicionar o storefront da AraLabs como lab de produtos próprios (não app monofamiliar), introduzir o ara-agenda como produto público, mover Casa Leve para `/produtos/casa-leve`, reescrever `/tese` neutra (família + SMB), e adicionar seção de parcerias selecionadas em `/empresa`.

**Architecture:** Next.js 16 App Router. Mudanças são em conteúdo, IA (estrutura de rotas) e SEO (sitemap, JSON-LD). Sem novas dependências. O design system existente em `src/design-system/` e os componentes em `src/components/site/` são reutilizados ao máximo. Único arquivo de infra alterado: [next.config.ts](next.config.ts) ganha um `redirects()`.

**Tech Stack:** Next.js 16.2.3, React 19.2.4, TypeScript, Tailwind 4. Sem testes automatizados no repo (não há test runner em [package.json](package.json)) — verificação é via `npm run lint` + dev server (`npm run dev`) com inspeção visual no browser.

**Spec:** [docs/superpowers/specs/2026-04-28-storefront-revamp-design.md](docs/superpowers/specs/2026-04-28-storefront-revamp-design.md)

---

## File Structure

**Novos arquivos:**
- `src/app/produtos/page.tsx` — índice do portfólio + "Como um produto nasce na AraLabs"
- `src/app/produtos/ara-agenda/page.tsx` — página do produto ara-agenda
- `src/app/produtos/casa-leve/page.tsx` — Casa Leve realocada (origem `src/app/casa-leve/page.tsx`)

**Arquivos modificados:**
- `next.config.ts` — redirect 301 `/casa-leve` → `/produtos/casa-leve`
- `src/app/sitemap.ts` — adicionar `/produtos`, `/produtos/ara-agenda`, `/produtos/casa-leve`; remover `/casa-leve`
- `src/lib/seo/schemas.ts` — adicionar `collectionPageSchema`; ajustar `articleSchema` se necessário
- `src/app/page.tsx` — home reescrita: novo hero, portfolio grid (substitui `CasaLeveDualMockup` como protagonista), tese curta, atualizar `routes`
- `src/app/tese/page.tsx` — reescrita com copy neutra (família + SMB)
- `src/app/empresa/page.tsx` — reforçar posicionamento + nova seção "Parcerias selecionadas"
- `src/components/site/Header.tsx` — atualizar `links` (remover `Casa Leve` standalone, adicionar `Produtos`)
- `src/components/site/Footer.tsx` — atualizar `columns` (Produtos no lugar de Casa Leve hardcoded; opcional `trabalhe@`)

**Arquivos removidos:**
- `src/app/casa-leve/page.tsx` — substituído por `src/app/produtos/casa-leve/page.tsx` + redirect

**Arquivos NÃO tocados (reutilizados):**
- `src/components/site/Hero.tsx`, `Pillars.tsx`, `Values.tsx`, `Thesis.tsx`, `Problem.tsx`, `Principles.tsx`, `NextSteps.tsx`, `PageHero.tsx`, `CasaLeveMockup.tsx`, `CasaLeveDualMockup.tsx`, `FeatureMockups.tsx`, `ImagePlaceholder.tsx`, `ThemeSwitcher.tsx`, `Logo.tsx` — todos podem ser usados as-is. Se algum precisar de ajuste de copy, fazer inline durante a task que o consome.

---

### Task 1: Adicionar redirect 301 `/casa-leve` → `/produtos/casa-leve`

**Files:**
- Modify: `next.config.ts`

- [ ] **Step 1: Adicionar redirect**

Substituir o conteúdo de [next.config.ts](next.config.ts) por:

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/casa-leve',
        destination: '/produtos/casa-leve',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Verificar lint**

Run: `npm run lint`
Expected: sem erros novos.

- [ ] **Step 3: Commit**

```bash
git add next.config.ts
git commit -m "Redirect /casa-leve to /produtos/casa-leve"
```

> **Nota:** O destino `/produtos/casa-leve` ainda não existe nesta task — Next dev server vai 404 em ambos por enquanto. Isso é esperado; o destino é criado na Task 4.

---

### Task 2: Adicionar `collectionPageSchema` ao SEO helpers

**Files:**
- Modify: `src/lib/seo/schemas.ts`

- [ ] **Step 1: Adicionar `collectionPageSchema`**

Append ao final de [src/lib/seo/schemas.ts](src/lib/seo/schemas.ts), depois de `articleSchema`:

```ts
export function collectionPageSchema(params: {
  path: string;
  name: string;
  description: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: { '@id': ORG_ID },
  };
}
```

- [ ] **Step 2: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo/schemas.ts
git commit -m "Add CollectionPage JSON-LD schema helper"
```

---

### Task 3: Mover Casa Leve para `/produtos/casa-leve`

**Files:**
- Create: `src/app/produtos/casa-leve/page.tsx`
- Delete: `src/app/casa-leve/page.tsx`

- [ ] **Step 1: Criar diretórios**

```bash
mkdir -p src/app/produtos/casa-leve
```

- [ ] **Step 2: Mover via git**

```bash
git mv src/app/casa-leve/page.tsx src/app/produtos/casa-leve/page.tsx
rmdir src/app/casa-leve
```

- [ ] **Step 3: Atualizar canonical, og:url e framing no novo arquivo**

Em [src/app/produtos/casa-leve/page.tsx](src/app/produtos/casa-leve/page.tsx):

1. Mudar `alternates.canonical` de `/casa-leve` para `/produtos/casa-leve`.
2. Mudar `openGraph.url` de `/casa-leve` para `/produtos/casa-leve`.
3. No `softwareApplicationSchema` (se houver `path: '/casa-leve'`), trocar para `path: '/produtos/casa-leve'`.
4. No hero da página, garantir que aparece a frase "Casa Leve é um produto da AraLabs" em algum lugar visível (eyebrow, subtítulo, ou parágrafo curto). Não usar mais "razão de ser" ou framing de produto único.
5. Adicionar uma pequena seção de status logo no início (após hero), com a copy:

```tsx
<section className="border-b border-[color:var(--line)]">
  <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10 lg:py-14">
    <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8">
      <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
        Status: Em exploração
      </p>
      <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
        O Casa Leve está em fase de definição de produto, validação de proposta e
        construção conceitual.
      </p>
    </div>
  </div>
</section>
```

Posicionar logo depois do hero principal e antes do conteúdo existente.

- [ ] **Step 4: Verificar página no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/produtos/casa-leve`
Expected: página carrega; status "Em exploração" visível; sem erros no console; canonical no `<head>` é `/produtos/casa-leve`.

Verificar também: `http://localhost:3000/casa-leve` deve redirecionar 301 para `/produtos/casa-leve` (verificar no Network tab do DevTools).

- [ ] **Step 5: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 6: Commit**

```bash
git add src/app/produtos/casa-leve/page.tsx
git commit -m "Move Casa Leve to /produtos/casa-leve with status and product framing"
```

---

### Task 4: Criar página do ara-agenda

**Files:**
- Create: `src/app/produtos/ara-agenda/page.tsx`

- [ ] **Step 1: Criar diretório**

```bash
mkdir -p src/app/produtos/ara-agenda
```

- [ ] **Step 2: Escrever a página**

Criar [src/app/produtos/ara-agenda/page.tsx](src/app/produtos/ara-agenda/page.tsx) com:

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'ara-agenda — Agenda online para pequenos negócios';
const pageDescription =
  'ara-agenda é o produto da AraLabs para pequenos negócios de serviços: agendamento online, página pública do negócio e ferramentas de presença digital. Em desenvolvimento.';

export const metadata: Metadata = {
  title: 'ara-agenda',
  description: pageDescription,
  alternates: { canonical: '/produtos/ara-agenda' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/produtos/ara-agenda',
    type: 'website',
  },
};

const audience = [
  'salões de beleza',
  'barbearias',
  'esmalterias',
  'clínicas',
  'estúdios de estética',
  'oficinas',
  'consultórios',
  'profissionais autônomos',
];

const problems = [
  'horários esquecidos',
  'dificuldade para organizar a agenda',
  'perda de clientes',
  'pouca presença digital',
  'dependência total do atendimento manual',
  'baixa previsibilidade para o dono',
];

export default function AraAgendaPage() {
  return (
    <>
      <JsonLd
        data={softwareApplicationSchema({
          path: '/produtos/ara-agenda',
          name: 'ara-agenda',
          description: pageDescription,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
        })}
      />

      <PageHero
        eyebrow="Produto · Em desenvolvimento"
        title={
          <>
            <span className="font-serif italic text-[color:var(--gold-soft)]">ara-agenda</span>{' '}
            — agenda online e presença digital para pequenos negócios de serviços.
          </>
        }
        description="O ara-agenda é um produto da AraLabs pensado para negócios que vendem tempo por horário."
      />

      {/* Status */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-10 lg:px-10 lg:py-14">
          <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
              Status: Em desenvolvimento
            </p>
            <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink-muted)]">
              O ara-agenda está em construção ativa. As funcionalidades aqui descritas refletem
              a visão do produto em curso.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Para quem é
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Pensado para negócios que{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">vendem tempo</span>{' '}
            por horário.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audience.map((item) => (
              <li
                key={item}
                className="rounded-[18px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-5 py-4 text-[15px] text-[color:var(--ink)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Problema */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Problema
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                WhatsApp, agenda manual e{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">improviso</span>.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
                Muitos pequenos negócios ainda dependem de mensagens soltas e confirmação informal
                para gerenciar a operação. Isso gera:
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {problems.map((item) => (
                <li
                  key={item}
                  className="rounded-[18px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] px-5 py-4 text-[15px] text-[color:var(--ink)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solução */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Solução
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Agendamento online, página pública e{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">menos atrito</span>{' '}
            para o cliente marcar.
          </h2>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
            O ara-agenda combina agendamento online, página pública do negócio e ferramentas que
            ajudam o cliente a marcar horário sem depender de mensagens.
          </p>
        </div>
      </section>

      {/* Visão */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Visão
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Não é apenas uma agenda. É uma{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">camada</span> de
            presença digital e operação para negócios locais.
          </h2>
        </div>
      </section>

      {/* Voltar para portfólio */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-16 lg:px-10 lg:py-20">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
          >
            ← Ver todos os produtos
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/produtos/ara-agenda`
Expected: página carrega; hero + status + 4 seções (Para quem é, Problema, Solução, Visão) + link voltar; sem erros no console; canonical no `<head>` é `/produtos/ara-agenda`.

- [ ] **Step 4: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 5: Commit**

```bash
git add src/app/produtos/ara-agenda/page.tsx
git commit -m "Add ara-agenda product page"
```

---

### Task 5: Criar página índice `/produtos`

**Files:**
- Create: `src/app/produtos/page.tsx`

- [ ] **Step 1: Escrever a página**

Criar [src/app/produtos/page.tsx](src/app/produtos/page.tsx) com:

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { collectionPageSchema } from '@/lib/seo/schemas';

const pageDescription =
  'Produtos da AraLabs: ara-agenda (agenda online e presença digital para pequenos negócios) e Casa Leve (rotina familiar). Lab brasileiro de produtos digitais próprios.';

export const metadata: Metadata = {
  title: 'Produtos',
  description: pageDescription,
  alternates: { canonical: '/produtos' },
  openGraph: {
    title: 'Produtos da AraLabs',
    description: pageDescription,
    url: '/produtos',
    type: 'website',
  },
};

const products = [
  {
    href: '/produtos/ara-agenda',
    name: 'ara-agenda',
    tagline: 'Agenda online + presença digital para pequenos negócios de serviços.',
    status: 'Em desenvolvimento',
  },
  {
    href: '/produtos/casa-leve',
    name: 'Casa Leve',
    tagline: 'Sistema para ajudar famílias a organizar rotina, responsabilidades e hábitos.',
    status: 'Em exploração',
  },
];

const lifecycle = [
  { n: '01', title: 'Problema real', body: 'Começamos por uma dor concreta, não por uma ideia.' },
  { n: '02', title: 'Tese clara', body: 'Antes de construir, formulamos o ponto de vista que justifica o produto.' },
  { n: '03', title: 'Produto simples', body: 'A primeira versão entrega o essencial sem inflar o escopo.' },
  { n: '04', title: 'Base técnica sólida', body: 'Engenharia e design servem o produto pelo longo prazo.' },
  { n: '05', title: 'Evolução contínua', body: 'Produto vive — observa-se, ajusta-se, refina-se.' },
];

export default function ProdutosPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          path: '/produtos',
          name: 'Produtos da AraLabs',
          description: pageDescription,
        })}
      />

      <PageHero
        eyebrow="Portfólio"
        title={
          <>
            A AraLabs cria produtos próprios para{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">problemas reais</span>{' '}
            do cotidiano.
          </>
        }
        description="Nosso portfólio reúne produtos digitais construídos com intenção de longo prazo, base técnica sólida e leitura direta do problema."
      />

      {/* Produtos atuais */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Produtos atuais
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 transition hover:border-[color:var(--gold)]/40 hover:bg-[color:var(--bg-elev-2)]"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                    Status: {p.status}
                  </p>
                  <h3 className="mt-5 text-[26px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[15.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {p.tagline}
                  </p>
                </div>
                <span className="mt-10 text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                  Conhecer →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Como um produto nasce */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Como construímos
          </p>
          <h2 className="mt-4 max-w-3xl text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Como um produto nasce na{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">AraLabs</span>.
          </h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-5">
            {lifecycle.map((s) => (
              <li
                key={s.n}
                className="bg-[color:var(--bg-elev)] p-7"
              >
                <span className="font-serif text-[13px] italic tracking-wider text-[color:var(--gold-soft)]">
                  {s.n}
                </span>
                <h3 className="mt-8 text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {s.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/produtos`
Expected: hero + 2 cards de produto (ara-agenda, Casa Leve) com status diferentes + seção "Como um produto nasce" com 5 passos. Cliques nos cards levam para as páginas certas.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/app/produtos/page.tsx
git commit -m "Add /produtos portfolio index with product lifecycle"
```

---

### Task 6: Reescrever `/tese` com copy neutra (família + SMB)

**Files:**
- Modify: `src/app/tese/page.tsx`

> **Nota:** Os componentes `Thesis` e `Problem` em `src/components/site/` provavelmente contêm copy específica de família. Esta task substitui o uso deles por conteúdo inline neutro. Os componentes podem continuar existindo (não removidos) — apenas deixam de ser usados em `/tese`.

- [ ] **Step 1: Substituir o conteúdo da página**

Substituir [src/app/tese/page.tsx](src/app/tese/page.tsx) inteiro por:

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema } from '@/lib/seo/schemas';

const pageHeadline = 'Tese da AraLabs';
const pageDescription =
  'A tese da AraLabs: existem muitos problemas cotidianos mal resolvidos por software — em famílias, em pequenos negócios e em operações locais. Criamos produtos próprios para esses contextos.';

export const metadata: Metadata = {
  title: 'Nossa tese',
  description: pageDescription,
  alternates: { canonical: '/tese' },
  openGraph: {
    title: pageHeadline,
    description: pageDescription,
    url: '/tese',
    type: 'article',
  },
};

const contexts = [
  {
    n: '01',
    title: 'Dentro de casa',
    body: 'Famílias tentando dividir melhor as responsabilidades, organizar rotina e manter acordos visíveis.',
  },
  {
    n: '02',
    title: 'Em pequenos negócios',
    body: 'Salões, clínicas, oficinas e profissionais autônomos tentando organizar a agenda e a presença digital.',
  },
  {
    n: '03',
    title: 'Em operações locais',
    body: 'Negócios e equipes que ainda dependem de WhatsApp, planilhas, memória e improviso para tomar decisões.',
  },
];

export default function TesePage() {
  return (
    <>
      <JsonLd
        data={articleSchema({
          path: '/tese',
          headline: pageHeadline,
          description: pageDescription,
          datePublished: '2026-04-28T00:00:00-03:00',
        })}
      />

      <PageHero
        eyebrow="Nossa tese"
        title={
          <>
            Software próprio para{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">problemas reais</span>{' '}
            do dia a dia.
          </>
        }
        description="A AraLabs acredita que ainda existem muitos problemas cotidianos mal resolvidos por software."
      />

      {/* Tese principal */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl space-y-7 text-[18px] leading-[1.75] text-[color:var(--ink-muted)] md:text-[19px]">
            <p>
              Alguns problemas são grandes demais para serem resolvidos por planilhas. Outros são
              simples demais para justificar sistemas corporativos pesados.
            </p>
            <p className="text-[color:var(--ink)]">É nesse espaço que queremos construir.</p>
            <p>
              Criamos produtos digitais para contextos onde organização, presença digital, rotina,
              operação e tomada de decisão ainda dependem de improviso, WhatsApp, memória e
              esforço manual.
            </p>
            <p>Nossa tese não está presa a um único mercado.</p>
            <p>
              Ela pode aparecer em uma família tentando dividir melhor as responsabilidades da
              casa. Pode aparecer em um salão tentando organizar sua agenda. Pode aparecer em um
              pequeno negócio tentando ter presença digital. Pode aparecer em uma operação local
              tentando parar de depender de processos soltos.
            </p>
            <p className="text-[color:var(--ink)]">
              A AraLabs existe para transformar esses problemas em produtos simples, úteis e
              sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* Onde a tese aparece */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
            Onde a tese aparece
          </p>
          <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
            Os mesmos sintomas em{' '}
            <span className="font-serif italic text-[color:var(--gold-soft)]">contextos diferentes</span>.
          </h2>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {contexts.map((c) => (
              <li
                key={c.n}
                className="rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8"
              >
                <span className="font-serif text-[13px] italic text-[color:var(--gold-soft)]">
                  {c.n}
                </span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-[color:var(--ink-muted)]">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA para portfólio */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-[26px] font-semibold tracking-tight text-[color:var(--ink)] md:text-[32px]">
                Veja a tese{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">em produto</span>.
              </h3>
              <p className="mt-2 text-[15.5px] text-[color:var(--ink-muted)]">
                Conheça os produtos que a AraLabs constrói a partir dela.
              </p>
            </div>
            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
            >
              Ver produtos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/tese`
Expected: tese neutra cobrindo família + pequenos negócios + operações locais; CTA final aponta para `/produtos`, não Casa Leve. Sem qualquer menção a "famílias" como protagonistas únicas.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/app/tese/page.tsx
git commit -m "Rewrite /tese as neutral AraLabs thesis covering families and SMBs"
```

---

### Task 7: Atualizar `/empresa` com posicionamento reforçado e seção de parcerias

**Files:**
- Modify: `src/app/empresa/page.tsx`

- [ ] **Step 1: Atualizar copy do hero e descrição**

Em [src/app/empresa/page.tsx](src/app/empresa/page.tsx):

1. Trocar `pageDescription` por:

```ts
const pageDescription =
  'A AraLabs é um lab brasileiro de produtos digitais próprios, sediado em Arapongas (PR). Construímos software com utilidade real para problemas cotidianos de famílias, pequenos negócios e operações locais.';
```

2. Trocar `description` do `PageHero` por:

```tsx
description="Lab brasileiro de produtos digitais próprios. Construímos software com utilidade real para problemas cotidianos — produto, design e engenharia como núcleo, com base em Arapongas e ambição digital maior."
```

- [ ] **Step 2: Adicionar seção "Parcerias selecionadas" antes do `NextSteps`**

Localizar a linha `<NextSteps />` em [src/app/empresa/page.tsx](src/app/empresa/page.tsx) e inserir **antes** dela:

```tsx
{/* Parcerias selecionadas */}
<section className="border-b border-[color:var(--line)]">
  <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
          Parcerias selecionadas
        </p>
        <h2 className="mt-6 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.02em] text-[color:var(--ink)] md:text-[44px]">
          Também construímos sob{' '}
          <span className="font-serif italic text-[color:var(--gold-soft)]">demanda</span>, em
          parcerias selecionadas.
        </h2>
      </div>
      <div className="space-y-6 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
        <p>
          A AraLabs nasce para construir produtos próprios, mas também pode participar de projetos
          sob demanda quando existe alinhamento claro de visão, qualidade e longo prazo.
        </p>
        <p>
          Não atuamos como uma fábrica de demandas genéricas. Entramos em parcerias onde
          conseguimos contribuir com produto, design, engenharia e clareza estratégica.
        </p>
        <p>Para conversar sobre uma possibilidade de parceria, entre em contato.</p>
        <a
          href="mailto:trabalhe@aralabs.com.br"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
        >
          trabalhe@aralabs.com.br →
        </a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Atualizar CTA final para apontar para `/produtos`**

Na seção "Bottom CTA" em [src/app/empresa/page.tsx](src/app/empresa/page.tsx), trocar o `<Link href="/tese">...</Link>` final por uma versão que mantém o link pra tese mas adiciona contexto de portfólio. Substituir o bloco completo `{/* Bottom CTA */}` por:

```tsx
{/* Bottom CTA */}
<section className="border-b border-[color:var(--line)]">
  <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
    <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-10 md:flex-row md:items-center">
      <div>
        <h3 className="text-balance text-[26px] font-semibold tracking-tight text-[color:var(--ink)] md:text-[32px]">
          Conheça os{' '}
          <span className="font-serif italic text-[color:var(--gold-soft)]">produtos</span> da
          AraLabs.
        </h3>
        <p className="mt-2 text-[15.5px] text-[color:var(--ink-muted)]">
          ara-agenda e Casa Leve — produtos próprios construídos a partir da nossa tese.
        </p>
      </div>
      <Link
        href="/produtos"
        className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[14.5px] font-semibold text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
      >
        Ver produtos →
      </Link>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/empresa`
Expected:
- Hero novo descreve AraLabs como lab brasileiro de produtos próprios.
- Seção "Parcerias selecionadas" aparece antes do CTA final, com mailto `trabalhe@aralabs.com.br`.
- CTA final aponta para `/produtos`, não `/tese`.

- [ ] **Step 5: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 6: Commit**

```bash
git add src/app/empresa/page.tsx
git commit -m "Reposition /empresa as product lab + add Parcerias section"
```

---

### Task 8: Reescrever home — novo hero + portfolio grid + tese curta

**Files:**
- Modify: `src/app/page.tsx`

> **Nota:** O `CasaLeveDualMockup` deixa de ser o visual protagonista. A direção definida no spec é "grid de cards do portfólio" no hero. O componente continua existindo no codebase (pode ser usado em outro lugar) — apenas a home não o usa mais como hero.

- [ ] **Step 1: Substituir [src/app/page.tsx](src/app/page.tsx) inteiro por:**

```tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { LogoMark } from '@/components/site/Logo';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema, organizationSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};

const pillars = [
  {
    n: '01',
    title: 'Empresa-mãe',
    body: 'Estrutura que sustenta múltiplos produtos, não a marca de um único app.',
  },
  {
    n: '02',
    title: 'Problemas reais',
    body: 'Territórios com dor recorrente e impacto concreto no dia a dia.',
  },
  {
    n: '03',
    title: 'Clareza e estrutura',
    body: 'Documentação viva e direção estratégica antes de improviso.',
  },
  {
    n: '04',
    title: 'Longo prazo',
    body: 'Produtos que evoluem com intenção, não lançamentos descartáveis.',
  },
];

const products = [
  {
    href: '/produtos/ara-agenda',
    name: 'ara-agenda',
    tagline: 'Agenda online + presença digital para pequenos negócios de serviços.',
    status: 'Em desenvolvimento',
  },
  {
    href: '/produtos/casa-leve',
    name: 'Casa Leve',
    tagline: 'Sistema para ajudar famílias a organizar rotina, responsabilidades e hábitos.',
    status: 'Em exploração',
  },
];

const routes = [
  {
    href: '/empresa',
    eyebrow: 'Empresa',
    title: 'Quem é a AraLabs',
    body: 'Lab brasileiro de produtos digitais próprios — base, princípios e como trabalhamos.',
  },
  {
    href: '/tese',
    eyebrow: 'Tese',
    title: 'Por que existimos',
    body: 'A leitura de problema que conecta família, pequeno negócio e operação local.',
  },
  {
    href: '/produtos',
    eyebrow: 'Produtos',
    title: 'O que construímos',
    body: 'Portfólio de produtos próprios da AraLabs e como um produto nasce aqui.',
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />

      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-[color:var(--line)]"
      >
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-20%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgba(217,168,74,0.14),transparent_70%)]" />
          <div className="absolute right-[-10%] top-[20%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,255,0.10),transparent_70%)]" />
        </div>
        <div className="grain" />

        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-28 lg:pt-24">
          <div className="flex flex-col justify-center rise">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)]/60 py-2 pl-2 pr-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--ink-muted)] backdrop-blur">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[color:var(--gold)]/15 text-[color:var(--gold-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] shimmer" />
              </span>
              Lab brasileiro de produtos digitais
            </div>

            <h1 className="text-balance text-[42px] font-semibold leading-[1.04] tracking-[-0.02em] text-[color:var(--ink)] md:text-[54px] lg:text-[62px]">
              Software{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">próprio</span>{' '}
              para problemas reais do dia a dia.
            </h1>
            <p className="mt-8 max-w-xl text-[19px] leading-[1.7] text-[color:var(--ink-muted)] md:text-[20px]">
              A AraLabs é uma fábrica brasileira de produtos digitais. Criamos sistemas simples,
              bem desenhados e sustentáveis para organizar rotinas, operações e serviços que ainda
              dependem de improviso.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/produtos"
                className="group inline-flex items-center gap-3 rounded-full bg-[color:var(--gold)] px-6 py-3.5 text-[15px] font-semibold tracking-tight text-[color:var(--on-gold)] transition hover:bg-[color:var(--gold-soft)]"
              >
                Conhecer nossos produtos
                <span className="transition group-hover:translate-x-0.5">→</span>
              </Link>
              <Link
                href="/empresa"
                className="inline-flex items-center gap-3 rounded-full border border-[color:var(--line-strong)] px-6 py-3.5 text-[15px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
              >
                Sobre a AraLabs
              </Link>
            </div>
          </div>

          {/* Portfolio grid no lugar do mockup de produto */}
          <div className="relative">
            <div className="rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Portfólio
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <LogoMark className="h-8 w-8 text-[color:var(--gold-soft)]" />
                <span className="font-serif text-[20px] italic text-[color:var(--ink)]">
                  AraLabs
                </span>
              </div>
              <ul className="mt-8 space-y-4">
                {products.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="group flex items-start justify-between gap-4 rounded-[18px] border border-[color:var(--line)] bg-[color:var(--bg)] p-5 transition hover:border-[color:var(--gold)]/40 hover:bg-[color:var(--bg-elev-2)]"
                    >
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                          {p.status}
                        </p>
                        <p className="mt-2 text-[18px] font-semibold text-[color:var(--ink)]">
                          {p.name}
                        </p>
                        <p className="mt-1 text-[13.5px] leading-[1.55] text-[color:var(--ink-muted)]">
                          {p.tagline}
                        </p>
                      </div>
                      <span className="mt-1 text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="rounded-[18px] border border-dashed border-[color:var(--line)] p-5 text-center">
                  <p className="font-serif text-[14px] italic text-[color:var(--ink-dim)]">
                    próximo produto
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
              Como pensamos
            </p>
            <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
              Uma empresa de{' '}
              <span className="font-serif italic text-[color:var(--gold-soft)]">produtos</span>,
              não apenas de software.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[color:var(--line-strong)] bg-[color:var(--line-strong)] sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <article
                key={p.n}
                className="group relative bg-[color:var(--bg-elev)] p-7 transition hover:bg-[color:var(--bg-elev-2)]"
              >
                <span className="font-serif text-[13px] italic tracking-wider text-[color:var(--gold-soft)]">
                  {p.n}
                </span>
                <h3 className="mt-8 text-[20px] font-semibold tracking-tight text-[color:var(--ink)]">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[color:var(--ink-muted)]">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tese curta */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Nossa tese
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                Os mesmos sintomas em{' '}
                <span className="font-serif italic text-[color:var(--gold-soft)]">contextos diferentes</span>.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-[1.75] text-[color:var(--ink-muted)]">
              <p>
                Existem muitos problemas cotidianos mal resolvidos por software. Alguns são grandes
                demais para planilhas; outros, simples demais para sistemas pesados.
              </p>
              <p>
                Aparecem dentro de casa, em pequenos negócios e em operações locais que ainda
                dependem de WhatsApp, memória e improviso.
              </p>
              <Link
                href="/tese"
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--line-strong)] px-5 py-3 text-[14px] font-semibold text-[color:var(--ink)] transition hover:border-[color:var(--gold)]/50 hover:text-[color:var(--gold-soft)]"
              >
                Ler nossa tese completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Routes / Navegação interna */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
                Por onde começar
              </p>
              <h2 className="mt-4 text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[color:var(--ink)] md:text-[40px]">
                Explore o que estamos construindo.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {routes.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] p-8 transition hover:border-[color:var(--gold)]/40 hover:bg-[color:var(--bg-elev-2)]"
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--gold-soft)]">
                    {r.eyebrow}
                  </p>
                  <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-[color:var(--ink)]">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[color:var(--ink-muted)]">
                    {r.body}
                  </p>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <LogoMark className="h-6 w-6 text-[color:var(--ink-dim)] transition group-hover:text-[color:var(--gold-soft)]" />
                  <span className="text-[color:var(--ink-dim)] transition group-hover:translate-x-0.5 group-hover:text-[color:var(--gold-soft)]">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/`
Expected:
- Hero com headline "Software próprio para problemas reais do dia a dia."
- Lado direito: card de portfólio com os dois produtos + slot "próximo produto" (NÃO o `CasaLeveDualMockup`).
- Pilares mantidos.
- Tese curta com link para `/tese`.
- Cards de navegação: Empresa · Tese · Produtos.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "Rewrite home with portfolio-grid hero and product-lab positioning"
```

---

### Task 9: Atualizar navegação no Header

**Files:**
- Modify: `src/components/site/Header.tsx`

- [ ] **Step 1: Atualizar array `links`**

Em [src/components/site/Header.tsx](src/components/site/Header.tsx), trocar o array `links` (linhas 8-14) por:

```ts
const links = [
  { label: 'Home', href: '/' },
  { label: 'Empresa', href: '/empresa' },
  { label: 'Tese', href: '/tese' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Contato', href: '#contato' },
];
```

- [ ] **Step 2: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/`
Expected: nav do header mostra `Home · Empresa · Tese · Produtos · Contato`. Mobile menu também (mesmo array).

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/components/site/Header.tsx
git commit -m "Replace Casa Leve nav link with Produtos"
```

---

### Task 10: Atualizar Footer

**Files:**
- Modify: `src/components/site/Footer.tsx`

- [ ] **Step 1: Atualizar `columns`**

Em [src/components/site/Footer.tsx](src/components/site/Footer.tsx), trocar o array `columns` (linhas 3-16) por:

```ts
const columns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '/empresa' },
      { label: 'Tese', href: '/tese' },
      { label: 'Parcerias', href: '/empresa#parcerias' },
    ],
  },
  {
    title: 'Produtos',
    links: [
      { label: 'Portfólio', href: '/produtos' },
      { label: 'ara-agenda', href: '/produtos/ara-agenda' },
      { label: 'Casa Leve', href: '/produtos/casa-leve' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'contato@aralabs.com.br', href: 'mailto:contato@aralabs.com.br' },
      { label: 'trabalhe@aralabs.com.br', href: 'mailto:trabalhe@aralabs.com.br' },
      { label: 'Arapongas, Paraná — Brasil', href: null },
    ],
  },
];
```

- [ ] **Step 2: Atualizar o JSX que renderiza as colunas**

Substituir o bloco `{columns.map((c) => (...))}` (linhas 37-59) por:

```tsx
{columns.map((c) => (
  <div key={c.title}>
    <h3 className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--ink-dim)]">
      {c.title}
    </h3>
    <ul className="mt-5 space-y-3">
      {c.links.map((l) => (
        <li key={l.label}>
          {l.href ? (
            <a
              href={l.href}
              className="text-[15.5px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
            >
              {l.label}
            </a>
          ) : (
            <span className="text-[15.5px] text-[color:var(--ink-muted)]">{l.label}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
))}
```

- [ ] **Step 3: Adicionar id para anchor `#parcerias`**

Em [src/app/empresa/page.tsx](src/app/empresa/page.tsx), na seção "Parcerias selecionadas" criada na Task 7, adicionar `id="parcerias"` ao `<section>`:

```tsx
<section id="parcerias" className="border-b border-[color:var(--line)]">
```

- [ ] **Step 4: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/`
Expected:
- Footer mostra 3 colunas: Empresa · Produtos · Contato.
- Coluna Produtos lista ara-agenda e Casa Leve com links funcionais.
- Coluna Empresa tem link "Parcerias" que leva para `/empresa#parcerias` e rola até a seção.
- Coluna Contato tem `contato@` e `trabalhe@` como mailto.

- [ ] **Step 5: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 6: Commit**

```bash
git add src/components/site/Footer.tsx src/app/empresa/page.tsx
git commit -m "Update footer with Produtos column and trabalhe@ contact"
```

---

### Task 11: Atualizar sitemap

**Files:**
- Modify: `src/app/sitemap.ts`

- [ ] **Step 1: Atualizar rotas**

Substituir [src/app/sitemap.ts](src/app/sitemap.ts) inteiro por:

```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

const LAST_MODIFIED = '2026-04-28';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`,                       lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/empresa`,                lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tese`,                   lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/produtos`,               lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/produtos/ara-agenda`,    lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/produtos/casa-leve`,     lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
```

> **Nota:** `/casa-leve` não aparece — só o redirect 301 da Task 1 atende essa URL antiga.

- [ ] **Step 2: Verificar no browser**

Run: `npm run dev`
Abrir: `http://localhost:3000/sitemap.xml`
Expected: XML com 6 URLs, sem `/casa-leve`.

- [ ] **Step 3: Lint**

Run: `npm run lint`
Expected: sem erros.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "Update sitemap with new product routes"
```

---

### Task 12: Validação manual final + checklist pré-deploy

**Files:**
- Read-only: nenhum.

Esta task é checklist humano. Não há código.

- [ ] **Step 1: Build limpo**

Run: `npm run build`
Expected: build completa sem erros. Listar todas as rotas geradas e confirmar:
- `/`
- `/empresa`
- `/tese`
- `/produtos`
- `/produtos/ara-agenda`
- `/produtos/casa-leve`
- `/casa-leve` NÃO está na lista (é redirect, não rota).

- [ ] **Step 2: Verificar redirect em build mode**

Run: `npm run start`
Em outra aba: `curl -I http://localhost:3000/casa-leve`
Expected: status `308` ou `301` com `location: /produtos/casa-leve`.

- [ ] **Step 3: Verificar JSON-LD em cada rota**

Para cada URL abaixo, abrir no browser e ver fonte (`view-source:`) ou DevTools → Elements → procurar `<script type="application/ld+json">`:

| Rota | Schema(s) esperado(s) |
|---|---|
| `/` | `Organization` + `WebSite` |
| `/empresa` | `AboutPage` |
| `/tese` | `Article` |
| `/produtos` | `CollectionPage` |
| `/produtos/ara-agenda` | `SoftwareApplication` |
| `/produtos/casa-leve` | `SoftwareApplication` |

- [ ] **Step 4: Validar mailbox `trabalhe@aralabs.com.br`**

**Bloqueador de deploy.** Antes de fazer merge para `master`:

1. Confirmar com o admin do domínio se `trabalhe@aralabs.com.br` existe (Cloudflare Email Routing ou provedor atual).
2. Se não existir: criar alias roteando para `contato@aralabs.com.br` (ou outro inbox monitorado).
3. Enviar email de teste para `trabalhe@aralabs.com.br` e confirmar recebimento.
4. **Se não der pra criar antes do deploy:** voltar nas Tasks 7 e 10 e trocar `trabalhe@aralabs.com.br` por `contato@aralabs.com.br` temporariamente. Não deixar email morto público.

- [ ] **Step 5: Rodar Lighthouse (opcional, mas recomendado)**

Em build mode (`npm run start`), abrir DevTools → Lighthouse → rodar nas 6 rotas. Confirmar que SEO score continua ≥ 95.

- [ ] **Step 6: Merge para master**

```bash
git checkout master
git merge claude/busy-cohen-01e3d5
git push origin master
```

(Vercel auto-deploy a partir de `master`, conforme memória do projeto.)

---

## Verificação final contra os critérios de sucesso do spec

1. ✅ Visitante em `/` lê "Software próprio para problemas reais do dia a dia." + portfolio grid → entende AraLabs como lab de produtos.
2. ✅ ara-agenda tem página pública em `/produtos/ara-agenda`.
3. ✅ `/tese` cobre família + SMB + operação local com a frase-ponte explícita.
4. ✅ Casa Leve continua acessível em `/produtos/casa-leve`; `/casa-leve` redireciona 301.
5. ✅ Sitemap, JSON-LD e metadata refletem nova IA.
6. ✅ Parcerias selecionadas existe em `/empresa#parcerias` mas é claramente secundária.
