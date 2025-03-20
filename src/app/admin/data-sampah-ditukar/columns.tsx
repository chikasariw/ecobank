import { ColumnDef } from "@tanstack/react-table";

interface TransactionData {
    transaction_id: string;
    total_amount: number;
    type: string;
    created_at: string;
    wallet_id: string;
    balance: number;
    user_id: string;
    name: string;
    email: string;
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
    accessorKey: "name",
    header: "Warga Hijau",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "type",
    header: () => <div className="text-left">Jenis Transaksi</div>,
    cell: ({ row }) => (
      <div className="text-left">
        {row.getValue("type")}
      </div>
    ),
  },
  {
    accessorKey: "total_amount",
    header: () => <div className="text-left">Saldo Saat Ini</div>,
    cell: ({ row }) => {
      const total_amount = parseFloat(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(total_amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: "Tanggal Transaksi",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(2, "0")}-${date.getFullYear()} ${String(date.getHours()).padStart(2, "0")}.${String(date.getMinutes()).padStart(2, "0")}`;
      return <div className="text-left">{formattedDate}</div>;
    },
  },
];
