"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";

export default function RingkasanPenukaran() {
  return (
    <div className="rounded-3xl sticky top-4 self-start border border-eb-primary-gray-300 p-4">
      <div>
        <div className="flex justify-between items-center">
          <CardTitle className="text-green-900">Ringkasan Penukaran</CardTitle>
          <Button variant="destructive" className="flex gap-2">
            <Trash size={16} /> Hapus Semua
          </Button>
        </div>
      </div>
      <hr className="border border-dashed my-5" />
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium">Nama Admin</label>
          <Input defaultValue="Park Jisung" disabled className="mt-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Nama Penukar</label>
          <Input placeholder="Masukkan nama penukar" className="mt-2" />
        </div>
      </div>
      <div className="mt-6">
        <h2 className="font-semibold text-eb-primary-green-800">Item Ditukar</h2>
        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead>Act</TableHead>
              <TableHead>Jumlah</TableHead>
              <TableHead>Nama Produk</TableHead>
              <TableHead>Harga</TableHead>
              <TableHead>Sub-Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="text-nowrap">
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Trash className="text-red-500" size={18} />
                </Button>
              </TableCell>
              <TableCell className="text-nowrap flex items-center gap-2">
                <Input type="number" className="px-2 w-20 text-center" /> <span>/gram</span>
              </TableCell>
              <TableCell>Product lorem ipsum</TableCell>
              <TableCell>Rp. xxx.xxx,xx</TableCell>
              <TableCell>Rp. xxx.xxx,xx</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-6 text-lg font-bold">
        <span>Total:</span>
        <span>Rp. xxx.xxx,00</span>
      </div>
      <Button className="w-full mt-4">
        Proses Penukaran
      </Button>
    </div>
  );
}
