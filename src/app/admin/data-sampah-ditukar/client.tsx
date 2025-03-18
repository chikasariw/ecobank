"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useToast } from "@/hooks/use-toast"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getTransaction, TransactionData } from "./action";

interface ItemClientProps {
    transactionData: TransactionData[];
  }

export default function DataSampahDitukarClient({ transactionData }: ItemClientProps) {
const [data, setData] = useState<transactionData[]>(transactionData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)  // State error untuk menangani kesalahan
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getTransaction()  // Memanggil fungsi untuk fetch data
        setData(result)  // Menyimpan data yang berhasil diambil
        setError(null)  // Menghapus error jika berhasil
      } catch (error) {
        console.error("Failed to fetch data:", error)
        setError("Gagal mengambil data Transaksi. Silakan coba lagi nanti.")  // Menampilkan pesan error
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data Transaksi.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)  // Mengubah state loading menjadi false setelah selesai
      }
    }
    fetchData();
  }, [toast]);

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="lg:flex lg:justify-between">
                        <p>Data <span className="text-eb-primary-tosca-700">Sampah Ditukar</span></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Data Sampah Ditukar</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="rounded-xl border border-eb-primary-gray-200 p-4">
                        {loading ? (
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                                <Skeleton className="h-4 w-[300px]" />
                            </div>
                        ) : error ? (
                            <Alert variant="destructive">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        ) : (
                            <DataTable columns={columns} data={data} />  // Menampilkan data yang sudah diambil
                        )}
                        </div>
                </CardContent>
            </Card>
        </div>
    );
}
