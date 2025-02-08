"use client";

import { useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/ecobank-logo.svg"
            alt="Ecobank Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {["Beranda", "Tentang Kami", "Fitur", "FAQ"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-base font-medium text-eb-primary-gray-700 hover:text-eb-primary-green-700"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex space-x-2 ">
          <Button className="w-auto px-6 py-2" variant="default" asChild>
            <Link href="auth/login">Daftar</Link>
          </Button>
          <Button className="w-auto px-6 py-2" variant="primary" asChild>
            <Link href="auth/register">Masuk</Link>
          </Button>
        </div>

        {/* Mobile Hamburger Menu */}

        <button
          className="lg:hidden p-2 rounded-md focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4 px-6 space-y-4 z-50">
            <nav className="flex flex-col space-y-6">
              {["Beranda", "Tentang Kami", "Fitur", "FAQ"].map(
                (item, index) => (
                  <a
                    key={index}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-base text-center font-medium text-eb-primary-gray-700 hover:font-semibold hover:text-eb-primary-green-700"
                    onClick={toggleMenu}
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
            <div className="flex flex-row items-center justify-center gap-2 pt-6 pb-4">
              <Button className="w-28" variant="default" asChild>
                <Link href="auth/login">Daftar</Link>
              </Button>
              <Button className="w-28" variant="primary" asChild>
                <Link href="auth/register">Masuk</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
