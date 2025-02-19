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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { ColumnDef } from "@tanstack/react-table";
import { ChevronRight, ChevronLeft, Search } from "lucide-react";
import { getUser } from "./action";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface UserData {
  user_id: string;
  name: string;
  email: string;
  profile_url: string;
}

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export const DataTable = <TData extends UserData>({ data, columns }: DataTableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [tableData, setTableData] = React.useState<UserData[]>(data);

  const { toast } = useToast();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUser();
        setTableData(Array.isArray(result) ? result : []); // Pastikan result adalah array
        setError(null);
      } catch (err) {
        setError("Gagal mengambil data.");
        toast({
          title: "Gagal mengambil data",
          description: "Terjadi kesalahan saat mengambil data.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [toast]);
  

  const table = useReactTable({
    data: tableData || [], // Default ke array kosong jika `tableData` undefined
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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-4">
        <div className="relative justify-between w-full max-w-sm mb-1 sm:mb-0">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Cari Nama Pengguna..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
            className="w-full pl-12 pr-4 py-5 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-blue-800"
          />
        </div>
      </div>
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
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    Tidak ada data.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="link" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft /> Previous
        </Button>
        {Array.from({ length: table.getPageCount() }, (_, i) => (
          <Button
            key={i}
            variant={table.getState().pagination.pageIndex === i ? "primary" : "outline"}
            size="icon"
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </Button>
        ))}
        <Button variant="link" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
};