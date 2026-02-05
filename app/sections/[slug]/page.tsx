import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { CodeBlock } from "@/components/sections/code-block";
import { SectionPreviewLive } from "@/components/sections/section-preview-live";
import { SectionActions } from "@/components/sections/section-actions";
import { SectionViewTracker } from "@/components/sections/section-view-tracker";
import { CodeDownloadButton } from "@/components/sections/code-download-button";
import { SectionGrid } from "@/components/gallery/section-grid";
import { SectionJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getSections, getSectionBySlug, getSectionsByCategory } from "@/lib/supabase";
import { getSectionCode } from "@/lib/section-codes";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

// ISR: 24時間ごとに再生成
export const revalidate = 86400;

interface SectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sections = await getSections();
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({ params }: SectionPageProps) {
  const { slug } = await params;
  const section = await getSectionBySlug(slug);

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
  const section = await getSectionBySlug(slug);

  if (!section) {
    notFound();
  }

  // 関連セクション（同カテゴリの他のセクション、最大4件）
  const categorySlug = section.category?.slug;
  const allCategorySections = categorySlug
    ? await getSectionsByCategory(categorySlug)
    : [];
  const relatedSections = allCategorySections
    .filter((s) => s.id !== section.id)
    .slice(0, 4);

  // セクションのコードを実際のファイルから取得
  const code = getSectionCode(slug);

  // パンくずリストのアイテム
  const breadcrumbItems = [
    { label: "セクション", href: "/" },
    ...(section.category
      ? [{ label: section.category.name, href: `/categories/${section.category.slug}` }]
      : []),
    { label: section.title },
  ];

  // JSON-LD用パンくず
  const breadcrumbJsonLdItems = [
    { name: "ホーム", url: BASE_URL },
    ...(section.category
      ? [{ name: section.category.name, url: `${BASE_URL}/categories/${section.category.slug}` }]
      : []),
    { name: section.title, url: `${BASE_URL}/sections/${slug}` },
  ];

  const pageUrl = `${BASE_URL}/sections/${slug}`;

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* 構造化データ */}
      <SectionJsonLd section={section} url={pageUrl} />
      <BreadcrumbJsonLd items={breadcrumbJsonLdItems} />

      {/* 閲覧履歴トラッキング */}
      <SectionViewTracker slug={slug} />

      {/* パンくずリスト */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            {section.category && (
              <Link href={`/categories/${section.category.slug}`}>
                <Badge variant="secondary" className="mb-3">
                  {section.category.name}
                </Badge>
              </Link>
            )}
            <h1 className="mb-3 text-3xl font-bold">{section.title}</h1>
            <p className="text-lg text-muted-foreground">{section.description}</p>
          </div>
          <SectionActions slug={slug} title={section.title} />
        </div>

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
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">コード</h2>
          <CodeDownloadButton code={code} filename={slug} />
        </div>
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
