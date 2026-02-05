import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/sections/code-block";
import { SectionPreviewLive } from "@/components/sections/section-preview-live";
import { SectionGrid } from "@/components/gallery/section-grid";
import { MOCK_SECTIONS, getSectionBySlug } from "@/data/mock-sections";
import { SECTION_CODES } from "@/content/sections";

interface SectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MOCK_SECTIONS.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({ params }: SectionPageProps) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    return { title: "セクションが見つかりません" };
  }

  return {
    title: `${section.title} | UI Lab`,
    description: section.description,
  };
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { slug } = await params;
  const section = getSectionBySlug(slug);

  if (!section) {
    notFound();
  }

  // 関連セクション（同カテゴリの他のセクション、最大4件）
  const relatedSections = MOCK_SECTIONS.filter(
    (s) => s.categoryId === section.categoryId && s.id !== section.id
  ).slice(0, 4);

  // セクションのコードを取得
  const code = SECTION_CODES[slug] || "// コードは準備中です";

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* 戻るリンク */}
      <Link href="/">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          セクション一覧に戻る
        </Button>
      </Link>

      {/* ヘッダー */}
      <div className="mb-8">
        {section.category && (
          <Link href={`/categories/${section.category.slug}`}>
            <Badge variant="secondary" className="mb-3">
              {section.category.name}
            </Badge>
          </Link>
        )}
        <h1 className="mb-3 text-3xl font-bold">{section.title}</h1>
        <p className="text-lg text-muted-foreground">{section.description}</p>

        {/* タグ */}
        <div className="mt-4 flex flex-wrap gap-2">
          {section.tags.map((tag) => (
            <Link key={tag.id} href={`/tags/${tag.slug}`}>
              <Badge variant="outline">{tag.name}</Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* プレビュー */}
      <div className="mb-8">
        <SectionPreviewLive slug={slug} title={section.title} />
      </div>

      {/* コード */}
      <div className="mb-12">
        <h2 className="mb-4 text-xl font-semibold">コード</h2>
        <CodeBlock code={code} />
      </div>

      {/* 関連セクション */}
      {relatedSections.length > 0 && (
        <div>
          <h2 className="mb-6 text-xl font-semibold">関連セクション</h2>
          <SectionGrid sections={relatedSections} />
        </div>
      )}
    </div>
  );
}
