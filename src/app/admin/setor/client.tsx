"use client";

import { useState, useEffect } from "react";
import DataBarang from "./data-barang";
import RingkasanPenukaran from "./ringkasan-penukaran";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBarang } from "./action"; // Import fungsi fetch data
import { TransactionItemData } from "./action"; // Import tipe data

interface SetorClientProps {
  itemData: TransactionItemData[];
  email: string; // Gunakan email sebagai identitas transaksi
}

export default function SetorClient({ itemData, email }: SetorClientProps) {
  const [data, setData] = useState<TransactionItemData[]>(itemData);
  const [loading, setLoading] = useState<boolean>(false);
  const [, setError] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<TransactionItemData[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getBarang();
        setData(result);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Gagal mengambil data barang. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Fungsi untuk menambahkan barang atau memperbarui jumlahnya
  const handleAddItem = (product: TransactionItemData, unit: number) => {
    setAddedItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.item_id === product.item_id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.item_id === product.item_id ? { ...item, unit } : item
        );
      } else {
        return [...prevItems, { ...product, unit }];
      }
    });
  };

  // Perbarui jumlah barang yang sudah ditambahkan
  const updateItemQuantity = (itemId: string, unit: number) => {
    if (unit < 1) return; // Cegah nilai 0 atau negatif
    setAddedItems((prevItems) =>
      prevItems.map((item) => (item.item_id === itemId ? { ...item, unit } : item))
    );
  };

  // Hapus barang dari daftar transaksi
  const removeItem = (itemId: string) => {
    setAddedItems((prevItems) => prevItems.filter((item) => item.item_id !== itemId));
  };

  // Kosongkan seluruh daftar barang
  const clearItems = () => {
    setAddedItems([]);
  };

  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Setor Barang</CardTitle> {/* Judul untuk Card */}
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p> // Indikator loading
          ) : (
            <DataBarang itemData={data} setAddedItems={handleAddItem} />
          )}
          <RingkasanPenukaran 
            email={email} 
            addedItems={addedItems} 
            updateItemQuantity={updateItemQuantity} 
            removeItem={removeItem} 
            clearItems={clearItems} 
          />
        </CardContent>
      </Card>
    </div>
  );
}
