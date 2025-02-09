'use client';

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const togglePassword = () => setShowPassword(!showPassword);
    const togglePasswordConfirm = () => setShowPasswordConfirm(!showPasswordConfirm);

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setPasswordError(value !== password ? "Konfirmasi kata sandi tidak cocok" : "");
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch bg-white sm:bg-eb-primary-green-700">
            <div className="radial-dots-right hidden lg:flex"></div>
            <div className="radial-green-right hidden lg:flex"></div>
            <div className="radial-green-right-md hidden md:flex lg:hidden"></div>
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
                <form className="max-w-xl w-full">
                    <h4 className="text-eb-primary-gray-800 font-bold text-3xl text-center lg:text-start">
                        Buat Akun
                    </h4>
                    <p className="text-sm text-eb-primary-gray-500 mt-3 mb-10 text-center lg:text-start">
                        Masukkan data dirimu untuk bergabung dengan EcoBank.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="nama"
                                className="block text-sm font-medium text-eb-primary-gray-700"
                            >
                                Nama
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                                    <input
                                        required
                                        id="nama"
                                        name="nama"
                                        type="text"
                                        placeholder="Masukkan Namamu"
                                        className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                typeof="email"
                                className="block text-sm font-medium text-eb-primary-gray-700"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                                    <input
                                        required
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Masukkan Emailmu"
                                        className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <label
                                htmlFor="nomortelepon"
                                className="block text-sm font-medium text-eb-primary-gray-700"
                            >
                                Nomor Telepon
                            </label>
                            <div className="mt-2">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                                    <input
                                        required
                                        id="nomortelepon"
                                        name="nomortelepon"
                                        type="number"
                                        placeholder="Masukkan nomorteleponmu"
                                        className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                                    />
                                </div>
                            </div>
                        </div> */}
                        <div>
                            <label htmlFor="sandi" className="block text-sm font-medium text-eb-primary-gray-700">
                                Kata Sandi
                            </label>
                            <div className="mt-2 relative">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                                    <input
                                        required
                                        id="sandi"
                                        name="sandi"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Masukkan Kata Sandi"
                                        className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button type="button" onClick={togglePassword} className="absolute right-3 text-eb-primary-gray-600">
                                        {showPassword ? <EyeOff className="h-5 w-5" aria-label="show" /> : <Eye className="h-5 w-5" aria-label="hide" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="konfirmasiSandi" className="block text-sm font-medium text-eb-primary-gray-700">
                                Konfirmasi Kata Sandi
                            </label>
                            <div className="mt-2 relative">
                                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1  outline-eb-primary-gray-400 focus-within:outline-2 focus-within:outline-eb-primary-ygreen-500">
                                    <input
                                        required
                                        id="konfirmasiSandi"
                                        name="konfirmasiSandi"
                                        type={showPasswordConfirm ? "text" : "password"}
                                        placeholder="Konfirmasi Kata Sandi"
                                        className="block text-sm min-w-0 grow py-1.5 pl-1 pr-2 text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-sm h-9"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <button type="button" onClick={togglePasswordConfirm} className="absolute right-3 text-eb-primary-gray-600">
                                        {showPasswordConfirm ? <EyeOff className="h-5 w-5" aria-label="show" /> : <Eye className="h-5 w-5" aria-label="hide" />}
                                    </button>
                                </div>
                                {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="w-full py-2.5 px-4 text-sm font-semibold text-white rounded-3xl bg-eb-primary-green-700 hover:bg-eb-primary-green-800 focus:outline-none transition duration-200 ease-in-out">
                            Daftar
                        </button>
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