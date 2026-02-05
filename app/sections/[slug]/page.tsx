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
import { ArrowLeft, Code2, Eye } from "lucide-react";

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
    <div className="min-h-screen">
      {/* 構造化データ */}
      <SectionJsonLd section={section} url={pageUrl} />
      <BreadcrumbJsonLd items={breadcrumbJsonLdItems} />

      {/* 閲覧履歴トラッキング */}
      <SectionViewTracker slug={slug} />

      {/* ヘッダーセクション */}
      <div className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-12">
          {/* 戻るリンク */}
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            セクション一覧
          </Link>

          {/* パンくずリスト */}
          <Breadcrumb items={breadcrumbItems} />

          {/* タイトルエリア */}
          <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              {/* カテゴリバッジ */}
              {section.category && (
                <Link href={`/categories/${section.category.slug}`}>
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {section.category.name}
                  </Badge>
                </Link>
              )}

              {/* タイトル */}
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                {section.title}
              </h1>

              {/* 説明 */}
              <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {section.description}
              </p>

              {/* タグ */}
              <div className="mt-6 flex flex-wrap gap-2">
                {section.tags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.slug}`}>
                    <Badge
                      variant="outline"
                      className="transition-colors hover:bg-accent"
                    >
                      {tag.name}
                    </Badge>
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
      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        {/* プレビューセクション */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Eye className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">プレビュー</h2>
              <p className="text-sm text-muted-foreground">実際の表示を確認</p>
            </div>
          </div>
          <SectionPreviewLive slug={slug} title={section.title} />
        </section>

        {/* コードセクション */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">コード</h2>
                <p className="text-sm text-muted-foreground">コピーしてすぐに使用可能</p>
              </div>
            </div>
            <CodeDownloadButton code={code} filename={slug} />
          </div>
          <CodeBlock code={code} />
        </section>

        {/* 関連セクション */}
        {relatedSections.length > 0 && (
          <section>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">関連セクション</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  同じカテゴリの他のセクション
                </p>
              </div>
              {section.category && (
                <Link
                  href={`/categories/${section.category.slug}`}
                  className="text-sm font-medium text-primary hover:underline"
                >
                  すべて見る →
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
