"use client";

import * as React from "react";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
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
import { ChevronRight, ChevronLeft } from "lucide-react";
// import { ModalTukar } from "./modal-tukar";
import { Search } from "lucide-react";
import type { userData } from "./action";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<userData>[];
}

export const DataTable = <TData extends userData>({
  data,
  columns,
}: DataTableProps<TData>) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
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

  // Pagination Logic
  const currentPage = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const maxVisiblePages = 5;

  let startPage = Math.max(0, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages;
  if (endPage > pageCount) {
    endPage = pageCount;
    startPage = Math.max(0, endPage - maxVisiblePages);
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="relative justify-between w-full max-w-sm">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <Input
            placeholder="Cari Email..."
            value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("email")?.setFilterValue(event.target.value)
            }
            className="w-full pl-12 pr-4 py-5 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eb-primary-green-800 focus:border-eb-primary-green-800"
          />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <div className="overflow-x-auto">
          <Table className="min-w-full">
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    Tidak ada data.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      <div className="overflow-x-auto">
          <div className="w-full inline-flex pt-4 pb-2 sm:pb-0">
            <div className="w-max ml-auto flex items-center space-x-2 justify-center sm:justify-end">

              <Button
                variant="link"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft /> Sebelumnya
              </Button>

              {startPage > 0 && (
                <Button variant="ghost" size="icon" disabled>
                  ...
                </Button>
              )}

              {Array.from({ length: endPage - startPage }, (_, i) => {
                const pageNumber = startPage + i;
                return (
                  <Button
                    key={pageNumber}
                    variant={
                      table.getState().pagination.pageIndex === pageNumber
                        ? "primary"
                        : "outline"
                    }
                    size="icon"
                    onClick={() => table.setPageIndex(pageNumber)}
                    className="!min-w-10 !h-10 text-sm"
                  >
                    {pageNumber + 1}
                  </Button>
                );
              })}

              {endPage < pageCount && (
                <Button variant="ghost" size="icon" disabled>
                  ...
                </Button>
              )}

              <Button
                variant="link"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Selanjutnya <ChevronRight />
              </Button>
            </div>
          </div>
      </div>
    </div>
  );
};
