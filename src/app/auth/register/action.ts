"use server"

import { revalidatePath } from "next/cache"

// Simulasi database sementara
const users: { nama: string; email: string; sandi: string }[] = []

export async function registerUser(prevState: any, formData: FormData) {
  const nama = formData.get("nama") as string
  const email = formData.get("email") as string
  const sandi = formData.get("sandi") as string

  if (!nama || !email || !sandi) {
    return { success: false, message: "Semua field wajib diisi" }
  }

  if (users.some((user) => user.email === email)) {
    return { success: false, message: "Email sudah terdaftar" }
  }

  users.push({ nama, email, sandi })

  revalidatePath("/auth/register")
  return { success: true, message: "Akun berhasil dibuat!" }
}
