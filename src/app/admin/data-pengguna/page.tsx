"use server";

import { getUser } from "./action";
import DataPenggunaClient from "./client";

export async function generateMetadata() {
  return {
    title: "Data Warga Hijau - EcoBank.",
    description: "Halaman Data Warga Hijau EcoBank.",
  };
}

export default async function DataPenggunaPage() {
  const userData = await getUser();

  return <DataPenggunaClient userData={userData} />;
}
