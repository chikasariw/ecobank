import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function DetailButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <Button size="sm" variant="prominent" onClick={() => setIsOpen(true)} className="flex items-center gap-1">
        Detail Pengguna
        <ChevronRight />
      </Button>
    </div>
  );
}
