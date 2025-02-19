"use server";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

// // Skema validasi barang sesuai DTO
// const barangSchema = z.object({
//   email: z.string().nonempty("Email barang harus diisi"),
//   name: z.string().nonempty("Nama barang harus diisi"),
// });

export interface userData {
    user_id: string;
    profile_url: string;
    email: string;
    name: string;
};

export async function getUser() {
  const response = await fetch(`${apiUrl}/user/all-user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { data, fulfilled, message } = await response.json();
  if (fulfilled !== 1) {
    throw new Error(message);
  }
  return data as userData[];
}

// export const addBarang = async (formData: FormData) => {
//   const token = (await cookies()).get("access_token")?.value;

//   if (!token) {
//     console.error("No token found in cookies");
//     throw new Error("No token found");
//   }

//   // Mengambil data dari FormData
//   const rawData = {
//     name: formData.get("name")?.toString(),
//     email: formData.get("email")?.toString(),
//   };

//   // Validasi dengan Zod
//   const validation = barangSchema.safeParse(rawData);
//   if (!validation.success) {
//     const errorMessages = validation.error.errors
//       .map((err) => err.message)
//       .join(", ");
//     throw new Error(`Validasi gagal: ${errorMessages}`);
//   }

//   // Kirim ke API jika validasi sukses
//   const response = await fetch(`${apiUrl}/user/all-user`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(validation.data),
//   });

//   if (!response.ok) {
//     const errorData = await response.json();
//     throw new Error(errorData.message || "Failed to add");
//   }

//   return await response.json();
// };
