import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, RefreshCw, Code2, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | UI Lab",
  description: "UI Labについて - AIが生成するモダンUIセクションのギャラリー",
};

const features = [
  {
    icon: Sparkles,
    title: "AI生成",
    description:
      "最新のUIトレンドをAIが分析し、オリジナルのUIセクションを自動生成します。",
  },
  {
    icon: RefreshCw,
    title: "週次更新",
    description:
      "毎週新しいセクションが追加されます。常に最新のデザイントレンドをキャッチアップ。",
  },
  {
    icon: Code2,
    title: "コピー可能",
    description:
      "すべてのセクションはNext.js + Tailwind CSSのコードとして提供。ワンクリックでコピー。",
  },
  {
    icon: Palette,
    title: "ダークモード対応",
    description:
      "すべてのセクションはライト/ダークモード両対応。そのまま使えます。",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-screen-lg px-4 py-8">
      {/* 戻るリンク */}
      <Link href="/">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          トップに戻る
        </Button>
      </Link>

      {/* ヘッダー */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">About UI Lab</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          UI
          Labは、AIが生成するモダンUIセクションのギャラリーサイトです。フロントエンド開発者やUIデザイナーのインスピレーション源として、また実際のプロジェクトで使えるコードスニペットとして活用できます。
        </p>
      </div>

      {/* 特徴 */}
      <div className="mb-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">特徴</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* 技術スタック */}
      <div className="mb-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">技術スタック</h2>
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-4 text-sm md:grid-cols-2">
              <div>
                <h3 className="mb-2 font-semibold">フロントエンド</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Next.js (App Router)</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS v4</li>
                  <li>shadcn/ui</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">バックエンド・インフラ</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Supabase (PostgreSQL)</li>
                  <li>Vercel</li>
                  <li>GitHub Actions</li>
                  <li>Claude API (AI生成)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="mb-4 text-muted-foreground">
          セクションを探してみましょう
        </p>
        <Link href="/">
          <Button size="lg">ギャラリーを見る</Button>
        </Link>
      </div>
    </div>
  );
}
