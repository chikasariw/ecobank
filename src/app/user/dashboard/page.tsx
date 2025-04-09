import DashboardClient from "./client";

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
