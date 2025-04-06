"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export interface UserData {
  email: string;
  name: string;
  profile_url: string;
}

export async function getBalance(): Promise<number | null> {
  try {
    const cookieStore = cookies();
    const accessToken = (await cookieStore).get("access_token")?.value;

    if (!accessToken) {
      console.warn("No access token found in cookies");
      return null;
    }

    const response = await fetch(`${apiUrl}/transaction/admin/balance`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch balance. Status: ${response.status}`);
    }

    const { data, fulfilled } = await response.json();

    if (fulfilled !== 1) {
      throw new Error("API did not fulfill request successfully.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching Balance:", error);
    return null;
  }
}

export async function getProfit(
  filter: "daily" | "weekly" | "monthly" | "yearly" | "all" = "all"
): Promise<number | null> {
  try {
    const cookieStore = cookies();
    const accessToken = (await cookieStore).get("access_token")?.value;

    if (!accessToken) {
      console.warn("No access token found in cookies");
      return null;
    }

    const response = await fetch(
      `${apiUrl}/transaction/admin/profit?filter=${filter}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch profit. Status: ${response.status}`);
    }

    const { data, fulfilled } = await response.json();

    if (fulfilled !== 1) {
      throw new Error("API did not fulfill request successfully.");
    }

    return data;
  } catch (error) {
    console.error("Error fetching profit:", error);
    return null;
  }
}

export async function getUserData(): Promise<UserData | null> {
  try {
    const cookieStore = cookies();
    const token = (await cookieStore).get("access_token")?.value;

    if (!token) {
      console.warn("No token found in cookies");
      return null;
    }

    const userResponse = await fetch(`${apiUrl}/admin/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error(
        `Failed to fetch user data. Status: ${userResponse.status}`
      );
    }

    const { data: userData, fulfilled: userFulfilled } =
      await userResponse.json();

    if (userFulfilled !== 1) {
      throw new Error("API did not fulfill request successfully.");
    }

    return userData as UserData;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
}

export interface ItemData {
  item_id: string;
  name: string;
  unit: string;
  purchase_price: string;
  selling_price: string | null;
}

export async function getBarang(): Promise<ItemData[]> {
  try {
    const response = await fetch(`${apiUrl}/item/item`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch items. Status: ${response.status}`);
    }

    const { data, fulfilled, message } = await response.json();

    if (fulfilled !== 1) {
      throw new Error(
        `API did not fulfill request successfully. Message: ${message}`
      );
    }

    return data as ItemData[];
  } catch (error) {
    console.error("Error fetching items:", error);
    return [];
  }
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
