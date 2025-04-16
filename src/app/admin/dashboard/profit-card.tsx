"use client";

// Komponen kartu total keuntungan
export function ProfitCard({ profit }: { profit: number | null }) {
  return (
    <div className="relative w-full lg:w-1/3 overflow-hidden rounded-3xl bg-eb-primary-gray-50 p-6 text-black mb-3">
      <div className="">
        <div className="radial-yellow-card"></div>
        <div className="radial-yellow-card-right"></div>
      </div>

      <div className="space-y-1">
        <h2 className="text-md font-medium text-black">Total Keuntungan</h2>
        <p className="text-xs text-black">
          Keuntungan yang telah diperoleh
        </p>
      </div>
      
      <div className="text-3xl font-bold mt-6 mb-8">
        Rp.{" "}
        {profit !== null ? new Intl.NumberFormat("id-ID").format(profit) : "-"}
      </div>
    </div>
  );
}
