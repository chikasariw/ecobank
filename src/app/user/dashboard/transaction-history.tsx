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
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <p className="text-center text-gray-500">Belum ada transaksi.</p>
            ) : (
              transactions.slice(0, 5).map((transaction, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-3"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-eb-primary-gray-100 p-3">
                      {transaction.type === "Nabung" ? (
                        <ArrowUpRight className="h-4 w-4 text-eb-primary-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-eb-primary-red-400" />
                      )}
                    </div>
                    <div>
                      <div
                        className={
                          transaction.type === "Nabung"
                            ? "text-eb-primary-green-500 text-sm"
                            : "text-eb-primary-red-400 text-sm"
                        }
                      >
                        {transaction.type}
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
                      transaction.type === "Nabung"
                        ? "text-eb-primary-green-500 text-sm mr-2"
                        : "text-eb-primary-red-400 text-sm mr-2"
                    }`}
                  >
                    {transaction.type === "Nabung" ? "+" : "-"}Rp.{" "}
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
