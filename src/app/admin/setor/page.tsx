import { getBarang } from "./action";
import SetorClient from "./client";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Setor - EcoBank.",
    description: "Halaman Profile EcoBank.",
  };
}

export default async function SetorPage() {
  const cookieStore = cookies();
  const adminName = (await cookieStore).get("user_name")?.value || "Admin";

  const itemData = await getBarang();

  return <SetorClient itemData={itemData} email={""} admin_name={adminName} />;
}
