import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons";
import { DetailButton } from "./detail-button";
import { ModalImage } from "./modal-image";
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
    accessorKey: "profile_url",
    header: () => <div className="text-left">Gambar</div>,
    cell: ({ row }) => <ModalImage imagesrc={row.getValue("profile_url")} />,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => (
      <div className="lowercase text-nowrap">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-start">Nama</div>,
    cell: ({ row }) => (
      <div className="capitalize text-start text-nowrap truncate overflow-hidden">
        {row.getValue("name")}
      </div>
    ),
  },
  {
    id: "detail",
    header: () => <div className="text-left text-nowrap">Detail</div>,
    cell: ({ row }) => <DetailButton userId={row.original.user_id} />,
  },
  {
    id: "actions",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => (
      <ActionButtons item={row.original} />
    ),
  },
];
