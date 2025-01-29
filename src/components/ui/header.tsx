<<<<<<< HEAD
"use client"
import * as React from "react"

import { ModeToggle } from "./mode-toggle"
import { SidebarTrigger } from "./sidebar"
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link";
import Image from "next/image"


import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Button } from "./button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"

export default function Header() {
    
    return (
        <div>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-card m-4 rounded-3xl">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <div className="md:hidden">
                        <Image
                            className="size-8"
                            src="/logo/ecobank-logo-icon.svg"
                            alt="logo ecobank"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
                <div className="ml-auto flex items-center px-4">
                    <ModeToggle />
                    <Separator orientation="vertical" className="md:mr-2 h-4" />

                    <div className="hidden md:flex">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="ps-0">
                                    <div className="flex items-center gap-2 ps-1 pe-2 py-2">
                                        <Avatar>
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <p>Park Jisung</p>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Park Jisung</span>
                                    <span className="truncate text-xs">admin@gmail.com</span>
                                </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href="/admin/profile">
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    Log out
                                    <LogOut className="ml-auto h-6 w-6" />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </header>
        </div>

    )
=======
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-white border-b-2 border-eb-primary-gray-100">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-10 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo/ecobank-logo.svg"
            alt="Cofika Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="#beranda"
            className="text-eb-primary-green-700 font-semibold"
          >
            Beranda
          </a>
          <a
            href="#tentang-kami"
            className="text-base text-eb-primary-gray-700 font-medium"
          >
            Tentang Kami
          </a>
          <a href="#fitur" className="text-eb-primary-gray-700 font-medium">
            Fitur
          </a>
          <a href="#faq" className="text-eb-primary-gray-700 font-medium">
            FAQ
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Button className="w-auto px-6 py-2" variant="primarycustom" asChild>
            <Link href="">Daftar</Link>
          </Button>
          <Button className="w-auto px-6 py-2" variant="primary" asChild>
            <Link href="">Masuk</Link>
          </Button>
        </div>
      </div>
    </header>
  );
>>>>>>> 9624f306efeeb122979fa63c03ef72f87c18890e
}
