"use client"
import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AddProductButton() {
  const [count, setCount] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10)
    if (!isNaN(value) && value >= 0) {
      setCount(value)
    }
  }

  return (
    <div className="grid">
      {count === 0 ? (
        <Button
          onClick={() => setCount(1)}
          className="w-full h-8"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </Button>
      ) : (
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-eb-primary-gray-200"
            variant="prominent"
          >
            <Minus className="w-4 h-4 text-black" />
          </Button>
          <Input
            type="number"
            value={count}
            onChange={handleChange}
            className="w-full h-8 text-center bg-eb-primary-gray-100 rounded-full outline-none border border-gray-300"
          />
          <Button
            onClick={() => setCount(count + 1)}
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
