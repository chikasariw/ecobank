"use client";

import { ModalTataCara } from "./modal-tatacara";

export function BalanceCard({ balance }: { balance: number | null }) {  
  return (
    <div className="relative w-full lg:w-1/3 h-56 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B4221] to-[#126D37] p-6 text-white mb-3">
      <div className="">
        <div className="radial-yellow-card"></div>
        <div className="radial-yellow-card-right"></div>
      </div>

      <div className="space-y-1">
        <h2 className="text-md font-medium text-white">
          Total Uang
        </h2>
        <p className="text-xs text-white">
          Saldo yang telah anda kumpulkan
        </p>
      </div>
      <div className="text-3xl font-bold mt-6 mb-8">
        Rp. {new Intl.NumberFormat("id-ID").format(balance ?? 0)}
      </div>
      <div><ModalTataCara /></div>

    </div>
  );
}
