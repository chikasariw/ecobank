"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Transaction {
  transaction_id: string;
  wallet_id: string;
  total_amount: string;
  current_balance: string;
  type: string;
  created_at: string;
}

// Props untuk komponen utama, menerima array transaksi
interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  console.log("Transactions Props:", transactions);

  const router = useRouter();

  return (
    <div className="w-full mb-3">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Riwayat Transaksi</h2>
            <Button
              size="sm"
              variant="prominent"
              className="font-bold rounded-3xl px-3"
              onClick={() => router.push("/user/riwayat-penukaran")}
            >
              Lihat Semua
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.length === 0 ? (
              <p className="text-center justify-center text-gray-500">Belum ada transaksi.</p>
            ) : (
              transactions.slice(0, 5).map((transaction, index) => {
                const isNabung = transaction.type?.toLowerCase() === "deposit";
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between ${
                      index < 4 ? "border-b pb-3" : ""
                    }`}
                  >
                    
                    <div className="flex items-center gap-4">
                      <div className={`rounded-full p-3 ${isNabung ? "bg-eb-primary-green-100" : "bg-eb-primary-yellow-100"}`}>
                        {isNabung ? (
                          <ArrowUpRight className="h-4 w-4 text-eb-primary-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-eb-primary-yellow-600" /> 
                        )}
                      </div>
                      <div>
                        <div
                          className={`text-sm ${
                            isNabung
                              ? "text-eb-primary-green-500"
                              : "text-eb-primary-yellow-600"
                          }`}
                        >
                          {transaction.type?.toLowerCase() === "deposit"
                            ? "Nabung"
                            : "Ambil"}
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
                      className={`font-medium text-sm mr-2 ${
                        isNabung
                          ? "text-eb-primary-green-500"
                          : "text-eb-primary-yellow-600"
                      }`}
                    >
                      {isNabung ? "+" : "-"}Rp.{" "}
                      {Math.abs(
                        Number(transaction.total_amount)
                      ).toLocaleString("id-ID")}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
