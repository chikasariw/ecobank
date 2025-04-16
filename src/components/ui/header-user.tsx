"use client";
import * as React from "react";

import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./sidebar";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";
import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";

interface User {
  name: string;
  email: string;
  profile_url?: string;
}

export default function HeaderUser({ user }: { user: User | null }) {
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
                      <AvatarImage
                        src={
                          user?.profile_url || "/content/profile-default.jpg"
                        }
                        alt={user?.name || "User"}
                      />
                      <AvatarFallback>
                        {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <p>{user?.name || "Guest User"}</p>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-2xl w-52" align="end">
                <DropdownMenuLabel>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate text-md">
                      {user?.name || "Guest User"}
                    </span>
                    <span className="truncate font-medium text-xs text-eb-primary-gray-600 pt-1">
                      {user?.email || "user@example.com"}
                    </span>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <a href="/user/profile" className="flex rounded-2xl gap-2 text-eb-primary-gray-700 font-medium hover:text-eb-primary-gray-800 hover:font-semibold hover:bg-eb-primary-gray-200 py-2">
                  <User className="ms-2 ps-1 h-5 w-5 text-sm text-center" />
                  <Link className="text-sm font-medium" href="/user/profile">
                    Profil
                  </Link>
                </a>
                <DropdownMenuSeparator />
                <a href="/auth/login" className="flex rounded-2xl gap-2 text-eb-primary-gray-700 hover:text-eb-primary-gray-800 hover:font-semibold hover:bg-eb-primary-gray-200 py-2">
                  <LogOut className="ms-2 ps-1 h-5 w-5 text-sm text-center" />
                  <Link className="text-sm font-medium" href="/auth/login">
                    Keluar
                  </Link>
                </a>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </div>
  );
}
