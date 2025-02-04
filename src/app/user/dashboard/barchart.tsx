"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { month: "Januari", barang: 186 },
  { month: "Februari", barang: 305 },
  { month: "Maret", barang: 237 },
  { month: "April", barang: 73 },
  { month: "Mei", barang: 209 },
  { month: "Juni", barang: 214 },
]

const chartConfig = {
  barang: {
    label: "Barang",
    color: "var(--eb-primary-green-700)",
  },
} satisfies ChartConfig

export function Barchart() {
  return (
    <Card className="bg-eb-primary-gray-200">
      <CardHeader className="flex-row justify-between">
        <div>
          <CardTitle className="text-lg">Data sampah yang ditukar</CardTitle>
          <CardDescription>Januari - Juni 2024</CardDescription>
        </div>
        <div className="flex justify-end">
          <h5 className="text-eb-primary-green-700 font-bold text-end text-3xl">160<span className="text-sm">/gram</span></h5>
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
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <defs>
              <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--eb-primary-green-600)" />
                <stop offset="100%" stopColor="var(--eb-primary-green-700)" />
              </linearGradient>
            </defs>
            <Bar dataKey="barang" fill="url(#gradientColor)" radius={24} />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
