import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronRight, Loader2 } from "lucide-react";
import { withdrawFunds } from "./action";

interface ModalTukarProps {
  userId: string;
}

export function ModalTukar({ userId }: ModalTukarProps) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(false); // State untuk mengontrol modal

  const handleWithdraw = async () => {
    setError(null);
    if (!amount || parseInt(amount) <= 0) {
      setError("Nominal harus lebih dari 0");
      return;
    }

    try {
      setLoading(true);
      await withdrawFunds(userId, parseInt(amount));
      setOpen(false); // Tutup modal setelah sukses
    } catch (err) {
      setError("Gagal melakukan tarik tunai. Silakan coba lagi.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="prominent"
          className="flex items-center gap-1"
        >
          Tarik Tunai
          <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[600px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Tarik Tunai</DialogTitle>
        </DialogHeader>
        <hr />
        <div className="grid gap-5">
          <div>
            <Label htmlFor="nominaltransaksi">Nominal Transaksi</Label>
            <div className="relative mt-2">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-eb-primary-gray-500 text-sm pl-3">
                Rp.
              </span>
              <Input
                id="nominaltransaksi"
                placeholder="Masukkan Nominal"
                type="number"
                className="pl-16"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={loading}
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
        </div>
        <hr />
        <DialogFooter>
          <Button onClick={handleWithdraw} disabled={loading}>
            {loading ? <Loader2 className="animate-spin mr-2" /> : null}
            Tarik Tunai
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
