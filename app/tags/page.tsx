import { Metadata } from "next";
import Link from "next/link";
import { getTags, getSections } from "@/lib/content";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Tags",
  description: "UIセクションのタグ一覧。ビジュアルスタイル、インタラクション、レイアウトなどのタグでセクションを探せます。",
};

// タグカテゴリの定義
const TAG_CATEGORIES = {
  visual: {
    name: "Visual Style",
    slugs: ["gradient", "glassmorphism", "dark-mode", "minimal", "bold-typography", "illustration", "3d", "retro", "neomorphism"],
  },
  interaction: {
    name: "Interaction",
    slugs: ["animation", "scroll-driven", "hover-effect", "interactive", "parallax"],
  },
  layout: {
    name: "Layout",
    slugs: ["grid", "bento", "asymmetric", "full-width", "split"],
  },
};

export default async function TagsPage() {
  const [tags, sections] = await Promise.all([
    getTags(),
    getSections(),
  ]);

  // タグごとのセクション数を計算
  const tagCounts = new Map<string, number>();
  sections.forEach((section) => {
    section.tags.forEach((tag) => {
      tagCounts.set(tag.slug, (tagCounts.get(tag.slug) || 0) + 1);
    });
  });

  // タグをカテゴリ別に分類
  const categorizedTags = Object.entries(TAG_CATEGORIES).map(([key, category]) => ({
    key,
    ...category,
    tags: tags
      .filter((tag) => category.slugs.includes(tag.slug))
      .map((tag) => ({
        ...tag,
        count: tagCounts.get(tag.slug) || 0,
      }))
      .sort((a, b) => b.count - a.count),
  }));

  // カテゴリに含まれていないタグ
  const categorizedSlugs = Object.values(TAG_CATEGORIES).flatMap((c) => c.slugs);
  const otherTags = tags
    .filter((tag) => !categorizedSlugs.includes(tag.slug))
    .map((tag) => ({
      ...tag,
      count: tagCounts.get(tag.slug) || 0,
    }))
    .sort((a, b) => b.count - a.count);

  // 全タグを使用頻度順に
  const popularTags = tags
    .map((tag) => ({
      ...tag,
      count: tagCounts.get(tag.slug) || 0,
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

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
            Filter by
          </span>
          <h1 className="mt-6 heading-display text-4xl sm:text-5xl">
            Tags
          </h1>
          <p className="mt-6 text-muted-foreground">
            {tags.length} tags available
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        {/* 人気のタグ */}
        <section className="mb-20">
          <span className="heading-section text-muted-foreground tracking-widest-custom">
            Popular Tags
          </span>
          <div className="mt-6 flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tags/${tag.slug}`}
                className="px-4 py-2 text-sm border border-border/50 rounded-lg hover:border-border hover:bg-muted/50 transition-all duration-300"
              >
                #{tag.name}
                <span className="ml-2 text-muted-foreground">{tag.count}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* カテゴリ別タグ */}
        <section>
          <span className="heading-section text-muted-foreground tracking-widest-custom mb-8 block">
            By Category
          </span>

          <div className="grid gap-6 lg:grid-cols-3">
            {categorizedTags.map((category) => (
              <div
                key={category.key}
                className="rounded-lg border border-border/50 bg-card/30 p-6"
              >
                <h3 className="text-sm font-medium tracking-wide mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/tags/${tag.slug}`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      #{tag.name}
                      <span className="ml-1 opacity-60">({tag.count})</span>
                    </Link>
                  ))}
                  {category.tags.length === 0 && (
                    <p className="text-xs text-muted-foreground">No tags</p>
                  )}
                </div>
              </div>
            ))}

            {/* その他のタグ */}
            {otherTags.length > 0 && (
              <div className="rounded-lg border border-border/50 bg-card/30 p-6">
                <h3 className="text-sm font-medium tracking-wide mb-4">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {otherTags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/tags/${tag.slug}`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      #{tag.name}
                      <span className="ml-1 opacity-60">({tag.count})</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
