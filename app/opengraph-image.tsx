import { ImageResponse } from "next/og";

export const alt =
  "Altan Çetin Çelik — AI Systems, LLM Evaluation & Backend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "space-between",
          padding: "64px 72px",
          background:
            "radial-gradient(circle at 86% 14%, rgba(169, 255, 203, 0.16), transparent 42%), linear-gradient(145deg, #07090b 0%, #0d1216 100%)",
          color: "#f3f5f6",
          fontFamily: "sans-serif",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "10px 18px",
              borderRadius: "999px",
              border: "1px solid rgba(169, 255, 203, 0.3)",
              background: "rgba(169, 255, 203, 0.08)",
              color: "#a9ffcb",
              fontSize: "20px",
              letterSpacing: "0.04em",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#a9ffcb",
              }}
            />
            ALTANCELIK.DEV
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#8f9aa0",
              letterSpacing: "0.06em",
            }}
          >
            AI SYSTEMS · LLM EVAL · BACKEND · IIOT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Altan Çetin Çelik
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              color: "#aeb7bc",
              lineHeight: 1.32,
              maxWidth: "980px",
            }}
          >
            Adaptive LLM inference, automated evaluation pipelines, FastAPI backends,
            and hardware-adjacent systems built for real constraints.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
          }}
        >
          {[
            "SelectiveLLM · 0.83 F1",
            "PinShift · FastAPI + EDA",
            "Mercor · LLM Eval",
            "Python · asyncio · PyTorch",
          ].map((pill) => (
            <div
              key={pill}
              style={{
                display: "flex",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
                color: "#dce2e5",
                fontSize: "19px",
              }}
            >
              {pill}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
