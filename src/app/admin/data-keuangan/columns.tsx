import { ColumnDef } from "@tanstack/react-table";

export type Barang = {
    id: string;
    namabarang: string;
    penukar: string;
    totalpenukaran: number;
    satuan: string;
    hargapenukaran: number;
    waktupenukaran: string;
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
        accessorKey: "namabarang",
        header: "Nama Barang Ditukar",
        cell: ({ row }) => <div className="capitalize">{row.getValue("namabarang")}</div>,
    },    
    {
        accessorKey: "penukar",
        header: "Penukar",
        cell: ({ row }) => <div className="lowercase">{row.getValue("penukar")}</div>,
    }, 
    {
        accessorKey: "totalpenukaran",
        header: () => <div className="text-left">Total Penukaran</div>,
        cell: ({ row }) => <div className="lowercase text-left">{row.getValue("totalpenukaran")}</div>,
    },
    {
        accessorKey: "satuan",
        header: () => <div className="text-left">Satuan</div>,
        cell: ({ row }) => <div className="lowercase text-left">{row.getValue("satuan")}</div>,
    },   
    {
        accessorKey: "hargapenukaran",
        header: () => <div className="text-left">Harga Penukaran</div>,
        cell: ({ row }) => {
            const hargapenukaran = parseFloat(row.getValue("hargapenukaran"));
            const formatted = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            }).format(hargapenukaran);
            return <div className="text-left font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "waktupenukaran",
        header: () => <div className="text-left">Waktu, Tanggal Penukaran</div>,
        cell: ({ row }) => <div className="capitalize text-left">{row.getValue("waktupenukaran")}</div>,
    },  
];

