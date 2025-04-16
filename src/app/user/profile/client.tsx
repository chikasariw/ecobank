"use client";

import { toast } from "sonner";
import React, { useState } from "react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FormButton from "@/components/ui/form-button";
// import Password from "./password";
import DatePicker from "./date-picker";
import ProfileImage from "./profile-image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  UserData,
  updateUserData,
  UserDataValidationErrors,
} from "./action";
// import { InputPassword } from "@/components/ui/inputpassword";

interface ProfileClientProps {
  userData: UserData;
  UserDataValidationErrors: UserDataValidationErrors[];
}

export default function ProfileClient({ userData }: ProfileClientProps) {
  const [formError, setErrors] = useState<string | null>(null);

  async function handleEditProfileSubmit(formData: FormData) {
    setErrors(null);

    const birth_date = formData.get("birth_date") as string | undefined;
    const gender = formData.get("gender") as string | undefined;
    const phone_number = formData.get("phone_number") as string | undefined;

    const validationErrors = await updateUserData({
      ...(birth_date && { birth_date }),
      ...(gender && { gender }),
      ...(phone_number && { phone_number }),
    });

    if (validationErrors) {
      setErrors(validationErrors);
    } else {
      toast.success("Berhasil mengubah data pengguna");
    }
  }

  return (
    <Card>
      <form action={handleEditProfileSubmit} className="space-y-6">
        <CardHeader>
          <CardTitle className="flex flex-col lg:flex-row lg:justify-between">
            <p>
              Data <span className="text-eb-primary-tosca-700">Warga Hijau</span>
            </p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">
                    EcoBank.
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Profil</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 lg:grid-cols-[240px,1fr] border border-eb-primary-gray-200 p-4 rounded-xl">
            <ProfileImage defaultValue={userData.profile_url}/>
            <div className="grid gap-4">
              <div className="md:flex items-center">
                <Label htmlFor="name" className="w-full md:w-1/2 xl:w-1/5">Nama Pengguna</Label>
                <Input type="text" name="name" placeholder="Masukkan nama kamu" defaultValue={userData.name} />
              </div>

              <div className="md:flex items-center">
                <Label htmlFor="email" className="w-full md:w-1/2 xl:w-1/5">Email</Label>
                <Input type="email" name="email" placeholder="Masukkan email kamu" defaultValue={userData.email} disabled />
              </div>

              <div className="md:flex items-center">
                <Label htmlFor="phone_number" className="w-full md:w-1/2 xl:w-1/5">No. Telpon</Label>
                <Input type="text" name="phone_number" placeholder="Masukkan No. Telpon kamu" defaultValue={userData.phone_number || ""} />
              </div>
{/* 
              <div className="md:flex items-center">
              <Label htmlFor="name" className="w-full md:w-1/2 xl:w-1/5">Kata Sandi</Label>
              <InputPassword type="text" name="phone_number" placeholder="Masukkan No. Telpon kamu" defaultValue={userData.phone_number || ""} />
              </div> */}

              {/* <div className="md:flex items-center">
                <Label htmlFor="birth_date" className="w-full md:w-1/2 xl:w-1/5">Tanggal Lahir</Label>
                <DatePicker defaultValue={userData.birth_date || ""} />
              </div> */}
 
              <div className="md:flex items-center">
                <Label htmlFor="gender" className="w-full md:w-1/2 xl:w-1/5">Jenis Kelamin</Label>
                <RadioGroup className="w-full flex gap-4" name="gender" defaultValue={userData.gender || ""}>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Laki-Laki" id="Laki-Laki" />
                    <label htmlFor="Laki-Laki" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Laki-laki
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Perempuan" id="Perempuan" />
                    <label htmlFor="Perempuan" className="text-sm font-medium text-gray-700 cursor-pointer">
                      Perempuan
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <FormButton>
            <Button variant="primary" className="w-20">Simpan</Button>
          </FormButton>
          <Button variant="ghost" className="w-20" type="reset" >Batal</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
