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
        namabarang: "Lorem Ipsum",
        penukar: "parkjisung@gmail.com",
        totalpenukaran: 90,
        hargapenukaran: 90.000,
        waktupenukaran: "12.00, 12 Januari 2025",
    },
];

export default function DataSampahDitukarClient() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="lg:flex lg:justify-between">
                        <p>Data <span className="text-eb-primary-tosca-700">Sampah Ditukar</span></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Sampah Ditukar</BreadcrumbPage>
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
