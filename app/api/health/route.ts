import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    service: "carbontrade",
    status: "ok",
    stack: "nextjs",
    timestamp: new Date().toISOString(),
  });
}
