"use client";
import * as React from "react";

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
import { Card, CardContent } from "@/components/ui/card";


export default function ProfileDetail() {
    return (
        <Card>
            <CardContent className="grid gap-8 lg:grid-cols-[240px,1fr]">
                {/* Profile Image */}
                <ProfileImage />

                {/* Form */}
                <div className="grid gap-5 mt-3 me-5">
                    <div className="md:flex gap-2 md:justify-between">
                        <Label
                            htmlFor="nama_pengguna"
                            className="text-nowrap w-full md:w-1/3 mb-1"
                        >
                            Nama Pengguna
                        </Label>
                        <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">Park Jisung</p>
                    </div>

                    <div className="md:flex gap-2 md:justify-between">
                        <Label
                            htmlFor="email"
                            className="w-full md:w-1/3 mb-1"
                        >
                            Email
                        </Label>
                        <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">parkjisung@gmail.com</p>
                    </div>

                    <div className="md:flex gap-2 md:justify-between">
                        <Label
                            htmlFor="nomor_telepon"
                            className="w-full md:w-1/3 mb-1"
                        >
                            Nomor Telepon
                        </Label>
                        <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">0828376847563</p>
                    </div>

                    <div className="md:flex gap-2 md:justify-between">
                        <Label
                            htmlFor="tanggal_lahir"
                            className="w-full md:w-1/3 mb-1"
                        >
                            Tanggal Lahir
                        </Label>
                        <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">5 Februari 2002</p>
                    </div>

                    <div className="md:flex gap-2 md:justify-between">
                        <Label
                            htmlFor="jenis_kelamin"
                            className="w-full md:w-1/3 mb-1"
                        >
                            Jenis Kelamin
                        </Label>
                        <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">Laki-laki</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
