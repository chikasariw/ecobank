import React from 'react'

import DataPenggunaClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Warga Hijau - EcoBank.",
        description: "Halaman Data Warga Hijau EcoBank.",
    };
}

export default function tarikTunaiPage() {
    return <DataPenggunaClient />;
}
