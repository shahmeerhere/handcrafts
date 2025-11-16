import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const url = req.nextUrl.clone()
  const adminPaths = ["/admin"] // all routes starting with /admin

  // Only check admin paths
  if (!adminPaths.some((path) => req.nextUrl.pathname.startsWith(path))) {
    return NextResponse.next()
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  // Not logged in → redirect to login
  if (!token) {
    url.pathname = "/api/auth/signin"
    return NextResponse.redirect(url)
  }

  // Logged in but not admin → redirect to home
  if (token.role !== "admin") {
    url.pathname = "/"
    return NextResponse.redirect(url)
  }

  // Admin → allow
  return NextResponse.next()
}


export const config = {
  matcher: ["/admin/:path*"]
}

