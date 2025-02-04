import DataKeuanganClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Keuangan - EcoBank.",
        description: "Halaman Data Keuangan EcoBank.",
    };
}

export default function DataKeuanganPage() {
    return <DataKeuanganClient />;
}
