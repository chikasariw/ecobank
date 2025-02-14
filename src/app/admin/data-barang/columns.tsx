import { ColumnDef } from "@tanstack/react-table";
import { ActionButtons } from "./action-buttons";
import { ModalImage } from "./modal-image";

export type Barang = {
    id: string;
    gambar: string;
    namabarang: string;
    hargajual: number;
    hargabeli: number;
};

export const columns: ColumnDef<Barang>[] = [
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
            console.log("Gambar URL:", row.original.gambar); // Debugging
            return <ModalImage src={row.original.gambar} />;
        },
    },
    {
        accessorKey: "namabarang",
        header: "Nama Barang",
        cell: ({ row }) => <div className="capitalize">{row.getValue("namabarang")}</div>,
    },
    {
        accessorKey: "hargabeli",
        header: () => <div className="text-left">Harga Beli</div>,
        cell: ({ row }) => {
            const hargabeli = parseFloat(row.getValue("hargabeli"));
            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(hargabeli);
            return <div className="text-left font-medium">{formatted} /gram</div>;
        },
    },
    {
        accessorKey: "hargajual",
        header: () => <div className="text-left">Harga Jual</div>,
        cell: ({ row }) => {
            const hargajual = parseFloat(row.getValue("hargajual"));
            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(hargajual);
            return <div className="text-left font-medium">{formatted} /gram</div>;
        },
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

