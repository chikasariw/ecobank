import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error ESLint saat build
  },
  images: {
    domains: [
      "mf11q2bf-14100.asse.devtunnels.ms",
      "eco-bank-production.up.railway.app" 
    ],
  },
};

export default nextConfig;
