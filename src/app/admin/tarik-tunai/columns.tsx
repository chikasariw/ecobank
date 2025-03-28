import { ColumnDef } from "@tanstack/react-table";
import { ModalTukar } from "./modal-tukar";
import type { userData } from "./action";

export const columns: ColumnDef<userData>[] = [
  {
    id: "no",
    header: () => <div className="text-center">No.</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-start">Nama</div>,
    cell: ({ row }) => (
      <div className="capitalize text-start text-nowrap">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="lowercase text-nowrap">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "balance",
    header: () => <div className="text-start">Saldo</div>,
    cell: ({ row }) => (
      <div className="text-start text-nowrap">
        Rp. {new Intl.NumberFormat("id-ID").format(row.getValue("balance"))}
      </div>
    ),
  },
  {
    id: "detail",
    header: () => <div className="text-left text-nowrap">Detail</div>,
    cell: ({ row }) => <ModalTukar userId={row.original.user_id} />,
  },
];
