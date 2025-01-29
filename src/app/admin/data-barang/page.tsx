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


const data: Barang[] = [
    {
        id: "m5gr84i9",
        gambar: "",
        namabarang: "Lorem Ipsum",
        hargajual: 316,
        hargabeli: 316,
        satuan: "gram",
    },
    {
        id: "m5gr84i9",
        gambar: "",
        namabarang: "Lorem Ipsum",
        hargajual: 316,
        hargabeli: 316,
        satuan: "gram",
    },
];

export default function DataBarang() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <p>Data <span className="text-eb-primary-green-800">Barang</span></p>
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
