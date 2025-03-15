"use client"
import React, { useState } from 'react'

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProfileImage({ defaultValue }: { defaultValue: string }) {
    const [imageSrc, setImageSrc] = useState<string>(defaultValue);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => setImageSrc(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        fileInputRef.current?.click();
    };

    return (
        <div className="flex justify-center lg:block">
            <div className="relative w-3/4 sm:w-1/3 md:w-1/2 lg:w-full aspect-square overflow-hidden rounded-lg border bg-muted">
            <Image 
                    src={imageSrc} 
                    alt="Thumbnail" 
                    width={500} 
                    height={500} 
                    unoptimized
                    className="cursor-pointer rounded-lg object-cover"
                />
                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-2"
                    type="button"
                    onClick={handleButtonClick}
                >
                    <Pencil />
                </Button>
                <input
                    type="file"
                    accept="image/jpeg, image/png, image/jpg"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleImageUpload}
                />
            </div>
        </div>
    );
}

