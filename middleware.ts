// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const PUBLIC_ROUTES = ["/login", "/api/public"]

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  const isProtected = !PUBLIC_ROUTES.some(path => req.nextUrl.pathname.startsWith(path))

  if (!token && isProtected) {
    // Redirect unauthenticated users
    return NextResponse.redirect(new URL("/login", req.url))
  }

  // Optional: Forward user ID or token to downstream handlers
  const res = NextResponse.next()
  if (token) {
    res.headers.set("x-user-id", token.sub || "")
    res.headers.set("x-user-email", token.email || "")
  }

  return res
}

export const config = {
  matcher: [
    "/admin/:path*", // Protect all admin routes
  ],
}