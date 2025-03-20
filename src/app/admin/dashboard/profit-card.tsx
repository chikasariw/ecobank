"use client";

export function ProfitCard({ balance }: { balance: number | null }) {  
  return (
    <div className="relative w-full lg:w-1/3 overflow-hidden rounded-3xl bg-white p-6 text-black mb-3">
      <div className="">
        <div className="radial-yellow-card"></div>
        <div className="radial-yellow-card-right"></div>
      </div>

      <div className="space-y-1">
        <h2 className="text-md font-medium text-black">
          Total Keuntungan
        </h2>
        <p className="text-xs text-black">
          Saldo yang sudah ditukarkan pengguna
        </p>
      </div>
      <div className="text-4xl font-bold mt-6 mb-8">
        Rp. {balance !== null ? balance.toLocaleString() : "10"}
      </div>

    </div>
  );
}
