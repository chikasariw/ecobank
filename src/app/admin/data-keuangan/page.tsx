import { getFinance } from "./action";
import DataKeuanganClient from "./client";

export const dynamic = "force-dynamic"; // ⬅️ INI WAJIB KALO PAKAI cookies()

export async function generateMetadata() {
  return {
    title: "Data Keuangan - EcoBank.",
    description: "Halaman Data Keuangan EcoBank.",
  };
}

export default async function DataKeuanganPage() {
  const financeData = await getFinance();

  return <DataKeuanganClient financeData={financeData} />;
}
