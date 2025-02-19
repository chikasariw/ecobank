"use server";

import { z } from "zod";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

const apiUrl = process.env.API_URL;
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .nonempty("Password is required"),
});

export type LoginValidationErrors = {
  email?: string;
  password?: string;
  error?: string;
};

export async function loginAction(
  email: string,
  password: string
): Promise<LoginValidationErrors | { role: string } | undefined> {
  try {
    loginSchema.parse({ email, password });

    const cookieStore = await cookies();

    const result = await fetch(`${apiUrl}/auth/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email, password }).toString(),
    });

    const { data, fulfilled, message } = await result.json();

    if (fulfilled !== 1) {
      return { error: message };
    }

    console.log("Token diterima:", data.access_token);
    console.log("role:", data.user.role);

    await cookieStore.set("access_token", data.access_token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      domain: process.env.COOKIE_DOMAIN || undefined,
    });

    const cookiesData = {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      domain: process.env.COOKIE_DOMAIN || undefined,
    };

    await cookieStore.set("user_name", data.user.name, cookiesData);
    await cookieStore.set("user_email", data.user.email, cookiesData);
    await cookieStore.set("user_role", data.user.role, cookiesData);

    await revalidatePath("/");

    // Kirim role ke client
    return { role: data.user.role };
  } catch (e) {
    if (e instanceof z.ZodError) {
      const errors: LoginValidationErrors = {};

      e.errors.forEach((error) => {
        if (error.path.includes("email")) {
          errors.email = error.message;
        } else if (error.path.includes("password")) {
          errors.password = error.message;
        }
      });
      return errors;
    }
    throw e;
  }
}
