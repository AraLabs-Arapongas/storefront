import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/casa-leve', destination: '/produtos/casa-leve', permanent: true },
      // Retired pages: Aragenda and Sono Leve left the portfolio; the thesis folded into /empresa.
      { source: '/ara-agenda', destination: '/sob-medida', permanent: true },
      { source: '/aragenda', destination: '/sob-medida', permanent: true },
      { source: '/produtos/aragenda', destination: '/sob-medida', permanent: true },
      // Only the old landing redirects; /produtos/sono-leve/{privacidade,termos,suporte} are
      // the App Store pages for the iOS app and must stay reachable.
      { source: '/produtos/sono-leve', destination: '/produtos', permanent: true },
      { source: '/tese', destination: '/empresa', permanent: true },
      { source: '/komyx', destination: '/produtos/komyx', permanent: true },
      { source: '/arakids', destination: '/produtos/arakids', permanent: true },
    ];
  },
};

export default nextConfig;
