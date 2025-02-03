import { ColumnDef } from "@tanstack/react-table";
import { DetailButton } from "@/app/admin/data-pengguna/detail-pengguna/riwayat-penukaran/detail-button";

export type Barang = {
  id: string;
  tipetransaksi: string;
  nominaltransaksi: number;
  tanggaltransaksi: string;
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
    accessorKey: "tipetransaksi",
    header: "Tipe Transaksi",
    cell: ({ row }) => {
      const type = row.original.tipetransaksi;
      console.log("Tipe Transaksi:", type);
      const badgeColor =
        type === "nabung"
          ? "flex items-center bg-eb-primary-green-200 text-eb-primary-green-700"
          : type === "ambil"
          ? "bg-eb-primary-yellow-200 text-eb-primary-yellow-800"
          : "bg-gray-500";
      return (
        <div
          className={`capitalize px-3 py-1 rounded-3xl text-center text-sm font-medium w-fit ${badgeColor}`}
        >
          {type}
        </div>
      );
    },
  },
  {
    accessorKey: "nominaltransaksi",
    header: () => <div className="text-left">Nominal Transaksi</div>,
    cell: ({ row }) => {
      const nominaltransaksi = parseFloat(row.getValue("nominaltransaksi"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(nominaltransaksi);
      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "tanggaltransaksi",
    header: () => <div className="text-left">Tanggal Transaksi</div>,
    cell: ({ row }) => (
      <div className="lowercase text-left">
        {row.getValue("tanggaltransaksi")}
      </div>
    ),
  },
  {
    id: "detail",
    header: () => <div className="text-left text-nowrap">Detail</div>,
    cell: ({ row }) => <DetailButton />,
  },
];
