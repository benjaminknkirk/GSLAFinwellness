"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-navy-deep text-cream"
    >
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_80%_-10%,rgba(201,162,39,0.22),transparent_55%),radial-gradient(70%_60%_at_5%_90%,rgba(42,86,72,0.55),transparent_50%),linear-gradient(165deg,#07141F_0%,#0B1F33_48%,#1B3A32_100%)]" />

      <motion.div
        style={{ y: ySlow, opacity: fade }}
        className="pointer-events-none absolute -left-24 top-16 h-[28rem] w-[28rem] rounded-full bg-forest-leaf/20 blur-3xl"
        aria-hidden
      />
      <motion.div
        style={{ y: yFast }}
        className="pointer-events-none absolute -right-16 top-24 h-[22rem] w-[22rem] rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <motion.ellipse
          style={{ y: ySlow }}
          cx="1180"
          cy="180"
          rx="280"
          ry="280"
          fill="none"
          stroke="#C9A227"
          strokeOpacity="0.18"
          strokeWidth="1.25"
        />
        <motion.path
          style={{ y: yFast }}
          d="M-40 640 C 220 520, 420 780, 720 640 S 1180 500, 1520 680"
          fill="none"
          stroke="#EDE6D6"
          strokeOpacity="0.12"
          strokeWidth="1.5"
        />
        <motion.path
          style={{ y: ySlow }}
          d="M-20 720 C 260 600, 480 840, 780 700 S 1240 560, 1560 740"
          fill="none"
          stroke="#C9A227"
          strokeOpacity="0.22"
          strokeWidth="1.5"
        />
        <circle cx="210" cy="210" r="3.5" fill="#C9A227" fillOpacity="0.7" />
        <circle cx="980" cy="620" r="2.5" fill="#F6F1E7" fillOpacity="0.45" />
        <circle cx="1260" cy="340" r="5" fill="#C9A227" fillOpacity="0.35" />
      </svg>

      <div className="grain pointer-events-none absolute inset-0 opacity-[0.11] mix-blend-overlay" />

      <div className="relative z-10 mx-auto flex w-full max-w-page flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-28">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-gold-bright"
        >
          Global Shapers LA · Summer 2026
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-display-xl font-semibold text-cream text-balance"
        >
          Financial confidence
          <span className="block italic text-gold-bright">
            shouldn&apos;t depend on your zip code.
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.36 }}
          className="mt-7 max-w-xl text-lead text-cream/78 text-pretty"
        >
          Workshops, coaching, and neighborhood programming so more Angelenos
          can make money decisions with clarity, not fear.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="#donate"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gold px-7 text-[1rem] font-semibold text-navy-deep shadow-gold transition-colors hover:bg-gold-bright"
          >
            Donate Now
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full border border-cream/25 px-7 text-[1rem] text-cream transition-colors hover:border-gold hover:text-gold-bright"
          >
            See the work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
