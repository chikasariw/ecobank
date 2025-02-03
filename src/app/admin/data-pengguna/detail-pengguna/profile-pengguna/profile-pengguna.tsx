"use client";
import * as React from "react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import ProfileImage from "./profile-image";


export default function ProfileDetail() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex md:justify-start lg:justify-between">
                    <p>Detail <span className="text-eb-primary-green-800">Pengguna</span></p>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/data-pengguna">Data Pengguna</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-xl border border-eb-primary-gray-200 p-4">
                    <div className="grid gap-8 lg:grid-cols-[240px,1fr]">
                        {/* Profile Image */}
                        <ProfileImage />

                        {/* Form */}
                        <div className="grid gap-5 mt-3">
                            <div className="flex gap-2 md:justify-between lg:justify-start">
                                <Label
                                    htmlFor="nama_pengguna"
                                    className="w-full md:w-1/3 xl:w-1/5 mb-1"
                                >
                                    Nama Pengguna
                                </Label>
                                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">Park Jisung</p>
                            </div>

                            <div className="flex gap-2 md:justify-between lg:justify-start">
                                <Label
                                    htmlFor="email"
                                    className="w-full md:w-1/3 xl:w-1/5 mb-1"
                                >
                                    Email
                                </Label>
                                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">parkjisung@gmail.com</p>
                            </div>

                            <div className="flex gap-2 md:justify-between lg:justify-start">
                                <Label
                                    htmlFor="nomor_telepon"
                                    className="w-full md:w-1/3 xl:w-1/5 mb-1"
                                >
                                    Nomor Telepon
                                </Label>
                                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">0828376847563</p>
                            </div>

                            <div className="flex gap-2 md:justify-between lg:justify-start">
                                <Label
                                    htmlFor="tanggal_lahir"
                                    className="w-full md:w-1/3 xl:w-1/5 mb-1"
                                >
                                    Tanggal Lahir
                                </Label>
                                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">5 Februari 2002</p>
                            </div>

                            <div className="flex gap-2 md:justify-between lg:justify-start">
                                <Label
                                    htmlFor="jenis_kelamin"
                                    className="w-full md:w-1/3 xl:w-1/5 mb-1"
                                >
                                    Jenis Kelamin
                                </Label>
                                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">Laki-laki</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
