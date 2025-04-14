"use client"
import { useState, useCallback  } from "react"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type AddProductButtonProps = {
  onClick?: () => void
  onChangeCount?: (count: number) => void // Callback untuk mengirim jumlah produk
}

export function AddProductButton({ onClick, onChangeCount }: AddProductButtonProps) {
  const [count, setCount] = useState(0)

  const updateCount = useCallback((newCount: number) => {
    setCount(newCount);
    onChangeCount?.(newCount);
  }, [onChangeCount]);


  return (
    <div className="grid">
      {count === 0 ? (
        <Button
          onClick={() => {
            if (count === 0) {
              onClick?.(); // Pastikan hanya dipanggil pertama kali
            }
            updateCount(1);
          }}
          className="w-full h-8"
          variant="prominent"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Produk</span>
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => updateCount(Math.max(count - 1, 0))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-eb-primary-gray-200"
            variant="prominent"
          >
            <Minus className="w-4 h-4 text-black" />
          </Button>
          <Input
            type="number"
            value={count}
            onChange={(e) => updateCount(parseInt(e.target.value) || 0)}
            className="w-full h-8 text-center bg-eb-primary-gray-100 rounded-full outline-none border border-gray-300"
          />
          <Button
            onClick={() => updateCount(count + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-eb-primary-gray-200"
            variant="prominent"
          >
            <Plus className="w-4 h-4 text-black" />
          </Button>
        </div>
      )}
    </div>
  )
}
