import Register from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Register - EcoBank.",
    description: "Halaman Register EcoBank.",
  };
}

export default function RegisterPage() {
  return <Register />;
}
