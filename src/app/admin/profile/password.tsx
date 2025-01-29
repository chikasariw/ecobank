"use client";
import * as React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Pencil } from "lucide-react";

export default function Password() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="relative w-full">
            <div className="flex items-center">
                <Input
                    id="sandi"
                    name="sandi"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan Kata Sandi"
                />
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute right-3 text-eb-primary-gray-600"
                >
                    {showPassword ? (
                        <EyeOff aria-label="show" />
                    ) : (
                        <Eye aria-label="hide" />
                    )}
                </button>
            </div>
        </div>
    )

}