import { Metadata } from "next";
import Link from "next/link";
import { LayoutGrid, ArrowRight } from "lucide-react";
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

  // 上位カテゴリ
  const topCategories = sortedCategories.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <LayoutGrid className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                カテゴリ一覧
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {categories.length} 種類のカテゴリからセクションを探せます
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        {/* 人気のカテゴリ */}
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
            人気のカテゴリ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-soft"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <CategoryIcon name={category.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.count} セクション
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 全カテゴリ */}
        <section>
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
            すべてのカテゴリ
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sortedCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-5 transition-all hover:border-primary/20 hover:bg-card"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <CategoryIcon name={category.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium transition-colors group-hover:text-primary">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} セクション
                    </p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
