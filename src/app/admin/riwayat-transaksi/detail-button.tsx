"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { getTransactionDetail } from "./action";

interface DetailButtonProps {
  transactionId: string;
}

interface TransactionItem {
  quantity: number;
  productName: string;
  price: number;
  subTotal: number;
}

interface TransactionDetail {
  adminName: string;
  exchangerName: string;
  items: TransactionItem[];
  totalAmount: number;
}

export function DetailButton({ transactionId }: DetailButtonProps) {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState<TransactionDetail | null>(null);

  useEffect(() => {
    if (open && transactionId) {
      getTransactionDetail(transactionId).then((data) => setTransaction(data));
    }
  }, [open, transactionId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="prominent" size="sm">
          Detail Transaksi <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Detail Riwayat Transaksi Penukaran</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <hr className="border border-dashed mb-5" />

        {transaction ? (
          <div className="space-y-5">
            <div className="flex items-center">
              <label className="block text-sm font-medium w-1/4">Nama Admin</label>
              <Input defaultValue={transaction.adminName} disabled className="mt-2" />
            </div>
            <div className="flex items-center">
              <label className="block text-sm font-medium w-1/4">Nama Penukar</label>
              <Input defaultValue={transaction.exchangerName} disabled className="mt-2" />
            </div>

            <hr className="border border-dashed my-5" />

            <div>
              <h2 className="font-semibold text-eb-primary-green-800">Item Ditukar</h2>
              <Table className="mt-2">
                <TableHeader>
                  <TableRow>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Nama Produk</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead>Sub-Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transaction.items.map((item, index) => (
                    <TableRow key={index} className="text-nowrap">
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>{item.productName}</TableCell>
                      <TableCell>Rp. {item.price.toLocaleString()}</TableCell>
                      <TableCell>Rp. {item.subTotal.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <hr className="border border-dashed my-5" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>Rp. {transaction.totalAmount.toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <p className="text-center">Memuat data...</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
