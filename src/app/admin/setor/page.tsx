import { getBarang } from "./action";
import SetorClient from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Setor - EcoBank.",
    description: "Halaman Profile EcoBank.",
  };
}

export default async function SetorPage() {
  const itemData = await getBarang();

  return <SetorClient itemData={itemData} email={""} />;
}
