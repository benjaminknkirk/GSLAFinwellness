import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F33",
          deep: "#07141F",
          mid: "#16324C",
          soft: "#1E4466",
        },
        forest: {
          DEFAULT: "#1B3A32",
          mid: "#2A5648",
          leaf: "#3C6B58",
        },
        gold: {
          DEFAULT: "#C9A227",
          bright: "#E0B84A",
          muted: "#A8841C",
        },
        cream: {
          DEFAULT: "#F6F1E7",
          warm: "#EDE6D6",
          deep: "#D9D0BC",
        },
        ink: {
          DEFAULT: "#1A1A16",
          muted: "#5C5A54",
          faint: "#8A877D",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 8.2vw, 5.85rem)",
          { lineHeight: "0.95", letterSpacing: "-0.035em" },
        ],
        "display-lg": [
          "clamp(2.1rem, 4.8vw, 3.65rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "display-md": [
          "clamp(1.65rem, 3.2vw, 2.35rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em" },
        ],
        "stat-xl": [
          "clamp(4.5rem, 14vw, 9.5rem)",
          { lineHeight: "0.85", letterSpacing: "-0.05em" },
        ],
        lead: ["1.2rem", { lineHeight: "1.65" }],
      },
      maxWidth: {
        page: "72rem",
        prose: "40rem",
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(11, 31, 51, 0.28)",
        gold: "0 10px 30px -12px rgba(201, 162, 39, 0.55)",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-2%, 1%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        grain: "grain-shift 8s ease-in-out infinite",
        float: "float 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
