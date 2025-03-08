import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint lors du build pour éviter les erreurs bloquantes
  },
  reactStrictMode: true, // Active le mode strict de React
  swcMinify: true, // Optimisation des performances avec SWC
  experimental: {
    // appDir is no longer needed as it's now stable in Next.js 13+
  },
};

export default nextConfig;
