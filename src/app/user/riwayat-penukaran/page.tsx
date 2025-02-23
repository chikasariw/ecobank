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


const data = [
    { id: "1", tipetransaksi: "nabung", nominaltransaksi: 100000, tanggaltransaksi: "2024-02-03" },
    { id: "2", tipetransaksi: "ambil", nominaltransaksi: 50000, tanggaltransaksi: "2024-02-04" },
    { id: "3", tipetransaksi: "ambil", nominaltransaksi: 50000, tanggaltransaksi: "2022-08-03" },
    { id: "4", tipetransaksi: "nabung", nominaltransaksi: 100000, tanggaltransaksi: "2024-02-03" },
    { id: "5", tipetransaksi: "ambil", nominaltransaksi: 50000, tanggaltransaksi: "2024-02-04" },
];


export default function DataBarang() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="lg:flex lg:justify-between">
                        <p>Riwayat <span className="text-eb-primary-tosca-700">Transaksi Penukaran</span></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Riwayat Penukaran</BreadcrumbPage>
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
