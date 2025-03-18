import { ColumnDef } from "@tanstack/react-table";

interface TransactionData {
    transaction_id: string;
    name: string;
    email: string;
    total_amount: number;
    current_balance: number;
    type: string;
  }

export const columns: ColumnDef<TransactionData>[] = [
    {
        id: "no",
        header: () => <div className="text-center">No.</div>, 
        cell: ({ row }) => <div className="text-center">{row.index + 1}</div>, 
        enableSorting: false,
        enableHiding: false,
    },   
    {
        accessorKey: "Warga Hijau",
        header: "Warga Hijau",
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },    
    {
        accessorKey: "Email",
        header: "Email",
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    }, 
    {
        accessorKey: "totalpenukaran",
        header: () => <div className="text-left">Total Penukaran</div>,
        cell: ({ row }) => (
            <div className="lowercase text-left">
                {row.getValue("totalpenukaran")} gram
            </div>
        ),
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

