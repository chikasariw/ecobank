import Login from "./client"

export async function generateMetadata() {
  return {
    title: "Login - EcoBank.",
    description: "Halaman Login EcoBank.",
  }
}

export default function LoginPage({ searchParams }: { searchParams: { redirect?: string; error?: string } }) {
  return <Login searchParams={searchParams} />
}
