"use client";

import { useState, useEffect } from "react";
import { getBalance } from "./action"; // Sesuaikan path jika perlu
import { ModalTataCara } from "./modal-tatacara";

export function BalanceCard() {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    async function fetchBalance() {
      const fetchedBalance = await getBalance();
      setBalance(fetchedBalance);
    }

    fetchBalance();
  }, []);

  return (
    <div className="relative w-full lg:w-1/3 overflow-hidden rounded-3xl bg-gradient-to-r from-[#0B4221] to-[#126D37] p-6 text-white mb-3">
      <div className="">
        <div className="radial-yellow-card"></div>
        <div className="radial-yellow-card-right"></div>
      </div>

      <div className="space-y-1">
        <h2 className="text-md font-medium text-white">
          Total Uang
        </h2>
        <p className="text-xs text-white">
          Saldo yang dapat ditukarkan pengguna
        </p>
      </div>
      <div className="text-4xl font-bold mt-6 mb-8">
        Rp. {balance !== null ? balance.toLocaleString("id-ID") : "0"}
      </div>

      <ModalTataCara />
    </div>
  );
}
