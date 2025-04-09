import RiwayatTransaksiClient from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Riwayat Transaksi - EcoBank.",
    description: "Halaman Riwayat Transaksi EcoBank.",
  };
}

export default function RiwayatTransaksiPage() {
  return <RiwayatTransaksiClient transactionData={[]} />;
}
