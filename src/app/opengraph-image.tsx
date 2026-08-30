import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #1f7e7c 0%, #1a4444 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: 40, fontWeight: 700 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "white",
              color: "#1f7e7c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            C
          </div>
          {site.name}
        </div>
        <div style={{ marginTop: 40, fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          {site.tagline}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#d6f3f1", maxWidth: 900 }}>
          Booking, reminders & payments on WhatsApp — for every business in India.
        </div>
        <div style={{ marginTop: "auto", fontSize: 26, color: "#b0e7e4" }}>{site.madeIn}</div>
      </div>
    ),
    { ...size },
  );
}
