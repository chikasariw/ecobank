"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { getTransaction, TransactionData } from "./action";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Search } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RiwayatPenukaranClient() {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const maxVisiblePages = 5;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const data = await getTransaction();
      setTransactions(data ?? []); // Jika `null`, set jadi array kosong
      setLoading(false);
    }
    fetchData();
  }, []);

  // Filter transaksi berdasarkan nama
  const filteredTransactions = transactions.filter((transaction) =>
    (transaction.created_at || "")
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Hitung halaman awal dan akhir untuk ditampilkan
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <p>
              Riwayat{" "}
              <span className="text-eb-primary-tosca-700">Penukaran</span>
            </p>

            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="relative w-full max-w-lg">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Cari  Tanggal  Transaksi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-5 rounded-3xl border border-eb-primary-gray-300 focus:outline-none focus:ring-2 focus:ring-eb-primary-green-500 focus:border-eb-primary-green-800 placeholder:text-eb-primary-gray-400 placeholder:font-normal"
                />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loader2
                className="animate-spin text-eb-primary-tosca-700"
                size={24}
              />
            </div>
          ) : filteredTransactions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentItems.map((transaction) => (
                <Card
                  key={transaction.transaction_id}
                  className="rounded-3xl border border-eb-primary-gray-300"
                >
                  <div className="p-4">
                    <p
                      className={`text-md font-semibold ${
                        transaction.type?.toLowerCase() === "deposit"
                          ? "flex items-center justify-center bg-eb-primary-green-200 text-eb-primary-green-700 text-sm rounded-2xl w-20 py-1 "
                          : "flex items-center justify-center bg-eb-primary-yellow-200 text-eb-primary-yellow-800 text-sm rounded-2xl w-20 py-1"
                      }`}
                    >
                      {transaction.type?.toLowerCase() === "deposit"
                        ? "Nabung"
                        : "Ambil"}
                    </p>
                    <h5 className="text-lg font-semibold text-eb-primary-gray-800 pt-2">
                      Transaksi{" "}
                      {new Intl.DateTimeFormat("id-ID", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      }).format(new Date(transaction.created_at))}
                    </h5>
                    <p className="text-eb-primary-gray-600 text-md pt-1">
                      Nominal: Rp.{transaction.total_amount.toLocaleString()}
                    </p>
                    <p className="text-eb-primary-gray-600 text-md pt-1">
                      Saldo saat ini: Rp.
                      {transaction.current_balance.toLocaleString()}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              Tidak ada riwayat penukaran.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 0 && (
            <div className="flex items-center justify-end gap-2 mt-6 flex-wrap">
              <Button
                variant="link"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" /> Sebelumnya
              </Button>

              {startPage > 0 && totalPages > maxVisiblePages && (
                <Button variant="ghost" size="icon" disabled>
                  ...
                </Button>
              )}

              {Array.from(
                { length: endPage - startPage + 1 },
                (_, idx) => startPage + idx
              ).map((pageNumber) => (
                <Button
                  key={pageNumber}
                  variant={currentPage === pageNumber ? "primary" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Button>
              ))}

              {endPage < totalPages && totalPages > maxVisiblePages && (
                <Button variant="ghost" size="icon" disabled>
                  ...
                </Button>
              )}

              <Button
                variant="link"
                size="sm"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Selanjutnya <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
