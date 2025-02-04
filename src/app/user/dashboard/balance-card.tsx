import { Button } from "@/components/ui/button";

export function BalanceCard() {
  return (
    <div className="relative w-full lg:w-1/3 overflow-hidden rounded-3xl bg-gradient-to-r from-eb-primary-green-800 to-eb-primary-green-600 p-6 text-white mb-3">
      <div className="">
        <div className="radial-yellow-card"></div>
        <div className="radial-yellow-card-right"></div>
      </div>

      <div className="space-y-1">
        <h2 className="text-md font-medium text-eb-primary-green-100">
          Total Uang
        </h2>
        <p className="text-xs text-eb-primary-green-200">
          Poin Coika ditukarkan pengguna
        </p>
      </div>
      <div className="text-4xl font-bold mt-4 mb-5">Rp. 210.000</div>
      <Button className="text-sm font-medium inset-0" variant="backdrop">
        Ambil Uang
      </Button>
    </div>
  );
}
