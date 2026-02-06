import { ImageResponse } from "next/og";

export const alt = "UI Lab - Modern UI Components Gallery";
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 100%)",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* グリッドパターン */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* コーナードット */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 40,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff30",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 40,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff30",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 40,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff30",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 40,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#ffffff30",
          }}
        />

        {/* ラベル */}
        <div
          style={{
            display: "flex",
            fontSize: 14,
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#a1a1aa",
            marginBottom: 40,
          }}
        >
          UI Component Gallery
        </div>

        {/* タイトル */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#fafafa",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Modern UI
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#71717a",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Sections
          </span>
        </div>

        {/* 説明文 */}
        <div
          style={{
            fontSize: 24,
            color: "#71717a",
            marginTop: 40,
            lineHeight: 1.6,
          }}
        >
          AIが毎週届ける、
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#71717a",
            lineHeight: 1.6,
          }}
        >
          UIデザインの最前線
        </div>

        {/* フローティングカード風装飾 */}
        <div
          style={{
            position: "absolute",
            right: 100,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {/* カード1 */}
          <div
            style={{
              width: 200,
              padding: "20px 24px",
              background: "#1a1a1a",
              borderRadius: 12,
              border: "1px solid #ffffff15",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#3b82f6",
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#71717a",
                }}
              >
                Hero
              </span>
            </div>
            <div
              style={{
                height: 6,
                width: "100%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                height: 6,
                width: "70%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
          </div>

          {/* カード2 */}
          <div
            style={{
              width: 200,
              marginLeft: 40,
              padding: "20px 24px",
              background: "#1a1a1a",
              borderRadius: 12,
              border: "1px solid #ffffff15",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#22c55e",
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#71717a",
                }}
              >
                Pricing
              </span>
            </div>
            <div
              style={{
                height: 6,
                width: "100%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                height: 6,
                width: "60%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
          </div>

          {/* カード3 */}
          <div
            style={{
              width: 200,
              padding: "20px 24px",
              background: "#1a1a1a",
              borderRadius: 12,
              border: "1px solid #ffffff15",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#a855f7",
                }}
              />
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#71717a",
                }}
              >
                CTA
              </span>
            </div>
            <div
              style={{
                height: 6,
                width: "100%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                height: 6,
                width: "80%",
                background: "#27272a",
                borderRadius: 3,
              }}
            />
          </div>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 100,
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#52525b",
          }}
        >
          ui-lab.jp
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
