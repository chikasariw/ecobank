import DashboardClient from "./client";

// Mengatur rendering agar selalu dinamis (tidak menggunakan cache statis)
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Dashboard - EcoBank.",
    description: "Halaman Dashboard Barang EcoBank.",
  };
}

export default function DashboardPage() {
  return <DashboardClient />;
}
