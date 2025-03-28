"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

// Schema validasi transaksi
const transactionSchema = z.object({
  email: z.string().email("Invalid email"),
  total_amount: z.number().min(1, "Total amount must be at least 1"),
  items: z
    .array(
      z.object({
        item_id: z.string().uuid("Invalid item ID"),
        name: z.string().min(1, "Item name is required"), // Tambahkan validasi name
        purchase_price: z.number().min(1, "Purchase price must be at least 1"), // Tambahkan validasi harga beli
        unit: z.number().min(1, "Unit must be at least 1"),
        sub_total: z.number().min(0, "Subtotal must be non-negative"),
      })
    )
    .nonempty("At least one item is required"),
});

// Interface untuk data transaksi
export interface TransactionItemData {
  item_id: string;
  name: string;
  unit: number;
  purchase_price: number;
  sub_total: number;
}

export interface TransactionData {
  email: string;
  total_amount: number;
  items: TransactionItemData[];
}

// Fungsi untuk mendapatkan daftar barang
export async function getBarang() {
  const response = await fetch(`${apiUrl}/item/item`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
  }

  const { data, fulfilled, message } = await response.json();
  if (fulfilled !== 1) {
    throw new Error(message);
  }
  return data as TransactionItemData[];
}

// Interface untuk error validasi transaksi
export type TransactionValidationErrors = {
  email?: string;
  total_amount?: string;
  items?: string;
  error?: string;
};

// Fungsi untuk membuat transaksi
export async function createTransactionAction(
  email: string,
  total_amount: number,
  items: TransactionItemData[]
): Promise<TransactionValidationErrors | { success: boolean } | undefined> {
  try {
    // Validasi input transaksi
    const validationResult = transactionSchema.safeParse({
      email,
      total_amount,
      items,
    });

    console.log(JSON.stringify(validationResult, null, 2));

    if (!validationResult.success) {
      // Ambil pesan error pertama dari setiap array error
      const errors: TransactionValidationErrors = {
        email: validationResult.error.flatten().fieldErrors.email?.[0],
        total_amount:
          validationResult.error.flatten().fieldErrors.total_amount?.[0],
        items: validationResult.error.flatten().fieldErrors.items?.[0],
      };
      return errors;
    }

    // Ambil token dari cookies
    const token = (await cookies()).get("access_token")?.value;
    if (!token) {
      return { error: "No token found" };
    }

    // Kirim request ke backend untuk membuat transaksi
    const response = await fetch(`${apiUrl}/transaction`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, total_amount, items }),
    });

    if (!response.ok) {
      return { error: `HTTP Error ${response.status}: ${response.statusText}` };
    }

    const { fulfilled, message } = await response.json();
    if (fulfilled !== 1) {
      return { error: message };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Unexpected error occurred" };
  }
}
