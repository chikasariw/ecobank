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
          <div className="space-y-3">
            {items.slice(0, 5).map((item, index) => (
              <div
                key={item.item_id}
                className={`flex items-center justify-between ${
                  index < 4 ? "border-b pb-3" : ""
                }`}
              >
                {/* Kiri: Ikon dan info nama barang */}
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex bg-eb-primary-green-100 rounded-full items-center justify-center h-10 w-10">
                    <Package className="text-eb-primary-green-500 h-5 w-5" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-sm">{item.name}</h4>
                    <p className="text-xs text-eb-primary-gray-600">
                      Jumlah: {item.unit} gram
                    </p>
                  </div>
                </div>

                {/* Kanan: jumlah barang */}
                {/* <h4 className="font-semibold text-xl text-eb-primary-green-500">
                {ItemData.unit} gram
              </h4> */}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
