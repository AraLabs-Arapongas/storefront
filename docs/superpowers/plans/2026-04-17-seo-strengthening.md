# SEO strengthening — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add strong SEO fundamentals (metadata per route, robots/sitemap/manifest, JSON-LD structured data, Vercel Analytics, mailto link) to aralabs.com.br so it ranks well on Google and renders correctly when shared.

**Architecture:** Use only Next.js 16 native APIs (Metadata API + file conventions like `robots.ts`, `sitemap.ts`, `manifest.ts`). Centralize brand constants in `src/lib/seo/site.ts`. Expose typed schema factories from `src/lib/seo/schemas.ts` and inject them via a small server-only `<JsonLd>` component. Per-route `page.tsx` files own their own metadata and schema.

**Tech Stack:** Next.js 16.2.3 (App Router), React 19.2, TypeScript strict, `@vercel/analytics`, Tailwind CSS v4.

**Spec:** [docs/superpowers/specs/2026-04-17-seo-strengthening-design.md](../specs/2026-04-17-seo-strengthening-design.md)

**Validation strategy:** This project has no test framework (only ESLint + Prettier). Each task is validated by (a) `npm run build` with zero TypeScript/metadata errors, and (b) after all tasks, `npm run dev` + `curl` assertions against local routes. This is pragmatic for declarative SEO code — introducing Vitest/Playwright is out of scope.

**Manual action required (outside code):** In Vercel dashboard → project `storefront` → Settings → Domains, mark `aralabs.com.br` (apex) as primary; `www.aralabs.com.br` redirects to apex. Do this **before** the final deploy so canonicals match what the server serves.

---

## File Structure

**New files:**
- `src/lib/seo/site.ts` — brand constants (URLs, email, locale, addresses, schema IDs).
- `src/lib/seo/schemas.ts` — JSON-LD factory functions (`organizationSchema`, `websiteSchema`, `aboutPageSchema`, `softwareApplicationSchema`, `articleSchema`).
- `src/components/seo/JsonLd.tsx` — server component that injects one or more JSON-LD script tags with XSS-safe escaping.
- `src/app/robots.ts` — `MetadataRoute.Robots` with production/preview gating.
- `src/app/sitemap.ts` — `MetadataRoute.Sitemap` with the 4 static routes.
- `src/app/manifest.ts` — `MetadataRoute.Manifest` (PWA-ish basics).

**Modified files:**
- `src/app/layout.tsx` — title template, robots gating, icons/manifest, Organization JSON-LD, Vercel Analytics.
- `src/app/page.tsx` — page metadata + WebSite JSON-LD.
- `src/app/empresa/page.tsx` — page metadata + AboutPage JSON-LD.
- `src/app/tese/page.tsx` — page metadata + Article JSON-LD.
- `src/app/casa-leve/page.tsx` — page metadata + SoftwareApplication JSON-LD.
- `src/components/site/Footer.tsx` — email becomes `mailto:` link.
- `package.json` — add `@vercel/analytics` dependency (via `npm install`).

---

## Task 1: Install `@vercel/analytics` dependency

**Files:**
- Modify: `package.json`, `package-lock.json` (via npm)

- [ ] **Step 1: Install the package**

Run:
```bash
npm install @vercel/analytics
```
Expected: Dependency added to `package.json` under `dependencies`. Lockfile updated.

- [ ] **Step 2: Verify install succeeded**

Run:
```bash
npm list @vercel/analytics --depth=0
```
Expected: Prints `@vercel/analytics@<version>`. If it errors, the install failed.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "Add @vercel/analytics dependency"
```

---

## Task 2: Create `src/lib/seo/site.ts` — brand constants

**Files:**
- Create: `src/lib/seo/site.ts`

- [ ] **Step 1: Create the file with constants**

Create `src/lib/seo/site.ts`:
```ts
export const SITE_URL = 'https://aralabs.com.br';
export const SITE_NAME = 'AraLabs';
export const SITE_TAGLINE = 'Produtos digitais para problemas reais';
export const SITE_DESCRIPTION =
  'A AraLabs é uma empresa brasileira de produtos digitais que transforma problemas reais do cotidiano em soluções úteis, claras e sustentáveis.';
