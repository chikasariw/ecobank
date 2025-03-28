"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast"

import { getUser } from "./action"
import type { userData } from "./action"

interface ItemClientProps {
  userData: userData[];
}
export default function DataPenggunaClient({ userData }: ItemClientProps) {
  const [data, setData] = useState<userData[]>(userData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast()

  useEffect(() => {
    async function fetchData() {
        setLoading(true)
      try {
        const users = await getUser();
        setData(users)  // Menyimpan data yang berhasil diambil
        setError(null)
    } catch (error) {
        console.error("Failed to fetch data:", error)
        setError("Gagal mengambil data. Silakan coba lagi nanti.")  // Menampilkan pesan error
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data.",
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
            <p>
              Data <span className="text-eb-primary-tosca-700">Pengguna</span>
            </p>
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
              <p className="text-red-500">{error}</p>
            ) : (
              <DataTable columns={columns} data={data} />
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
