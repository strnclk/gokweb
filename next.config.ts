import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gokkusagiyazilim.com.tr',
      },
    ],
    unoptimized: true,
  },
  compress: true,
  // Geliştirme sırasında sol altta çıkan Next.js rota/derleme göstergesi gizlenir.
  devIndicators: false,
  experimental: {
    // optimizeCss: true, // Critters modül sorunu için geçici olarak devre dışı
  },
  // Turbopack configuration at root level
  turbopack: {
    root: process.cwd(), // Explicitly set the root directory
  },
};

export default nextConfig;
