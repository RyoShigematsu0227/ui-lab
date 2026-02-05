import { Metadata } from "next";
import Link from "next/link";
import { Hash, Sparkles, MousePointer, Grid3X3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getTags, getSections } from "@/lib/supabase";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "タグ一覧 | UI Lab",
  description: "UIセクションのタグ一覧。ビジュアルスタイル、インタラクション、レイアウトなどのタグでセクションを探せます。",
};

// タグカテゴリの定義
const TAG_CATEGORIES = {
  visual: {
    name: "ビジュアルスタイル",
    description: "デザインの見た目に関するタグ",
    icon: Sparkles,
    slugs: ["gradient", "glassmorphism", "dark-mode", "minimal", "bold-typography", "illustration", "3d", "retro", "neomorphism"],
  },
  interaction: {
    name: "インタラクション",
    description: "動きや操作に関するタグ",
    icon: MousePointer,
    slugs: ["animation", "scroll-driven", "hover-effect", "interactive", "parallax"],
  },
  layout: {
    name: "レイアウト",
    description: "配置や構造に関するタグ",
    icon: Grid3X3,
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

  // 全タグを使用頻度順に並べて上位を取得
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
      <section className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Hash className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                タグ一覧
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                {tags.length} 種類のタグでセクションを探せます
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-screen-xl px-4 py-12 md:py-16">
        {/* 人気のタグ */}
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
            人気のタグ
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <Link key={tag.id} href={`/tags/${tag.slug}`}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer px-4 py-2 text-sm transition-colors hover:bg-accent"
                >
                  #{tag.name}
                  <span className="ml-2 rounded-md bg-background/80 px-1.5 py-0.5 text-xs text-muted-foreground">
                    {tag.count}
                  </span>
                </Badge>
              </Link>
            ))}
          </div>
        </section>

        {/* カテゴリ別タグ */}
        <section>
          <h2 className="mb-6 text-lg font-semibold uppercase tracking-wider text-muted-foreground">
            カテゴリ別タグ
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {categorizedTags.map((category) => (
              <div
                key={category.key}
                className="rounded-2xl border border-border/50 bg-card/50 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <Link key={tag.id} href={`/tags/${tag.slug}`}>
                      <Badge
                        variant="outline"
                        className="cursor-pointer transition-colors hover:bg-accent"
                      >
                        #{tag.name}
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({tag.count})
                        </span>
                      </Badge>
                    </Link>
                  ))}
                  {category.tags.length === 0 && (
                    <p className="text-sm text-muted-foreground">タグがありません</p>
                  )}
                </div>
              </div>
            ))}

            {/* その他のタグ */}
            {otherTags.length > 0 && (
              <div className="rounded-2xl border border-border/50 bg-card/50 p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Hash className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">その他</h3>
                    <p className="text-xs text-muted-foreground">その他のタグ</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {otherTags.map((tag) => (
                    <Link key={tag.id} href={`/tags/${tag.slug}`}>
                      <Badge
                        variant="outline"
                        className="cursor-pointer transition-colors hover:bg-accent"
                      >
                        #{tag.name}
                        <span className="ml-1 text-xs text-muted-foreground">
                          ({tag.count})
                        </span>
                      </Badge>
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
