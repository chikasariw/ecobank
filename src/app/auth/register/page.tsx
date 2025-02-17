import Register from "./client";

export async function generateMetadata() {
  return {
    title: "Register - EcoBank.",
    description: "Halaman Register EcoBank.",
  };
}

export default function RegisterPage({ searchParams }: { searchParams: { redirect?: string; error?: string } }) {
  return <Register searchParams={searchParams} />;
}
