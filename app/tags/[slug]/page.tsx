import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TagPageView } from "@/components/gallery/tag-page-view";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getTags, getTagBySlug, getSectionsByTag } from "@/lib/content";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tags = await getTags();
  return tags.map((tag) => ({
    slug: tag.slug,
  }));
}

export async function generateMetadata({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);

  if (!tag) {
    return { title: "タグが見つかりません" };
  }

  return {
    title: `${tag.name} | UI Lab`,
    description: `「${tag.name}」タグが付いたUIセクション一覧。${tag.name}を使用したモダンなUIコンポーネントを閲覧・コピーできます。`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const [tag, sections, allTags] = await Promise.all([
    getTagBySlug(slug),
    getSectionsByTag(slug),
    getTags(),
  ]);

  if (!tag) {
    notFound();
  }

  // 関連タグを計算（同じセクションに使用されているタグ）
  const tagCountMap = new Map<string, number>();
  sections.forEach((section) => {
    section.tags.forEach((t) => {
      if (t.slug !== slug) {
        tagCountMap.set(t.slug, (tagCountMap.get(t.slug) || 0) + 1);
      }
    });
  });

  // 出現回数の多い順にソートして上位5個を取得
  const relatedTagSlugs = Array.from(tagCountMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([tagSlug]) => tagSlug);

  const relatedTags = allTags.filter((t) => relatedTagSlugs.includes(t.slug));

  // パンくずリストのアイテム
  const breadcrumbItems = [
    { label: "セクション", href: "/" },
    { label: `#${tag.name}` },
  ];

  // JSON-LD用パンくず
  const breadcrumbJsonLdItems = [
    { name: "ホーム", url: BASE_URL },
    { name: `#${tag.name}`, url: `${BASE_URL}/tags/${slug}` },
  ];

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* 構造化データ */}
      <BreadcrumbJsonLd items={breadcrumbJsonLdItems} />

      {/* パンくずリスト */}
      <Breadcrumb items={breadcrumbItems} />

      {/* タグページビュー（検索・ソート機能付き） */}
      <TagPageView tag={tag} sections={sections} relatedTags={relatedTags} />
    </div>
  );
}
