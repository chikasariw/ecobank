"use client";
import * as React from "react";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
                <CardTitle className="flex justify-between">
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
                        <div className="grid gap-5">
                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="nama_pengguna"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Nama Pengguna
                                </Label>
                                <Input defaultValue="Park Jisung" />
                            </div>

                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="email"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Email
                                </Label>
                                <Input type="email" defaultValue="parkjisung@gmail.com" />
                            </div>

                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="nomor_telepon"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Nomor Telepon
                                </Label>
                                <Input defaultValue="0828376847563" />
                            </div>

                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="kata_sandi"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Kata Sandi
                                </Label>
                                {/* <Password /> */}
                            </div>

                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="tanggal_lahir"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Tanggal Lahir
                                </Label>
                                {/* <DatePicker /> */}
                            </div>

                            <div className="md:flex gap-2">
                                <Label
                                    htmlFor="jenis_kelamin"
                                    className="w-full md:w-1/2 xl:w-1/5 mb-1"
                                >
                                    Jenis Kelamin
                                </Label>
                                {/* <RadioGender /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
