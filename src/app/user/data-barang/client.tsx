"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  item_id: string;
  name: string;
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

  const filteredProducts = itemData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  function getPageNumbers(current: number, total: number): (number | "...")[] {
    const siblings = 1;
    const totalNumbers = siblings * 2 + 5;
    const totalBlocks = totalNumbers + 2;

    if (total <= totalBlocks) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | "...")[] = [];

    const left = Math.max(current - siblings, 3);
    const right = Math.min(current + siblings, total - 2);

    pages.push(1, 2);

    if (left > 3) {
      pages.push("...");
    }

    for (let i = left; i <= right; i++) {
      pages.push(i);
    }

    if (right < total - 2) {
      pages.push("...");
    }

    pages.push(total - 1, total);

    return pages;
  }

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
                      src="/content/default-image.jpg"
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                    <h5 className="text-lg font-semibold text-eb-primary-gray-800">
                      {product.name}
                    </h5>
                    <p className="text-eb-primary-gray-600 text-md">
                      Rp {Number(product.purchase_price).toLocaleString()} / gram
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
          {filteredProducts.length > itemsPerPage && (
            <div className="flex justify-end items-center space-x-2 mt-6">
              <Button
                variant="link"
                size="sm"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center gap-1 text-gray-700 disabled:opacity-50"
              >
                <ChevronLeft size={16} />
                Sebelumnya
              </Button>

              {getPageNumbers(currentPage, totalPages).map((page, idx) =>
                page === "..." ? (
                  <span key={idx} className="px-2 text-muted-foreground">...</span>
                ) : (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(Number(page))}
                    className={`rounded-full w-9 h-9 ${
                      page === currentPage
                        ? "bg-gradient-to-r from-eb-primary-green-600 to-eb-primary-green-400 text-eb-primary-green-100 font-bold hover:from-eb-primary-green-700 hover:to-eb-primary-green-600"
                        : "border-eb-primary-gray-300 hover:bg-eb-primary-gray-200 text-gray-700"
                    }`}
                  >
                    {page}
                  </Button>
                )
              )}

              <Button
                variant="link"
                size="sm"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 text-gray-700 disabled:opacity-50"
              >
                Selanjutnya

                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
