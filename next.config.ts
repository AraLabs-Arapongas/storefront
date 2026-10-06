import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 85 for the app screenshots in PhoneFrame (fine UI text); 75 is the default everywhere else.
  images: { qualities: [75, 85] },
  async redirects() {
    return [
      { source: '/casa-leve', destination: '/produtos/casa-leve', permanent: true },
      // Retired pages: Aragenda left the portfolio; the thesis folded into /empresa.
      // (/produtos/sono-leve is a live product page again since the iOS app, 2026-10-03.)
      { source: '/ara-agenda', destination: '/sob-medida', permanent: true },
      { source: '/aragenda', destination: '/sob-medida', permanent: true },
      { source: '/produtos/aragenda', destination: '/sob-medida', permanent: true },
      { source: '/tese', destination: '/empresa', permanent: true },
      { source: '/komyx', destination: '/produtos/komyx', permanent: true },
      { source: '/arakids', destination: '/produtos/arakids', permanent: true },
    ];
  },
};

export default nextConfig;
