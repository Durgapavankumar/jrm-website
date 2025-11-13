import { NextResponse } from "next/server";
export async function GET() {
  const body = `User-agent: *\nAllow: /\nSitemap: https://www.example.com/sitemap.xml`; // replace domain
  return new NextResponse(body, { headers: { "content-type": "text/plain" } });
}
