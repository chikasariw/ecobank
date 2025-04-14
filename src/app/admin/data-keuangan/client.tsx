"use client";
import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { useState, useEffect } from "react";
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
import { getFinance } from "./action";
import type { financeData } from "./action";

interface ItemClientProps {
  financeData: financeData[];
}

export default function DataKeuanganClient({ financeData }: ItemClientProps) {
  const [data, setData] = useState<financeData[]>(financeData); // Menggunakan data awal jika ada
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const result = await getFinance();
        setData(result);
        setError(null);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Gagal mengambil data keuangan. Silakan coba lagi nanti.");
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data keuangan.",
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
            <p>
              Data <span className="text-eb-primary-tosca-700">Keuangan</span>
            </p>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard">
                    EcoBank.
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Keuangan</BreadcrumbPage>
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
    </div>
  );
}
