"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import WelcomeSection from "./welcome-card";
import { BalanceCard } from "./balance-card";
import { TransactionHistory } from "./transaction-history";
import { Barchart } from "./barchart";
import { getUserData, getBalance, getTransaction } from "./action"; 

// Interface untuk data pengguna
interface User {
  name: string;
  email: string;
  profile_url?: string;
}

// Interface untuk struktur data transaksi
interface Transaction {
  transaction_id: string;
  wallet_id: string;
  total_amount: string;
  current_balance: string;
  type: string;
  created_at: string;
}


export default function DashboardClient() {
  const [user, setUser] = useState<User | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect digunakan untuk menjalankan pengambilan data setelah komponen di-render
  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);
        // Ambil data pengguna, saldo, dan transaksi secara paralel 
        const [userData, userBalance, userTransactions] = await Promise.all([
          getUserData(),
          getBalance(),
          getTransaction(),
        ]);
        console.log("User Data:", userData);
        console.log("Balance:", userBalance);
        console.log("Transactions:", userTransactions);
        setUser(userData);
        setBalance(userBalance);
        setTransactions(userTransactions); 
      } catch (err) {
        console.error("Failed to fetch user data:", err);
        setError("Gagal mengambil data pengguna.");
        setUser(null);
        setBalance(null);
        setTransactions([]);
      } finally {
        setLoading(false);
      }
    }
  
    fetchUserData();
  }, []);
  

  // Render komponen dashboard
  return (
    <div>
        <>
          <div className="lg:flex gap-3">
            <WelcomeSection user={user} />
            <BalanceCard balance={balance} />
          </div>
          <div className="lg:flex gap-3">
            <TransactionHistory transactions={transactions} />
            {/* <div className="flex flex-col w-full lg:w-1/3 ">
              <Barchart />
              <StatsSection />
            </div> */}
          </div>
        </>
    </div>
  );
}
