import DataSBarangClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Barang - EcoBank.",
        description: "Halaman Data Barang EcoBank.",
    };
}

export default function DataSBarangPage() {
    return <DataSBarangClient />;
}
