"use server";
// import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { z } from "zod";

const apiUrl = process.env.API_URL;

export interface UserData {
  user_id: string;
  email: string;
  name: string;
  profile_url: string;
  birth_date: string | null;
  gender: string | null;
  phone_number: string | null;
}

export type UserDataValidationErrors = {
  birth_date?: string;
  gender?: string;
  phone_number?: string;
  formError?: string; // General error for the entire form, if needed
};

export async function getUserData() {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const userResponse = await fetch(`${apiUrl}/admin/profile`, {
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
    return {
      ...userData,
    } as UserData;
  } catch (error) {
    console.error("Error fetching user data or avatars:", error);
    throw error;
  }
}

const updateUserDataSchema = z.object({
  birth_date: z
    .string()
    .optional()
    .refine(
      (date) => {
        return date ? /^\d{4}-\d{2}-\d{2}$/.test(date) : true;
      },
      {
        message:
          "Please enter your birth date in the format YYYY-MM-DD (e.g., 1990-01-01).",
      }
    ),
  gender: z.enum(["Laki-Laki", "Perempuan"]).optional(),
  phone_number: z
    .string()
    .optional()
    .refine(
      (number) => {
        return number ? /^\+?[1-9]\d{1,14}$/.test(number) : true;
      },
      {
        message:
          "Please provide a valid phone number in international format (e.g., +1234567890).",
      }
    ),
});

export async function updateUserData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form_data: any
): Promise<string | undefined> {
  try {
    updateUserDataSchema.parse(form_data);

    const token = (await cookies()).get("access_token")?.value;

    if (!token) {
      console.error("No token found in cookies");
      throw new Error("No token found");
    }

    const urlEncodedData = new URLSearchParams(form_data).toString();

    const response = await fetch(`${apiUrl}/user/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
      body: urlEncodedData,
    });

    const { fulfilled, message } = await response.json();

    if (fulfilled != 1) {
      return message;
    }

    return;
  } catch (e) {
    if (e instanceof z.ZodError) {
      return e.errors
        .map((error) => `${error.path.join(", ")}: ${error.message}`)
        .join("; ");
    }
    throw e;
  }
}
