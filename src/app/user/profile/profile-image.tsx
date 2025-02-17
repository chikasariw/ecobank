"use client"
import React, { useState } from 'react'

import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfileImage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null); 
    const fileInputRef = React.useRef<HTMLInputElement>(null); 

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result as string); 
            };
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
                {imageSrc ? (
                    <img
                        src={imageSrc} 
                        alt="Profile picture"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <img
                        src="/content/profile-jisung.jpg" 
                        alt="Profile picture"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover"
                    />
                )}
                
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
    )
}
