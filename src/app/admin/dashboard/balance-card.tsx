import { Button } from "@/components/ui/button"

export function BalanceCard() {
  return (
    <div className="w-full lg:w-1/3 overflow-hidden rounded-3xl bg-gradient-to-br from-eb-primary-green-500 to-eb-primary-green-400 p-6 text-white mb-3">
      <div className="space-y-1">
        <h2 className="text-sm font-medium text-eb-primary-green-100">Total Uang</h2>
        <p className="text-xs texteb-primary-green-200">Poin Coika ditukarkan pengguna</p>
      </div>
      <div className="mt-4 text-4xl font-bold">Rp. 210.000</div>
      <Button className="mt-4">
        Ambil Uang
      </Button>
    </div>
  )
}
