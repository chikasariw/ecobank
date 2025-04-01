"use client";

import * as React from "react";
import {
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef } from "@tanstack/react-table";
import { ChevronRight, ChevronLeft, Search, AlertCircle } from "lucide-react";
import { getTransaction } from "./action";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export interface TransactionData {
  transaction_id: string;
  name: string;
  email: string;
  type: string;
  total_amount: number;
  created_at: string;
  balance: number;
}


interface DataTableProps<TData> {
  data: TData[]
  columns: ColumnDef<TransactionData>[];
}
export const DataTable = <TData extends TransactionData>({ data, columns }: DataTableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [tableData, setTableData] = React.useState<TransactionData[]>(data);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const { toast } = useToast();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getTransaction();
        setTableData(Array.isArray(result) ? result : []);
        setError(null);
      } catch (error) {
        setError("Gagal mengambil data transaksi.")
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data transaksi.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [toast]);

  const table = useReactTable<TransactionData>({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="flex items-center justify-between gap-4 py-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Cari berdasarkan email..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("email")?.setFilterValue(event.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-3xl border border-gray-300 focus:ring-2 focus:ring-green-600 focus:border-green-600"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        {loading ? (
          <div className="p-3 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>
        ) : error ? (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        ) : (
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="link" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft />
          Previous
        </Button>

        {Array.from({ length: table.getPageCount() }, (_, i) => {
          if (i < 2 || i > table.getPageCount() - 3 || (i >= table.getState().pagination.pageIndex - 1 && i <= table.getState().pagination.pageIndex + 1)) {
            return (
              <Button key={i} variant={table.getState().pagination.pageIndex === i ? "primary" : "outline"} size="icon" onClick={() => table.setPageIndex(i)}>
                {i + 1}
              </Button>
            );
          } else if (i === 2 || i === table.getPageCount() - 3) {
            return <span key={i}>...</span>;
          }
          return null;
        })}

        <Button variant="link" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};
