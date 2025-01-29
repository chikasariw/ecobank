"use client";

import { type LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  const pathname = usePathname(); // Ambil path saat ini

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = pathname === item.url; // Cek apakah URL sekarang sama dengan item menu

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isActive}
              className={`group/collapsible font-medium relative ${isActive ? "bg-sidebar-accent rounded-3xl menu-active" : ""}`}
            >
              <SidebarMenuItem>
                <Link href={item.url} passHref>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <div className={`flex items-center gap-2 ${isActive ? "bg-sidebar-accent rounded-3xl menu-active" : ""}`}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </div>
                  </SidebarMenuButton>
                </Link>
                {isActive && (
                  <div className="absolute -left-2 top-0 h-full w-1.5 bg-eb-primary-green-800 rounded-r-lg"></div>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
