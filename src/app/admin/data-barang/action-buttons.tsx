import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash, CircleAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { editBarang, deleteBarang } from "./action";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  // AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Tipe data item
type ItemData = {
  item_id: string;
  name: string;
  purchase_price: string;
  selling_price: string;
};

export function ActionButtons({ item }: { item: ItemData }) {
  const { toast } = useToast();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemData>();

  const alertDialogRef = useRef<HTMLDivElement | null>(null);

  const handleDelete = async () => {
    try {
      await deleteBarang(item.item_id);
      toast({
        variant: "destructive",
        title: "Barang dihapus",
        description: "Item berhasil dihapus dari sistem.",
      });
      setOpenDelete(false); // Tutup modal setelah delete berhasil
    } catch (error) {
      console.error("Gagal menghapus barang:", error);
      toast({
        title: "Gagal menghapus data",
        description: (error as Error).message || "Terjadi kesalahan.",
        variant: "destructive",
      });
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      alertDialogRef.current &&
      !alertDialogRef.current.contains(event.target as Node)
    ) {
      setOpenDelete(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

    console.log("Selected Item:", selectedItem);
    console.log("Open Edit:", openEdit);
  }, [handleClickOutside, selectedItem, openEdit]);

  return (
    <>
      <div className="flex justify-center gap-2">
        <Button
          size="sm"
          variant="prominent"
          onClick={() => {
            setSelectedItem(item);
            setOpenEdit(true);
          }}
        >
          <Pencil className="w-4 h-4" />
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => setOpenDelete(true)}
        >
          <Trash className="w-4 h-4" />
        </Button>
      </div>

      {/* Modal Edit */}
      {selectedItem && (
        <ModalEdit open={openEdit} setOpen={setOpenEdit} item={selectedItem} />
      )}

      {/* Alert Konfirmasi Delete */}
      <AlertDialog open={openDelete} onOpenChange={setOpenDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="hidden">
              Apakah Anda yakin ingin menghapus barang ini?
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="flex flex-col items-center justify-center text-center gap-4 my-3">
                <div className="bg-destructive text-destructive-foreground p-5 rounded-full">
                  <CircleAlert className="w-16 h-16" />
                </div>
                <p className="text-base font-semibold text-eb-primary-gray-800">
                  Apakah Anda yakin ingin menghapus barang ini?
                </p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button variant="prominent" onClick={() => setOpenDelete(false)}>
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

export function ModalEdit({
  open,
  setOpen,
  item,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  item: ItemData;
}) {
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!item) return;

    const formData = new FormData(event.currentTarget);

    try {
      await editBarang(item.item_id, formData);
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
              <Input
                name="name"
                placeholder="Masukkan Nama Barang"
                className="mt-2"
                defaultValue={item?.name || ""}
                required
              />
            </div>
            <div className="flex gap-5">
              <div className="w-1/2">
                <Label htmlFor="purchase_price">Harga Beli</Label>
                <Input
                  name="purchase_price"
                  type="number"
                  placeholder="Masukkan Harga Beli"
                  className="mt-2"
                  defaultValue={item?.purchase_price || ""}
                  required
                />
              </div>
              <div className="w-1/2">
                <Label htmlFor="selling_price">Harga Jual</Label>
                <Input
                  name="selling_price"
                  type="number"
                  placeholder="Masukkan Harga Jual"
                  className="mt-2"
                  defaultValue={item?.selling_price || ""}
                  required
                />
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
