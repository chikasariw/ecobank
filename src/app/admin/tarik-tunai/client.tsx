"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns, Pengguna } from "./columns";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const data: Pengguna[] = [
    {
        id: "1",
        email: "parkjisung@gmail.com",
        nama: "Park Jisung",
    },
];

export default function DataPenggunaClient() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <p>Data <span className="text-eb-primary-green-800">Pengguna</span></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Pengguna</BreadcrumbPage>
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
