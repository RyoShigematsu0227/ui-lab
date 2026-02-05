import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "UI Labについて - AIが生成するモダンUIセクションのギャラリー",
};

const features = [
  {
    title: "AI Generated",
    description:
      "最新のUIトレンドをAIが分析し、オリジナルのUIセクションを自動生成。常に新鮮なデザインを提供します。",
  },
  {
    title: "Weekly Updates",
    description:
      "毎週新しいセクションを追加。トレンドの変化に合わせて、最新のデザインパターンを取り入れています。",
  },
  {
    title: "Copy & Paste",
    description:
      "すべてのセクションはNext.js + Tailwind CSSのコードとして提供。ワンクリックでコピーしてすぐに使えます。",
  },
  {
    title: "Dark Mode Ready",
    description:
      "すべてのコンポーネントがライト/ダークモード両対応。カスタマイズなしでそのまま導入できます。",
  },
];

const techStack = [
  { name: "Next.js", label: "App Router" },
  { name: "TypeScript", label: "Strict" },
  { name: "Tailwind CSS", label: "v4" },
  { name: "shadcn/ui", label: "Components" },
  { name: "Supabase", label: "Database" },
  { name: "Claude API", label: "AI" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        {/* 背景グロー */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        </div>

        {/* 背景ドットパターン */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />

        <div className="relative z-10 container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12 text-center">
          <span className="heading-section text-muted-foreground tracking-widest-custom opacity-0 animate-fade-up">
            About
          </span>

          <h1 className="mt-6 heading-display text-4xl sm:text-5xl md:text-6xl opacity-0 animate-fade-up delay-100">
            <span className="text-gradient glow-text">UI Lab</span>
          </h1>

          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto opacity-0 animate-fade-up delay-200">
            AIが生成するモダンUIセクションのギャラリー。
            フロントエンド開発者やUIデザイナーの
            インスピレーション源として活用できます。
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* 特徴 */}
      <section className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-24 md:py-32">
        <div className="mb-16">
          <span className="heading-section text-muted-foreground tracking-widest-custom">
            Features
          </span>
        </div>

        <div className="grid gap-px bg-border/50 md:grid-cols-2 rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-background p-8 md:p-10 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold tracking-wide">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 技術スタック */}
      <section className="border-y border-border/50">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-24 md:py-32">
          <div className="mb-16">
            <span className="heading-section text-muted-foreground tracking-widest-custom">
              Tech Stack
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center justify-between p-4 rounded-lg border border-border/50 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium">{tech.name}</span>
                <span className="text-xs text-muted-foreground tracking-wide">{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-24 md:py-32">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Start Exploring
          </h2>
          <p className="mt-4 text-muted-foreground">
            AIが生成した洗練されたUIセクションを閲覧しましょう
          </p>
          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium tracking-wide bg-foreground text-background rounded-lg hover-opacity transition-opacity"
            >
              View Gallery
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
