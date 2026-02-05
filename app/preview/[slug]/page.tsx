import { notFound } from "next/navigation";
import { SECTION_COMPONENTS } from "@/content/sections";
import { MOCK_SECTIONS } from "@/data/mock-sections";

// スクリーンショット撮影用のプレビューページ
// 余計なUIを表示せず、セクションコンポーネントのみをレンダリング

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

  return (
    <div className="min-h-screen bg-background">
      <SectionComponent />
    </div>
  );
}
