import Link from "next/link";
import { Home, Search, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const suggestions = [
  { icon: Home, label: "トップページ", href: "/", description: "セクション一覧を見る" },
  { icon: Search, label: "サイト事例", href: "/sites", description: "デザイン事例を探す" },
  { icon: Heart, label: "お気に入り", href: "/favorites", description: "保存したセクション" },
  { icon: Sparkles, label: "About", href: "/about", description: "UI Labについて" },
];

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 py-12">
      <div className="text-center">
        <h1 className="mb-2 text-8xl font-bold text-muted-foreground/20">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">ページが見つかりません</h2>
        <p className="mb-8 max-w-md text-muted-foreground">
          お探しのページは存在しないか、移動した可能性があります。
          以下のリンクから目的のページを探してみてください。
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
            </div>
          </Link>
        ))}
      </div>

      <Link href="/">
        <Button>トップページに戻る</Button>
      </Link>
    </div>
  );
}
