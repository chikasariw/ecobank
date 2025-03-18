import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons"; 
import { UserDetailButton } from "./detail-button";
import { ModalImage } from "./modal-image";

export type Pengguna = {
    user_id: string;
    name: string;
    email: string;
    profile_url: string;
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
            id: "modalimage",
            header: () => <div className="text-left">Gambar</div>,
            cell: ({ row }) => {
                console.log("Gambar URL:", row.original.profile_url); 
                return <ModalImage src={row.original.profile_url} />;
            },
        },   
    {
        accessorKey: "email",
        header: "Email",
        cell: ({ row }) => <div className="lowercase text-nowrap">{row.getValue("email")}</div>,
    },    
    {
        accessorKey: "name",
        header: () => <div className="text-start">Nama</div>,
        cell: ({ row }) => <div className="capitalize text-start text-nowrap">{row.getValue("name")}</div>,
    },
    {
        id: "detail",
        header: () => <div className="text-left text-nowrap">Detail</div>,
        cell: ({ row }) => (
            <UserDetailButton userId={row.original.user_id} />
        ),
    },
    {
        id: "actions",
        header: () => <div className="text-center">Aksi</div>,
        cell: ({ row }) => (
            <ActionButtons
                onEdit={() => console.log("Edit", row.original.user_id)}
                onDelete={() => console.log("Delete", row.original.user_id)}
            />
        ),
    },
];

