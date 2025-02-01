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
import { Plus } from "lucide-react"

import RadioGender from "./radio-gender";
import DatePicker from "./date-picker";


export type Pengguna = {
  id: string;
  gambar: string;
  email: string;
  nama: string;
};
export function ModalAdd() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Plus />Tambah Data</Button>
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
            <Label htmlFor="nama">
              Nama Pengguna
            </Label>
            <Input id="nama" placeholder="Masukkan Nama" className="mt-2" />
          </div>
          <div>
            <Label htmlFor="email">
              Email Pengguna
            </Label>
            <Input id="email" placeholder="Masukkan Email" className="mt-2" />
          </div>
          <div className="md:flex gap-5">
            <div className="w-full md:w-1/2">
              <Label
                htmlFor="tanggal_lahir"
                className="w-full md:w-1/2 xl:w-1/5 mb-1"
              >
                Tanggal Lahir
              </Label>
              <div  className="mt-2">
                <DatePicker />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Label
                htmlFor="jenis_kelamin"
                className="w-full md:w-1/2 xl:w-1/5 mb-1"
              >
                Jenis Kelamin
              </Label>
              <RadioGender />
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
