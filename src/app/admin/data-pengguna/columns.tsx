import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons"; 
import { DetailButton } from "./detail-button";

export type Pengguna = {
    id: string;
    gambar: string;
    email: string;
    nama: string;
};

export const columns: ColumnDef<Pengguna>[] = [
    {
        id: "no",
        header: () => <div className="text-center">No.</div>, 
        cell: ({ row }) => <div className="text-center">{row.index + 1}</div>, 
        enableSorting: false,
        enableHiding: false,
    },  
    {
        accessorKey: "gambar",
        header: "Gambar",
        cell: ({ row }) => <div className="capitalize text-nowrap">{row.getValue("gambar")}</div>,
    },    
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div className="lowercase text-nowrap">{row.getValue("email")}</div>,
    },    
    {
        accessorKey: "nama",
        header: () => <div className="text-start">Nama</div>,
        cell: ({ row }) => <div className="capitalize text-start text-nowrap">{row.getValue("nama")}</div>,
    },
    {
        id: "detail",
        header: () => <div className="text-left text-nowrap">Detail</div>,
        cell: ({ row }) => (
            <DetailButton/>
        ),
    },
    {
        id: "actions",
        header: () => <div className="text-center">Aksi</div>,
        cell: ({ row }) => (
            <ActionButtons
                onEdit={() => console.log("Edit", row.original.id)}
                onDelete={() => console.log("Delete", row.original.id)}
            />
        ),
    },
];

