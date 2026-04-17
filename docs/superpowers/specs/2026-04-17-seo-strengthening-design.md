# SEO forte para aralabs.com.br — Design

**Data:** 2026-04-17
**Escopo:** Reforço completo de SEO técnico e structured data na storefront AraLabs (Next.js 16 App Router).
**Autor:** Thiago Tavares + Claude

---

## 1. Contexto

A `aralabs-storefront` está em produção na Vercel, servida em `https://www.aralabs.com.br` (o apex `aralabs.com.br` retorna 307 redirect para `www`). O projeto tem 4 rotas estáticas:

- `/` — home / manifesto da empresa-mãe
- `/empresa` — sobre (princípios, valores, pilares)
- `/tese` — filosofia editorial de longo formato
- `/casa-leve` — página de produto (app de rotina familiar, em exploração)

Lacunas identificadas hoje:
- Apenas `src/app/layout.tsx` tem `metadata`. Todas as páginas herdam o **mesmo título e description** — uma das maiores perdas de SEO possíveis.
- Não existe `robots.ts`, `sitemap.ts` nem `manifest.ts`.
- Não há structured data (`application/ld+json`).
- Não há analytics.
- Email no footer é texto puro (não é link `mailto:`).
- Descompasso: código aponta `metadataBase` para apex, mas Vercel serve `www` como canônico.

## 2. Decisões

| Decisão | Valor | Justificativa |
|---------|-------|---------------|
| Domínio canônico | `https://aralabs.com.br` (apex) | Mais curto, moderno. **Requer ação no Vercel:** inverter primário apex↔www, apex passa a ser primário. |
| Locale | `pt-BR` único | Sem planos de localização. Não usar hreflang. |
| Analytics | Vercel Analytics (`@vercel/analytics`) | Nativo, sem cookies (dispensa banner LGPD), performance mínima. |
| Lib de SEO | Nenhuma (só Next.js nativo) | Next 16 Metadata API + file conventions cobrem tudo. |
| Preview indexing | `noindex` em `VERCEL_ENV !== 'production'` | Evita duplicação de conteúdo em deploys de branch. |
| Organization.sameAs | Omitido | Sem perfis sociais ainda. Melhor vazio que falso. |
| Blog/posts no sitemap | Fora de escopo | Não há infra de conteúdo dinâmico; YAGNI. |

## 3. Arquitetura

Quatro vetores coordenados via APIs nativas do Next 16:

1. **Metadata API** — `Metadata` objects em `layout.tsx` (site-wide base) + cada `page.tsx` (overrides por rota).
2. **File conventions** — `robots.ts`, `sitemap.ts`, `manifest.ts` no root de `app/`. `icon.svg` e `opengraph-image.tsx` já existem.
3. **Structured data (JSON-LD)** — componente `<JsonLd>` server-only e factories tipadas em `src/lib/seo/schemas.ts`.
4. **Observability** — `<Analytics />` do `@vercel/analytics/next` no root layout.

### Diagrama (dependências lógicas)

```
src/lib/seo/site.ts         (constantes: SITE_URL, SITE_NAME, CONTACT_EMAIL, etc.)
         │
         ├──▶ src/lib/seo/schemas.ts    (factories: organizationSchema(), websiteSchema(), …)
         │           │
         │           └──▶ <JsonLd data={...} />   (usado em layout.tsx e cada page.tsx)
         │
         ├──▶ src/app/layout.tsx        (base Metadata + Organization JSON-LD + Analytics)
         ├──▶ src/app/sitemap.ts
         ├──▶ src/app/robots.ts
         ├──▶ src/app/manifest.ts
         └──▶ src/app/*/page.tsx        (Metadata override + schema específico por rota)
```

## 4. Novos arquivos

### `src/lib/seo/site.ts`
Constantes centralizadas — uma fonte de verdade para todas as URLs/strings da marca.

