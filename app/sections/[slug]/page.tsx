import { notFound } from "next/navigation";
import Link from "next/link";
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
import { ArrowLeft, ArrowRight } from "lucide-react";

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
    title: `${section.title}`,
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
    { label: "Sections", href: "/" },
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
    <div className="min-h-screen">
      {/* 構造化データ */}
      <SectionJsonLd section={section} url={pageUrl} />
      <BreadcrumbJsonLd items={breadcrumbJsonLdItems} />

      {/* 閲覧履歴トラッキング */}
      <SectionViewTracker slug={slug} />

      {/* ヘッダー */}
      <div className="border-b border-border/50">
        <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 py-12 md:py-16">
          {/* 戻るリンク */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground hover-opacity hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Sections
          </Link>

          {/* パンくず */}
          <Breadcrumb items={breadcrumbItems} />

          {/* タイトルエリア */}
          <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex-1 max-w-2xl">
              {/* カテゴリ */}
              {section.category && (
                <Link
                  href={`/categories/${section.category.slug}`}
                  className="inline-block mb-4 text-[10px] font-medium tracking-widest-custom uppercase text-primary hover-opacity"
                >
                  {section.category.name}
                </Link>
              )}

              {/* タイトル */}
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                {section.title}
              </h1>

              {/* 説明 */}
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {section.description}
              </p>

              {/* タグ */}
              <div className="mt-6 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tags/${tag.slug}`}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* アクション */}
            <div className="shrink-0">
              <SectionActions slug={slug} title={section.title} />
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        {/* プレビュー */}
        <section className="mb-20">
          <div className="mb-6">
            <span className="heading-section text-muted-foreground tracking-widest-custom">
              Preview
            </span>
          </div>
          <SectionPreviewLive slug={slug} title={section.title} />
        </section>

        {/* コード */}
        <section className="mb-20">
          <div className="mb-6 flex items-center justify-between">
            <span className="heading-section text-muted-foreground tracking-widest-custom">
              Code
            </span>
            <CodeDownloadButton code={code} filename={slug} />
          </div>
          <CodeBlock code={code} />
        </section>

        {/* 関連セクション */}
        {relatedSections.length > 0 && (
          <section>
            <div className="mb-8 flex items-center justify-between">
              <span className="heading-section text-muted-foreground tracking-widest-custom">
                Related Sections
              </span>
              {section.category && (
                <Link
                  href={`/categories/${section.category.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover-opacity hover:text-foreground transition-colors"
                >
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
            <SectionGrid sections={relatedSections} />
          </section>
        )}
      </div>
    </div>
  );
}
