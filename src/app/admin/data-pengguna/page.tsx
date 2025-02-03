import DataPenggunaClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Pengguna - EcoBank.",
        description: "Halaman Data Pengguna EcoBank.",
    };
}

export default function DataPenggunaPage() {
    return <DataPenggunaClient />;
}
