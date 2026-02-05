import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, RefreshCw, Code2, Palette, ArrowRight, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About | UI Lab",
  description: "UI Labについて - AIが生成するモダンUIセクションのギャラリー",
};

const features = [
  {
    icon: Sparkles,
    title: "AI生成",
    description:
      "最新のUIトレンドをAIが分析し、オリジナルのUIセクションを自動生成。常に新鮮なデザインを提供します。",
  },
  {
    icon: RefreshCw,
    title: "週次更新",
    description:
      "毎週新しいセクションを追加。トレンドの変化に合わせて、最新のデザインパターンを取り入れています。",
  },
  {
    icon: Code2,
    title: "コピー可能",
    description:
      "すべてのセクションはNext.js + Tailwind CSSのコードとして提供。ワンクリックでコピーしてすぐに使えます。",
  },
  {
    icon: Palette,
    title: "ダークモード対応",
    description:
      "すべてのコンポーネントがライト/ダークモード両対応。カスタマイズなしでそのまま導入できます。",
  },
];

const techStack = {
  frontend: [
    { name: "Next.js", description: "App Router" },
    { name: "TypeScript", description: "型安全" },
    { name: "Tailwind CSS", description: "v4" },
    { name: "shadcn/ui", description: "UIコンポーネント" },
  ],
  backend: [
    { name: "Supabase", description: "PostgreSQL" },
    { name: "Vercel", description: "ホスティング" },
    { name: "GitHub Actions", description: "CI/CD" },
    { name: "Claude API", description: "AI生成" },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative overflow-hidden border-b border-border/50">
        {/* 背景 */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-primary/20 blur-[100px] dark:bg-primary/10" />
        </div>

        <div className="container relative mx-auto max-w-screen-lg px-4 py-16 md:py-24">
          {/* 戻るリンク */}
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            トップに戻る
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-gradient">UI Lab</span>
              <span className="block mt-2 text-xl font-medium text-muted-foreground md:text-2xl">
                About
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              UI Labは、AIが生成するモダンUIセクションのギャラリーサイトです。
              フロントエンド開発者やUIデザイナーのインスピレーション源として、
              また実際のプロジェクトで使えるコードスニペットとして活用できます。
            </p>
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">特徴</h2>
          <p className="mt-3 text-muted-foreground">
            UI Labが提供する価値
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 transition-all hover:border-primary/20 hover:bg-card md:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 技術スタック */}
      <section className="border-y border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">技術スタック</h2>
            <p className="mt-3 text-muted-foreground">
              モダンな技術で構築
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* フロントエンド */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Layers className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">フロントエンド</h3>
              </div>
              <div className="space-y-4">
                {techStack.frontend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* バックエンド */}
            <div className="rounded-2xl border border-border/50 bg-card/50 p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">バックエンド・インフラ</h3>
              </div>
              <div className="space-y-4">
                {techStack.backend.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-muted-foreground">{tech.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-screen-lg px-4 py-16 md:py-24">
        <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            セクションを探す
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            AIが生成した洗練されたUIセクションを閲覧し、
            あなたのプロジェクトに取り入れましょう。
          </p>
          <div className="mt-8">
            <Link href="/">
              <Button size="lg" className="gap-2 rounded-full px-8">
                ギャラリーを見る
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
