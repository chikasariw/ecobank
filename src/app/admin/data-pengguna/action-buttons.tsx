import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

export function ActionButtons({ onEdit, onDelete }: { onEdit?: () => void; onDelete?: () => void }) {
  return (
    <div className="flex justify-center gap-2">
      <Button size="sm" variant="prominent" onClick={onEdit}>
        <Pencil className="w-4 h-4" />
      </Button>
      <Button size="sm" variant="destructive" onClick={onDelete}>
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}