import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;
  const token = request.cookies.get("token");

  switch (true) {
    case pathname.startsWith("/dashboard") && !token:
      return NextResponse.redirect(`${origin}/login`);
    default:
      return NextResponse.next();
  }
}
