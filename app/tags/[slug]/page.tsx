import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionGrid } from "@/components/gallery/section-grid";
import { getTags, getTagBySlug, getSectionsByTag } from "@/lib/supabase";

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

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* 戻るリンク */}
      <Link href="/">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          トップに戻る
        </Button>
      </Link>

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