```ts
export const SITE_URL = 'https://aralabs.com.br';
export const SITE_NAME = 'AraLabs';
export const SITE_DESCRIPTION = 'A AraLabs é uma empresa brasileira de produtos digitais que transforma problemas reais do cotidiano em soluções úteis, claras e sustentáveis.';
export const CONTACT_EMAIL = 'contato@aralabs.com.br';
export const LOCALE = 'pt-BR';
export const ORG_ADDRESS = { city: 'Arapongas', region: 'PR', country: 'BR' };
export const DEFAULT_OG_IMAGE = '/opengraph-image'; // gerado por opengraph-image.tsx
export const LOGO_PATH = '/brand/logo-mark.png';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
```

### `src/lib/seo/schemas.ts`
Factories tipadas (retornam `Record<string, unknown>`; JSON-LD não tem tipos fortes oficiais e tipar dá falsa segurança).

Funções:
- `organizationSchema()` — com `@id: ORG_ID`, logo, email, PostalAddress, ContactPoint.
- `websiteSchema()` — com `@id: WEBSITE_ID`, `publisher: { @id: ORG_ID }`.
- `aboutPageSchema()` — com `mainEntity: { @id: ORG_ID }`.
- `softwareApplicationSchema({ name, description, category, operatingSystem })` — parametrizada.
- `articleSchema({ headline, datePublished, description })` — parametrizada.

### `src/components/seo/JsonLd.tsx`
Server component. Escapa `</` para evitar quebra de script tag (XSS defensivo).

```tsx
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
```

### `src/app/robots.ts`
```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  const isProd = process.env.VERCEL_ENV === 'production';
  return {
    rules: isProd
      ? { userAgent: '*', allow: '/' }
      : { userAgent: '*', disallow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

### `src/app/sitemap.ts`
```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`,         lastModified: now, changeFrequency: 'monthly',  priority: 1.0 },
    { url: `${SITE_URL}/empresa`,  lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
    { url: `${SITE_URL}/tese`,     lastModified: now, changeFrequency: 'monthly',  priority: 0.7 },
    { url: `${SITE_URL}/casa-leve`,lastModified: now, changeFrequency: 'monthly',  priority: 0.8 },
  ];
}
```

### `src/app/manifest.ts`
```ts
import type { MetadataRoute } from 'next';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/seo/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#F5EFE4', // tema Cream (default)
    theme_color: '#F5EFE4',
    icons: [
      { src: '/icon.svg',             sizes: 'any',     type: 'image/svg+xml' },
      { src: '/brand/logo-mark.png',  sizes: '512x512', type: 'image/png' },
    ],
  };
}
```

## 5. Arquivos modificados

### `src/app/layout.tsx`
- `metadataBase: new URL('https://aralabs.com.br')` (já está)
- `title` com objeto `{ default, template }`: template `'%s · AraLabs'` para páginas internas
- `openGraph.url` e canônicos passam a usar paths relativos (resolvidos via `metadataBase`)
- Adicionar `robots: { index: process.env.VERCEL_ENV === 'production', follow: true }`
- Adicionar `icons: { icon: '/icon.svg' }` e `manifest: '/manifest.webmanifest'`
- **Não** definir `alternates.canonical` no layout — cada página define a sua (evita que rotas que esqueçam o override herdem canonical `/`)
- `<JsonLd data={organizationSchema()} />` no `<body>`
- `<Analytics />` do `@vercel/analytics/next` antes do `</body>`

### `src/app/page.tsx` (home)
- Adicionar `export const metadata: Metadata` com `alternates: { canonical: '/' }`
- `<JsonLd data={websiteSchema()} />` no topo do JSX retornado

### `src/app/empresa/page.tsx`
- `metadata`: title `'Sobre a empresa'` (vira `'Sobre a empresa · AraLabs'`), description focada em quem-somos/Arapongas, `alternates: { canonical: '/empresa' }`
- `<JsonLd data={aboutPageSchema({ url: '/empresa' })} />`

