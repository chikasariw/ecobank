"use server"

import { cookies } from "next/headers"

export async function login(formData: FormData) {
  const username = formData.get("nama") as string
  const password = formData.get("sandi") as string

  if (username === "demo" && password === "password") {
    cookies().set("session", "logged-in", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, 
      path: "/",
    })

    return { success: true, message: "Login berhasil" }
  } else {
    return { success: false, message: "Nama atau kata sandi salah" }
  }
}

