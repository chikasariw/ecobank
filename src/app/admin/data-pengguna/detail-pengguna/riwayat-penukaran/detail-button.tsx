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
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, ChevronRight } from "lucide-react"



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
        <hr className="mx-0 px-0" />
        <div className="space-y-6">
          {/* Struk Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">Struk Penukaran</h3>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Nama Admin</span>
                {/* <span>: {data.adminName}</span> */}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Nama Penukar</span>
                {/* <span>: {data.customerName}</span> */}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Tanggal Penukaran</span>
                {/* <span>: {data.date}</span> */}
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-700">Item Ditukar</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Jumlah</TableHead>
                  <TableHead>Nama Produk</TableHead>
                  <TableHead>Harga</TableHead>
                  <TableHead>Sub-Total</TableHead>
                </TableRow>
              </TableHeader>
              {/* <TableBody>
                {data.items.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {item.quantity} <span className="text-gray-400">×</span>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>Rp. {item.price.toLocaleString()}</TableCell>
                    <TableCell>Rp. {item.subtotal.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody> */}
            </Table>
          </div>

          {/* Total */}
          <div className="flex justify-end text-lg font-semibold">
            {/* <span>Total: Rp. {data.total.toLocaleString()},00</span> */}
          </div>
        </div>
        <hr className="mx-0 px-0" />
        <DialogFooter>
          <Button type="submit"><Plus />Tambah Data</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
