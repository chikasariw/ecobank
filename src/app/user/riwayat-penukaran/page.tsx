// import { getTransaction } from "./action";
import RiwayatPenukaranClient from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Data Barang - EcoBank.",
    description: "Halaman Data Barang EcoBank.",
  };
}

export default async function RiwayatPenukaranPage() {
  // const itemData = await getTransaction();

  return <RiwayatPenukaranClient />;
}
