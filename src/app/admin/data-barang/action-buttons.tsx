import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash, Plus, CircleX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addBarang } from "./action";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function ActionButtons() {
  const { toast } = useToast();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  // Change the ref to accept HTMLElement or null
  const alertDialogRef = useRef<HTMLElement | null>(null);

  const handleDelete = () => {
    toast({
      variant: "destructive",
      title: "Barang dihapus",
      description: "Item berhasil dihapus dari sistem.",
    });
    setOpenDelete(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (alertDialogRef.current && !alertDialogRef.current.contains(event.target as Node)) {
      setOpenDelete(false); // Close dialog when clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center gap-2">
        <Button size="sm" variant="prominent" onClick={() => setOpenEdit(true)}>
          <Pencil className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="destructive" onClick={() => setOpenDelete(true)}>
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      {/* Modal Edit */}
      <ModalEdit open={openEdit} setOpen={setOpenEdit} />

      {/* Alert Konfirmasi Delete */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent ref={alertDialogRef as any}> {/* Workaround using `as any` */}
          <AlertDialogHeader>
            <AlertDialogTitle className="hidden">Apa Anda yakin untuk menghapus data ini?</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex flex-col items-center justify-center text-center gap-4 my-3">
                <div className="bg-destructive text-destructive-foreground p-5 rounded-full">
                  <CircleX className="w-16 h-16" />
                </div>
                <p className="text-xl font-semibold">Apakah Anda yakin ingin menghapus barang ini?</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button variant="ghost" onClick={() => setOpenDelete(false)}>
              Batal
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Hapus
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export function ModalEdit({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      await addBarang(formData);
      toast({
        title: "Data berhasil diperbarui",
        description: "Perubahan telah disimpan.",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Gagal memperbarui data",
        description: (error as Error).message || "Terjadi kesalahan.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Edit Data</DialogTitle>
        </DialogHeader>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <div>
              <Label htmlFor="name">Nama Barang</Label>
              <Input name="name" placeholder="Masukkan Nama Barang" className="mt-2" required />
            </div>
            <div>
              <Label htmlFor="unit">Jumlah Unit</Label>
              <Input name="unit" type="number" placeholder="Masukkan Jumlah Unit" className="mt-2" required />
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Label htmlFor="purchase_price">Harga Beli</Label>
                <Input name="purchase_price" type="number" placeholder="Masukkan Harga Beli" className="mt-2" required />
              </div>
              <div className="w-1/2">
                <Label htmlFor="selling_price">Harga Jual</Label>
                <Input name="selling_price" type="number" placeholder="Masukkan Harga Jual" className="mt-2" required />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <DialogFooter>
            <Button type="submit">
              Simpan Perubahan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
