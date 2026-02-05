import Link from "next/link";
import { Home, Search, Heart, Sparkles, ArrowRight, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSections, getCategories } from "@/lib/supabase";

const suggestions = [
  { icon: Home, label: "トップページ", href: "/", description: "セクション一覧を見る" },
  { icon: Search, label: "サイト事例", href: "/sites", description: "デザイン事例を探す" },
  { icon: Heart, label: "お気に入り", href: "/favorites", description: "保存したセクション" },
  { icon: Sparkles, label: "About", href: "/about", description: "UI Labについて" },
];

export default async function NotFound() {
  // 人気のセクションとカテゴリを取得
  const [sections, categories] = await Promise.all([
    getSections(),
    getCategories(),
  ]);

  // 最新の5セクションを取得
  const popularSections = sections.slice(0, 5);
  // 人気カテゴリ（最初の5個）
  const popularCategories = categories.slice(0, 5);

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      {/* ヘッダー */}
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex rounded-full bg-muted p-4">
          <FileQuestion className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="mb-2 text-6xl font-bold text-muted-foreground/30">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">ページが見つかりません</h2>
        <p className="max-w-md text-muted-foreground">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
      </div>

      {/* 提案リンク */}
      <div className="mb-8 grid w-full max-w-lg gap-3">
        {suggestions.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </div>
          </Link>
        ))}
      </div>

      {/* 人気カテゴリ */}
      <div className="mb-8 w-full max-w-lg">
        <h3 className="mb-3 text-center text-sm font-medium text-muted-foreground">
          人気のカテゴリ
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          {popularCategories.map((category) => (
            <Link key={category.id} href={`/categories/${category.slug}`}>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* 人気セクション */}
      <div className="mb-8 w-full max-w-2xl">
        <h3 className="mb-4 text-center text-sm font-medium text-muted-foreground">
          人気のセクション
        </h3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {popularSections.map((section) => (
            <Link key={section.id} href={`/sections/${section.slug}`}>
              <div className="rounded-lg border border-border p-3 transition-colors hover:bg-accent">
                <p className="line-clamp-1 text-sm font-medium">{section.title}</p>
                <p className="text-xs text-muted-foreground">
                  {section.category?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Link href="/">
        <Button size="lg">トップページに戻る</Button>
      </Link>
    </div>
  );
}
