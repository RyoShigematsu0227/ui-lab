import { notFound } from "next/navigation";
import Link from "next/link";
import { CodeBlock } from "@/components/sections/code-block";
import { SectionPreviewLive } from "@/components/sections/section-preview-live";
import { SectionActions } from "@/components/sections/section-actions";
import { CodeDownloadButton } from "@/components/sections/code-download-button";
import { SectionGrid } from "@/components/gallery/section-grid";
import { SectionJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getSections, getSectionBySlug, getSectionsByCategory } from "@/lib/content";
import { getSectionCode } from "@/lib/section-codes";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";

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

      {/* コンパクトヘッダー */}
      <div className="border-b border-border/50">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* 左側: 戻る + タイトル */}
            <div className="flex items-center gap-4 min-w-0">
              <Link
                href="/"
                className="shrink-0 p-2 -ml-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Back to Sections"
              >
                <ArrowLeft className="h-4 w-4" />
              </Link>

              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  {section.category && (
                    <Link
                      href={`/categories/${section.category.slug}`}
                      className="shrink-0 text-[10px] font-medium tracking-widest uppercase text-primary hover:opacity-70 transition-opacity"
                    >
                      {section.category.name}
                    </Link>
                  )}
                  <span className="text-border">/</span>
                  <h1 className="text-sm font-medium truncate">
                    {section.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* 右側: アクション */}
            <div className="shrink-0">
              <SectionActions slug={slug} title={section.title} />
            </div>
          </div>
        </div>
      </div>

      {/* プレビューセクション - ビューポートに収まるように */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-6">
          {/* プレビューラベル */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Live Preview
            </span>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
              {section.tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag.id}
                  href={`/tags/${tag.slug}`}
                  className="hover:text-foreground transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          </div>

          {/* プレビュー */}
          <div className="rounded-lg border border-border/50 overflow-hidden bg-card/30">
            <SectionPreviewLive slug={slug} title={section.title} />
          </div>

          {/* スクロールヒント */}
          <div className="flex justify-center mt-6">
            <a
              href="#code"
              className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-[10px] tracking-wider uppercase">View Code</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* コードセクション */}
      <section id="code" className="border-t border-border/50">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-12 md:py-16">
          {/* セクション情報 */}
          <div className="mb-8 max-w-2xl">
            <p className="text-muted-foreground leading-relaxed">
              {section.description}
            </p>
          </div>

          {/* コードヘッダー */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
              Source Code
            </span>
            <CodeDownloadButton code={code} filename={slug} />
          </div>

          {/* コードブロック */}
          <CodeBlock code={code} />
        </div>
      </section>

      {/* 関連セクション */}
      {relatedSections.length > 0 && (
        <section className="border-t border-border/50">
          <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-12 md:py-16">
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Related Sections
              </span>
              {section.category && (
                <Link
                  href={`/categories/${section.category.slug}`}
                  className="inline-flex items-center gap-1 text-[10px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  View all
                  <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </div>
            <SectionGrid sections={relatedSections} />
          </div>
        </section>
      )}
    </div>
  );
}
