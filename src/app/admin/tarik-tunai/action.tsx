"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export interface userData {
  user_id: string;
  profile_url: string;
  email: string;
  name: string;
  balance: number;
}

export async function getUser() {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const userResponse = await fetch(`${apiUrl}/user/all-user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    const { data: userData, fulfilled: userFulfilled } =
    await userResponse.json();
    
    if (userFulfilled != 1) {
      throw new Error(
        `Failed to fetch user data. Status: ${userResponse.status}`
      );
    }
    
    console.log('respon', userResponse);
    
    const filteredUsers = userData.map((user: userData) => ({
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      balance: user.balance,
    }));
    console.log(filteredUsers)
    return filteredUsers;
  } catch (error) {
    console.error("Error fetching user data or avatars:", error);
    throw error;
  }
}

export async function withdrawFunds(userId: string, amount: number) {
  try {
    if (!userId || amount <= 0) {
      throw new Error("Invalid user ID or amount");
    }

    const token = (await cookies()).get("access_token")?.value;
    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const body = new URLSearchParams();
    body.append("amount", amount.toString());

    const response = await fetch(`${apiUrl}/transaction/admin/withdraw/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: body.toString(),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error(`Withdrawal failed: ${response.status}`, responseData);
      throw new Error(responseData.message || `Failed with status: ${response.status}`);
    }

    console.log("Withdrawal successful:", responseData);
    return responseData;
  } catch (error) {
    console.error("Error processing withdrawal:", error);
    throw error;
  }
}
