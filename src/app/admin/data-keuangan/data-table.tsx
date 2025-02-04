"use client"

import * as React from "react"
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
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight, ChevronLeft, Search, CalendarIcon } from "lucide-react"
import { ModalAdd } from "./modal-add"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type Keuangan, columns } from "./columns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { id } from "date-fns/locale"

interface DataTableProps {
  data: Keuangan[]
}

export function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [periode, setPeriode] = React.useState("Semua")
  const [tahun, setTahun] = React.useState("2025")
  const [bulan, setBulan] = React.useState("1")
  const [dateRange, setDateRange] = React.useState<{
    from: Date | undefined
    to: Date | undefined
  }>({
    from: undefined,
    to: undefined,
  })

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i)
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
  ]

  const filterDataByPeriod = React.useCallback(
    (data: Keuangan[]) => {
      if (periode === "Semua") {
        return data
      }
      return data.filter((item) => {
        const date = new Date(item.tanggaltransaksi)
        const itemYear = date.getFullYear().toString()
        const itemMonth = (date.getMonth() + 1).toString()

        switch (periode) {
          case "Tahunan":
            return itemYear === tahun
          case "Bulanan":
            return itemYear === tahun && itemMonth === bulan
          case "Mingguan":
            if (dateRange.from && dateRange.to) {
              return date >= dateRange.from && date <= dateRange.to
            }
            return true
          default:
            return true
        }
      })
    },
    [periode, tahun, bulan, dateRange],
  )

  const filteredData = React.useMemo(() => filterDataByPeriod(data), [data, filterDataByPeriod])

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
  })

  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center space-x-8">
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
                              {format(dateRange.from, "dd MMMM yyyy", { locale: id })} -{" "}
                              {format(dateRange.to, "dd MMMM yyyy", { locale: id })}
                            </>
                          ) : (
                            format(dateRange.from, "dd MMMM yyyy", { locale: id })
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
                          })
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

          {/* <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Cari Tanggal..."
              value={(table.getColumn("tanggaltransaksi")?.getFilterValue() as string) ?? ""}
              onChange={(event) => table.getColumn("tanggaltransaksi")?.setFilterValue(event.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-eb-primary-green-800 focus:border-eb-primary-green-800"
            />
          </div> */}
        </div>
        <ModalAdd />
      </div>
      <div className="rounded-xl border">
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
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="link" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          <ChevronLeft />
          Previous
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
          Next
          <ChevronRight />
        </Button>
      </div>
    </div>
  )
}

