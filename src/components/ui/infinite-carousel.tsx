// components/InfiniteScroll.js
import Image from "next/image";

export default function InfiniteScroll() {
  return (
    <div className="overflow-hidden  py-4">
      <div className="flex space-x-8 animate-scroll">
        {/* Container pertama */}
        {[...Array(10)].map((_, index) => (
          <div key={`first-${index}`} className="flex items-center space-x-4">
            <Image
              src="/logo/ecobank-logo.svg" // Ganti dengan path logo Anda
              alt="Logo"
              width={400}
              height={40}
            />
            <Image
              src="/content/star.svg"
              alt="ecobank logo"
              width={25}
              height={25}
              priority
            />
          </div>
        ))}
        {/* Container kedua (duplikat) */}
        {[...Array(10)].map((_, index) => (
          <div key={`second-${index}`} className="flex items-center space-x-4">
            <Image
              src="/logo/ecobank-logo.svg" // Ganti dengan path logo Anda
              alt="Logo"
              width={800}
              height={400}
            />
            <Image
              src="/content/star.svg"
              alt="ecobank logo"
              width={25}
              height={25}
              priority
            />
          </div>
        ))}
        
      </div>
    </div>
  );
}
