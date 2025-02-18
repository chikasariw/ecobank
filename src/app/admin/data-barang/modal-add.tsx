"use client";

import type React from "react";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Pastikan nama field sesuai dengan DTO
    const rawData = {
      name: formData.get("name")?.toString(),
      unit: Number(formData.get("unit")),
      purchase_price: Number(formData.get("purchase_price")),
      selling_price: Number(formData.get("selling_price")),
    };

    try {
      await addBarang(formData);
      toast({
        title: "Data berhasil ditambahkan",
        description: "Data barang baru telah berhasil disimpan.",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error saat menambahkan data:", error);
      toast({
        title: "Gagal menambahkan data",
        description: error.message || "Terjadi kesalahan saat menyimpan data barang.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
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
            <hr className="my-4" />
            <DialogFooter>
              <Button type="submit">
                <Plus /> Tambah Data
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

