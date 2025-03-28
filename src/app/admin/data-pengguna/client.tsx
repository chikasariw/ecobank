"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useState, useEffect } from "react"
// import GradientText from "@/components/ui/gradient-text"
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

import { getUser } from "./action"
import type { userData } from "./action"

interface ItemClientProps {
  userData: userData[];
}
export default function DataUserClient({ userData }: ItemClientProps) {
  const [data, setData] = useState<userData[]>(userData)  // Menggunakan data awal jika ada
  const [loading, setLoading] = useState<boolean>(false)  // Mengatur loading state
  const [error, setError] = useState<string | null>(null)  // State error untuk menangani kesalahan
  const { toast } = useToast()

  // Fetching data User
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
        const result = await getUser()  // Memanggil fungsi untuk fetch data
        setData(result)  // Menyimpan data yang berhasil diambil
        setError(null)  // Menghapus error jika berhasil
      } catch (error) {
        console.error("Failed to fetch data:", error)
        setError("Gagal mengambil data User. Silakan coba lagi nanti.")  // Menampilkan pesan error
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data User.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)  // Mengubah state loading menjadi false setelah selesai
      }
    }
    fetchData()  // Memanggil fungsi fetchData saat komponen pertama kali dirender
  }, [toast]) // Menambahkan toast sebagai dependency untuk penggunaan yang benar
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="lg:flex lg:justify-between">
            <p>Data <span className="text-eb-primary-tosca-700">Warga Hijau</span></p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Warga Hijau</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-eb-primary-gray-200 p-4">
          {loading ? (
              <p>Loading...</p>
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
    </div>
  );
}
