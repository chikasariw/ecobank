"use server";
import { cookies } from "next/headers";

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
    },
  });

  const { data, fulfilled, message } = await response.json();
  if (fulfilled !== 1) {
    throw new Error(message);
  }
  return data as ItemData[];
}
