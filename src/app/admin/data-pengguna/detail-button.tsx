"use client"; // wajib jika pakai useRouter

import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UserDetailButton({ userId }: { userId: string }) {
  const router = useRouter();

  return (
    <Button
      size="sm"
      variant="prominent"
      onClick={() => router.push(`/admin/data-pengguna/detail-pengguna/`)}
      className="flex items-center gap-1"
    >
      Detail Pengguna
      <ChevronRight />
    </Button>
  );
}
