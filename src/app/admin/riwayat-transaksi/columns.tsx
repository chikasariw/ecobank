import { ColumnDef } from "@tanstack/react-table";
import { DetailButton } from "./detail-button";
import type { transactionData } from "./action";

export const columns: ColumnDef<transactionData>[] = [
  {
    id: "no",
    header: () => <div className="text-center">No.</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: "Email Warga Hijau",
    cell: ({ row }) => (
      <div className="lowercase text-nowrap">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "tipetransaksi",
    header: "Tipe Transaksi",
    cell: ({ row }) => {
      const type = row.original.type;
      console.log("Tipe Transaksi:", type);
      const displayType =
        type === "Deposit" ? "Nabung" : type === "Withdraw" ? "Ambil" : type;
      const badgeColor =
        type === "Deposit"
          ? "flex items-center bg-eb-primary-green-200 text-eb-primary-green-700"
          : type === "Withdraw"
          ? "bg-eb-primary-yellow-200 text-eb-primary-yellow-800"
          : "bg-gray-500";
      return (
        <div
          className={`capitalize px-3 py-1 rounded-3xl text-center text-sm font-medium w-fit ${badgeColor}`}
        >
          {displayType}
        </div>
      );
    },
  },
  {
    accessorKey: "total_amount",
    header: () => <div className="text-left">Nominal Transaksi</div>,
    cell: ({ row }) => {
      const total_amount = parseFloat(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("id-ID").format(total_amount);
      return <div className="text-left font-medium">Rp. {formatted}</div>;
    },
  },
  {
    accessorKey: "balance",
    header: () => <div className="text-left">Saldo Akhir</div>,
    cell: ({ row }) => {
      const balance = parseFloat(row.getValue("balance"));
      const formatted = new Intl.NumberFormat("id-ID").format(balance);
      return <div className="text-left font-medium">Rp. {formatted}</div>;
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-left">Tanggal Transaksi</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      const formattedDate = `${String(date.getDate()).padStart(
        2,
        "0"
      )}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${date.getFullYear()} ${String(date.getHours()).padStart(
        2,
        "0"
      )}.${String(date.getMinutes()).padStart(2, "0")}`;
      return <div className="lowercase text-left">{formattedDate}</div>;
    },
  },
  {
    id: "detail",
    header: () => <div className="text-left text-nowrap">Detail</div>,
    cell: ({ row }) => (
      <DetailButton transactionId={row.original.transaction_id} />
    ),
  },
];
