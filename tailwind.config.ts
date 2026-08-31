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
        // WEF-aligned palette sampled from weforum.org / Brandfetch
        navy: {
          DEFAULT: "#003D91",
          deep: "#001F4D",
          mid: "#0044A2",
          soft: "#0051C2",
        },
        forest: {
          DEFAULT: "#0044A2",
          mid: "#0051C2",
          leaf: "#0065F2",
        },
        brand: {
          DEFAULT: "#0065F2",
          dark: "#0051C2",
          deep: "#003D91",
        },
        gold: {
          DEFAULT: "#F7DB5E",
          bright: "#FFE56A",
          muted: "#C9B24A",
        },
        cream: {
          DEFAULT: "#F7F9FC",
          warm: "#EEF2F8",
          deep: "#D5DEEB",
        },
        ink: {
          DEFAULT: "#2C3240",
          muted: "#5A6270",
          faint: "#8A93A3",
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
        card: "0 18px 40px -24px rgba(44, 50, 64, 0.28)",
        gold: "0 10px 30px -12px rgba(247, 219, 94, 0.45)",
        brand: "0 10px 30px -12px rgba(0, 101, 242, 0.55)",
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
