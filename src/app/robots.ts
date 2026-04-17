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
