"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns, Barang } from "./columns";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import GradientText from "@/components/ui/gradient-text";


const data: Barang[] = [
    {
        id: "m5gr84i9",
        gambar: "/content/sampah-botol.jpg",
        namabarang: "Lorem Ipsum",
        hargajual: 316,
        hargabeli: 316,
    },
    {
        id: "m5gr84i9",
        gambar: "/content/sampah kardus.jpg",
        namabarang: "Lorem Ipsum",
        hargajual: 316,
        hargabeli: 316,
    },
];

export default function DataBarangClient() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="lg:flex lg:justify-between">
                        <p>Data <GradientText>Barang</GradientText></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Barang</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-xl border border-eb-primary-gray-200 p-4">
                        <DataTable columns={columns} data={data} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


