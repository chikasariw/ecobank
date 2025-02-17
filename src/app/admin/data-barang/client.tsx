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
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getBarang } from "./action"
import type { Barang } from "./columns"

export default function DataBarangClient() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getBarang()
        setData(result)
        setError(null)
      } catch (error) {
        console.error("Failed to fetch data:", error)
        setError("Gagal mengambil data barang. Silakan coba lagi nanti.")
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data barang.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [toast])

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
            <DataTable columns={columns} data={data} />
          )}
        </div>
      </CardContent>
    </Card>
  )
}