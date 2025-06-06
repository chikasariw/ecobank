"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { addBarang } from "./action";
import { useToast } from "@/hooks/use-toast";

export function ModalAdd() {
  const { toast } = useToast();
  const router = useRouter(); // Inisialisasi router
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    try {
      await addBarang(formData);
      toast({
        title: "Data berhasil ditambahkan",
        description: "Data barang baru telah berhasil disimpan.",
      });
      form.reset();
      setOpen(false);
      setError(null);
      router.refresh(); // Perbarui halaman tanpa reload
    } catch (error) {
      console.error("Gagal menambahkan data:", error);
      setError("Gagal menambahkan data barang. Silakan coba lagi nanti.");
      toast({
        title: "Gagal menambahkan data",
        description: "Terjadi kesalahan saat menambahkan data barang.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus /> Tambah Data
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Tambah Data</DialogTitle>
        </DialogHeader>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="grid gap-5">
            <div>
              <Label htmlFor="name">Foto Barang</Label>
              <Input
                type="file"
                name="file"
                placeholder="Unggah Foto Barang"
                className="mt-2"
                required
              />
            </div>
            <div>
              <Label htmlFor="name">Nama Barang</Label>
              <Input
                name="name"
                placeholder="Masukkan Nama Barang"
                className="mt-2"
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
                  required
                />
              </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <hr className="my-4" />
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                "Menambahkan..."
              ) : (
                <>
                  <Plus /> Tambah Data
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
