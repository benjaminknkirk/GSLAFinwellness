"use client";

import { FormEvent, useMemo, useState } from "react";
import { FadeIn } from "./fade-in";

const presets = [25, 75, 150, 400];

type Status = "idle" | "submitting" | "success" | "error";

export function Donate() {
  const [amount, setAmount] = useState<number>(75);
  const [custom, setCustom] = useState("");
  const [usingCustom, setUsingCustom] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const selected = usingCustom ? Number(custom) || 0 : amount;

  const impactLine = useMemo(() => {
    if (selected >= 400) return "Funds a bilingual Saturday clinic.";
    if (selected >= 150) return "Funds a neighborhood workshop.";
    if (selected >= 75) return "Funds a coaching hour for one household.";
    if (selected >= 25) return "Funds a workshop kit for a participant.";
    return "Every dollar moves someone closer to a first session.";
  }, [selected]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/pledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: selected,
          note,
        }),
      });
      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "We could not record that pledge. Try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("The network blinked. Please try once more.");
    }
  }

  return (
    <section id="donate" className="bg-navy px-5 py-24 text-cream sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Donate
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-balance">
            Put a workshop in someone&apos;s week.
          </h2>
          <p className="mt-6 text-lead text-cream/76 text-pretty">
            This form records a pledge. A hub member will send a secure payment
            link. No account required on this page. If you would rather give
            another way, write us at{" "}
            <a
              className="underline decoration-gold/60 underline-offset-4 hover:text-gold-bright"
              href="mailto:hello@globalshapers.la"
            >
              hello@globalshapers.la
            </a>
            .
          </p>
          <p className="mt-8 font-display text-2xl italic text-gold-bright">
            {impactLine}
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-7">
          {status === "success" ? (
            <div className="rounded-3xl bg-cream p-8 text-navy sm:p-10">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-gold-muted">
                Pledge received
              </p>
              <h3 className="mt-3 font-display text-display-md font-semibold">
                Thank you, {name.split(" ")[0] || "friend"}.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                We logged a pledge of{" "}
                <span className="font-semibold text-navy">
                  ${selected.toLocaleString("en-US")}
                </span>
                . Watch {email} for a secure payment link from Global Shapers
                LA. If it does not arrive within two business days, reply to
                that address and we will find you.
              </p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="rounded-3xl bg-navy-mid/60 p-6 sm:p-8"
            >
              <fieldset>
                <legend className="text-sm font-semibold text-cream">
                  Choose an amount
                </legend>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {presets.map((value) => {
                    const active = !usingCustom && amount === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => {
                          setAmount(value);
                          setUsingCustom(false);
                        }}
                        className={`h-12 rounded-full text-[0.95rem] font-semibold transition ${
                          active
                            ? "bg-gold text-navy-deep"
                            : "border border-cream/20 text-cream hover:border-gold"
                        }`}
                      >
                        ${value}
                      </button>
                    );
                  })}
                </div>
                <label className="mt-4 block">
                  <span className="sr-only">Custom amount</span>
                  <div
                    className={`flex h-12 items-center rounded-full border px-4 ${
                      usingCustom
                        ? "border-gold bg-navy-deep"
                        : "border-cream/20"
                    }`}
                  >
                    <span className="text-gold-bright">$</span>
                    <input
                      inputMode="decimal"
                      type="number"
                      min={1}
                      step="1"
                      placeholder="Custom amount"
                      value={custom}
                      onChange={(event) => {
                        setCustom(event.target.value);
                        setUsingCustom(true);
                      }}
                      onFocus={() => setUsingCustom(true)}
                      className="ml-2 w-full bg-transparent text-cream outline-none placeholder:text-cream/40"
                    />
                  </div>
                </label>
              </fieldset>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-cream/70">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-cream/15 bg-navy-deep px-4 text-cream outline-none ring-gold/40 focus:ring-2"
                  />
                </label>
                <label className="block text-sm">
                  <span className="text-cream/70">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-2 h-12 w-full rounded-2xl border border-cream/15 bg-navy-deep px-4 text-cream outline-none ring-gold/40 focus:ring-2"
                  />
                </label>
              </div>

              <label className="mt-4 block text-sm">
                <span className="text-cream/70">Note (optional)</span>
                <textarea
                  name="note"
                  rows={3}
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="In honor of someone, or a neighborhood you care about."
                  className="mt-2 w-full resize-none rounded-2xl border border-cream/15 bg-navy-deep px-4 py-3 text-cream outline-none ring-gold/40 placeholder:text-cream/35 focus:ring-2"
                />
              </label>

              {status === "error" ? (
                <p className="mt-4 text-sm text-gold-bright" role="alert">
                  {message}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting" || selected < 1}
                className="mt-6 h-12 w-full rounded-full bg-gold text-[1rem] font-semibold text-navy-deep transition hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? "Sending pledge…"
                  : `Pledge $${selected > 0 ? selected.toLocaleString("en-US") : "-"}`}
              </button>
              <p className="mt-3 text-center text-xs leading-relaxed text-cream/50">
                Global Shapers LA is a hub of the World Economic Forum Global
                Shapers Community. Payment processing will be completed on a
                secure follow-up link.
              </p>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
