"use server";

import { getBarang } from "./action";
import DataBarangClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Barang - EcoBank.",
        description: "Halaman Data Barang EcoBank.",
    };
}

export default async function DataBarangPage() {
    const itemData = await getBarang();
  
    return (
    <DataBarangClient
        itemData={itemData}
    />
    );
  }
