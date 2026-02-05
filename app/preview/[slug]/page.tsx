import { notFound } from "next/navigation";
import { SECTION_COMPONENTS } from "@/content/sections";
import { MOCK_SECTIONS } from "@/data/mock-sections";

// プレビュー専用ページ
// iframeで埋め込まれる想定、ヘッダー/フッターは非表示

interface PreviewPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return MOCK_SECTIONS.map((section) => ({
    slug: section.slug,
  }));
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const SectionComponent = SECTION_COMPONENTS[slug];

  if (!SectionComponent) {
    notFound();
  }

  // ナビゲーション・フッターは小さいので中央配置＋コントラスト背景
  const isSmallComponent =
    slug.startsWith("navigation-") || slug.startsWith("footer-");

  if (isSmallComponent) {
    return (
      <>
        <style>{`
          header { display: none !important; }
          footer { display: none !important; }
          main { padding-top: 0 !important; }
          .fixed.top-0.bottom-0 { display: none !important; }
        `}</style>
        <div className="min-h-screen bg-zinc-600">
          <SectionComponent />
        </div>
      </>
    );
  }

  return (
    <>
      {/* プレビューモード：ヘッダー/フッター/サイドラインを非表示 */}
      <style>{`
        header { display: none !important; }
        footer { display: none !important; }
        main { padding-top: 0 !important; }
        .fixed.top-0.bottom-0 { display: none !important; }
      `}</style>
      <div className="min-h-screen bg-background">
        <SectionComponent />
      </div>
    </>
  );
}
