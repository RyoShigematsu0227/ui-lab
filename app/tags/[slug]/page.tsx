import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionGrid } from "@/components/gallery/section-grid";
import { getTags, getTagBySlug, getSectionsByTag } from "@/lib/supabase";

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
    description: `「${tag.name}」タグが付いたUIセクション一覧`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const sections = await getSectionsByTag(slug);

  // パンくずリストのアイテム
  const breadcrumbItems = [
    { label: "セクション", href: "/" },
    { label: `#${tag.name}` },
  ];

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* パンくずリスト */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold">#{tag.name}</h1>
        <p className="text-sm text-muted-foreground">
          {sections.length} 件のセクション
        </p>
      </div>

      {/* セクション一覧 */}
      <SectionGrid sections={sections} />
    </div>
  );
}
