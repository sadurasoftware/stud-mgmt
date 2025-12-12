import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['images.pexels.com'],
    remotePatterns: [{ hostname: 'images.pexels.com' }],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['recharts'],
    esmExternals: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
