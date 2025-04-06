import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import ProfileDetail from "./profile-pengguna/profile-pengguna";
import type { userData } from "./action";
import { getUserById } from "./action";

interface DetailButtonProps {
  userId: string;
}

export function DetailButton({ userId }: DetailButtonProps) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<userData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open && userId) {
      setLoading(true);
      getUserById(userId)
        .then((data) => {
          setData(Array.isArray(data) ? data[0] || null : data); // 🔥 Fix di sini
        })
        .catch(() => setData(null))
        .finally(() => setLoading(false));
    }
  }, [open, userId]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="prominent"
          className="flex items-center gap-1"
        >
          Detail
          <ChevronRight />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:max-w-[900px] rounded-xl">
        <DialogHeader>
          <DialogTitle>Detail Pengguna</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <hr className="mx-0 px-0" />
        <div className="grid gap-5">
          <div>
            <ProfileDetail data={data} isLoading={loading} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
