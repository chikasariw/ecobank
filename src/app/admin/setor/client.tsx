"use client"

import DataBarang from "./data-barang";
import RingkasanPenukaran from "./ringkasan-penukaran";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function SetorClient() {
    return (
        <div>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center gap-10">

                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <DataBarang />
                    <RingkasanPenukaran />
                </CardContent>
            </Card>
        </div>

    );
}
