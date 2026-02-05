import { notFound } from "next/navigation";
import { SECTION_COMPONENTS } from "@/content/sections";
import { MOCK_SECTIONS } from "@/data/mock-sections";
import { PreviewWrapper } from "./preview-wrapper";

// プレビュー専用ページ
// iframeで埋め込まれる想定、ヘッダー/フッターは非表示

interface PreviewPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string }>;
}

export function generateStaticParams() {
  return MOCK_SECTIONS.map((section) => ({
    slug: section.slug,
  }));
}

export default async function PreviewPage({ params, searchParams }: PreviewPageProps) {
  const { slug } = await params;
  const { theme } = await searchParams;
  const SectionComponent = SECTION_COMPONENTS[slug];

  if (!SectionComponent) {
    notFound();
  }

  // ナビゲーション・フッターは小さいので背景にコントラストをつける
  const isSmallComponent =
    slug.startsWith("navigation-") || slug.startsWith("footer-");

  return (
    <PreviewWrapper theme={theme} isSmallComponent={isSmallComponent}>
      <SectionComponent />
    </PreviewWrapper>
  );
}
