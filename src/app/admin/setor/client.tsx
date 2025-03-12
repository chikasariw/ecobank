"use client"

import { useState, useEffect } from "react"
import DataBarang from "./data-barang";
import RingkasanPenukaran from "./ringkasan-penukaran";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBarang } from "./action"; // Import fungsi fetch data
import { useToast } from "@/hooks/use-toast"; // Import hook toast
import type { ItemData } from "./action"; // Import tipe data

interface SetorClientProps {
  itemData: ItemData[];
}

export default function SetorClient({ itemData }: SetorClientProps) {
  const { toast } = useToast(); // Menggunakan toast untuk notifikasi
  const [data, setData] = useState<ItemData[]>(itemData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getBarang(); // Fetch data dari API
        setData(result);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Gagal mengambil data barang. Silakan coba lagi nanti.");
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data barang.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [toast]);

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
            <DataBarang itemData={data} />
          )}
          <RingkasanPenukaran />
        </CardContent>
      </Card>
    </div>
  );
}
