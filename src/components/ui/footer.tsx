import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <footer className=" border-t-2 border-eb-primary-gray-200">
      <div className="flex flex-col max-w-screen-xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
          <div className="col-start-1 row-start-1 col-span-4 md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo/ecobank-logo.svg"
                alt="Cofika Logo"
                width={150}
                height={150}
              />
            </Link>

            <p className="text-eb-primary-gray-600 max-w-md">
              Let technology do the heavy lifting! Automate your sales processes
              and focus on what truly matters—growing your business.
            </p>
          </div>

          <div className="flex flex-col col-span-4 lg:col-span-1 gap-5">
            <p className="font-black">Menu Ecobank</p>

            <div className="text-sm text-eb-primary-gray-600 flex flex-col gap-3">
              <Link href={"/paket-belajar"}>Beranda</Link>
              <Link href={"/try-out"}>Tentang Ecobank</Link>
              <Link href={"/diskusi"}>Fitur</Link>
              <Link href={"/catatan"}>FAQ</Link>
            </div>
          </div>

          <div className="flex flex-col col-span-4 lg:col-span-1 gap-5 ">
            <p className="font-black">Ikuti Kami</p>

            <div className="text-sm text-eb-primary-gray-600 flex flex-col gap-3">
              <p>Jangan Ketinggalan! </p>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-8 text-center text-eb-primary-gray-600">© 2025 EcoBank (Bank Sampah)</div>
      </div>
    </footer>
  );
}
