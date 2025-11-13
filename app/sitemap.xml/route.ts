import { NextResponse } from "next/server";

export async function GET() {
  const urls = ["/", "#services", "#industries", "#contact"];
  const items = urls
    .map(
      (u) =>
        `<url><loc>https://www.example.com${u === "/" ? "" : u}</loc></url>`
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items}</urlset>`;
  return new NextResponse(xml, {
    headers: { "content-type": "application/xml" },
  });
}
