import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo/site';

const LAST_MODIFIED = '2026-04-29';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 1.0 },
    {
      url: `${SITE_URL}/empresa`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/tese`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/produtos`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/ara-agenda`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/produtos/casa-leve`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
