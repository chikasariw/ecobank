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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { getTransactionDetail } from "./action";
import type { transactionDetail } from "./action";

interface DetailButtonProps {
  transactionId: string;
}

export function DetailButton({ transactionId }: DetailButtonProps) {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState<transactionDetail | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && transactionId) {
      setLoading(true);
      getTransactionDetail(transactionId).then((data) => {
        if (Array.isArray(data)) {
          setTransaction(data[0]); // Ambil item pertama
        } else {
          setTransaction(data);
        }
      });
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
          <DialogTitle>Detail Riwayat Transaksi</DialogTitle>
          <DialogDescription>
            Informasi lengkap transaksi penukaran.
          </DialogDescription>
        </DialogHeader>
        <hr className="border border-dashed mb-5" />

        {loading ? (
          <p className="text-center text-sm text-gray-500">Memuat data...</p>
        ) : transaction ? (
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium w-1/4">
                Nama Admin
              </label>
              <Input disabled className="mt-2" />
            </div>
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium w-1/4">
                Nama Penukar
              </label>
              <Input value={transaction.user.name} disabled className="mt-2" />
            </div>

            <hr className="border border-dashed my-5" />

            <div>
              <h2 className="font-semibold text-eb-primary-green-800">
                Item Ditukar
              </h2>
              <Table className="mt-2">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Produk</TableHead>
                    <TableHead>Jumlah</TableHead>
                    <TableHead>Harga</TableHead>
                    <TableHead>Sub-Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(transaction.details || []).map((item, index) => (
                    <TableRow key={index} className="text-nowrap">
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell>{item.unit}</TableCell>
                      <TableCell>
                        Rp.{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          item.purchase_price
                        )}
                      </TableCell>
                      <TableCell>
                        Rp.{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          item.unit * item.purchase_price
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <hr className="border border-dashed my-5" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>Rp. {transaction.total_amount.toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">Gagal memuat data.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
