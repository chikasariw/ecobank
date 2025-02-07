import SetorClient from "./client";


export async function generateMetadata() {
    return {
        title: "Setor - EcoBank.",
        description: "Halaman Profile EcoBank.",
    };
}

export default function SetorPage() {
    return <SetorClient/>;
}