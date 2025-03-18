"use server";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;
export interface TransactionData {
  transaction_id: string;
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
    const response = await fetch(`${apiUrl}/transaction/user/history`, {
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

// export async function getUserData() {
//   try {
//     const token = (await cookies()).get("access_token")?.value;

//     if (!token) {
//       console.error("No token found in cookies");
//       throw new Error("No token found");
//     }

//     const userResponse = await fetch(`${apiUrl}/user/profile`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const { data: userData, fulfilled: userFulfilled } =
//       await userResponse.json();

//     if (userFulfilled != 1) {
//       throw new Error(
//         `Failed to fetch user data. Status: ${userResponse.status}`
//       );
//     }
//     return {
//       ...userData,
//     } as UserData;
//   } catch (error) {
//     console.error("Error fetching user data or avatars:", error);
//     throw error;
//   }
// }
