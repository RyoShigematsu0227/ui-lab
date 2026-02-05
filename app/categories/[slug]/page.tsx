import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { SectionGrid } from "@/components/gallery/section-grid";
import { getCategories, getCategoryBySlug, getSectionsByCategory } from "@/lib/supabase";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return { title: "カテゴリが見つかりません" };
  }

  return {
    title: `${category.name} | UI Lab`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const sections = await getSectionsByCategory(slug);

  // パンくずリストのアイテム
  const breadcrumbItems = [
    { label: "セクション", href: "/" },
    { label: category.name },
  ];

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* パンくずリスト */}
      <Breadcrumb items={breadcrumbItems} />

      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold">{category.name}</h1>
        <p className="text-lg text-muted-foreground">{category.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {sections.length} 件のセクション
        </p>
      </div>

      {/* セクション一覧 */}
      <SectionGrid sections={sections} />
    </div>
  );
}
