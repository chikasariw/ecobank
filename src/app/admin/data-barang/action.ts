"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

// Skema validasi barang sesuai DTO
const barangSchema = z.object({
  name: z.string().nonempty("Nama barang harus diisi"),
  purchase_price: z.number().min(0, "Harga beli tidak boleh negatif"),
  selling_price: z.number().min(0, "Harga jual tidak boleh negatif"),
});


export interface ItemData {
  item_id: string;
  name: string;
  unit: string;
  purchase_price: string;
  selling_price: string;
  image_url: string;
}

export async function getBarang() {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "GET",
    cache: "no-store",
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

  const name = formData.get("name")?.toString();
  const purchase_price = Number(formData.get("purchase_price"));
  const selling_price = Number(formData.get("selling_price"));
  const file = formData.get("file") as File | null;

  if (!name || isNaN(purchase_price) || isNaN(selling_price)) {
    throw new Error("Data tidak valid. Pastikan semua field diisi dengan benar.");
  }

  if (!file || !(file instanceof File) || file.size === 0) {
    throw new Error("Gambar harus diunggah");
  }

  const multipartForm = new FormData();
  multipartForm.append("name", name);
  multipartForm.append("purchase_price", purchase_price.toString());
  multipartForm.append("selling_price", selling_price.toString());
  multipartForm.append("file", file);

  const response = await fetch(`${apiUrl}/item/item`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      // Jangan set Content-Type, biarkan browser yang atur boundary-nya
    },
    body: multipartForm,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add barang");
  }

  return await response.json();
};


export const editBarang = async (itemId: string, formData: FormData) => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    console.error("No token found in cookies");
    throw new Error("No token found");
  }

  // Mengambil data dari FormData
  const rawData = {
    name: formData.get("name")?.toString(),
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
  const response = await fetch(`${apiUrl}/item/item/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(validation.data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to edit barang");
  }

  return await response.json();
};

export const deleteBarang = async (itemId: string) => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    console.error("No token found in cookies");
    throw new Error("No token found");
  }

  const response = await fetch(`${apiUrl}/item/item/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete barang");
  }

  return await response.json();
};
