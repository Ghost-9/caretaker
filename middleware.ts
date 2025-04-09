import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("__session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // Optionally pass token in headers for downstream validation
  const res = NextResponse.next();
  res.headers.set("x-user-token", token); // optional: forward token to pages/api
  return res;
}

export const config = {
  matcher: ["/admin/dashboard", "/admin/settings"],  
};