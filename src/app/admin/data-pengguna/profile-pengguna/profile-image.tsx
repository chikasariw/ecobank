"use client";
import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  imagesrc?: string | null;
}

export default function ProfileImage({ imagesrc }: ProfileImageProps) {
  const fallbackImage = "/content/profile-default.png";
  const imageToDisplay = imagesrc || fallbackImage;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="relative w-48 h-48 md:w-60 md:h-60 overflow-hidden rounded-full border bg-muted shadow-md">
        {isLoading && (
          <div className="absolute inset-0 animate-pulse bg-gray-200 rounded-full" />
        )}
        <Image
          src={imageToDisplay}
          alt="Foto Profil"
          fill
          onLoadingComplete={() => setIsLoading(false)}
          className="object-contain transition-opacity duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}
