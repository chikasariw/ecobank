"use client";

import { useState, useEffect, useRef } from "react";
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
import { ChevronRight, Printer } from "lucide-react";
import { getTransactionDetail } from "./action";
import type { transactionDetail } from "./action";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface DetailButtonProps {
  transactionId: string;
}

export function DetailButton({ transactionId }: DetailButtonProps) {
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState<transactionDetail | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && transactionId) {
      setLoading(true);
      getTransactionDetail(transactionId)
        .then((data) => {
          if (Array.isArray(data)) {
            setTransaction(data[0]);
          } else {
            setTransaction(data);
          }
        })
        .catch(() => setTransaction(null))
        .finally(() => setLoading(false));
    }
  }, [open, transactionId]);

  const handlePrint = () => {
    if (printRef.current) {
      html2canvas(printRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
        pdf.save("nota_transaksi.pdf");
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="prominent" size="sm">
          Detail Keuangan <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Detail Riwayat Keuangan</DialogTitle>
          <DialogDescription>
            Informasi lengkap transaksi keuangan.
          </DialogDescription>
        </DialogHeader>
        {loading ? (
          <p className="text-center text-sm text-gray-500">Memuat data...</p>
        ) : transaction ? (
          <div className="space-y-5" ref={printRef}>
            <hr className="border border-dashed my-2" />

            <div>
              <h2 className="font-semibold text-eb-primary-green-800">
                Detail Keuangan
              </h2>
              <Table className="mt-2">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nama Produk</TableHead>
                    <TableHead>Jumlah</TableHead>
                    {/* <TableHead>Harga</TableHead> */}
                    <TableHead>Sub-Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(transaction.details || []).map((item, index) => (
                    <TableRow key={index} className="text-nowrap">
                      <TableCell>{item.item_name}</TableCell>
                      <TableCell>{item.unit} gram</TableCell>
                      {/* <TableCell>
                        Rp.{" "}
                        {new Intl.NumberFormat("id-ID").format(
                          item.purchase_price
                        )}
                      </TableCell> */}
                      <TableCell>
                        Rp.{" "}
                        {new Intl.NumberFormat("id-ID").format(item.sub_total)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <hr className="border border-dashed my-5" />
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>
                Rp.{" "}
                {new Intl.NumberFormat("id-ID").format(
                  transaction.total_amount
                )}
              </span>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">Gagal memuat data.</p>
        )}

        <div className="flex justify-end mt-4">
          <Button onClick={handlePrint} variant="baseprimary">
            Cetak Nota <Printer/>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
