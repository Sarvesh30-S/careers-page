import { NextResponse, type NextRequest } from "next/server";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/auth";

// Gate internal pages (admin, employer dashboard, post job) and admin APIs
// behind a valid team session. Public candidates never see these routes.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(ADMIN_COOKIE)?.value;
  const authed = await verifyAdminSession(token);

  const isAdminApi =
    pathname.startsWith("/api/admin") &&
    !pathname.startsWith("/api/admin/login") &&
    !pathname.startsWith("/api/admin/logout");

  if (isAdminApi && !authed) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const isProtectedInternalPage =
    (pathname.startsWith("/admin") && pathname !== "/admin/login") ||
    pathname.startsWith("/employer") ||
    pathname.startsWith("/post-job");

  if (isProtectedInternalPage && !authed) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  // Already logged in? Skip the login page.
  if (pathname === "/admin/login" && authed) {
    const nextPath = req.nextUrl.searchParams.get("next") || "/employer";
    const url = req.nextUrl.clone();
    url.pathname = nextPath;
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
    "/employer/:path*",
    "/post-job/:path*",
  ],
};
