export function middleware() {
  if (req.nextUrl.href.includes("/help-assets/_next/"))
    return NextResponse.rewrite(
      req.nextUrl.href.replace("/help-assets/_next/", "/_next/"),
    );

  return null;
}