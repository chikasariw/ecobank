import DashboardClient from "./client";

export const dynamic = "force-dynamic"; // ⬅️ INI WAJIB KALO PAKAI cookies()

export async function generateMetadata() {
  return {
    title: "Dashboard - EcoBank.",
    description: "Halaman Dashboard Barang EcoBank.",
  };
}

export default function DashboardPage() {
  return <DashboardClient />;
}
