"use client";

import { useState } from "react";
import { VENMO_HANDLE, VENMO_URL } from "@/lib/donate";
import { FadeIn } from "./fade-in";

const presets = [25, 75, 150, 400];

export function Donate() {
  const [amount, setAmount] = useState<number>(75);
  const [custom, setCustom] = useState("");
  const [usingCustom, setUsingCustom] = useState(false);

  const selected = usingCustom ? Number(custom) || 0 : amount;

  return (
    <section id="donate" className="bg-navy px-5 py-24 text-cream sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Donate
          </p>
          <h2 className="mt-3 font-display text-display-lg font-semibold text-balance">
            Help fund the work.
          </h2>
          <p className="mt-6 text-lead text-cream/76 text-pretty">
            Give through Venmo to Global Shapers LA. Your gift supports the
            Financial Wellness Initiative. Complete it at{" "}
            <a
              className="font-semibold text-gold-bright underline decoration-brand/70 underline-offset-4 hover:text-brand"
              href={VENMO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {VENMO_HANDLE}
            </a>
            .
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-7">
          <div className="rounded-3xl bg-navy-mid/60 p-6 sm:p-8">
            <fieldset>
              <legend className="text-sm font-semibold text-cream">
                Suggested amounts
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
                          ? "bg-brand text-white"
                          : "border border-cream/20 text-cream hover:border-brand"
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
                      ? "border-brand bg-navy-deep"
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

            <a
              href={VENMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand text-[1rem] font-semibold text-white shadow-brand transition hover:bg-brand-dark"
            >
              {selected > 0
                ? `Donate $${selected.toLocaleString("en-US")} on Venmo`
                : "Donate on Venmo"}
            </a>

            <p className="mt-4 text-center text-sm text-cream/70">
              Venmo:{" "}
              <a
                href={VENMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gold-bright underline decoration-brand/60 underline-offset-4 hover:text-brand"
              >
                {VENMO_HANDLE}
              </a>
            </p>
            <p className="mt-3 text-center text-xs leading-relaxed text-cream/50">
              Global Shapers LA is a hub of the World Economic Forum Global
              Shapers Community. Opens{" "}
              <span className="whitespace-nowrap">venmo.com/u/wefgsla</span>.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
