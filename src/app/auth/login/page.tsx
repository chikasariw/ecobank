'use client';

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch lg:bg-eb-primary-green-700 ">
            <div className="radial-dots hidden lg:flex"></div>
            <div className="radial-green hidden lg:flex"></div>

            {/* left column */}
            <div className="hidden lg:flex flex-col items-center justify-center h-full lg:h-screen w-full lg:w-3/5 z-10">
                <Image
                    src="/logo/ecobank-logo-icon.svg"
                    alt="ecobank logo"
                    width={160}
                    height={100}
                    priority
                />
                <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[px] text-white mt-4">
                    EcoBank.
                </h2>
                <p className="text-sm mt-6 text-white text-center px-20 xl:px-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Cras consequat ex
                    semper nibh ornare elementum.
                </p>
            </div>

            {/* right column */}
            <div className="flex flex-col justify-center items-center px-6 lg:bg-card rounded-3xl lg:py-36 lg:px-24  w-full lg:w-2/5 m-5">
                <Image
                    className="flex lg:hidden my-10 "
                    src="/logo/ecobank-logo-icon.svg"
                    alt="ecobank logo"
                    width={100}
                    height={100}
                    priority
                />
                <form className="max-w-xl w-full">
                    <h4 className="text-eb-primary-gray-800 font-semibold text-2xl text-center lg:text-start">
                        Login
                    </h4>
                    <p className="text-xs text-eb-primary-gray-500 mt-3 mb-10 text-center lg:text-start">
                        Silakan masuk untuk mengakses fitur Cofika.  
                    </p>

                    <div className="space-y-4">
                        <div>
                            <label
                                htmlFor="nama"
                                className="block text-xs font-medium text-eb-primary-gray-600"
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
                                        className="block text-xs min-w-0 grow py-1.5 pl-1 pr-2 text-base text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-xs h-8"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="sandi"
                                className="block text-xs font-medium text-eb-primary-gray-600"
                            >
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
                                        className="block text-xs min-w-0 grow py-1.5 pl-1 pr-2 text-base text-eb-primary-gray-900 placeholder:text-eb-primary-gray-400 focus:outline-none sm:text-sm/6 placeholder:text-xs h-8"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePassword}
                                        className="absolute right-3 text-eb-primary-gray-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5" aria-label="show" />
                                        ) : (
                                            <Eye className="h-5 w-5" aria-label="hide" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className="w-full py-2.5 px-4 text-xs font-semibold rounded text-white rounded-3xl bg-eb-primary-green-700 hover:bg-eb-primary-green-800 focus:outline-none transition duration-200 ease-in-out">
                            Masuk
                        </button>
                    </div>

                    <div className="my-4 lg:mb-0 flex justify-center">
                        <p className="text-xs font-semibold text-eb-primary-gray-800 text-center">
                            Belum memiliki akun?{" "}
                            <a className="text-eb-primary-green-800" href="/auth/register">
                                Buat Akun{" "}
                            </a>
                        </p>
                    </div>

                </form>
            </div>

        </div>
    );
}