export const CONTACT_EMAIL = 'contato@aralabs.com.br';
export const LOCALE = 'pt-BR';

export const ORG_ADDRESS = {
  addressLocality: 'Arapongas',
  addressRegion: 'PR',
  addressCountry: 'BR',
} as const;

export const LOGO_PATH = '/brand/logo-mark.png';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
```

- [ ] **Step 2: Run TypeScript check via build**

Run:
```bash
npm run build
```
Expected: Build succeeds. No type errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo/site.ts
git commit -m "Add SEO site constants module"
```

---

## Task 3: Create `src/lib/seo/schemas.ts` — JSON-LD factories

**Files:**
- Create: `src/lib/seo/schemas.ts`

**Why `Record<string, unknown>` instead of `schema-dts`:** Schema.org has thousands of types; full typing adds dependency weight and maintenance burden for minimal safety gain. The factories are small and validated by Google Rich Results Test post-deploy.

- [ ] **Step 1: Create the factories file**

Create `src/lib/seo/schemas.ts`:
```ts
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  LOCALE,
  ORG_ADDRESS,
  LOGO_PATH,
  ORG_ID,
  WEBSITE_ID,
} from './site';

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}${LOGO_PATH}`,
    },
    email: CONTACT_EMAIL,
    address: {
      '@type': 'PostalAddress',
      ...ORG_ADDRESS,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'customer support',
      availableLanguage: ['Portuguese', LOCALE],
    },
  };
}

export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: LOCALE,
    publisher: { '@id': ORG_ID },
  };
}

export function aboutPageSchema(params: { path: string; name: string; description: string }): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    inLanguage: LOCALE,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': ORG_ID },
  };
}

export function softwareApplicationSchema(params: {
  path: string;
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    url: `${SITE_URL}${params.path}`,
    name: params.name,
    description: params.description,
    applicationCategory: params.applicationCategory,
    operatingSystem: params.operatingSystem,
    inLanguage: LOCALE,
    publisher: { '@id': ORG_ID },
  };
}

