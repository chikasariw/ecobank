"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";

export default function RingkasanPenukaran() {
  return (
    <Card className="max-w-2xl mx-auto p-4 rounded-3xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-green-900">Ringkasan Penukaran</CardTitle>
          <Button variant="destructive" className="flex gap-2">
            <Trash size={16} /> Hapus Semua
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nama Admin</label>
            <Input defaultValue="Park Jisung" disabled />
          </div>
          <div>
            <label className="block text-sm font-medium">Nama Penukar</label>
            <Input placeholder="Masukkan nama penukar" />
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
                <TableRow>
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
      </CardContent>
    </Card>
  );
}
