"use client";

import { useEffect, useState } from "react";
import { getBarang, createIncomeAction } from "./action";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import type { ItemData, IncomeItemData } from "./action";

interface ModalAddProps {
  email: string;
  clearItems: () => void;
}

export default function ModalAdd({ email, clearItems }: ModalAddProps) {
  const [barangList, setBarangList] = useState<ItemData[]>([]);
  const [selectedBarang, setSelectedBarang] = useState<ItemData | null>(null);
  const [unit, setUnit] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);
  const [itemsToSend, setItemsToSend] = useState<IncomeItemData[]>([]);
  const [inputEmail, setInputEmail] = useState(email || "");

  const total_amount = itemsToSend.reduce(
    (acc, item) => acc + item.sub_total,
    0
  );

  const handleAddItem = () => {
    if (!selectedBarang || unit <= 0 || subTotal <= 0) {
      alert("Lengkapi pilihan barang, jumlah, dan nominal transaksi.");
      return;
    }

    const newItem: IncomeItemData = {
      item_id: selectedBarang.item_id,
      name: selectedBarang.name,
      unit,
      purchase_price: Number(selectedBarang.purchase_price), // Boleh kosong karena gak dipakai
      sub_total: subTotal,
    };

    setItemsToSend([...itemsToSend, newItem]);
    setSelectedBarang(null);
    setUnit(0);
    setSubTotal(0);
  };

  async function handleSubmit() {
    if (itemsToSend.length === 0) {
      alert("Tambahkan minimal satu item untuk ditukar!");
      return;
    }

    const response = await createIncomeAction(
      inputEmail,
      total_amount,
      itemsToSend
    );
    if (!response) {
      alert("Terjadi kesalahan tak terduga saat memproses transaksi.");
      return;
    }

    if ("error" in response) {
      alert(`Gagal melakukan transaksi: ${response.error}`);
    } else {
      alert("Transaksi berhasil!");
      clearItems();
      setItemsToSend([]);
    }
  }

  useEffect(() => {
    const fetchBarang = async () => {
      const result = await getBarang();
      setBarangList(result);
    };
    fetchBarang();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Data
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Tambah Data Uang Masuk</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <hr className="mx-0 px-0" />

        <div className="grid gap-5 mt-4">
          {/* Email hidden */}
          <div>
            <Label htmlFor="emailPenukar">Email Penukar</Label>
            <Input
              id="emailPenukar"
              type="email"
              placeholder="nama@email.com"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              className="mt-2"
            />
          </div>
          <div>
            <Label htmlFor="barang">Pilih Nama Barang yang Ditukar</Label>
            <Select
              value={selectedBarang?.item_id}
              onValueChange={(id) => {
                const barang = barangList.find((b) => b.item_id === id);
                setSelectedBarang(barang || null);
              }}
            >
              <SelectTrigger className="mt-2">
                <SelectValue placeholder="Pilih Nama Barang" />
              </SelectTrigger>
              <SelectContent>
                {barangList.map((barang) => (
                  <SelectItem key={barang.item_id} value={barang.item_id}>
                    {barang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="jumlahtukar">Jumlah Tukar</Label>
            <div className="relative mt-2">
              <Input
                id="jumlahtukar"
                placeholder="Masukkan Jumlah"
                type="number"
                value={unit}
                onChange={(e) => setUnit(Number(e.target.value))}
                className="pr-16"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                /gram
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="nominaltransaksi">Nominal Transaksi Masuk</Label>
            <div className="relative mt-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                Rp.
              </span>
              <Input
                id="nominaltransaksi"
                type="number"
                value={subTotal}
                onChange={(e) => setSubTotal(Number(e.target.value))}
                className="pl-16"
              />
            </div>
          </div>
        </div>

        <Button type="button" variant="secondary" onClick={handleAddItem}>
          <Plus className="mr-2 h-4 w-4" />
          Tambah ke Daftar
        </Button>

        {/* Preview Items */}
        {itemsToSend.length > 0 && (
          <div className="mt-6">
            <h4 className="text-md font-semibold mb-2">
              Daftar Barang Ditukar:
            </h4>
            <ul className="list-disc list-inside text-sm">
              {itemsToSend.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.unit} gram - Rp{" "}
                  {item.sub_total.toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr className="mx-0 px-0 mt-4" />

        <DialogFooter className="mt-4">
          <Button onClick={handleSubmit}>
            <Plus className="mr-2 h-4 w-4" />
            Simpan Transaksi
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
