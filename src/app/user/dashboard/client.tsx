"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import WelcomeSection from "./welcome-card";
import { BalanceCard } from "./balance-card";
import { TransactionHistory } from "./transaction-history";
import { Barchart } from "./barchart";
import { getUserData, getBalance } from "./action"; // Sesuaikan path jika berbeda

interface User {
  name: string;
  email: string;
  profile_url?: string;
}

export default function DashboardClient() {
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
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
            <BalanceCard balance={balance} />
          </div>
          <div className="lg:flex gap-3">
            <TransactionHistory />
            <div className="flex flex-col w-full lg:w-1/3 ">
              <Barchart />
              {/* <StatsSection /> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
