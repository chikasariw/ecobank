"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AddProductButton } from "./tambah-barang";
import type { ItemData } from "./action";

interface ItemClientProps {
  itemData: ItemData[];
}

export default function DataBarang({ itemData }: ItemClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = itemData.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex-1 flex justify-end items-center mb-4">
        <div className="relative w-full">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Card key={product.item_id} className="rounded-3xl border border-eb-primary-gray-300">
              <div className="p-4 grid gap-1">
                {/* <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                /> */}
                <h5 className="text-lg font-semibold text-eb-primary-gray-800">
                  {product.name}
                </h5>
                <p className="text-eb-primary-gray-600 text-md mb-2">{product.purchase_price}</p>
                <AddProductButton />
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Tidak ada barang yang ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}
