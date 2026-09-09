"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "#problem", label: "The problem" },
  { href: "#work", label: "The work" },
  { href: "#about", label: "The hub" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-page items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 text-cream"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-11 w-11" priority />
          <span className="leading-tight">
            <span className="block font-display text-[1.05rem] font-semibold tracking-tight">
              GSLA
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.16em] text-cream/65">
              Financial Wellness
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.92rem] text-cream/78 transition-colors hover:text-gold-bright"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="rounded-full bg-brand px-5 py-2.5 text-[0.92rem] font-semibold text-white shadow-brand transition-colors hover:bg-brand-dark"
          >
            Donate Now
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-full bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-px w-full bg-current transition ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <motion.nav
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/10 bg-navy-deep px-5 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-lg text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              className="mt-3 rounded-full bg-brand px-5 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Donate Now
            </a>
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}
