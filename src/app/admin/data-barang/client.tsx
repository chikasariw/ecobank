"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import GradientText from "@/components/ui/gradient-text";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getBarang } from "./action";
import type { ItemData } from "./action";

interface ItemClientProps {
  itemData: ItemData[];
}

export default function DataBarangClient({ itemData }: ItemClientProps) {
  const [data, setData] = useState<ItemData[]>(itemData); // Menggunakan data awal jika ada
  const [loading, setLoading] = useState<boolean>(false); // Mengatur loading state
  const [error, setError] = useState<string | null>(null); // State error untuk menangani kesalahan
  const { toast } = useToast();
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh, toast]); // Tambahkan refresh ke dependency array

  return (
    <Card>
      <CardHeader>
        <CardTitle className="lg:flex lg:justify-between">
          <p>
            Data <GradientText>Barang</GradientText>
          </p>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Barang</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-xl border border-eb-primary-gray-200 p-4">
          <DataTable columns={columns} data={data} />
        </div>
      </CardContent>
    </Card>
  );
}
