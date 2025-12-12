import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ['images.pexels.com'], 
    remotePatterns: [
      { hostname: 'images.pexels.com' }
    ]
  },

};


export default nextConfig;
