"use client";

import * as React from "react";
import {
  ColumnDef,
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
// import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronRight, ChevronLeft, CalendarIcon } from "lucide-react";
import ModalAdd from "./modal-add";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import type { financeData } from "./action";

interface DataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<financeData>[];
}

export const DataTable = <TData extends financeData>({
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
  const [periode, setPeriode] = React.useState("Semua");
  const [tahun, setTahun] = React.useState("2025");
  const [bulan, setBulan] = React.useState("1");
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);
  const months = [
    { value: "1", label: "Januari" },
    { value: "2", label: "Februari" },
    { value: "3", label: "Maret" },
    { value: "4", label: "April" },
    { value: "5", label: "Mei" },
    { value: "6", label: "Juni" },
    { value: "7", label: "Juli" },
    { value: "8", label: "Agustus" },
    { value: "9", label: "September" },
    { value: "10", label: "Oktober" },
    { value: "11", label: "November" },
    { value: "12", label: "Desember" },
  ];

  const filterDataByPeriod = React.useCallback(
    (data: financeData[]) => {
      if (periode === "Semua") {
        return data;
      }
      return data.filter((item) => {
        const date = new Date(item.created_at);
        const itemYear = date.getFullYear().toString();
        const itemMonth = (date.getMonth() + 1).toString();

        switch (periode) {
          case "Tahunan":
            return itemYear === tahun;
          case "Bulanan":
            return itemYear === tahun && itemMonth === bulan;
          case "Mingguan":
            if (dateRange.from && dateRange.to) {
              return date >= dateRange.from && date <= dateRange.to;
            }
            return true;
          default:
            return true;
        }
      });
    },
    [periode, tahun, bulan, dateRange]
  );

  const filteredData = React.useMemo(
    () => filterDataByPeriod(data),
    [data, filterDataByPeriod]
  );

  const table = useReactTable({
    data: filteredData,
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

  // Pagination 
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
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
        <div className="overflow-x-auto">
          <div className="flex items-center space-x-4 py-1">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Periode:</span>
              <Select value={periode} onValueChange={setPeriode}>
                <SelectTrigger className="px-4 rounded-3xl">
                  <SelectValue placeholder="Select periode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Semua">Semua Data</SelectItem>
                  <SelectItem value="Tahunan">Tahunan</SelectItem>
                  <SelectItem value="Bulanan">Bulanan</SelectItem>
                  <SelectItem value="Mingguan">Mingguan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {periode !== "Semua" && (
              <>
                {periode === "Tahunan" && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Tahun:</span>
                    <Select value={tahun} onValueChange={setTahun}>
                      <SelectTrigger className="px-4 rounded-3xl">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {periode === "Bulanan" && (
                  <>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Tahun:</span>
                      <Select value={tahun} onValueChange={setTahun}>
                        <SelectTrigger className="px-4 rounded-3xl">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">Bulan:</span>
                      <Select value={bulan} onValueChange={setBulan}>
                        <SelectTrigger className="px-4 rounded-3xl">
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month.value} value={month.value}>
                              {month.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {periode === "Mingguan" && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">Rentang Tanggal:</span>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`px-3 justify-start text-left font-normal ${
                            !dateRange.from && "text-muted-foreground"
                          }`}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange.from ? (
                            dateRange.to ? (
                              <>
                                {format(dateRange.from, "dd MMMM yyyy", {
                                  locale: id,
                                })}{" "}
                                -{" "}
                                {format(dateRange.to, "dd MMMM yyyy", {
                                  locale: id,
                                })}
                              </>
                            ) : (
                              format(dateRange.from, "dd MMMM yyyy", {
                                locale: id,
                              })
                            )
                          ) : (
                            <span>Pilih tanggal</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          initialFocus
                          mode="range"
                          defaultMonth={dateRange.from}
                          selected={{ from: dateRange.from, to: dateRange.to }}
                          onSelect={(range) => {
                            setDateRange({
                              from: range?.from,
                              to: range?.to,
                            });
                          }}
                          numberOfMonths={2}
                          locale={id}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <ModalAdd
          email={""}
          clearItems={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>

      {/* Table */}
      <div className="rounded-xl border">
        <Table>
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
            {table.getRowModel()?.rows?.length > 0 ? (
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
