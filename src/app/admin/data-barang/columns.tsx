import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons";
// import { ModalImage } from "./modal-image";

export type Barang = {
    item_id: string;
    name: string;
    unit: string;
    purchase_price: number;
    selling_price: number;
};

export const columns: ColumnDef<Barang>[] = [
    {
        id: "no",
        header: () => <div className="text-center">No.</div>,
        cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    // {
    //     id: "modalimage",
    //     header: () => <div className="text-left">Gambar</div>,
    //     cell: ({ row }) => {
    //         const gambarUrl = row.original.gambar;
    //         return gambarUrl ? <ModalImage src={gambarUrl} /> : null;
    //     },
    // },
    {
        accessorKey: "name",
        header: "Nama Barang",
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },
    {
        accessorFn: (row: Barang) => row.purchase_price, // Explicit accessor
        id: "purchase_price",
        header: "Harga Beli",
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(row.getValue("purchase_price"));
            return <div className="text-left font-medium">{formatted} /gram</div>;
        },
    },
    {
        accessorFn: (row: Barang) => row.selling_price,
        id: "selling_price",
        header: "Harga Jual",
        cell: ({ row }) => {
            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(row.getValue("selling_price"));
            return <div className="text-left font-medium">{formatted} /gram</div>;
        },
    },
    {
        id: "actions",
        header: () => <div className="text-center">Aksi</div>,
        cell: ({ row }) => (
            <ActionButtons barangData={row.original} />
        ),
    },
];

