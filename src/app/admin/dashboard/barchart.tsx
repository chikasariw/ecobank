"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "J", barang: 186 },
  { month: "F", barang: 305 },
  { month: "M", barang: 237 },
  { month: "A", barang: 73 },
  { month: "M", barang: 209 },
  { month: "J", barang: 214 },
  { month: "J", barang: 214 },
  { month: "A", barang: 214 },
  { month: "S", barang: 214 },
  { month: "O", barang: 214 },
  { month: "N", barang: 214 },
  { month: "D", barang: 214 },
]

// Warna Gradien untuk Tiap Bar
const gradientIds = ["gradientColor1", "gradientColor2", "gradientColor3"]

const chartConfig = {
  barang: {
    label: "Barang",
    color: "var(--eb-primary-green-700)",
  },
} satisfies ChartConfig

export function Barchart() {
  return (
    <Card>
      <CardHeader className="flex-row justify-between">
        <div>
          <CardTitle className="text-lg">Data sampah yang ditukar</CardTitle>
          <CardDescription>Januari - Desember 2024</CardDescription>
        </div>
        <div className="flex justify-end">
          <h5 className="text-eb-primary-green-700 font-bold text-end text-3xl">
            160<span className="text-sm">/gram</span>
          </h5>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            {/* Definisi Gradien */}
            <defs>
              {gradientIds.map((id, index) => (
                <linearGradient key={index} id={id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={index === 0 ? "#126D37" : index === 1 ? "#AFC606" : "#0B4221"} />
                  <stop offset="100%" stopColor={index === 0 ? "#21C562" : index === 1 ? "#EAFB6A" : "#126D37"} />
                </linearGradient>
              ))}
            </defs>

            {/* Bar dengan warna berbeda */}
            <Bar dataKey="barang" radius={24}>
              {chartData.map((_, index) => (
                <Cell key={index} fill={`url(#${gradientIds[index % gradientIds.length]})`} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
