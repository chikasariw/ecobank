import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const userRole = req.cookies.get("user_role")?.value

  const adminRoutes = ["/admin/dashboard"]
  const userRoutes = ["/user/dashboard"]

  if (adminRoutes.includes(req.nextUrl.pathname) && userRole !== "admin") {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  if (userRoutes.includes(req.nextUrl.pathname) && userRole !== "user") {
    return NextResponse.redirect(new URL("/auth/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
}
