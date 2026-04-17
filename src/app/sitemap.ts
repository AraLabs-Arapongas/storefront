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
