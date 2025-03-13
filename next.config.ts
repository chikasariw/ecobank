import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error ESLint saat build
  },
};

export default nextConfig;
