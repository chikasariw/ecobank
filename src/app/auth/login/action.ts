"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"


// dummy
const users = [
  { id: 1, name: "Admin", password: "admin123", role: "admin" },
  { id: 2, name: "User", password: "user123", role: "user" },
]

export async function login(prevState: any, formData: FormData) {
  const nama = formData.get("nama") as string
  const sandi = formData.get("sandi") as string

  // Cek apakah user ada di database
  const user = users.find((u) => u.name === nama && u.password === sandi)

  if (!user) {
    return { success: false, message: "Nama atau kata sandi salah" }
  }

  cookies().set("user_role", user.role, { path: "/", httpOnly: true, secure: true })

  // Redirect berdasarkan role
  if (user.role === "admin") {
    redirect("/admin/dashboard")
  } else {
    redirect("/user/dashboard")
  }

  return { success: true, message: "Login berhasil!" }
}
