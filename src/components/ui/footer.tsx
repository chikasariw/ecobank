import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" border-t-2 border-eb-primary-gray-200">
      <div className="flex flex-col max-w-screen-xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          <div className="col-start-1 row-start-1 col-span-4 md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            <a href="#">
              <Image
                src="/logo/ecobank-logo.svg"
                alt="Cofika Logo"
                width={150}
                height={150}
              />
            </a>

            <p className="text-eb-primary-gray-600 max-w-sm">
              Jangan biarkan sampah menumpuk dan jadi masalah! Segera tukarkan
              di EcoBank dan dapatkan manfaatnya.
            </p>
          </div>

          <div className="flex flex-col col-span-4 lg:col-span-1 gap-5">
            <p className="font-black mb-2">Menu EcoBank</p>

            {["Beranda", "Tentang Kami", "Fitur", "FAQ"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm text-eb-primary-gray-600 hover:text-eb-primary-green-800 flex flex-col gap-2"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col col-span-4 lg:col-span-1 gap-5 ">
            <p className="font-black">Lokasi EcoBank</p>

            <div className="text-sm flex flex-col gap-3">
              <p className="flex text-eb-primary-gray-600 gap-2 mt-2">
                {/* <span className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-green-600">
                  <MapPin className="text-eb-primary-green-100 h-5 w-5" />
                </span> */}
                Jl. Tanimbar No.22, Kasin, Kec. Klojen, Kota Malang, Jawa Timur
                65117
              </p>
              <div className="flex items-center text-eb-primary-gray-600 gap-2 mt-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                  <Link href={"mailto:hello.ecobank@gmail.com"}>
                    <Mail className="text-eb-primary-green-800 h-4 w-4" />
                  </Link>
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                  <Link
                    href={"https://www.instagram.com/hello.ecobank/"}
                    target="_blank"
                  >
                    <Instagram className="text-eb-primary-green-800 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        <div className="py-8 text-center text-eb-primary-gray-600">
          © 2025 EcoBank (Bank Sampah)
        </div>
      </div>
    </footer>
  );
}
