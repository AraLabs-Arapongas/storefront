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
