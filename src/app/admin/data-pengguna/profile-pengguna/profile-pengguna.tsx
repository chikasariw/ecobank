"use client";
import * as React from "react";
import { Label } from "@/components/ui/label";
import ProfileImage from "./profile-image";
import type { userData } from "../action";
import { Skeleton } from "@/components/ui/skeleton";

interface ProfileDetailProps {
  data: userData | null;
  isLoading: boolean;
}

export default function ProfileDetail({ data, isLoading }: ProfileDetailProps) {
  return (
    <div className="rounded-xl border border-eb-primary-gray-200 p-4">
      <div className="grid gap-8 lg:grid-cols-[240px,1fr]">
        {/* Profile Image */}
        <ProfileImage />

        {/* Form */}
        <div className="grid gap-5 mt-3">
          {isLoading ? (
            <div className="grid gap-4">
              {[...Array(6)].map((_, index) => (
                <Skeleton key={index} className="h-6 w-full md:w-1/2" />
              ))}
            </div>
          ) : (
            <>
              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="nama_pengguna"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Nama Pengguna
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.name || "-"}
                </p>
              </div>

              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="email"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Email
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.email || "-"}
                </p>
              </div>

              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="balance"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Saldo
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.balance || "-"}
                </p>
              </div>

              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="nomor_telepon"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Nomor Telepon
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.phone_number || "-"}
                </p>
              </div>

              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="tanggal_lahir"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Tanggal Lahir
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.birth_date || "-"}
                </p>
              </div>

              <div className="md:flex gap-2 md:justify-between">
                <Label
                  htmlFor="jenis_kelamin"
                  className="w-full md:w-1/3 xl:w-1/5 mb-1"
                >
                  Jenis Kelamin
                </Label>
                <p className="text-sm text-eb-primary-green-800 font-medium text-nowrap">
                  {data?.gender}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
