'use client';

import { useState } from "react";
import Image from "next/image";
import { Eye, EyeOff } from 'lucide-react';
export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-stretch lg:bg-primary300 ">
            <div className="radial-dots hidden lg:flex"></div>
            <div className="radial-green-right hidden lg:flex"></div>
            {/* left column */}
            <div className="flex flex-col justify-center items-center w-full lg:w-1/2">
                <div className="flex flex-col justify-center items-center w-3/4 lg:bg-card rounded-3xl lg:py-24 lg:px-16">

                    <Image
                        className="flex lg:hidden my-20 mb-10 "
                        src="/logo/ecobank-logo-icon.svg"
                        alt="ecobank logo"
                        width={100}
                        height={100}
                        priority
                    />
                    <form className="max-w-xl w-full">
                        <h3 className="text-gray800 font-semibold text-3xl text-center lg:text-start">
                            Register
                        </h3>
                        <p className="text-sm text-gray500 mt-3 mb-10 text-center lg:text-start">
                        Masukkan data dirimu untuk bergabung dengan EcoBank.  
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="email"
                                    typeof="email"
                                    className="block text-sm/6 font-medium text-gray600"
                                >
                                    Email
                                </label>
                                <div className="mt-2">
                                    <div className="flex items-center rounded-xl bg-white pl-3 outline outline-1 outline-gray300 focus-within:outline-2 focus-within:outline-primary200">
                                        <input
                                            required
                                            id="email"
                                            name="email"
                                            type="text"
                                            placeholder="Masukkan Emailmu"
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray900 placeholder:text-gray400 focus:outline-none sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label
                                    htmlFor="sandi"
                                    className="block text-sm/6 font-medium text-gray600"
                                >
                                    Kata Sandi
                                </label>
                                <div className="mt-2 relative">
                                    <div className="flex items-center rounded-xl bg-white pl-3 outline outline-1 outline-gray300 focus-within:outline-2 focus-within:outline-primary200">
                                        <input
                                            required
                                            id="sandi"
                                            name="sandi"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Masukkan Kata Sandi"
                                            className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray900 placeholder:text-gray400 focus:outline-none sm:text-sm/6"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePassword}
                                            className="absolute right-3 text-gray600"
                                        >
                                            {showPassword ? (
                                            <EyeOff aria-label="show"/>
                                            ) : (
                                            <Eye aria-label="hide"  />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 accent-primary300 focus:ring-primaccent-primary300 border-gray300 rounded-xl"
                                    />
                                    <label className="ml-3 block text-sm text-gray800">
                                        Ingat Saya
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button type="button" className="w-full py-2.5 px-4 text-sm font-semibold rounded text-white rounded-3xl bg-primary300 hover:bg-primary400 focus:outline-none transition duration-200 ease-in-out">
                                Register
                            </button>
                        </div>

                        <div className="my-4 flex justify-center">
                            <p className="text-sm font-semibold text-gray800 text-center">
                                Sudah memiliki akun?{" "}
                                <a className="text-primary300" href="/auth/login">
                                    Masuk{" "}
                                </a>
                            </p>
                        </div>

                    </form>
                </div>
            </div>
            

            {/* right column */}
            <div className="hidden lg:flex flex-col items-center justify-center h-full lg:h-screen w-full lg:w-1/2 z-10">
                <Image
                    src="/logo/ecobank-logo-icon.svg"
                    alt="ecobank logo"
                    width={200}
                    height={100}
                    priority
                />
                <h2 className="lg:text-5xl text-3xl font-bold lg:leading-[px] text-white mt-4">
                    EcoBank.
                </h2>
                <p className="text-sm mt-6 text-white text-center px-20 xl:px-40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat ex
                    semper nibh ornare elementum.
                </p>
            </div>
        </div>
    );
}


