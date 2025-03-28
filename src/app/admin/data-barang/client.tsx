"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "./data-table"
import { columns } from "./columns"
import GradientText from "@/components/ui/gradient-text"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getBarang } from "./action"
import type { ItemData } from "./action"

interface ItemClientProps {
  itemData: ItemData[];
}

export default function DataBarangClient({ itemData }: ItemClientProps) {
  const [data, setData] = useState<ItemData[]>(itemData)  // Menggunakan data awal jika ada
  const [loading, setLoading] = useState<boolean>(false)  // Mengatur loading state
  const [error, setError] = useState<string | null>(null)  // State error untuk menangani kesalahan
  const { toast } = useToast()

  // Fetching data barang
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const result = await getBarang()  // Memanggil fungsi untuk fetch data
        setData(result)  // Menyimpan data yang berhasil diambil
        setError(null)  // Menghapus error jika berhasil
      } catch (error) {
        console.error("Failed to fetch data:", error)
        setError("Gagal mengambil data barang. Silakan coba lagi nanti.")  // Menampilkan pesan error
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data barang.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)  // Mengubah state loading menjadi false setelah selesai
      }
    }
    fetchData()  // Memanggil fungsi fetchData saat komponen pertama kali dirender
  }, [toast]) // Menambahkan toast sebagai dependency untuk penggunaan yang benar

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
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
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
        </div>
      </CardContent>
    </Card>
  )
}
