import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GSLA Financial Wellness Initiative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px",
          background: "linear-gradient(165deg, #07141F 0%, #0B1F33 50%, #1B3A32 100%)",
          color: "#F6F1E7",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E0B84A",
            marginBottom: 28,
          }}
        >
          Global Shapers LA · Summer 2026
        </div>
        <div
          style={{
            fontSize: 68,
            lineHeight: 1,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            maxWidth: 900,
          }}
        >
          Financial confidence shouldn&apos;t depend on your zip code.
        </div>
      </div>
    ),
    { ...size },
  );
}
