import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "GSLA Financial Wellness Initiative";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/gsla-logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "linear-gradient(165deg, #07141F 0%, #0B1F33 50%, #1B3A32 100%)",
          color: "#F6F1E7",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            width={120}
            height={111}
            alt=""
            style={{ borderRadius: 18, background: "#FFFFFF" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
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
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              maxWidth: 920,
            }}
          >
            Financial confidence shouldn&apos;t depend on your zip code.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
