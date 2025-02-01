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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react";

export type Barang = {
    id: string;
    gambar: string;
    namabarang: string;
    hargajual: number;
    hargabeli: number;
    satuan: string;
};
export function ModalAdd() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Plus/>Tambah Data</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Tambah Data</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <hr className="mx-0 px-0" />
        <div className="grid gap-5">
          <div>
            <Label htmlFor="namabarang">
              Nama Barang
            </Label>
            <Input id="namabarang" placeholder="Masukkan Nama Barang" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="gambar">
              Foto Barang
            </Label>
            <Input id="gambar" type="file" className="mt-2" />
          </div>
          <div className="flex gap-5">
            <div className="w-1/2">
                <Label htmlFor="hargabeli">
                Harga Beli
                </Label>
                <Input id="hargabeli" placeholder="Masukkan Harga Beli" className="mt-2" />
            </div>
            <div className="w-1/2">
                <Label htmlFor="hargajual">
                Harga Jual
                </Label>
                <Input id="hargajual" placeholder="Masukkan Harga Jual" className="mt-2" />
          </div>
          </div>
        </div>
        <hr className="mx-0 px-0" />
        <DialogFooter>
          <Button type="submit"><Plus/>Tambah Data</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
