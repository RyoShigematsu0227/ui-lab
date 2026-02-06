import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getCategories, getSections } from "@/lib/content";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Categories",
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

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* 背景 */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12 text-center">
          <span className="heading-section text-muted-foreground tracking-widest-custom">
            Browse by
          </span>
          <h1 className="mt-6 heading-display text-4xl sm:text-5xl">
            Categories
          </h1>
          <p className="mt-6 text-muted-foreground">
            {categories.length} categories available
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* カテゴリ一覧 */}
      <section className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sortedCategories.map((category, index) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="group flex items-center justify-between p-5 rounded-lg border border-border/50 bg-card/30 transition-all duration-300 hover:border-border hover:bg-card opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div>
                <h3 className="font-medium transition-colors group-hover:text-primary">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {category.count} sections
                </p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
