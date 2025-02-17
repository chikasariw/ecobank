"use server";

const apiUrl = process.env.API_URL;

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
      // "Authorization": `Bearer ${token}`,  <-- Tambahkan ini jika perlu token
    },
  });

  const { data, fulfilled, message } = await response.json();
  if (fulfilled !== 1) {
    throw new Error(message);
  }
  return data as ItemData[];
}

export const addBarang = async (formData: FormData) => {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to add barang");
  }

  return await response.json();
};
