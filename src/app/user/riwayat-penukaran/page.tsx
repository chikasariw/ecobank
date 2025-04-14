// import { getTransaction } from "./action";
import RiwayatPenukaranClient from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Riwayat Penukaran - EcoBank.",
    description: "Halaman Riwayat Penukaran EcoBank.",
  };
}

export default async function RiwayatPenukaranPage() {
  // const itemData = await getTransaction();

  return <RiwayatPenukaranClient />;
}
