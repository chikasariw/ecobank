import Image from "next/image";

export default function InfiniteScroll() {
  return (
    <div className="overflow-hidden bg-eb-primary-green-600 py-4">
      <div className="flex space-x-14 animate-scroll">
        {[...Array(20)].map((_, index) => (
          <div key={`second-${index}`} className="flex items-center space-x-4">
            <Image
              src="/logo/ecobank-logo.svg" // Ganti dengan path logo Anda
              alt="Logo"
              width={150}
              height={50}
            />
            <Image
              src="/content/star.svg"
              alt="ecobank logo"
              width={20}
              height={20}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
}
