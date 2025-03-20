import RiwayatTransaksiClient from "./client";

export async function generateMetadata() {
    return {
        title: "Riwayat Transaksi - EcoBank.",
        description: "Halaman Riwayat Transaksi EcoBank.",
    };
}

export default function RiwayatTransaksiPage() {
    return <RiwayatTransaksiClient />;
}
