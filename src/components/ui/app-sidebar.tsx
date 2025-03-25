"use client"

import * as React from "react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import { TeamSwitcher } from "@/components/ui/team-switcher"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Home, UsersRound, ScrollText , BadgeDollarSign, HandCoins, PackageSearch, PackagePlus } from 'lucide-react';


const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "EcoBank.",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: Home,
    },
    {
      title: "Setor",
      url: "/admin/setor",
      icon: PackagePlus
    },
    {
      title: "Tarik Tunai",
      url: "/admin/tarik-tunai",
      icon: HandCoins
    },
    {
      title: "Data Barang",
      url: "/admin/data-barang",
      icon: PackageSearch
    },
    {
      title: "Data Warga Hijau",
      url: "/admin/data-pengguna",
      icon: UsersRound,
    },
    {
      title: "Data Keuangan",
      url: "/admin/data-keuangan",
      icon: BadgeDollarSign
    },
    {
      title: "Riwayat Transaksi",
      url: "/admin/riwayat-transaksi",
      icon: ScrollText 
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <Separator className="mb-3"/>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
