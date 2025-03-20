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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"


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
        <Button><Plus />Tambah Data</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Tambah Data Uang Masuk</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
        <hr className="mx-0 px-0" />
        <div className="grid gap-5">
          <div>
            <Select >
              <Label htmlFor="pilih barang">
                Pilih Nama Barang yang Ditukar
              </Label>
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Pilih Nama Barang yang Ditukar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="barang1">barang1</SelectItem>
                <SelectItem value="barang2">barang2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="jumlahtukar">
              Jumlah Tukar
            </Label>
            <div className="relative mt-2">
              <Input id="jumlahtukar" placeholder="Masukkan Nominal Transaksi Masuk" type="number" className="pr-16" />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-eb-primary-gray-500 text-sm pl-3">/gram</span>
            </div>
          </div>
          <div>
            <Label htmlFor="nominaltransaksi">
              Nominal Transaksi Masuk
            </Label>
            <div className="relative mt-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-eb-primary-gray-500 text-sm pl-3">Rp.</span>
              <Input id="nominaltransaksi" placeholder="Masukkan Nominal Transaksi Masuk" type="number" className="pl-16" />
            </div>
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
