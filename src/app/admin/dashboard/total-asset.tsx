"use client";

// Import komponen UI dan ikon
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Package } from "lucide-react";

// Tipe data untuk item
interface ItemData {
  item_id: string;
  name: string;
  unit: string;
}

// Props yang diterima oleh komponen
interface TotalAssetProps {
  items: ItemData[];
}

// Komponen total aset (barang)
export function TotalAsset({ items = [] }: TotalAssetProps) {
  return (
    <div className="flex-row w-full lg:w-1/3 justify-between">
      <Card>
        <CardHeader>
          <div className="space-y-1">
            <h2 className="text-xl font-bold">Total Asset</h2>
          </div>
        </CardHeader>

        <CardContent>
          {items.slice(0, 5).map((ItemData) => ( // Maksimal 5 item
            <div key={ItemData.item_id} className="flex items-center justify-between mb-4">

              {/* Kiri: Ikon dan info nama barang */}
              <div className="flex flex-row gap-3 items-center">
                <div className="flex w-11 h-11 bg-eb-primary-green-100 rounded-full items-center justify-center">
                  <Package className="text-eb-primary-green-400" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-medium text-md">{ItemData.name}</h4>
                  <p className="text-xs text-eb-primary-gray-600">Jumlah: {ItemData.unit} gram</p>
                </div>
              </div>

              {/* Kanan: jumlah barang */}
              {/* <h4 className="font-semibold text-xl text-eb-primary-green-500">
                {ItemData.unit} gram
              </h4> */}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
