"use client";

interface User {
  name: string;
  email: string;
  profile_url?: string;
}

export default function WelcomeSection({ user }: { user: User | null }) {
  return (
    <div
      className="w-full lg:w-2/3 h-56 relative overflow-hidden rounded-3xl bg-eb-primary-green-100 p-5 mb-3 bg-cover bg-center"
      style={{ backgroundImage: "url('/content/bg-nature.jpg')" }}
    >
      <div className="relative z-10 px-6 pt-5 rounded-2xl w-fit">
        <h1 className="text-xl font-bold text-white">
          Hai {user?.name || "Guest User"}!
        </h1>
        <p className="mt-2 text-md text-white max-w-2xl">
          Ubah sampah anorganik jadi cuan! Pantau transaksimu langsung di Ecobank.
        </p>
      </div>
    </div>
  );
}
