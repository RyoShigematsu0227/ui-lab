import { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategoryIcon } from "@/components/ui/category-icon";
import { getCategories, getSections } from "@/lib/supabase";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "カテゴリ一覧 | UI Lab",
  description: "UIセクションのカテゴリ一覧。ヒーロー、ナビゲーション、フィーチャーなど、セクション種別ごとに閲覧できます。",
};

export default async function CategoriesPage() {
  const [categories, sections] = await Promise.all([
    getCategories(),
    getSections(),
  ]);

  // カテゴリごとのセクション数を計算
  const categoryCounts = new Map<string, number>();
  sections.forEach((section) => {
    if (section.category) {
      categoryCounts.set(
        section.category.slug,
        (categoryCounts.get(section.category.slug) || 0) + 1
      );
    }
  });

  // セクション数でソート（多い順）
  const sortedCategories = [...categories]
    .map((category) => ({
      ...category,
      count: categoryCounts.get(category.slug) || 0,
    }))
    .sort((a, b) => b.count - a.count);

  // 上位カテゴリ（セクション数が多い順に5つ）
  const topCategories = sortedCategories.slice(0, 5);

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <LayoutGrid className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">カテゴリ一覧</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          {categories.length} 種類のカテゴリでセクションを探せます
        </p>
      </div>

      {/* 人気のカテゴリ */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">人気のカテゴリ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <CategoryIcon name={category.icon} className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{category.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {category.count} セクション
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 全カテゴリ */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedCategories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <Card className="h-full transition-colors hover:bg-accent/50">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CategoryIcon name={category.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {category.count} セクション
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
