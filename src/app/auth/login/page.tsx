import Login from "./client";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return {
    title: "Login - EcoBank.",
    description: "Halaman Login EcoBank.",
  };
}

export default function LoginPage() {
  return <Login />;
}
