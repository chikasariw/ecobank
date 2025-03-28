import React from "react";
import DataPenggunaClient from "./client";
import { getUser } from "./action";

export async function generateMetadata() {
  return {
    title: "Data Warga Hijau - EcoBank.",
    description: "Halaman Data Warga Hijau EcoBank.",
  };
}

export default async function TarikTunaiPage() {
  const userData = await getUser();

  return <DataPenggunaClient userData={userData} />;
}
