import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/ui/header";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import Footer from "@/components/ui/footer";
import FAQ from "./faq";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />

      {/* HERO */}
      <div
        className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center scroll-mt-[100px] mx-auto px-10 pt-24 pb-10 my-4 lg:my-10 "
        id="beranda"
      >
        <div className="flex-1 w-full items-start justify-start" id="beranda">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Langkah kecil manfaat besar
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-4xl md:text-6xl mt-2 md:mt-4">
            Sampah
            <div
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 bg-clip-text text-transparent py-1 md:py-2"
              style={{
                fontStyle: "oblique",
                fontVariationSettings: '"slnt" 4',
              }}
            >
              Anorganik?
            </div>
            EcoBank Solusinya!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-md mt-6 md:mt-12">
            Tukar, kelola, dan manfaatkan sampahmu dengan mudah melalui EcoBank.
            Yuk, mulai aksi nyatamu hari ini!
          </h5>
          <Button
            className="w-44 mt-6 md:mt-12 ps-4 py-4"
            variant="primarycustom"
            asChild
          >
            <Link href="">
              Mulai Sekarang
              <span className="flex h-8 w-8 ms-2 items-center justify-center rounded-3xl bg-white/20">
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex flex-1 w-full relative justify-end pt-10 md:pt-10 lg:pt-0">
          <Image
            src="/content/hero-image.png"
            className="w-full max-w-xs md:max-w-md lg:max-w-md h-auto flex justify-end"
            alt="hero image"
            width={450}
            height={450}
          />

          <div className="absolute -right-4 md:-right-0  bottom-1 md:bottom-3 text-[10px] md:text-xs text-eb-primary-gray-700 w-32 md:w-40">
            <p>Jangan biarkan sampahmu terbuang percuma.</p>
          </div>
          <div className="absolute w-52 md:w-60 bg-white/60 px-6 py-4 rounded-3xl backdrop-blur-md top-20 md:top-20 lg:top-12 -left-3 md:left-40 lg:left-20">
            <h6 className="font-bold text-md md:text-base text-eb-primary-gray-800 ">
              Solusi Anorganik
            </h6>
            <p className="text-[10px] md:text-xs text-eb-primary-gray-700 ">
              Platform untuk menjual sampah anorganik secara efisien.
            </p>
          </div>
        </div>
      </div>

      {/* BRAND */}
      <div className="flex flex-row max-w-screen-auto items-center justify-center mx-auto my-4 ">
        <div className="flex flex-1 relative items-center overflow-hidden">
          <InfiniteScroll />
        </div>
      </div>

      {/* ABOUT */}
      <div
        className="flex flex-col-reverse lg:flex-row max-w-screen-xl items-center justify-center scroll-mt-[120px] mx-auto p-10 my-4 lg:my-12"
        id="tentang-kami"
      >
        <div className="flex flex-1 w-full relative items-center md:items-end md:justify-end lg:justify-start pt-10 md:pt-10 lg:pt-0">
          <Image
            src="/content/about-image.png"
            className=""
            alt="hero image"
            width={500}
            height={500}
          ></Image>
          <div className="absolute bottom-0 md:bottom-3 lg:left-0 md:left-48 text-[10px] md:text-xs text-eb-primary-gray-700 w-28 md:w-40">
            <p>Jangan biarkan sampahmu terbuang sia-sia!</p>
          </div>
        </div>
        <div className="flex flex-1 w-full flex-col justify-start">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Sampahmu, untukmu!
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-3xl md:text-4xl max-w-md mt-2">
            Sampahmu Berharga, Yuk Tukarkan di EcoBank!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-md mt-3 md:mt-4">
            Dengan inovasi digital, EcoBank bikin urusan sampah jadi lebih
            mudah! Tukarkan sampah anorganikmu jadi uang dan bersama-sama kita
            wujudkan lingkungan yang lebih bersih serta bermanfaat untuk semua.
          </h5>
          <Button
            className="w-44 mt-5 ps-4 py-4"
            variant="primarycustom"
            asChild
          >
            <Link href="">
              Mulai Sekarang
              <span className="flex h-8 w-8 ms-2 items-center justify-center rounded-3xl bg-white/20">
                <ArrowUpRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>

      {/* FITUR */}
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
            <div className="col-span-4 relative bg-gradient-to-r from-eb-primary-gray-200 via-eb-primary-green-100 to-eb-primary-gray-200 rounded-3xl backdrop-blur-lg overflow-hidden py-6 px-6 ">
              {/* Konten */}
              <div className="relative z-10">
                <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                  Data Katalog Produk
                </h4>
                <p className="text-base text-eb-primary-gray-600 mt-2">
                  Upgrade to a modern cashier system that helps you streamline
                  operations, enhance customer experience, and boost revenue
                  with ease. boost revenue with ease.
                </p>
                <div className="bg-white/20 px-6 py-4 rounded-3xl backdrop-blur-md h-40 mt-4"></div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-4 relative bg-gradient-to-r from-eb-primary-green-700 via-eb-primary-green-600 to-eb-primary-green-500 rounded-3xl backdrop-blur-md overflow-hidden py-6 px-6">
              {/* Radial Background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <div className="radial-yellow-card-right w-full h-full"></div>
              </div>

              {/* Konten */}
              <div className="relative z-10">
                <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-md h-36"></div>
                <h4 className="font-bold text-xl text-eb-primary-gray-200 mt-4">
                  Data Katalog Produk
                </h4>
                <p className="text-base text-eb-primary-gray-200 mt-2">
                  Upgrade to a modern cashier system that helps you streamline
                  operations, enhance customer experience, and boost revenue
                  with ease.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 col-span-4 relative bg-gradient-to-r from-eb-primary-green-700 via-eb-primary-green-600 to-eb-primary-green-500 rounded-3xl backdrop-blur-md py-6 px-6 overflow-hidden order-last lg:order-none">
              {/* Radial Background */}
              <div className="absolute inset-0 w-full h-full z-0">
                <div className="radial-yellow-card-right w-full h-full"></div>
                <div className="radial-yellow-card w-full h-full"></div>
              </div>

              {/* Konten */}
              <div className="relative z-10">
                <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-md h-36"></div>
                <h4 className="font-bold text-xl text-eb-primary-gray-200 mt-4">
                  Data Katalog Produk
                </h4>
                <p className="text-base text-eb-primary-gray-200 mt-2">
                  Upgrade to a modern cashier system that helps you streamline
                  operations, enhance customer experience, and boost revenue
                  with ease.
                </p>
              </div>
            </div>

            <div className="col-span-4 relative bg-gradient-to-r from-eb-primary-green-100 via-eb-primary-gray-100 to-eb-primary-green-100 rounded-3xl backdrop-blur-md overflow-hidden py-6 px-6">
              {/* Radial Background */}
              {/* <div className="absolute inset-0 w-full h-full z-0">
                <div className="radial-green-card w-full h-full"></div>
                <div className="radial-yellow-card w-full h-full"></div>
              </div> */}

              {/* Konten */}
              <div className="relative z-10">
                <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                  Data Katalog Produk
                </h4>
                <p className="text-base text-eb-primary-gray-600 mt-2">
                  Upgrade to a modern cashier system that helps you streamline
                  operations, enhance customer experience, and boost revenue
                  with ease. boost revenue with ease.
                </p>
                <div className="bg-white/20 px-6 py-4 rounded-3xl backdrop-blur-md h-40 mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <div className="flex flex-col max-w-screen-xl items-center justify-center scroll-mt-[120px] mx-auto p-10 my-4 lg:my-12">
        <div className="flex items-center justify-center bg-eb-primary-green-800 rounded-3xl w-full px-9 py-20 relative overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-eb-primary-gray-100 font-bold text-2xl md:text-3xl text-center tracking-wide max-w-xs md:max-w-md z-10">
              Cari Tahu Sampah yang Dapat Ditukar di EcoBank
            </h1>
            <p className="max-w-xs md:max-w-md lg:max-w-lg text-eb-primary-gray-100 text-base font-regular text-center mt-3 md:mt-5 z-10">
              Pelajari sampah yang dapat ditukar di EcoBank dan cari tahu
              keuntungan yang bisa kamu peroleh!
            </p>
            <Button
              className="w-44 mt-4 ps-4 py-4 z-10"
              variant="secondarycustom"
              asChild
            >
              <Link href="">
                Mulai Sekarang
                <span className="flex h-8 w-8 ms-2 items-center justify-center rounded-3xl bg-white/20">
                  <ArrowUpRight />
                </span>
              </Link>
            </Button>
          </div>
          <div className="absolute inset-0">
            <div className="radial-green-cta"></div>
            <div className="radial-green-right-cta "></div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
