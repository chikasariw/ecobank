"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import GradientText from "@/components/ui/gradient-text";
import { getTransaction } from "./action";
import type { transactionData } from "./action";

export default function RiwayatTransaksiClient() {
    const [data, setData] = useState<transactionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading default true untuk fetch awal
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast();

    useEffect(() => {
        async function fetchData() {
          try {
            const result = await getTransaction(); // Memanggil fungsi fetch data
            if (result) {
              setData(Array.isArray(result) ? result : [result]); // Pastikan data berupa array
              setError(null);
            } else {
              throw new Error("Data transaksi tidak ditemukan.");
            }
          } catch (error) {
            console.error("Failed to fetch data:", error);
            setError("Gagal mengambil data Transaksi. Silakan coba lagi nanti.");
            toast({
              title: "Gagal mengambil data",
              description: "Terjadi kesalahan saat mengambil data Transaksi.",
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
            <Card>
                <CardHeader>
                    <CardTitle className="lg:flex lg:justify-between">
                        <p>Riwayat <GradientText>Transaksi Penukaran</GradientText></p>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/dashboard">EcoBank.</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Riwayat Transaksi</BreadcrumbPage>
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
        </div>
    );
}
