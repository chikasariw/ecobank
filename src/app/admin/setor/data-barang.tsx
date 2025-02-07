"use client";
import * as React from "react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AddProductButton } from "./tambah-barang";

const products = [
    { id: 1, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / gram" },
    { id: 2, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
    { id: 3, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / gram" },
    { id: 4, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
    { id: 5, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / gram" },
    { id: 6, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
    { id: 7, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / gram" },
    { id: 8, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
    { id: 9, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
    { id: 10, image: "/content/sampah-botol.jpg", name: "Botol Plastik", price: "Rp 1.000 / gram" },
    { id: 11, image: "/content/sampah kardus.jpg", name: "Kardus", price: "Rp 1.000 / gram" },
];

export default function DataBarang() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((product) =>
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
                        <Card key={product.id} className="rounded-3xl border border-eb-primary-gray-300 ">
                            <div className="p-4 grid gap-1">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-40 object-cover rounded-lg mb-2"
                                />
                                <h5 className="text-lg font-semibold text-eb-primary-gray-800">
                                    {product.name}
                                </h5>
                                <p className="text-eb-primary-gray-600 text-md mb-2">
                                    {product.price}
                                </p>
                                <AddProductButton/>
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
