import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/casa-leve',
        destination: '/produtos/casa-leve',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
