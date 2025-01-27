import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center mx-auto p-10 my-4 lg:my-24">
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
          <Button className="w-44 mt-12" variant="primary" asChild>
            <Link href="">
              Mulai Sekarang
              <span className="flex h-8 w-8 ms-2 items-center justify-center rounded-3xl bg-white/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7l7 7-7 7"
                  />
                </svg>
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
          <div className="absolute top-12 left-20 w-60 bg-eb-primary-yellow-100 px-6 py-4 rounded-3xl backdrop-blur-sm">
            <h6 className="font-bold text-base text-eb-primary-gray-800 ">
              Solusi Anorganik
            </h6>
            <p className="text-xs text-eb-primary-gray-700 ">
              Platform untuk menjual sampah anorganik secara efisien.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
