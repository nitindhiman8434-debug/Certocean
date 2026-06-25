import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  fullName: string;
  email: string;
  phone?: string;
  interest?: string;
  company?: string;
  teamSize?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  let payload: LeadPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.fullName?.trim() || !payload.email?.trim()) {
    return NextResponse.json({ error: "Full name and email are required" }, { status: 400 });
  }

  console.info("[lead-submission]", {
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone ?? null,
    interest: payload.interest ?? null,
    company: payload.company ?? null,
    teamSize: payload.teamSize ?? null,
    message: payload.message ?? null,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
