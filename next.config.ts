import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Mengabaikan error ESLint saat build
  },
  images: {
    domains: ["mf11q2bf-14100.asse.devtunnels.ms"], // Tambahkan domain ini
  },
};

export default nextConfig;
