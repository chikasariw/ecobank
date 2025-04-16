import { ColumnDef } from "@tanstack/react-table";
import type { financeData } from "./action";
import { DetailButton } from "./detail-button";

export const columns: ColumnDef<financeData>[] = [
  {
    id: "no",
    header: () => <div className="text-center">No.</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "type", // Perbaiki pengaksesan data dengan accessorKey yang tepat
    header: () => <div className="text-left">Tipe Transaksi</div>,
    cell: ({ row }) => {
      const type = row.original.type;
      console.log("Tipe Transaksi:", type);
      const displayType =
        type === "Income"
          ? "Pemasukan"
          : type === "Expenses"
          ? "Pengeluaran"
          : type;
      const badgeColor =
        type === "Income"
          ? "flex items-center bg-eb-primary-green-200 text-eb-primary-green-700"
          : type === "Expenses"
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
    accessorKey: "total_amount", // Sesuaikan dengan nama kolom yang benar
    header: () => <div className="text-left">Nominal Transaksi</div>,
    cell: ({ row }) => {
      const nominaltransaksi = parseFloat(row.getValue("total_amount"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(nominaltransaksi);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "profit", // Sesuaikan dengan nama kolom yang benar
    header: () => <div className="text-left">Keuntungan</div>,
    cell: ({ row }) => {
      const keuntungan = parseFloat(row.getValue("profit"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(keuntungan);
      return <div className="text-left font-medium">{formatted}</div>;
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
