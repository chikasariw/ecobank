"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

const incomeSchema = z.object({
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

export interface financeData {
  finance_id: string;
  transaction_id: string;
  total_amount: number;
  type: string;
  profit: number;
  created_at: string;
}

export interface transactionDetail {
  transaction_id: string;
  total_amount: number;
  created_at: string;
  user: {
    name: string;
    email: string;
  };
  details: {
    item_name: string;
    unit: number;
    purchase_price: number;
    sub_total: number;
  }[];
}

export interface ItemData {
  item_id: string;
  name: string;
  unit: number;
  purchase_price: number;
}

export interface IncomeItemData {
  item_id: string;
  name: string;
  unit: number;
  purchase_price: number;
  sub_total: number;
}

export interface IncomeData {
  email: string;
  total_amount: number;
  items: IncomeItemData[];
}

export async function getFinance() {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const response = await fetch(`${apiUrl}/transaction/admin/finance`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data: financeData, fulfilled: financeFulfilled } =
      await response.json();

    if (financeFulfilled != 1) {
      throw new Error(
        `Failed to fetch finance data. Status: ${response.status}`
      );
    }

    return financeData as financeData[];
  } catch (error) {
    console.error("Error fetching finance data:", error);
    throw error;
  }
}

export async function getTransactionDetail(transactionId: string) {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const response = await fetch(
      `${apiUrl}/transaction/detailtransaction/${transactionId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data: transactionDetail, fulfilled: userFulfilled } =
      await response.json();

    if (userFulfilled != 1) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
    return transactionDetail as transactionDetail[];
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
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

// Interface untuk error validasi transaksi
export type IncomeValidationErrors = {
  email?: string;
  total_amount?: string;
  items?: string;
  error?: string;
};

export async function createIncomeAction(
  email: string,
  total_amount: number,
  items: IncomeItemData[]
): Promise<IncomeValidationErrors | { success: boolean } | undefined> {
  try {
    // Validasi input transaksi
    const validationResult = incomeSchema.safeParse({
      email,
      total_amount,
      items,
    });

    console.log(JSON.stringify(validationResult, null, 2));

    if (!validationResult.success) {
      // Ambil pesan error pertama dari setiap array error
      const errors: IncomeValidationErrors = {
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
    const response = await fetch(`${apiUrl}/transaction/admin/income`, {
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
