"use client"
import React from 'react'
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { format, setMonth, setYear } from "date-fns";
import { CalendarIcon } from "lucide-react";

export default function DatePicker() {
    const [date, setDate] = React.useState<Date | undefined>();
    const [currentMonth, setCurrentMonth] = React.useState(new Date());


    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const years = Array.from(
        { length: 100 },
        (_, i) => new Date().getFullYear() - 50 + i
    );

    const handleMonthChange = (month: number) => {
        setCurrentMonth((prev) => setMonth(prev, month));
    };

    const handleYearChange = (year: number) => {
        setCurrentMonth((prev) => setYear(prev, year));
    };
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal rounded p-3",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date ? format(date, "PPP") : <span>Pilih Tanggal</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <div className="flex items-center justify-between p-2 gap-2">
                    <Select
                        onValueChange={(value) =>
                            handleMonthChange(parseInt(value))
                        }
                        defaultValue={String(currentMonth.getMonth())}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Pilih Bulan" />
                        </SelectTrigger>
                        <SelectContent>
                            {months.map((month, index) => (
                                <SelectItem key={index} value={String(index)}>
                                    {month}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select
                        onValueChange={(value) =>
                            handleYearChange(parseInt(value))
                        }
                        defaultValue={String(currentMonth.getFullYear())}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Pilih Tahun" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={String(year)}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    initialFocus
                    disabled={(date) => date > new Date()} 
                />
            </PopoverContent>
        </Popover>
    )
}
