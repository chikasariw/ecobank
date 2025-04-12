import DashboardClient from "./client";

export const dynamic = "force-dynamic"; // Halaman dirender secara dinamis (server side)

// Fungsi metadata untuk memberikan informasi SEO pada halaman
export async function generateMetadata() {
  return {
    title: "Dashboard - EcoBank.",
    description: "Halaman Dashboard Barang EcoBank.",
  };
}

// Komponen halaman dashboard
export default function DashboardPage() {
  return <DashboardClient />;
}
