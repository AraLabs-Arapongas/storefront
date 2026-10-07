import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';
import { PRODUCTS } from '@/lib/products';
import { GUIDES } from '@/lib/guides';

/*
 * Indexing policy: the sitemap lists only the pages meant to rank, i.e. home, hubs, sob medida,
 * empresa, the /guias hub and its articles, every product page and the product support pages (real FAQ, post-install searches).
 * Privacy, terms, account deletion, Lumo's credits and dedication exist for the stores and for
 * users; they are `noindex, follow` and stay out of here.
 */

/**
 * Last real content change per path (YYYY-MM-DD), taken from the last commit of each page file.
 * Maintained by hand: bump the date when a page's content changes. A path missing here is listed
 * without `lastmod`, which is better than a date Google learns not to trust.
 */
const LAST_MODIFIED: Record<string, string> = {
  '/': '2026-10-07',
  '/produtos': '2026-10-07',
  '/sob-medida': '2026-10-07',
  '/empresa': '2026-10-07',
  '/produtos/komyx': '2026-10-07',
  '/produtos/casa-leve': '2026-10-07',
  '/produtos/arakids': '2026-10-07',
  '/produtos/lumo': '2026-10-07',
  '/produtos/sono-leve': '2026-10-07',
  '/produtos/jornadas': '2026-10-07',
  '/produtos/le-barista': '2026-10-07',
  '/guias': '2026-10-07',
  '/guias/comunicacao-alternativa/prancha-de-comunicacao': '2026-10-07',
  '/guias/sistemas/sistema-sob-medida-ou-pronto': '2026-10-07',
  '/guias/cafe/espresso-amargo-ou-azedo': '2026-10-07',
  '/produtos/arakids/suporte': '2026-10-04',
  '/produtos/jornadas/suporte': '2026-10-03',
  '/produtos/le-barista/suporte': '2026-10-06',
  '/produtos/sono-leve/suporte': '2026-10-03',
};

const SUPPORT_PAGES = [
  '/produtos/arakids/suporte',
  '/produtos/jornadas/suporte',
  '/produtos/le-barista/suporte',
  '/produtos/sono-leve/suporte',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/produtos',
    '/sob-medida',
    '/empresa',
    ...PRODUCTS.map((p) => p.href),
    ...SUPPORT_PAGES,
    '/guias',
    ...GUIDES.map((g) => g.path),
  ];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    ...(LAST_MODIFIED[path] ? { lastModified: LAST_MODIFIED[path] } : {}),
  }));
}
