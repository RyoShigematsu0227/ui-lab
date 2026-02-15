import { ImageResponse } from "next/og";
import { getSectionBySlug } from "@/lib/content";

export const runtime = "nodejs";
export const alt = "UI Lab セクションプレビュー";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const section = await getSectionBySlug(slug);

  if (!section) {
    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: "bold" }}>UI Lab</div>
        <div style={{ fontSize: 32, color: "#888", marginTop: 16 }}>セクションが見つかりません</div>
      </div>,
      { ...size }
    );
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        padding: 60,
      }}
    >
      {/* ヘッダー */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            }}
          />
          <span style={{ fontSize: 28, fontWeight: "bold", color: "#fff" }}>UI Lab</span>
        </div>
        {section.category && (
          <div
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(99, 102, 241, 0.2)",
              color: "#818cf8",
              fontSize: 18,
            }}
          >
            {section.category.name}
          </div>
        )}
      </div>

      {/* メインコンテンツ */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: "bold",
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {section.title}
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#888",
            lineHeight: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {section.description}
        </div>
      </div>

      {/* フッター - タグ */}
      <div
        style={{
          display: "flex",
          gap: 12,
          marginTop: 40,
        }}
      >
        {section.tags.slice(0, 4).map((tag) => (
          <div
            key={tag.id}
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#aaa",
              fontSize: 16,
            }}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </div>,
    { ...size }
  );
}
