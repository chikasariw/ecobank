"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns, Keuangan } from "./columns";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const data: Keuangan[] = [
    {
        id: "1",
        tipetransaksi: "masuk",
        nominaltransaksi: 20,
        tanggaltransaksi: "12:00, 01/02/2025",
    },
    {
        id: "1",
        tipetransaksi: "keluar",
        nominaltransaksi: 30,
        tanggaltransaksi: "12:00, 02/02/2025",
    },
];

export default function DataKeuanganClient() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <p>Data <span className="text-eb-primary-green-800">Keuangan</span></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Keuangan</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-xl border border-eb-primary-gray-200 p-4">
                        <DataTable data={data} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