export function articleSchema(params: {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    url: `${SITE_URL}${params.path}`,
    headline: params.headline,
    description: params.description,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    inLanguage: LOCALE,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}
```

- [ ] **Step 2: Verify TypeScript**

Run:
```bash
npm run build
```
Expected: Build succeeds. No type errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/seo/schemas.ts
git commit -m "Add JSON-LD schema factories for Organization, WebSite, AboutPage, SoftwareApplication, Article"
```

---

## Task 4: Create `src/components/seo/JsonLd.tsx`

**Files:**
- Create: `src/components/seo/JsonLd.tsx`

**Why escape `</`:** prevents a malicious string containing `</script>` from breaking out of the tag. Defensive even though inputs come from our own factories.

- [ ] **Step 1: Create the component**

Create `src/components/seo/JsonLd.tsx`:
```tsx
type JsonValue = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: JsonValue }) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
```

- [ ] **Step 2: Verify TypeScript**

Run:
```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/components/seo/JsonLd.tsx
git commit -m "Add JsonLd server component with XSS-safe escaping"
```

---

## Task 5: Create `src/app/robots.ts`

**Files:**
- Create: `src/app/robots.ts`

**Reference:** `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/robots.md`

- [ ] **Step 1: Create robots file**

Create `src/app/robots.ts`:
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

- [ ] **Step 2: Build**

Run:
```bash
npm run build
```
Expected: Build succeeds. The build output should list `/robots.txt` among the generated routes. (End-to-end HTTP verification of this route happens in Task 14.)

- [ ] **Step 3: Commit**

```bash
git add src/app/robots.ts
git commit -m "Add robots.ts with preview deploy noindex"
```

---

## Task 6: Create `src/app/sitemap.ts`

**Files:**
- Create: `src/app/sitemap.ts`

**Reference:** `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`

- [ ] **Step 1: Create sitemap file**

Create `src/app/sitemap.ts`:
```ts
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`,          lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/empresa`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tese`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/casa-leve`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
```

- [ ] **Step 2: Build and verify**

Run:
```bash
npm run build
```
Expected: Build succeeds. `.next/` output includes sitemap generation.

- [ ] **Step 3: Commit**

```bash
git add src/app/sitemap.ts
git commit -m "Add sitemap.ts listing the four static routes"
```

---

## Task 7: Create `src/app/manifest.ts`

**Files:**
- Create: `src/app/manifest.ts`

**Reference:** `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/manifest.md`

- [ ] **Step 1: Create manifest file**

Create `src/app/manifest.ts`:
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
    background_color: '#F5EFE4',
    theme_color: '#F5EFE4',
    icons: [
      { src: '/icon.svg',            sizes: 'any',     type: 'image/svg+xml' },
      { src: '/brand/logo-mark.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
```

- [ ] **Step 2: Build and verify**

Run:
```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/app/manifest.ts
git commit -m "Add manifest.ts for PWA/browser install surface"
```

---

## Task 8: Update `src/app/layout.tsx` — base metadata, Organization JSON-LD, Analytics

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Read the current file**

Read `src/app/layout.tsx` to confirm current state before editing.

- [ ] **Step 2: Replace the `metadata` export**

Change lines 34–54 (the existing `metadata` object) to:
```ts
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  icons: { icon: '/icon.svg' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: LOCALE,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      'Empresa brasileira que transforma desafios do cotidiano em produtos digitais úteis, claros e sustentáveis.',
  },
  robots: {
    index: process.env.VERCEL_ENV === 'production',
    follow: true,
    googleBot: {
      index: process.env.VERCEL_ENV === 'production',
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
```

- [ ] **Step 3: Add imports at the top of the file**

After the existing imports, add:
```ts
import { Analytics } from '@vercel/analytics/next';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationSchema } from '@/lib/seo/schemas';
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_DESCRIPTION,
  LOCALE,
} from '@/lib/seo/site';
```

- [ ] **Step 4: Add JSON-LD and Analytics to the body**

Find the `<body>` block. Change from:
```tsx
<body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
  <Header />
  <main className="relative">{children}</main>
  <Footer />
</body>
```

To:
```tsx
<body className="min-h-screen bg-[color:var(--bg)] text-[color:var(--ink)]">
  <JsonLd data={organizationSchema()} />
  <Header />
  <main className="relative">{children}</main>
  <Footer />
  <Analytics />
</body>
```

- [ ] **Step 5: Build**

Run:
```bash
npm run build
```
Expected: Build succeeds with no TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/layout.tsx
git commit -m "Wire base metadata, Organization JSON-LD, and Vercel Analytics in root layout"
```

---

## Task 9: Add metadata + WebSite JSON-LD to `src/app/page.tsx` (home)

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Read current file**

Read `src/app/page.tsx` to locate the default export and the root JSX element.

- [ ] **Step 2: Add imports and metadata export at top of file**

After existing imports, add:
```ts
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { websiteSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/' },
};
```

(Title and description inherit from layout — home uses the default, not the template.)

- [ ] **Step 3: Inject JSON-LD at top of returned JSX**

In the component's return statement, add `<JsonLd data={websiteSchema()} />` as the first child of the root element (likely a `<>` or `<main>` fragment). Example:
```tsx
return (
  <>
    <JsonLd data={websiteSchema()} />
    {/* ...existing children... */}
  </>
);
```
If the current return is a single element (not a fragment), wrap it in a fragment.

- [ ] **Step 4: Build**

Run:
```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.tsx
git commit -m "Add home page metadata and WebSite JSON-LD"
```

---

## Task 10: Add metadata + AboutPage JSON-LD to `src/app/empresa/page.tsx`

**Files:**
- Modify: `src/app/empresa/page.tsx`

- [ ] **Step 1: Read current file**

- [ ] **Step 2: Add imports and metadata at top**

After existing imports:
```ts
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { aboutPageSchema } from '@/lib/seo/schemas';

const pageDescription =
  'Conheça a AraLabs: empresa brasileira de produtos digitais, sediada em Arapongas (PR), com princípios de clareza, estrutura e problemas reais antes de funcionalidades.';

export const metadata: Metadata = {
  title: 'Sobre a empresa',
  description: pageDescription,
  alternates: { canonical: '/empresa' },
  openGraph: {
    title: 'Sobre a empresa',
    description: pageDescription,
    url: '/empresa',
    type: 'website',
  },
};
```

- [ ] **Step 3: Inject JSON-LD at top of returned JSX**

```tsx
return (
  <>
    <JsonLd
      data={aboutPageSchema({
        path: '/empresa',
        name: 'Sobre a AraLabs',
        description: pageDescription,
      })}
    />
    {/* ...existing children... */}
  </>
);
```

- [ ] **Step 4: Build**

```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/empresa/page.tsx
git commit -m "Add /empresa metadata and AboutPage JSON-LD"
```

---

## Task 11: Add metadata + Article JSON-LD to `src/app/tese/page.tsx`

**Files:**
- Modify: `src/app/tese/page.tsx`

- [ ] **Step 1: Read current file**

- [ ] **Step 2: Add imports and metadata at top**

```ts
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { articleSchema } from '@/lib/seo/schemas';

const pageHeadline = 'Nossa tese sobre famílias, rotina e produtos digitais';
const pageDescription =
  'A tese da AraLabs: famílias precisam de sistemas que distribuem responsabilidades, tornam acordos visíveis e incentivam hábitos. Nosso ponto de vista sobre organização doméstica e produtos para famílias no Brasil.';

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
```

- [ ] **Step 3: Inject JSON-LD at top of returned JSX**

```tsx
return (
  <>
    <JsonLd
      data={articleSchema({
        path: '/tese',
        headline: pageHeadline,
        description: pageDescription,
        datePublished: '2026-04-17',
      })}
    />
    {/* ...existing children... */}
  </>
);
```

- [ ] **Step 4: Build**

```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/tese/page.tsx
git commit -m "Add /tese metadata and Article JSON-LD"
```

---

## Task 12: Add metadata + SoftwareApplication JSON-LD to `src/app/casa-leve/page.tsx`

**Files:**
- Modify: `src/app/casa-leve/page.tsx`

- [ ] **Step 1: Read current file**

- [ ] **Step 2: Add imports and metadata at top**

```ts
import type { Metadata } from 'next';
import { JsonLd } from '@/components/seo/JsonLd';
import { softwareApplicationSchema } from '@/lib/seo/schemas';

const pageTitle = 'Casa Leve — rotina familiar';
const pageDescription =
  'Casa Leve é o aplicativo da AraLabs para rotina familiar: tarefas recorrentes, colaboração entre os membros da família e incentivos positivos para crianças. Em exploração.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/casa-leve' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/casa-leve',
    type: 'website',
  },
};
```

- [ ] **Step 3: Inject JSON-LD at top of returned JSX**

```tsx
return (
  <>
    <JsonLd
      data={softwareApplicationSchema({
        path: '/casa-leve',
        name: 'Casa Leve',
        description: pageDescription,
        applicationCategory: 'LifestyleApplication',
        operatingSystem: 'Web, iOS, Android',
      })}
    />
    {/* ...existing children... */}
  </>
);
```

- [ ] **Step 4: Build**

```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/app/casa-leve/page.tsx
git commit -m "Add /casa-leve metadata and SoftwareApplication JSON-LD"
```

---

## Task 13: Update `src/components/site/Footer.tsx` — mailto link

**Files:**
- Modify: `src/components/site/Footer.tsx`

The current footer uses a rigid `columns` array where every link is a plain string rendered inside `<a href="#">`. Minimal-scope change: keep the array shape, add a helper that detects emails and renders a `mailto:` link.

- [ ] **Step 1: Read current file**

- [ ] **Step 2: Replace the list item rendering block**

Find the block (around lines 43–51):
```tsx
{c.links.map((l) => (
  <li key={l}>
    <a
      href="#"
      className="text-[15.5px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
    >
      {l}
    </a>
  </li>
))}
```

Replace with:
```tsx
{c.links.map((l) => {
  const isEmail = l.includes('@') && !l.includes(' ');
  const href = isEmail ? `mailto:${l}` : '#';
  return (
    <li key={l}>
      <a
        href={href}
        className="text-[15.5px] text-[color:var(--ink)] transition hover:text-[color:var(--gold-soft)]"
      >
        {l}
      </a>
    </li>
  );
})}
```

- [ ] **Step 3: Build**

```bash
npm run build
```
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/site/Footer.tsx
git commit -m "Turn footer email into mailto link"
```

---

## Task 14: End-to-end local verification

**Files:**
- None modified. Verification only.

- [ ] **Step 1: Production build**

Run:
```bash
npm run build
```
Expected: Build succeeds. Terminal output lists route tree including `/`, `/empresa`, `/tese`, `/casa-leve`, `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, `/icon.svg`.

- [ ] **Step 2: Start prod server in background**

Run:
```bash
npx next start &
echo $! > /tmp/next-pid
sleep 5
```

- [ ] **Step 3: Verify each route's HTML contains expected metadata**

Run:
```bash
for route in / /empresa /tese /casa-leve; do
  echo "=== $route ==="
  curl -s "http://localhost:3000$route" | grep -E -o '<title[^>]*>[^<]*</title>|<meta[^>]*(og:|twitter:|description|canonical)[^>]*>|"@type":"[^"]+"' | head -20
done
```
Expected: Each route shows a distinct `<title>`, a description meta, `og:` tags, a `canonical` link, and at least one `@type` (Organization + the page-specific one).

- [ ] **Step 4: Verify generated files**

```bash
curl -s http://localhost:3000/robots.txt
echo "---"
curl -s http://localhost:3000/sitemap.xml
echo "---"
curl -s http://localhost:3000/manifest.webmanifest
```
Expected:
- `robots.txt` contains `Disallow: /` locally (because `VERCEL_ENV` is unset) and `Sitemap: https://aralabs.com.br/sitemap.xml`.
- `sitemap.xml` lists all four URLs.
- `manifest.webmanifest` is valid JSON with `name: "AraLabs"`.

- [ ] **Step 5: Kill server**

```bash
kill "$(cat /tmp/next-pid)" 2>/dev/null; rm -f /tmp/next-pid
```

- [ ] **Step 6: Commit (if any lockfile or build artefact changed)**

Run `git status`. If clean, skip this step. If something changed unexpectedly, investigate before committing.

---

## Post-implementation manual checks (after deploy to aralabs.com.br)

These are **not** tasks for the automated plan — they require the live production URL:

1. **Vercel Domains**: mark apex `aralabs.com.br` as primary, `www` redirects to apex.
2. **Google Rich Results Test** — https://search.google.com/test/rich-results — test each URL and confirm Organization + page-specific schemas detected without errors.
3. **Submit sitemap** to Google Search Console: `https://aralabs.com.br/sitemap.xml`.
4. **Preview deploy noindex** — push a branch, open the preview URL, curl `/robots.txt`, confirm `Disallow: /`.
