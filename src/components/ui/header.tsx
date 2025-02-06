"use client";

import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/ecobank-logo.svg"
            alt="Cofika Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="#beranda"
            className={`text-base font-medium ${
              activeLink === "beranda"
                ? "text-eb-primary-green-700 font-semibold"
                : "text-eb-primary-gray-700"
            }`}
            onClick={() => handleClick("beranda")}
          >
            Beranda
          </a>
          <a
            href="#tentang-kami"
            className={`text-base font-medium ${
              activeLink === "tentang-kami"
                ? "text-eb-primary-green-700 font-semibold"
                : "text-eb-primary-gray-700"
            }`}
            onClick={() => handleClick("tentang-kami")}
          >
            Tentang Kami
          </a>
          <a
            href="#fitur"
            className={`text-base font-medium ${
              activeLink === "fitur"
                ? "text-eb-primary-green-700 font-semibold"
                : "text-eb-primary-gray-700"
            }`}
            onClick={() => handleClick("fitur")}
          >
            Fitur
          </a>
          <a
            href="#faq"
            className={`text-base font-medium ${
              activeLink === "faq"
                ? "text-eb-primary-green-700 font-semibold"
                : "text-eb-primary-gray-700"
            }`}
            onClick={() => handleClick("faq")}
          >
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-2">
          <Button className="w-auto px-6 py-2" variant="default" asChild>
            <Link href="">Daftar</Link>
          </Button>
          <Button className="w-auto px-6 py-2" variant="primary" asChild>
            <Link href="">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
