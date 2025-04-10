"use server";
import { cookies } from "next/headers";
import { z } from "zod";


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

// Skema validasi barang sesuai DTO
const userSchema = z.object({
  name: z.string().nonempty("Nama Pengguna harus diisi"),

  birth_date: z
    .string()
    .nonempty("Tanggal lahir harus diisi")
    .refine(
      (val) => !isNaN(Date.parse(val)),
      "Tanggal lahir tidak valid"
    ),

  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Jenis kelamin harus dipilih" }),
  }),

  phone_number: z.string().nonempty("Nomor telepon harus diisi"),

});


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

export const editUser = async (userId: string, formData: FormData) => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) throw new Error("No token found");

  const rawData = {
    name: formData.get("name")?.toString() ?? "",
    birth_date: formData.get("birth_date")?.toString() ?? "",
    gender: formData.get("gender")?.toString() as "male" | "female",
    phone_number: formData.get("phone_number")?.toString() ?? "",
  };

  const validation = userSchema.safeParse(rawData);
  if (!validation.success) {
    const errorMessages = validation.error.errors.map((err) => err.message).join(", ");
    throw new Error(`Validasi gagal: ${errorMessages}`);
  }

  const response = await fetch(`${apiUrl}/user/profile/${userId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(validation.data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to edit user");
  }

  return await response.json();
};


export const deleteUser = async (itemId: string) => {
  const token = (await cookies()).get("access_token")?.value;

  if (!token) {
    console.error("No token found in cookies");
    throw new Error("No token found");
  }

  const response = await fetch(`${apiUrl}/item/item/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to delete barang");
  }

  return await response.json();
};
