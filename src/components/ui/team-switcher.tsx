"use client"

import * as React from "react"
import Image from "next/image"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuLink,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function TeamSwitcher({
  teams,
}: {
  teams: {
    name: string
  }[]
}) {
  const { isMobile } = useSidebar()
  const [activeTeam, setActiveTeam] = React.useState(teams[0])

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuLink
              size="lg"
              className="flex justify-center pt-10 hover:"
            >
              <div className="flex">
                {/* <activeTeam.logo className="size-4" /> */}
                <Image
                className="size-10"
                src="/logo/ecobank-logo-icon.svg"
                alt="logo ecobank"
                width={40}
                height={40}
                />
              </div>
              <div className="grid flex-1 text-2xl">
                <span className="truncate font-extrabold text-eb-primary-green-700">
                  {activeTeam.name}
                </span>
              </div>
            </SidebarMenuLink>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
