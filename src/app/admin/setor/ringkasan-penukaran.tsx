"use client";

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trash } from "lucide-react";
import { createTransactionAction } from "./action";
import type { TransactionItemData } from "./action";

interface RingkasanPenukaranProps {
  email: string;
  addedItems: TransactionItemData[];
  updateItemQuantity: (itemId: string, unit: number) => void;
  removeItem: (itemId: string) => void;
  clearItems: () => void;
}

export default function RingkasanPenukaran({
  addedItems,
  updateItemQuantity,
  removeItem,
  clearItems,
}: RingkasanPenukaranProps) {
  const subTotal = addedItems.reduce((acc, item) => item.unit * Number(item.purchase_price), 0);
  const totalHarga = addedItems.reduce((acc, item) => acc + item.unit * Number(item.purchase_price), 0);

  console.log("Data", {
    totalHarga,
    items: addedItems, // Pastikan items sudah sesuai dengan yang backend butuhkan
  });

  async function handleSubmit(formData: FormData) {
    const emailPenukar = formData.get("emailPenukar") as string;
  
    if (!emailPenukar?.trim()) {
      alert("Email penukar harus diisi!");
      return;
    }
  
    if (addedItems.length === 0) {
      alert("Tambahkan minimal satu item untuk ditukar!");
      return;
    }
  
    const formattedItems = addedItems.map(item => ({
      item_id: item.item_id,
      unit: item.unit,
      sub_total: subTotal,
    }));
  
    console.log("Data dikirim ke backend:", {
      emailPenukar,
      totalHarga,
      items: formattedItems,
    });
  
    const response = await createTransactionAction(emailPenukar, totalHarga, formattedItems);
  
    console.log("Response dari backend:", response);
    if (!response) {
      alert("Terjadi kesalahan tak terduga saat memproses transaksi.");
      return;
    }
  
    if ("error" in response) {
      alert(`Gagal melakukan transaksi: ${response.error}`);
    } else {
      alert("Transaksi berhasil!");
      clearItems();
    }
  }
  
  

  return (
    <div className="rounded-3xl sticky top-4 self-start border border-eb-primary-gray-300 p-4">
      <div className="flex justify-between items-center">
        <CardTitle className="text-green-900">Ringkasan Penukaran</CardTitle>
        <Button variant="destructive" className="flex gap-2" onClick={clearItems}>
          <Trash size={16} /> Hapus Semua
        </Button>
      </div>
      <hr className="border border-dashed my-5" />

      <form action={handleSubmit}>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Nama Admin</label>
            <Input defaultValue="Park Jisung" disabled className="mt-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email Penukar</label>
            <Input
              name="emailPenukar"
              placeholder="Masukkan Email Penukar"
              className="mt-2"
            />
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
              {addedItems.map((item) => (
                <TableRow key={item.item_id} className="text-nowrap">
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => removeItem(item.item_id)}>
                      <Trash className="text-red-500" size={18} />
                    </Button>
                  </TableCell>
                  <TableCell className="text-nowrap flex items-center gap-2">
                    <Input
                      type="number"
                      value={item.unit}
                      min="1"
                      className="px-2 w-20 text-center"
                      onChange={(e) => {
                        const newValue = parseInt(e.target.value, 10) || 0;
                        if (newValue === 0) {
                          removeItem(item.item_id);
                        } else {
                          updateItemQuantity(item.item_id, newValue);
                        }
                      }}
                    />
                    <span>/gram</span>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>Rp. {new Intl.NumberFormat("id-ID").format(item.purchase_price)}</TableCell>
                  <TableCell>Rp. {new Intl.NumberFormat("id-ID").format(item.unit * item.purchase_price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-between items-center mt-6 text-lg font-bold">
          <span>Total:</span>
          <span>Rp. {new Intl.NumberFormat("id-ID").format(totalHarga)}</span>
        </div>

        <Button type="submit" className="w-full mt-4">
          Proses Penukaran
        </Button>
      </form>
    </div>
  );
}
