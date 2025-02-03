import DataSampahDitukarClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Sampah Ditukar - EcoBank.",
        description: "Halaman Data Sampah Ditukar EcoBank.",
    };
}

export default function DataSampahDitukarPage() {
    return <DataSampahDitukarClient />;
}
