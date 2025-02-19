import * as React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { AppSidebar } from "@/components/ui/app-sidebar-user";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HeaderUser from "@/components/ui/header-user";
import { getUserData } from "./dashboard/action";

interface User {
    name: string;
    email: string;
    profile_url?: string;
}

// Komponen ini server-side (karena tidak ada "use client")
export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    let user: User | null = null;

    try {
        user = await getUserData();
    } catch (error) {
        console.error("Failed to fetch user data:", error);
    }

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <SidebarProvider className="bg-eb-primary-gray-200">
                <AppSidebar />
                <SidebarInset>
                    {/* Kirim data user ke HeaderUser */}
                    <HeaderUser user={user} />
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </ThemeProvider>
    );
}
