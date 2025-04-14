"use client";

import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Product = {
  item_id: string;
  name: string;
  image_url: string;
  unit: string;
  purchase_price: string;
  selling_price: string | null;
};

interface DataBarangClientProps {
  itemData: Product[];
}

export default function DataBarangClient({ itemData }: DataBarangClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const maxVisiblePages = 5;

  const filteredProducts = itemData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
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

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <p>
              Data <span className="text-eb-primary-tosca-700">Barang</span>
            </p>
            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="relative w-full max-w-lg">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Cari Barang..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-5 rounded-3xl border border-eb-primary-gray-300 focus:outline-none focus:ring-2 focus:ring-eb-primary-green-500 focus:border-eb-primary-green-800 placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <Card
                  key={product.item_id}
                  className="rounded-3xl border border-eb-primary-gray-300"
                >
                  <div className="p-4">
                    <img
                      src={product.image_url} // Ganti dengan gambar jika ada di API
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h5 className="text-lg font-semibold text-eb-primary-gray-800">
                      {product.name}
                    </h5>
                    <p className="text-eb-primary-gray-600 text-md">
                      Rp {Number(product.purchase_price).toLocaleString()} /
                      gram
                    </p>
                  </div>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Tidak ada barang yang ditemukan.
              </p>
            )}
          </div>

          {/* Pagination Controls */}
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
