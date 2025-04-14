"use client";

import * as React from "react";
import { useState, useEffect } from "react";

// Import komponen UI
import WelcomeSection from "./welcome-card";
import { BalanceCard } from "./balance-card";
import { TransactionHistory } from "./transaction-history";
import { TotalAsset } from "./total-asset";
import { ProfitCard } from "./profit-card";

// Import fungsi async dari file action.ts
import { getUserData, getBalance, getTransaction, getProfit, getBarang } from "./action";

// Import komponen Skeleton dari shadcn
import { Skeleton } from "@/components/ui/skeleton";

// Interface untuk user
interface User {
  name: string;
  email: string;
  profile_url?: string;
}

// Interface untuk transaksi
interface Transaction {
  transaction_id: string;
  total_amount: string;
  type: string;
  created_at: string;
  wallet_id: string;
  balance: string;
  user_id: string;
  name: string;
  email: string;
}

// Interface untuk barang
interface ItemData {
  item_id: string;
  name: string;
  unit: string;
}

export default function DashboardClient() {
  // State management
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [profit, setProfit] = useState<number | null>(null);
  const [items, setItems] = useState<ItemData[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect untuk mengambil data user, saldo, profit, dan transaksi saat komponen pertama kali dimuat
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);

        // Ambil semua data secara paralel
        const [userData, userBalance, userProfit, userTransactions] = await Promise.all([
          getUserData(),
          getBalance(),
          getProfit("all"),
          getTransaction(),
        ]);

        // Update state dengan data yang sudah diambil
        setUser(userData);
        setBalance(userBalance);
        setProfit(userProfit);
        setTransactions(userTransactions); // Pastikan data ada
      } catch (err) {
        // Handle error
        console.error("Failed to fetch user data:", err);
        setError("Gagal mengambil data pengguna.");
        setUser(null);
        setBalance(0);
        setProfit(0);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  // useEffect untuk mengambil data barang
  useEffect(() => {
    async function fetchItems() {
      try {
        setLoading(true);
        const result = await getBarang(); // Ambil data barang
        setItems(result);
      } catch (err) {
        console.error("Failed to fetch items:", err);
        setError("Gagal mengambil data barang.");
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  // Komponen SkeletonCard sebagai placeholder loading card
  const SkeletonCard = () => (
    <div className="flex flex-col space-y-3 flex-1">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-2/4" />
      </div>
    </div>
  );

  // Render loading state, error state, atau data yang sudah diambil
  return (
    <div>
      {loading ? (
        // Tampilkan skeleton jika masih loading
        <div className="space-y-4">
          {/* Row pertama: WelcomeSection, ProfitCard, BalanceCard */}
          <div className="lg:flex gap-3">
            <Skeleton className="h-[200px] w-full lg:w-2/3 rounded-xl" />
            <Skeleton className="h-[200px] w-full lg:w-1/3 rounded-xl" />
            <Skeleton className="h-[200px] w-full lg:w-1/3 rounded-xl" />
          </div>

          {/* Row kedua: TransactionHistory & TotalAsset */}
          <div className="lg:flex gap-3">
            <div className="flex-1">
              <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>
            <div className="w-full lg:w-1/3">
              <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>
          </div>
        </div>
      ) : error ? (
        // Tampilkan error jika ada
        <p className="text-center text-red-500">{error}</p>
      ) : (
        // Tampilkan konten utama jika data sudah siap
        <>
          <div className="lg:flex gap-3">
            <WelcomeSection user={user} />
            <ProfitCard profit={profit} />
            <BalanceCard balance={balance} />
          </div>
          <div className="lg:flex gap-3">
            <TransactionHistory transactions={transactions} />
            <TotalAsset items={items} />
          </div>
        </>
      )}
    </div>
  );
}
