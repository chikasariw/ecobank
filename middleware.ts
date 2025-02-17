import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const role = req.cookies.get("user_role") || req.headers.get("user-role"); // Bisa pakai session juga
  const url = req.nextUrl.clone();

  console.log(role);

  if (role === "User" && url.pathname.startsWith("/admin")) {
    url.pathname = "/user/dashboard";
    return NextResponse.redirect(url);
  } else if (role === "Admin" && url.pathname.startsWith("/user")) {
    url.pathname = "/admin/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*"], // Cek hanya di halaman dashboard
};