### `src/app/tese/page.tsx`
- `metadata`: title `'Nossa tese'`, description focada em famílias/rotina/filosofia, canonical `/tese`
- `<JsonLd data={articleSchema({ headline: 'Nossa tese', datePublished: '2026-04-17', description: ... })} />`

### `src/app/casa-leve/page.tsx`
- `metadata`: title `'Casa Leve — rotina familiar'`, description focada no app/produto, canonical `/casa-leve`
- `<JsonLd data={softwareApplicationSchema({ name: 'Casa Leve', applicationCategory: 'LifestyleApplication', operatingSystem: 'Web, iOS, Android', description: ... })} />`

### `src/components/site/Footer.tsx`
- Transformar `'contato@aralabs.com.br'` em link `<a href="mailto:contato@aralabs.com.br">`
- Manter visual idêntico (só troca o elemento `<span>` por `<a>` sem sublinhado, mantendo hover sutil)

## 6. Dependência nova

```bash
npm install @vercel/analytics
```

Uso:
```tsx
import { Analytics } from '@vercel/analytics/next';
// …
<Analytics />
```

## 7. Ação manual (fora de código)

Na Vercel → projeto `storefront` → Settings → Domains:
- Marcar `aralabs.com.br` (apex) como primário.
- `www.aralabs.com.br` passa a redirecionar para o apex.

**Por que aqui:** sem essa mudança, os canônicos em código (`https://aralabs.com.br`) vão divergir do que o servidor serve, e o Google pode consolidar sinais no `www`. Idealmente, o usuário faz essa troca antes do deploy.

## 8. Estratégia de teste / verificação

1. **Build local** — `npm run build` sem erros de TypeScript ou de metadata.
2. **Inspeção de HTML** após deploy:
   ```bash
   curl -s https://aralabs.com.br/         | grep -E '<title|canonical|og:|application/ld\+json'
   curl -s https://aralabs.com.br/empresa  | grep -E '<title|canonical'
   curl -s https://aralabs.com.br/robots.txt
   curl -s https://aralabs.com.br/sitemap.xml
   curl -s https://aralabs.com.br/manifest.webmanifest
   ```
3. **Google Rich Results Test** — validar cada URL em https://search.google.com/test/rich-results. Esperado: `Organization` + schema específico detectados sem erros.
4. **Google Search Console** — submeter sitemap `https://aralabs.com.br/sitemap.xml` (ação manual pós-deploy).
5. **Preview indexing** — abrir um deploy de preview da Vercel e confirmar que `/robots.txt` retorna `Disallow: /`.

## 9. Trade-offs e rejeitados

| Opção descartada | Motivo |
|------------------|--------|
| `next-seo` lib | Redundante com Metadata API nativa do Next 16. |
| `sameAs` com URLs placeholder | Google desaprova dados falsos; omitir é o padrão. |
| Schema `LocalBusiness` | AraLabs é empresa digital, não estabelecimento físico aberto ao público. `Organization` é correto. |
| `hreflang` | Site é `pt-BR` único. |
| Blog / Article schema global | Não há infra de conteúdo. Adicionar depois junto com sistema de posts. |
| Google Analytics 4 | Exige banner de cookies LGPD e afeta performance. Vercel Analytics é cookieless. |
| Tipagem forte nos schemas JSON-LD | Schema.org não tem types oficiais que valham o peso. Factories retornam `Record<string, unknown>`. |

## 10. Estratégia de conteúdo (Camada 4)

Onde não exigir mudança editorial pesada, revisar descriptions por página para densidade de palavras-chave:
- **home** — "empresa brasileira", "produtos digitais", "famílias"
- **empresa** — "Arapongas", "Paraná", "empresa de tecnologia"
- **tese** — "rotina familiar", "organização doméstica", "produtos para famílias"
- **casa-leve** — "app de rotina familiar", "tarefas domésticas", "organização da casa"

Sem reescrever copy da marca — só ajustes de microcópia nos metadados.
