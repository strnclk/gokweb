import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Statik export için
  images: {
    unoptimized: true, // Statik export için gerekli
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
  trailingSlash: true, // Statik routing için
};

export default nextConfig;
