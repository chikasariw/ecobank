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
import { Home, UsersRound, ScrollText , BadgeDollarSign, SquareChartGantt, Handshake } from 'lucide-react';


// This is sample data.
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
      title: "Beranda",
      url: "/user/dashboard",
      icon: Home,
    },
    {
      title: "Data Barang",
      url: "/user/data-barang",
      icon: SquareChartGantt
    },
    {
      title: "Riwayat Penukaran",
      url: "/user/riwayat-penukaran",
      icon: ScrollText 
    },
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
