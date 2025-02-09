import React from 'react'

import Register from "./client";

export async function generateMetadata() {
    return {
        title: "Register - EcoBank.",
        description: "Halaman Refister EcoBank.",
    };
}

export default function RegisterPage() {
    return <Register />;
}
