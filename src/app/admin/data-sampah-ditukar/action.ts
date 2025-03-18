"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;
export interface TransactionData {
  transaction_id: string;
  email: string;
  total_amount: number;
  current_balance: number;
  type: string;
}

export async function getTransaction() {
  const accessToken = (await cookies()).get("access_token")?.value;

  if (!accessToken) {
    return null;
  }

  try {
    const response = await fetch(`${apiUrl}/transaction/admin/history`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { data, fulfilled } = await response.json();

    if (fulfilled !== 1) {
      throw new Error("Failed to fetch Balance");
    }

    return data;
  } catch (error) {
    console.error("Error fetching Balance:", error);
    return null;
  }
}
