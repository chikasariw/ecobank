import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input";




export type Pengguna = {
  id: string;
  gambar: string;
  email: string;
  nama: string;
};
export function DetailButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="prominent" size="sm">Detail Transaksi <ChevronRight />  </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Detail Riwayat Transaksi Penukaran</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <hr className="border border-dashed mb-5" />
        <div className="space-y-5">
          <div className="flex items-center">
            <label className="block text-sm font-medium w-1/4">Nama Admin</label>
            <Input defaultValue="Park Jisung" disabled className="mt-2" />
          </div>
          <div className="flex items-center">
            <label className="block text-sm font-medium w-1/4">Nama Penukar</label>
            <Input defaultValue="Penukar" disabled className="mt-2" />
          </div>
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
              <TableRow className="text-nowrap">
                <TableCell>xx</TableCell>
                <TableCell>xx /gram</TableCell>
                <TableCell>Product lorem ipsum</TableCell>
                <TableCell>Rp. xxx.xxx,xx</TableCell>
                <TableCell>Rp. xxx.xxx,xx</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <hr className="border border-dashed my-5" />
        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total:</span>
          <span>Rp. xxx.xxx,00</span>
        </div>
      </DialogContent>
    </Dialog>
  )
}
