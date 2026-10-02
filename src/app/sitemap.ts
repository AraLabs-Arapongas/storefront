import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';
import { PRODUCTS } from '@/lib/products';

const LAST_MODIFIED = '2026-10-02';

export default function sitemap(): MetadataRoute.Sitemap {
  const legal = [
    '/produtos/casa-leve/privacidade',
    '/produtos/casa-leve/termos',
    '/produtos/casa-leve/excluir-conta',
    '/produtos/lumo/privacidade',
    '/produtos/lumo/termos',
    '/produtos/lumo/creditos',
    '/produtos/lumo/dedicatoria',
  ];
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
    {
      url: `${SITE_URL}/produtos`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/sob-medida`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/empresa`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...PRODUCTS.map((p) => ({
      url: `${SITE_URL}${p.href}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: p.slug === 'komyx' ? 0.95 : 0.8,
    })),
    ...legal.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
  ];
}
