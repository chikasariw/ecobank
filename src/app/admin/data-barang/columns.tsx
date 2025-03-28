import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons";
// import { ModalImage } from "./modal-image";
import type { ItemData } from "./action"

export const columns: ColumnDef<ItemData>[] = [
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
        accessorKey: "unit",
        header: "Jumlah Barang",
        cell: ({ row }) => <div>{row.getValue("unit")} gram</div>,
    },
    {
        accessorFn: (row: ItemData) => row.purchase_price, // Explicit accessor
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
        accessorFn: (row: ItemData) => row.selling_price,
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
            <ActionButtons item={row.original} />
        ),
    },
];

