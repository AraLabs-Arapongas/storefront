import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/casa-leve',
        destination: '/produtos/casa-leve',
        permanent: true,
      },
      {
        source: '/produtos/aragenda',
        destination: '/ara-agenda',
        permanent: true,
      },
      {
        source: '/aragenda',
        destination: '/ara-agenda',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
