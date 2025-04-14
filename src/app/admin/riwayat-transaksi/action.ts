"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export interface TransactionData {
  transaction_id: string;
  name: string;
  email: string;
  type: string;
  total_amount: number;
  created_at: string;
  balance: number;
  admin_name: string;
}

export interface TransactionDetail {
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

    return transactionData as TransactionData[];
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
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
    return transactionDetail as TransactionDetail[];
  } catch (error) {
    console.error("Error fetching transaction data:", error);
    return null;
  }
}
