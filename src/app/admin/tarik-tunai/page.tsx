import React from 'react'

import DataPenggunaClient from "./client";

export async function generateMetadata() {
    return {
        title: "Data Pengguna - EcoBank.",
        description: "Halaman Data Pengguna EcoBank.",
    };
}

export default function tarikTunaiPage() {
    return <DataPenggunaClient />;
}
