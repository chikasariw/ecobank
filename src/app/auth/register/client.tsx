'use client';

import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import React, { useState } from "react";
import Image from "next/image";
import { registerAction, RegisterValidationErrors } from "@/app/auth/register/action";
import { Input } from '@/components/ui/inputauth';
import { InputPassword } from '@/components/ui/inputpassword';
import { Button } from '@/components/ui/button';
import FormButton from '@/components/ui/form-button';

export default function RegisterPage() {
    const router = useRouter();
    const [errors, setErrors] = useState<RegisterValidationErrors>({});
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setPassword(value);

        // Perbarui error konfirmasi password jika sudah ada
        if (confirmPassword && confirmPassword !== value) {
            setPasswordError("Konfirmasi kata sandi tidak cocok");
        } else {
            setPasswordError("");
        }
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setPasswordError(value !== password ? "Konfirmasi kata sandi tidak cocok" : "");
    };

    async function handleSubmit(formData: FormData) {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
    
        if (confirmPassword !== password) {
            setPasswordError("Konfirmasi kata sandi tidak cocok");
            return;
        }
    
        const result = await registerAction(name, email, password);
    
        if (result && "error" in result) {
            setErrors(result);
        } else if (result && "role" in result) { // Periksa apakah role ada
            const role = result.role;
            const redirectUrl = role === "Admin" ? "/admin/dashboard" : "/user/dashboard";
    
            toast("Selamat datang di EcoBank! 🎉🥳", {
                description: "Yuk lengkapi data dirimu!",
                duration: Infinity,
                action: {
                    label: "Verifikasi 👌",
                    onClick: () => {
                        router.push("/profile/edit");
                    }
                },
                cancel: {
                    label: "Nanti Aja",
                    onClick: () => {}
                }
            });
    
            router.replace(redirectUrl);
        }
    }
    
    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch bg-white sm:bg-eb-primary-green-700">
            <div className="radial-dots-right hidden lg:flex"></div>
            <div className="radial-green-right hidden lg:flex"></div>
            <div className="radial-green-md-right hidden md:flex lg:hidden"></div>
            {/* Kiri: Formulir Pendaftaran */}
            <div className="flex flex-1 flex-col justify-center items-center bg-white rounded-none sm:rounded-3xl p-10 md:px-24 lg:px-28 xl:px-28 xl:max-w-[50%] md:m-12 sm:m-5 xl:m-5 z-10">
                <Image
                    className="flex lg:hidden my-10 "
                    src="/logo/ecobank-logo-icon.svg"
                    alt="ecobank logo"
                    width={100}
                    height={100}
                    priority
                />
                <form action={handleSubmit} className="max-w-xl w-full">
                    <h4 className="text-eb-primary-gray-800 font-bold text-3xl text-center lg:text-start">
                        Buat Akun
                    </h4>
                    <p className="text-sm text-eb-primary-gray-500 mt-3 mb-10 text-center lg:text-start">
                        Masukkan data dirimu untuk bergabung dengan EcoBank.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <Input
                                type="name"
                                label="Name"
                                name="name"
                                placeholder="Masukkan Nama Anda"
                                error={!!errors.name}
                                errorMessage={errors.name || ""}
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                label="Email"
                                name="email"
                                placeholder="Masukkan Email Anda"
                                error={!!errors.email}
                                errorMessage={errors.email || ""}
                            />
                        </div>
                        <div>
                            <InputPassword
                                label="Password"
                                name="password"
                                placeholder="Masukkan Password Anda"
                                value={password}
                                onChange={handlePasswordChange}
                                error={!!errors.password || !!passwordError}
                                errorMessage={errors.password || passwordError}
                            />
                        </div>
                        <div>
                            <InputPassword
                                label="Konfirmasi Password"
                                name="confirmPassword"
                                placeholder="Masukkan Konfirmasi Password Anda"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                error={!!passwordError}
                                errorMessage={passwordError}
                            />
                        </div>
                    </div>

                    <div className="mt-8">
                        <FormButton>
                            <Button type="submit" variant="primary" className="w-full py-2.5 px-4 text-sm font-semibold text-white rounded-3xl bg-eb-primary-green-700 hover:bg-eb-primary-green-800 focus:outline-none transition duration-200 ease-in-out">
                                Register
                            </Button>
                        </FormButton>
                    </div>

                    <div className="my-4 lg:mb-0 flex justify-center">
                        <p className="text-sm font-semibold text-eb-primary-gray-800 text-center">
                            Sudah memiliki akun?{" "}
                            <a className="text-eb-primary-green-800" href="/auth/login">
                                Masuk{" "}
                            </a>
                        </p>
                    </div>
                </form>
            </div>

            {/* Kanan: Branding EcoBank */}
            <div className="hidden lg:flex flex-1 flex-col items-center justify-center text-white text-center w-1/2 px-40 z-10">
                <Image src="/logo/ecobank-logo-icon.svg" alt="EcoBank Logo" width={160} height={100} priority />
                <h2 className="text-4xl font-bold mt-4">EcoBank.</h2>
                <p className="text-sm mt-6">Tukar sampahmu dengan mudah melalui EcoBank. <br />Yuk, mulai aksi nyatamu hari ini!</p>
            </div>
        </div>
    );
}
