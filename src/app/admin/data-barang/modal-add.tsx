"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { addBarang } from "./action"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export function ModalAdd() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      await addBarang(formData)
      console.log("Data berhasil ditambahkan") 
      toast({
        title: "Data berhasil ditambahkan",
        description: "Data barang baru telah berhasil disimpan.",
      })
      setOpen(false) 
    } catch (error) {
      console.error("Error saat menambahkan data:", error)
      toast({
        title: "Gagal menambahkan data",
        description: "Terjadi kesalahan saat menyimpan data barang.",
        variant: "destructive",
      })
    }
  }

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
                <Label htmlFor="namabarang">Nama Barang</Label>
                <Input name="namabarang" placeholder="Masukkan Nama Barang" className="mt-2" required />
              </div>
              <div>
                <Label htmlFor="gambar">Foto Barang</Label>
                <Input name="gambar" type="file" className="mt-2" />
              </div>
              <div className="flex gap-5">
                <div className="w-1/2">
                  <Label htmlFor="hargabeli">Harga Beli</Label>
                  <Input name="hargabeli" type="number" placeholder="Masukkan Harga Beli" className="mt-2" required />
                </div>
                <div className="w-1/2">
                  <Label htmlFor="hargajual">Harga Jual</Label>
                  <Input name="hargajual" type="number" placeholder="Masukkan Harga Jual" className="mt-2" required />
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
  )
}