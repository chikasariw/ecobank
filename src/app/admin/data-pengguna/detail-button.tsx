import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";
import ProfileDetail from "./profile-pengguna/profile-pengguna";

export type Pengguna = {
  id: string;
  gambar: string;
  email: string;
  nama: string;
};
export function DetailButton() {
  return (
    <Dialog>
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
          <ProfileDetail/>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
