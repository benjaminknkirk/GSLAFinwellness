# GSLA Financial Wellness Initiative

A single-page fundraising site for **Global Shapers Los Angeles** (a World Economic Forum community hub). The Summer 2026 campaign funds workshops, peer coaching, and neighborhood programming so more Angelenos can make money decisions with confidence.

Visual identity follows the WEF digital palette: primary blue `#0065F2`, cobalt `#0044A2` / `#003D91`, charcoal `#2C3240`, and accent yellow `#F7DB5E`.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

## Campaign notes

The donate section records a **pledge** through `POST /api/pledge`. Wire a payment processor (Stripe, Givebutter, or the hub’s existing donation path) before taking live gifts. The form currently confirms intent and asks the donor to wait for a secure payment link.

Copy cites:

- Global Financial Literacy Excellence Center (48% average score)
- Federal Reserve SHED ($400 emergency expense)
- TIAA Institute-GFLEC P-Fin Index (Gen Z)
- GSLA / Undue Medical Debt (Los Angeles medical debt and the hub’s $174,530 Shred the Debt result)

Update goals, amounts, and contact email (`hello@globalshapers.la`) before launch.
