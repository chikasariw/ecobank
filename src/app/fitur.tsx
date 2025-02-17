"use client";

import Image from "next/image";
import Link from "next/link";

export default function Fitur() {
  return (
    <div
      className="flex flex-col max-w-screen-xl items-center justify-center scroll-mt-[110px] mx-auto p-10 my-4 lg:my-12"
      id="fitur"
    >
      <div className="flex flex-1 relative items-center ">
        <div className="flex flex-1 flex-col justify-center">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide text-center">
            Fitur ecobank
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-3xl md:text-4xl text-center mt-2 ">
            Jual Sampah Jadi Lebih Praktis!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium text-center mt-4">
            Jual sampah anorganikmu dengan mudah lewat fitur-fitur digital
            EcoBank.
          </h5>
        </div>
      </div>
      <div className="flex flex-1 relative items-center w-full mt-12">
        <div className="grid lg:grid-cols-7 md:grid-cols-1 gap-4 w-full">
          <div className="col-span-4 relative bg-gradient-to-r from-eb-primary-gray-100 via-eb-primary-green-100 to-eb-primary-gray-200 rounded-3xl backdrop-blur-lg overflow-hidden">
            {/* Radial Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div className="radial-yellow-card w-full h-full"></div>
              <div className="radial-green-card w-full h-full"></div>
            </div>
            {/* Konten */}
            <div className="relative z-10">
              <div className="py-6 px-6">
                <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                  Dompet Digital Ecobank
                </h4>
                <p className="text-base text-eb-primary-gray-600 max-w-lg mt-2">
                  Dompet Digital yang menyimpan hasil penukaran sampah anorganik dengan aman dan praktis.
                </p>
              </div>
              <div className=" backdrop-blur-md h-52 overflow-hidden ">
                <Image
                  className="absolute -right-32 -bottom-2 md:-right-96 md:-bottom-28 rounded-sm "
                  src="/content/dashboard-user.png"
                  alt="Dashboard Warga Hijau"
                  width={980}
                  height={600}
                />
                <Image
                  className="absolute right-12 bottom-10 md:right-64 md:bottom-8 rounded-xl drop-shadow-[40px_10px_30px_rgba(0,0,0,0.20)]"
                  src="/content/card-uang.png"
                  alt="Dashboard Warga Hijau"
                  width={260}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-4 relative bg-gradient-to-r from-eb-primary-green-700 via-eb-primary-green-600 to-eb-primary-green-500 rounded-3xl backdrop-blur-md overflow-hidden">
            {/* Radial Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div className="radial-yellow-card-right w-full h-full"></div>
            </div>

            {/* Konten */}
            <div className="relative z-10">
              <div className="py-6 px-6">
                <h4 className="font-bold text-xl text-eb-primary-gray-200">
                  Data Sampah Yang Ditukar
                </h4>
                <p className="text-base text-eb-primary-gray-200 mt-2">
                Pantau total berat sampah anorganik yang telah dikumpulkan dan ditukarkan selama kamu menggunakan ECOBank.
                </p>
              </div>
              <div className=" backdrop-blur-md h-52 overflow-hidden ">
                <Image
                  className="absolute right-10 -bottom-6 md:right-60 lg:right-32 lg:-bottom-8 rounded-sm "
                  src="/content/chart-data sampah.png"
                  alt="Dashboard Warga Hijau"
                  width={280}
                  height={200}
                />
                <Image
                  className="absolute right-4 bottom-20 md:right-40 md:bottom-20 lg:right-14 lg:bottom-20 rounded-xl drop-shadow-[-10px_10px_20px_rgba(0,0,0,0.30)]"
                  src="/content/data sampah.png"
                  alt="Dashboard Warga Hijau"
                  width={160}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-4 relative bg-gradient-to-r from-eb-primary-green-700 via-eb-primary-green-600 to-eb-primary-green-500 rounded-3xl backdrop-blur-md overflow-hidden order-last lg:order-none">
            {/* Radial Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div className="radial-yellow-card-right w-full h-full"></div>
              <div className="radial-yellow-card w-full h-full"></div>
            </div>

            {/* Konten */}
            <div className="relative z-10">
              <div className="py-6 px-6">
                <h4 className="font-bold text-xl text-eb-primary-gray-200">
                  Data Barang Ecobank
                </h4>
                <p className="text-base text-eb-primary-gray-200 mt-2">
                Lihat kategori dan nilai sampah anorganik sebelum menukarkannya di ECOBank.
                </p>
              </div>
              <div className=" backdrop-blur-md h-56 overflow-hidden ">
                <Image
                  className="absolute -right-40 -bottom-2 md:-right-60 md:-bottom-28 lg:-bottom-10 rounded-lg "
                  src="/content/data barang.png"
                  alt="Dashboard Warga Hijau"
                  width={900}
                  height={600}
                />
                <Image
                  className="absolute right-32 bottom-12 md:right-96 lg:right-60 md:bottom-6 rounded-xl drop-shadow-[10px_10px_20px_rgba(0,0,0,0.30)]"
                  src="/content/card botol.png"
                  alt="Dashboard Warga Hijau"
                  width={160}
                  height={100}
                />
              </div>
            </div>
          </div>

          <div className="col-span-4 relative bg-gradient-to-r from-eb-primary-gray-100 via-eb-primary-green-100 to-eb-primary-gray-100 rounded-3xl backdrop-blur-md overflow-hidden">
            {/* Radial Background */}
            <div className="absolute inset-0 w-full h-full z-0">
              <div className="radial-green-card-right w-full h-full"></div>
              <div className="radial-yellow-card w-full h-full"></div>
            </div>

            {/* Konten */}
            <div className="relative z-10">
              <div className=" py-6 px-6">
                <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                  Riwayat Penukaran
                </h4>
                <p className="text-base text-eb-primary-gray-600 max-w-lg mt-2">
                Lihat kembali jejak penukaran sampah dan jumlah saldo yang telah kamu kumpulkan.
                </p>
              </div>
              <div className=" backdrop-blur-md h-56 overflow-hidden ">
                <Image
                  className="absolute right-0 -bottom-4 md:right-10 md:-bottom-16 rounded-lg "
                  src="/content/riwayat-transaksi.png"
                  alt="Dashboard Warga Hijau"
                  width={600}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
