"use client"

import * as React from "react"

import { NavMain } from "@/components/ui/nav-main"
import { NavUser } from "@/components/ui/nav-user"
import { TeamSwitcher } from "@/components/ui/team-switcher"
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
      name: "EcoBank",
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: Home,
      isActive: true
    },
    {
      title: "Data Pengguna",
      url: "#",
      icon: UsersRound
    },
    {
      title: "Data Barang",
      url: "#",
      icon: SquareChartGantt
    },
    {
      title: "Data Keuangan",
      url: "#",
      icon: BadgeDollarSign
    },
    {
      title: "Data Sampah Ditukar",
      url: "#",
      icon: ScrollText 
    },
    {
      title: "Penukaran",
      url: "#",
      icon: Handshake
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
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
