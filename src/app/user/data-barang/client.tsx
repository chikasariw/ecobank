

"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

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

  // Filter produk berdasarkan nama
  const filteredProducts = itemData.filter((product: { name: string; }) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.item_id} className="rounded-3xl border border-eb-primary-gray-300 ">
                  <div className="p-4">
                    <img
                      src="/content/default-image.jpg" // Ganti dengan gambar jika ada di API
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
        </CardContent>
      </Card>
    </div>
  );
}
