"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

// Skema validasi barang sesuai DTO
const barangSchema = z.object({
  name: z.string().nonempty("Nama barang harus diisi"),
  unit: z.number().min(1, "Unit harus lebih dari 0"),
  purchase_price: z.number().min(0, "Harga beli tidak boleh negatif"),
  selling_price: z.number().min(0, "Harga jual tidak boleh negatif"),
});

export interface ItemData {
  item_id: string;
  name: string;
  unit: string;
  purchase_price: string;
  selling_price: string | null;
}

export async function getBarang() {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data, fulfilled, message } = await response.json();
  if (fulfilled !== 1) {
    throw new Error(message);
  }
  return data as ItemData[];
}

export const addBarang = async (formData: FormData) => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    console.error("No token found in cookies");
    throw new Error("No token found");
  }

  // Mengambil data dari FormData
  const rawData = {
    name: formData.get("name")?.toString(),
    unit: Number(formData.get("unit")),
    purchase_price: Number(formData.get("purchase_price")),
    selling_price: Number(formData.get("selling_price")),
  };

  // Validasi dengan Zod
  const validation = barangSchema.safeParse(rawData);
  if (!validation.success) {
    const errorMessages = validation.error.errors
      .map((err) => err.message)
      .join(", ");
    throw new Error(`Validasi gagal: ${errorMessages}`);
  }

  // Kirim ke API jika validasi sukses
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(validation.data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add barang");
  }

  return await response.json();
};
