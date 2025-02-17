export function WelcomeSection() {
  return (
    <div
  className="w-full lg:w-2/3 h-58 relative overflow-hidden rounded-3xl bg-eb-primary-green-100 p-5 mb-3 bg-cover bg-center"
  style={{ backgroundImage: "url('/content/bg-nature.jpg')" }}
>

      {/* Wrapper untuk teks dengan backdrop-filter */}
      <div className="relative z-10 p-6 rounded-2xl w-fit">
        <h1 className="text-2xl font-bold text-white">Hai Park Jisungg!</h1>
        <p className="mt-2 text-md text-white">
          Kelola transaksi dan pantau penjualan sampah anorganik secara efisien di platform ini
        </p>
      </div>
    </div>
  );
}
