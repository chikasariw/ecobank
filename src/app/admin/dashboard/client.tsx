"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import WelcomeSection from "./welcome-card";
import { BalanceCard } from "./balance-card";
import { TransactionHistory } from "./transaction-history";
import { Barchart } from "./barchart";
import { TotalAsset } from "./total-asset";
import { ProfitCard } from "./profit-card";
import { getUserData, getBalance } from "./action"; // Sesuaikan path jika berbeda
import { getBarang } from "./action"; 

interface User {
  name: string;
  email: string;
  profile_url?: string;
}

// Definisi tipe data untuk props
interface ItemData {
  item_id: string;
  name: string;
  unit: string;
}

export default function DashboardClient() {
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [items, setItems] = useState<ItemData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        const [userData, userBalance] = await Promise.all([
          getUserData(),
          getBalance(),
        ]);
        setUser(userData);
        setBalance(userBalance);
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setError("Gagal mengambil data pengguna.");
        setUser(null);
        setBalance(null);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);
  
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

  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <>
          <div className="lg:flex gap-3">
            <WelcomeSection user={user} />
            <ProfitCard balance={balance} />
            <BalanceCard balance={balance} />
          </div>
          <div className="lg:flex gap-3">
            <TransactionHistory />
            <TotalAsset items={items} />
          </div>
        </>
      )}
    </div>
  );
}
