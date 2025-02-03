import DashboardClient from "./client";

export async function generateMetadata() {
    return {
        title: "Dashboard - EcoBank.",
        description: "Halaman Dashboard Barang EcoBank.",
    };
}

export default function DashboardPage() {
    return <DashboardClient />;
}
