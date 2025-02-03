"use client";
import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const products = [
  { id: 1, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / Kg" },
  { id: 2, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
  { id: 3, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / Kg" },
  { id: 4, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
  { id: 5, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / Kg" },
  { id: 6, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
  { id: 7, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / Kg" },
  { id: 8, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
  { id: 9, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
  { id: 10, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / Kg" },
  { id: 11, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / Kg" },
];

export default function DataBarang() {
  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan query pencarian

  // Filter produk berdasarkan nama
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center gap-10">
            <p>
              Data <span className="text-eb-primary-green-800">Barang</span>
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
                  className="w-full pl-12 pr-4 py-5 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eb-primary-green-500 focus:border-eb-primary-green-800 placeholder:text-gray-400 placeholder:font-medium"
                />
              </div>
            </div>
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">
                    EcoBank.
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Barang</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card key={product.id} className="rounded-3xl border border-gray-300">
                  <div className="p-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h5 className="text-lg font-semibold text-gray-800">
                      {product.name}
                    </h5>
                    <p className="text-eb-primary-green-800 font-medium">
                      {product.price}
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
