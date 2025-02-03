import DetailPenggunaClient from "./client";

export async function generateMetadata() {
    return {
        title: "Detail Pengguna - EcoBank.",
        description: "Halaman Detail Pengguna EcoBank.",
    };
}

export default function DetailPenggunaPage() {
    return <DetailPenggunaClient />;
}
