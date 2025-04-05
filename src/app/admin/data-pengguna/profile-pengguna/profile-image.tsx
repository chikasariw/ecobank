"use client";
import React, { useState } from "react";
import Image from "next/image";

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
    <div className="flex justify-center">
      <div className="relative w-2/3 sm:w-2/3 md:w-1/3 lg:1/5 lg:w-full aspect-square overflow-hidden rounded-lg border bg-muted">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt="Profile picture"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image
            src="/content/profile-jisung.jpg"
            alt="Profile picture"
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <button
        onClick={handleButtonClick}
        className="mt-3 p-2 bg-blue-500 text-white rounded"
      >
        Ganti Foto Profil
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageUpload}
        className="hidden"
        accept="image/*"
      />
    </div>
  );
}
