"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export interface userData {
  user_id: string;
  name: string;
  email: string;
  profile_url: string;
  birth_date: string;
  gender: string;
  phone_number: string;
  balance: number;
}

// Fungsi untuk mendapatkan token sekali saja
async function getToken() {
  const token = (await cookies()).get("access_token")?.value;
  if (!token) {
    throw new Error("No token found");
  }
  return token;
}

export async function getUser() {
  try {
    const token = await getToken();

    const userResponse = await fetch(`${apiUrl}/user/all-user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    const { data: userData, fulfilled: userFulfilled } =
      await userResponse.json();

    if (userFulfilled != 1) {
      throw new Error(
        `Failed to fetch user data. Status: ${userResponse.status}`
      );
    }

    console.log(userData);
    return userData as userData[];
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}

export async function getUserById(userId: string) {
  try {
    const token = await getToken();

    const userResponse = await fetch(`${apiUrl}/user/profile/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!userResponse.ok) {
      throw new Error(
        `Failed to fetch user profile. Status: ${userResponse.status}`
      );
    }

    const { data: userData } = await userResponse.json();
    return userData as userData;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}
