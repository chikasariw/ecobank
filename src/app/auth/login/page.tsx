import Login from "./client"; 

export async function generateMetadata() {
  return {
    title: "Login - EcoBank.",
    description: "Halaman Login EcoBank.",
  }
}

export default function LoginPage() {
  return <Login/>;
}
