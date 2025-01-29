"use client"
import * as React from "react"

import { ThemeProvider } from "@/components/ui/theme-provider";

import { AppSidebar } from "@/components/ui/app-sidebar";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import HeaderAdmin from "@/components/ui/header-admin";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <HeaderAdmin/>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
