"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { getTransaction, TransactionData } from "./action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function RiwayatPenukaranClient() {
  const [transactions, setTransactions] = useState<TransactionData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getTransaction();
      setTransactions(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-eb-primary-tosca-700">Riwayat Penukaran</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2 className="animate-spin text-eb-primary-tosca-700" size={24} />
            </div>
          ) : transactions && transactions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {transactions.map((transaction) => (
                <Card key={transaction.transaction_id} className="rounded-3xl border border-eb-primary-gray-300">
                  <div className="p-4">
                    <h5 className="text-lg font-semibold text-eb-primary-gray-800">
                      Transaksi #{transaction.transaction_id}
                    </h5>
                    <p className="text-eb-primary-gray-600 text-md">
                      Jumlah: <span className="font-bold">Rp {transaction.total_amount.toLocaleString()}</span>
                    </p>
                    <p className="text-eb-primary-gray-600 text-md">
                      Saldo Saat Ini: <span className="font-bold">Rp {transaction.current_balance.toLocaleString()}</span>
                    </p>
                    <p className={`text-md font-semibold ${transaction.type === "debit" ? "text-red-500" : "text-green-500"}`}>
                      {transaction.type === "debit" ? "Pengurangan" : "Penambahan"}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">Tidak ada riwayat penukaran.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
