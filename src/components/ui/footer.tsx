import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className="bg-background border-t-2">
      <div className="flex flex-col max-w-screen-xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-10">
          <div className="col-start-1 row-start-1 lg:col-span-3 flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo/ecobank-logo.svg"
                alt="Cofika Logo"
                width={150}
                height={150}
              />
            </Link>

            <p className="text-eb-primary-gray-600 max-w-80">
                Let technology do the heavy lifting! Automate your sales processes and focus 
                on what truly matters—growing your business.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <p className="font-black">Menu Ecobank</p>

            <div className="text-sm text-eb-primary-gray-600 flex flex-col gap-3">
              <Link href={"/paket-belajar"}>Beranda</Link>
              <Link href={"/try-out"}>Tentang Ecobank</Link>
              <Link href={"/diskusi"}>Fitur</Link>
              <Link href={"/catatan"}>FAQ</Link>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:row-start-1 md:col-start-0 lg:col-auto lg:row-start-auto">
            <p className="font-black">Ikuti Kami</p>

            <div className="text-sm text-eb-primary-gray-600 flex flex-col gap-3">
              <p>Jangan Ketinggalan! Lihat Serunya MejaKita di Sini</p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-8 text-center">
          © 2016 - 2024 PT MejaKita Edunusa Mandiri
        </div>
      </div>
    </footer>
  );
}
