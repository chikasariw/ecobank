import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export type Pengguna = {
  id: string;
  gambar: string;
  email: string;
  nama: string;
};
export function ModalTataCara() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="backdrop"
          className="text-sm font-medium inset-0 py-5 px-4 rounded-3xl"
        >
          Ambil Uang
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[700px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Tata Cara Penarikan{" "}
            <span className="bg-gradient-to-r from-eb-primary-green-800 to-eb-primary-green-600 bg-clip-text text-transparent">
              Uang Tunai di EcoBank
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 text-sm">
          <h5>
            1. Pastikan saldo cukup – Cek saldo EcoBank-mu sebelum melakukan
            penarikan.
          </h5>
          <h5>
            2. Kunjungi tempat penukaran – Datang langsung ke lokasi penukaran
            EcoBank.
          </h5>
          <h5>
            3. Ajukan penarikan – Informasikan ke admin jumlah saldo yang ingin
            dicairkan.
          </h5>
          <h5>
            4. Proses verifikasi – Admin akan memproses dan memastikan transaksi
            berjalan lancar.
          </h5>
          <h5>
            5. Terima uang tunai – Setelah diverifikasi, saldo langsung
            dicairkan dalam bentuk uang tunai.
          </h5>
        </div>
      </DialogContent>
    </Dialog>
  );
}
