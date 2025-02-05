import { ColumnDef } from "@tanstack/react-table";
import { ModalTukar } from "./modal-tukar";

export type Pengguna = {
    id: string;
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
        id: "tarik tunai",
        header: () => <div className="text-left text-nowrap">Tarik Tunai</div>,
        cell: ({ row }) => (
            <ModalTukar />
        ),
    },
    

];

