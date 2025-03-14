import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash, CircleX } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addBarang } from "./action";
import { updateBarang } from "./action";
import { DialogDescription } from "@radix-ui/react-dialog";

export function ActionButtons({ barangData }: { barangData: any }) {
  const { toast } = useToast();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [formData, setFormData] = useState(barangData); // Simpan data awal

  const handleEditClick = () => {
    setFormData(barangData); // Set data ke form saat tombol edit ditekan
    setOpenEdit(true);
  };

  const handleDelete = () => {
    toast({
      variant: "destructive",
      title: "Barang dihapus",
      description: "Item berhasil dihapus dari sistem.",
    });
    setOpenDelete(false);
  };

  return (
    <>
      <div className="flex justify-center gap-2">
        <Button size="sm" variant="prominent" onClick={handleEditClick}>
          <Pencil className="w-4 h-4" />
        </Button>
        <Button size="sm" variant="destructive" onClick={() => setOpenDelete(true)}>
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      {/* Modal Edit */}
      <ModalEdit open={openEdit} setOpen={setOpenEdit} formData={formData} setFormData={setFormData} />

      {/* Alert Konfirmasi Delete */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <div className="flex flex-col items-center text-center justify-center gap-4 my-3">
            <div className="bg-destructive text-destructive-foreground p-5 rounded-full">
              <CircleX className="w-14 h-14" />
            </div>
          </div>
          <DialogHeader className="flex items-center justify-center">
            <DialogTitle className="text-xl">Hapus Barang</DialogTitle>
            <DialogDescription className="text-eb-primary-gray-700">Apakah Anda yakin ingin menghapus barang ini?</DialogDescription>
          </DialogHeader>
          <div className="flex items-center justify-center gap-2 mt-3">
            <Button className="px-6" variant="ghost" onClick={() => setOpenDelete(false)}>Batal</Button>
            <Button className="px-6" variant="destructive" onClick={handleDelete}>Hapus</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}




function ModalEdit({ open, setOpen, formData, setFormData }: { open: boolean; setOpen: (open: boolean) => void; formData: any; setFormData: (data: any) => void }) {
  const { toast } = useToast();

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   try {
  //     await addBarang(formData);
  //     toast({ title: "Data berhasil diperbarui", description: "Perubahan telah disimpan." });
  //     setOpen(false);
  //   } catch (error) {
  //     toast({ title: "Gagal memperbarui data", description: (error as Error).message || "Terjadi kesalahan.", variant: "destructive" });
  //   }
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await updateBarang(formData); // Gunakan updateBarang di sini
      toast({ title: "Data berhasil diperbarui", description: "Perubahan telah disimpan." });
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
              <Input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="unit">Jumlah Unit</Label>
              <Input name="unit" type="number" value={formData.unit} onChange={(e) => setFormData({ ...formData, unit: e.target.value })} required />
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Label htmlFor="purchase_price">Harga Beli</Label>
                <Input name="purchase_price" type="number" value={formData.purchase_price} onChange={(e) => setFormData({ ...formData, purchase_price: parseFloat(e.target.value) })} required />
              </div>
              <div className="w-1/2">
                <Label htmlFor="selling_price">Harga Jual</Label>
                <Input name="selling_price" type="number" value={formData.selling_price} onChange={(e) => setFormData({ ...formData, selling_price: parseFloat(e.target.value) })} required />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <DialogFooter>
            <Button type="submit">Simpan Perubahan</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
