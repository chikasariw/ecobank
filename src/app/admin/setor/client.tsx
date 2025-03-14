"use client"

import { useState, useEffect } from "react"
import DataBarang from "./data-barang";
import RingkasanPenukaran from "./ringkasan-penukaran";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBarang } from "./action"; // Import fungsi fetch data
import { ItemData } from "./action"; // Import tipe data

interface SetorClientProps {
  itemData: ItemData[];
}

export default function SetorClient({ itemData }: SetorClientProps) {
  const [data, setData] = useState<ItemData[]>(itemData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [addedItems, setAddedItems] = useState<ItemData[]>([]);

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
  const handleAddItem = (product: ItemData, unit: number) => {
    setAddedItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.item_id === product.item_id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.item_id === product.item_id ? { ...item, unit: unit } : item
        );
      } else {
        return [...prevItems, { ...product, unit }];
      }
    });
  };

  const updateItemQuantity = (itemId: string, unit: number) => {
    setAddedItems((prevItems) =>
      prevItems
        .map((item) => (item.item_id === itemId ? { ...item, unit } : item))
        .filter((item) => item.unit > 0) // Menghapus jika jumlahnya 0
    );
  };

  const removeItem = (itemId: string) => {
    setAddedItems((prevItems) => prevItems.filter((item) => item.item_id !== itemId));
  };

  const clearItems = () => {
    setAddedItems([]); // Hapus semua item
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
          <RingkasanPenukaran addedItems={addedItems} updateItemQuantity={updateItemQuantity} removeItem={removeItem} clearItems={clearItems} />
        </CardContent>
      </Card>
    </div>
  );
}
