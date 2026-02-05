import { Metadata } from "next";
import Link from "next/link";
import { Hash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    slugs: ["gradient", "glassmorphism", "dark-mode", "minimal", "bold-typography", "illustration", "3d", "retro", "neomorphism"],
  },
  interaction: {
    name: "インタラクション",
    description: "動きや操作に関するタグ",
    slugs: ["animation", "scroll-driven", "hover-effect", "interactive", "parallax"],
  },
  layout: {
    name: "レイアウト",
    description: "配置や構造に関するタグ",
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
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Hash className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">タグ一覧</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          {tags.length} 種類のタグでセクションを探せます
        </p>
      </div>

      {/* 人気のタグ */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">人気のタグ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag) => (
              <Link key={tag.id} href={`/tags/${tag.slug}`}>
                <Badge
                  variant="secondary"
                  className="cursor-pointer px-3 py-1.5 text-sm hover:bg-accent"
                >
                  #{tag.name}
                  <span className="ml-1.5 text-xs text-muted-foreground">
                    ({tag.count})
                  </span>
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* カテゴリ別タグ */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categorizedTags.map((category) => (
          <Card key={category.key}>
            <CardHeader>
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.slug}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
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
            </CardContent>
          </Card>
        ))}

        {/* その他のタグ */}
        {otherTags.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">その他</CardTitle>
              <p className="text-sm text-muted-foreground">その他のタグ</p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {otherTags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.slug}`}>
                    <Badge
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                    >
                      #{tag.name}
                      <span className="ml-1 text-xs text-muted-foreground">
                        ({tag.count})
                      </span>
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
