"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export interface transactionData {
  transaction_id: string;
  total_amount: number;
  type: string;
  created_at: string;
  wallet_id: string;
  balance: number;
  user_id: string;
  name: string;
  email: string;
}

export async function getTransaction() {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const response = await fetch(`${apiUrl}/transaction/admin/history`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { data: transactionData, fulfilled: userFulfilled } =
      await response.json();

    if (userFulfilled != 1) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }

    return transactionData as transactionData[];
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
}
