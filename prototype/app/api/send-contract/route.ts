import { NextResponse } from "next/server";

export async function POST() {
  // Stub: send contract (e.g. via Resend). Mock for now.
  return NextResponse.json({ ok: true, message: "Contract send stub" });
}
