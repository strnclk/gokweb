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
    // optimizeCss: true, // Critters modül sorunu için geçici olarak devre dışı
  },
  // Turbopack configuration at root level
  turbopack: {
    root: process.cwd(), // Explicitly set the root directory
  },
};

export default nextConfig;
