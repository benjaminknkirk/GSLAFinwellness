import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gslafinancialwellness.com"),
  title: {
    default: "GSLA Financial Wellness Initiative",
    template: "%s · Global Shapers LA",
  },
  description:
    "A Global Shapers Los Angeles fundraising campaign bringing workshops, coaching, and neighborhood programming so more Angelenos can make money decisions with confidence.",
  keywords: [
    "Global Shapers LA",
    "financial wellness",
    "financial literacy",
    "Los Angeles nonprofit",
    "World Economic Forum",
    "fundraising",
  ],
  authors: [{ name: "Global Shapers Los Angeles" }],
  openGraph: {
    title: "GSLA Financial Wellness Initiative",
    description:
      "Financial confidence shouldn't depend on your zip code. Support workshops and community programming across Los Angeles.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GSLA Financial Wellness Initiative",
    description:
      "Workshops, coaching, and neighborhood programming from Global Shapers LA.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1F33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="bg-cream font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
