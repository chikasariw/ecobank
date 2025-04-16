"use client";

import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Tipe data transaksi
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

// Props yang diterima oleh komponen
interface TransactionHistoryProps {
  transactions: Transaction[];
}

// Komponen untuk menampilkan riwayat transaksi
export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  console.log("Transactions Props:", transactions); // Debugging
  const router = useRouter();

  return (
    <div className="w-full lg:w-2/3 mb-3">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Riwayat Transaksi</h2>
            <Button
              size="sm"
              variant="prominent"
              className="font-bold rounded-3xl px-3"
              onClick={() => router.push("/admin/riwayat-transaksi")}
            >
              Lihat Semua
            </Button>
          </div>
        </CardHeader>

        {/* Konten kartu untuk menampilkan transaksi */}
        <CardContent>
          <div className="space-y-3">
            {transactions.length === 0 ? (
              <p className="text-center text-gray-500">Belum ada transaksi.</p>
            ) : (
              transactions.slice(0, 5).map((transaction, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between ${ 
                    index < 4 ? "border-b pb-3" : "" 
                  }`}
                >
                  
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-full p-3 ${
                        transaction.type === "Deposit"
                          ? "bg-eb-primary-green-100"
                          : "bg-eb-primary-yellow-100"
                      }`}
                    >
                      {transaction.type === "Deposit" ? (
                        <ArrowUpRight className="h-4 w-4 text-eb-primary-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-eb-primary-yellow-600" />
                      )}
                    </div>
                    <div>
                      <div
                        className={
                          transaction.type === "Deposit"
                            ? "text-eb-primary-green-500 text-sm"
                            : "text-eb-primary-yellow-600 text-sm"
                        }
                      >
                        {transaction.type === "Deposit" ? "Nabung" : "Ambil"}
                      </div>
                      <div className="text-xs text-eb-primary-gray-600">
                        {new Intl.DateTimeFormat("id-ID", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false,
                        }).format(new Date(transaction.created_at))}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`font-medium ${
                      transaction.type === "Deposit"
                        ? "text-eb-primary-green-500 text-sm mr-2"
                        : "text-eb-primary-yellow-600 text-sm mr-2"
                    }`}
                  >
                    {transaction.type === "Deposit" ? "+" : "-"}Rp.{" "}
                    {Math.abs(
                      Number(transaction.total_amount)
                    ).toLocaleString()}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
