import { NextResponse } from "next/server";

type PledgeBody = {
  name?: unknown;
  email?: unknown;
  amount?: unknown;
  note?: unknown;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: PledgeBody;

  try {
    body = (await request.json()) as PledgeBody;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const note = typeof body.note === "string" ? body.note.trim() : "";
  const amount = typeof body.amount === "number" ? body.amount : Number(body.amount);

  if (name.length < 2) {
    return NextResponse.json(
      { error: "Please share the name we should thank." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "That email does not look usable." },
      { status: 400 },
    );
  }

  if (!Number.isFinite(amount) || amount < 1) {
    return NextResponse.json(
      { error: "Choose an amount of at least $1." },
      { status: 400 },
    );
  }

  if (note.length > 500) {
    return NextResponse.json(
      { error: "Keep the note under 500 characters." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    amount,
  });
}
