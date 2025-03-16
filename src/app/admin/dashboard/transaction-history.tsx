import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

interface Transaction {
    type: "Nabung" | "Ambil"
    amount: number
    date: string
    time: string
}

const transactions: Transaction[] = [
    { type: "Nabung", amount: 2000, date: "Minggu, 26/1/2025", time: "16:00" },
    { type: "Ambil", amount: -2000, date: "Minggu, 26/1/2025", time: "16:00" },
    { type: "Nabung", amount: 2000, date: "Minggu, 26/1/2025", time: "16:00" },
    { type: "Nabung", amount: 2000, date: "Minggu, 26/1/2025", time: "16:00" },
]

export function TransactionHistory() {
    return (
        <div className="w-full lg:w-2/3 mb-3">
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold">Riwayat Transaksi</h2>
                        <Link href="/admin/data-keuangan">
                        <Button size="sm" variant="prominent" className="font-bold rounded-3xl px-3">
                            Lihat Semua
                        </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {transactions.map((transaction, index) => (
                            <div key={index} className="flex items-center justify-between border-b pb-3">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-eb-primary-gray-100 p-3">
                                        {transaction.type === "Nabung" ? (
                                            <ArrowUpRight className="h-4 w-4 text-eb-primary-green-500" />
                                        ) : (
                                            <ArrowDownRight className="h-4 w-4 text-destructive-foreground" />
                                        )}
                                    </div>
                                    <div>
                                        <div className={transaction.type === "Nabung" ? "text-eb-primary-green-500 text-sm" : "text-destructive-foreground text-sm"}>
                                            {transaction.type}
                                        </div>
                                        <div className="text-xs text-eb-primary-gray-600">
                                            {transaction.time}, {transaction.date}
                                        </div>
                                    </div>
                                </div>
                                <div className={`font-medium ${transaction.type === "Nabung" ? "text-eb-primary-green-500 text-sm mr-2" : "text-destructive-foreground text-sm mr-2"}`}>
                                    {transaction.type === "Nabung" ? "+" : "-"}Rp. {Math.abs(transaction.amount).toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

