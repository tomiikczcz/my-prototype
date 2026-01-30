import { NextResponse } from "next/server";

export async function POST() {
  // Stub: send quote (e.g. via Resend). Mock for now.
  return NextResponse.json({ ok: true, message: "Quote send stub" });
}
