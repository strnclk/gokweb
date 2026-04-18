import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gokkusagiyazilim.com.tr',
      },
    ],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
