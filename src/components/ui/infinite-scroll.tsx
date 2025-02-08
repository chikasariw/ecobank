import Image from "next/image";

export default function InfiniteScroll() {
  return (
    <div className="bg-eb-primary-green-700 py-4">
      <div className="flex gap-14 lg:gap-13 animate-scroll">
        {[...Array(20)].map((_, index) => (
          <div key={`second-${index}`} className="flex items-center gap-4 lg:gap-3">
            <Image
              src="/logo/ecobank-logo-mono.svg" 
              alt="Logo"
              width={180}
              height={100}
            />
            <Image
              src="/content/Subtract.svg"
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
