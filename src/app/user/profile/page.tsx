"use server";

import { getUserData } from "./action";
import ProfileClient from "./client";

export async function generateMetadata() {
    return {
        title: "Profile - EcoBank.",
        description: "Halaman Profile EcoBank.",
    };
}

export default async function ProfilPage() {
    const userData = await getUserData();
  
    return (
      <ProfileClient
        userData={userData}
        UserDataValidationErrors={[]}    />
    );
  }