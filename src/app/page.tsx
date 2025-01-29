import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/ui/header";
import InfiniteScroll from "@/components/ui/infinite-carousel";
import Footer from "@/components/ui/footer";
import FAQ from "./faq";

export default function Home() {
  return (
    <main>
      <Header />

      {/* HERO */}
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-12">
        <div className="flex flex-1 flex-col justify-start">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Langkah kecil manfaat besar
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-6xl mt-4">
            Sampah
            <div
              className="text-6xl font-bold bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 bg-clip-text text-transparent py-2"
              style={{
                fontStyle: "oblique",
                fontVariationSettings: '"slnt" 4',
              }}
            >
              Anorganik?
            </div>
            Cofika Solusinya!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-md mt-12">
            Tukar, kelola, dan manfaatkan sampahmu dengan mudah melalui Cofika.
            Yuk, mulai aksi nyatamu hari ini!
          </h5>
          <Button
            className="w-44 mt-12 ps-4 py-4"
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
        <div className="flex flex-1 relative justify-end">
          <Image
            src="/content/hero-image.png"
            className=""
            alt="hero image"
            width={450}
            height={450}
          ></Image>
          <div className="absolute bottom-3 text-xs text-eb-primary-gray-700 w-40">
            <p>Jangan biarkan sampahmu terbuang percuma.</p>
          </div>
          <div className="absolute top-12 left-20 w-60 bg-white/60 px-6 py-4 rounded-3xl backdrop-blur-md">
            <h6 className="font-bold text-base text-eb-primary-gray-800 ">
              Solusi Anorganik
            </h6>
            <p className="text-xs text-eb-primary-gray-700 ">
              Platform untuk menjual sampah anorganik secara efisien.
            </p>
          </div>
        </div>
      </div>

      {/* BRAND */}
      <div className="flex flex-row bg-eb-primary-green-700 max-w-screen-auto items-center justify-center mx-auto my-4 lg:my-4">
        <div className="flex flex-1 relative items-center ">
          <InfiniteScroll />
        </div>
      </div>

      {/* ABOUT */}
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
        <div className="flex flex-1 relative items-center ">
          <Image
            src="/content/about-image.png"
            className=""
            alt="hero image"
            width={500}
            height={500}
          ></Image>
          <div className="absolute bottom-3 text-xs text-eb-primary-gray-700 w-40">
            <p>Jangan biarkan sampahmu terbuang sia-sia!</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-start">
          <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide">
            Sampahmu, untukmu!
          </h4>
          <h1 className="text-eb-primary-gray-800 font-bold text-4xl mt-2">
            Sampahmu Berharga, Yuk Tukarkan di Cofika!
          </h1>
          <h5 className="text-eb-primary-gray-600 text-base font-medium max-w-md mt-4">
            Dengan inovasi digital, Cofika bikin urusan sampah jadi lebih mudah!
            Tukarkan sampah anorganikmu jadi uang dan bersama-sama kita wujudkan
            lingkungan yang lebih bersih serta bermanfaat untuk semua.
          </h5>
          <Button
            className="w-44 mt-4 ps-4 py-4"
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
      <div className="flex flex-col max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
        <div className="flex flex-1 relative items-center ">
          <div className="flex flex-1 flex-col justify-center">
            <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide text-center">
              Fitur ecobank
            </h4>
            <h1 className="text-eb-primary-gray-800 font-bold text-4xl mt-2 text-center">
              Jual Sampah Jadi Lebih Praktis!
            </h1>
            <h5 className="text-eb-primary-gray-600 text-base font-medium text-center mt-4">
              Jual sampah anorganikmu dengan mudah lewat fitur-fitur digital
              Cofika.
            </h5>
          </div>
        </div>
        <div className="flex flex-1 relative items-center w-full mt-12">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="col-span-3 bg-eb-primary-green-900 px-6 py-4 rounded-3xl backdrop-blur-md py-6 px-6">
              <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                Data Katalog Produk
              </h4>
              <p className="text-base text-eb-primary-gray-600 mt-2">
                Upgrade to a modern cashier system that helps you streamline
                operations, enhance customer experience, and boost revenue with
                ease. boost revenue with ease.
              </p>
              <div className="bg-white/20 px-6 py-4 rounded-3xl backdrop-blur-md h-40 mt-4"></div>
            </div>
            <div className="col-span-2 bg-eb-primary-green-900 rounded-3xl backdrop-blur-md py-6 px-6">
              <h4 className="font-bold text-xl text-eb-primary-gray-800">
                Data Katalog Produk
              </h4>
              <p className="text-base text-eb-primary-gray-700 mt-2">
                Upgrade to a modern cashier system that helps you streamline
                operations, enhance customer experience, and boost revenue with
                ease. boost revenue with ease.
              </p>
              <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-md h-36 mt-4"></div>
            </div>
            <div className="col-span-2 bg-eb-primary-green-900  rounded-3xl backdrop-blur-md py-6 px-6">
              <h4 className="font-bold text-xl text-eb-primary-gray-800">
                Data Katalog Produk
              </h4>
              <p className="text-base text-eb-primary-gray-700 mt-2">
                Upgrade to a modern cashier system that helps you streamline
                operations, enhance customer experience, and boost revenue with
                ease. boost revenue with ease.
              </p>
              <div className="bg-white/20 px-6 py-4 rounded-2xl backdrop-blur-md h-36 mt-4"></div>
            </div>
            <div className="col-span-3 bg-eb-primary-green-900  px-6 py-4 rounded-3xl backdrop-blur-md py-6 px-6">
              <h4 className="font-bold text-xl text-eb-primary-gray-800 ">
                Data Katalog Produk
              </h4>
              <p className="text-base text-eb-primary-gray-600 mt-2">
                Upgrade to a modern cashier system that helps you streamline
                operations, enhance customer experience, and boost revenue with
                ease. boost revenue with ease.
              </p>
              <div className="bg-white/20 px-6 py-4 rounded-3xl backdrop-blur-md h-40 mt-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ 
      <div className="flex flex-col max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
        <div className="flex flex-1 relative items-center ">
          <div className="flex flex-1 flex-col justify-center">
            <h4 className="text-eb-primary-gray-600 text-sm font-medium uppercase tracking-wide text-center">
              Faq Ecobank
            </h4>
            <h1 className="text-eb-primary-gray-800 font-bold text-4xl mt-2 text-center">
              Ada pertanyaan? Kami Punya Jawabannya!
            </h1>
            <h5 className="text-eb-primary-gray-600 text-base font-medium text-center mt-4">
              Temukan jawaban cepat untuk pertanyaan umum tentang Cofika kami.
            </h5>
          </div>
        </div>
        <div className="flex flex-1 relative items-center w-full mt-12">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Bagaimana cara mulai jual sampah di Cofika?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Apakah ada jenis sampah tertentu yang tidak diterima di Cofika?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Berapa lama proses pembayaran setelah sampah dijual?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Apakah saya bisa melihat harga sampah sebelum menjualnya?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Apakah saya perlu memilah sampah sebelum dijual di Cofika?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
            <div className="flex flex-row bg-eb-primary-gray-100 border-2 border-eb-primary-gray-300 rounded-3xl px-6 py-4 items-center justify-between">
              <h5 className="font-semibold text-eb-primary-green-700">
                Apakah ada batas minimal jumlah sampah yang bisa dijual?
              </h5>
              <div className="flex h-8 w-8 items-center justify-center rounded-3xl bg-eb-primary-gray-200">
                <ChevronDown className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
        */}

      
      {/* FAQ */}
      <FAQ />
      

      {/* CTA */}
      <div className="flex flex-col max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
        <div className="flex items-center justify-center bg-eb-primary-green-800 rounded-3xl w-full py-20 relative overflow-hidden">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-eb-primary-gray-100 font-bold text-3xl mt-2 text-center">
              Cari Tahu Sampah yang Dapat Ditukar di Cofika
            </h1>
            <p className="max-w-xl text-eb-primary-gray-100 text-base font-regular text-center mt-4">
              Pelajari sampah yang dapat ditukar di Cofika dan cari tahu
              keuntungan yang bisa kamu peroleh!
            </p>
            <Button
              className="w-44 mt-4 ps-4 py-2"
              variant="secondarycustom"
              asChild
            >
              <Link href="">
                Mulai Sekarang
                <span className="flex h-8 w-8 ms-2 items-center justify-center rounded-3xl bg-white/50">
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
