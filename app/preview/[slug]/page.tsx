import { notFound } from "next/navigation";
import { SECTION_COMPONENTS } from "@/content/sections";
import { PreviewWrapper } from "./preview-wrapper";

// プレビュー専用ページ
// iframeで埋め込まれる想定、ヘッダー/フッターは非表示

interface PreviewPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string }>;
}

export function generateStaticParams() {
  return Object.keys(SECTION_COMPONENTS).map((slug) => ({ slug }));
}

// コンポーネントタイプを判定
function getComponentType(slug: string): "navigation" | "footer" | "normal" {
  if (slug.startsWith("navigation-")) return "navigation";
  if (slug.startsWith("footer-")) return "footer";
  return "normal";
}

export default async function PreviewPage({ params, searchParams }: PreviewPageProps) {
  const { slug } = await params;
  const { theme } = await searchParams;
  const SectionComponent = SECTION_COMPONENTS[slug];

  if (!SectionComponent) {
    notFound();
  }

  const componentType = getComponentType(slug);

  return (
    <PreviewWrapper theme={theme} componentType={componentType}>
      <SectionComponent />
    </PreviewWrapper>
  );
}
