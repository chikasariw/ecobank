"use server";

import { getTransaction } from "./action";
import RiwayatPenukaranClient from "./client";

export async function generateMetadata() {
  return {
    title: "Data Barang - EcoBank.",
    description: "Halaman Data Barang EcoBank.",
  };
}

export default async function RiwayatPenukaranPage() {
  const itemData = await getTransaction();

  return <RiwayatPenukaranClient />;
}
