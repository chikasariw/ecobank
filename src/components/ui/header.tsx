import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2 border-eb-primary-gray-100">
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
            className="text-eb-primary-green-700 font-semibold"
          >
            Beranda
          </a>
          <a
            href="#tentang-kami"
            className="text-base text-eb-primary-gray-700 font-medium"
          >
            Tentang Kami
          </a>
          <a href="#fitur" className="text-eb-primary-gray-700 font-medium">
            Fitur
          </a>
          <a href="#faq" className="text-eb-primary-gray-700 font-medium">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button className="w-auto px-6 py-2" variant="primarycustom" asChild>
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
