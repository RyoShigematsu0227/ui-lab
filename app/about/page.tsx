import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "UI Labについて - AIが生成するモダンUIセクションのギャラリー",
};

const features = [
  {
    number: "01",
    title: "AI Generated",
    description:
      "最新のUIトレンドをAIが分析し、オリジナルのUIセクションを自動生成",
  },
  {
    number: "02",
    title: "Weekly Updates",
    description:
      "毎週新しいセクションを追加。トレンドの変化に合わせた最新デザイン",
  },
  {
    number: "03",
    title: "Copy & Paste",
    description:
      "Next.js + Tailwind CSSのコードをワンクリックでコピー",
  },
  {
    number: "04",
    title: "Dark Mode Ready",
    description:
      "すべてのコンポーネントがライト/ダークモード両対応",
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
      {/* ヒーロー - acsim.app style */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        {/* コーナードット装飾 */}
        <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />
        <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />

        <div className="container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12">
          {/* セクションラベル */}
          <span className="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            About
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]">
            UI Lab
          </h1>

          <p className="mt-8 text-[15px] text-muted-foreground max-w-md leading-[1.8] tracking-wide">
            AIが生成するモダンUIセクションのギャラリー。
            フロントエンド開発者やUIデザイナーの
            インスピレーション源として。
          </p>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* 特徴 */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          {/* セクションヘッダー */}
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Features
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          {/* 特徴リスト - シンプルなグリッド */}
          <div className="grid gap-px bg-border/30 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-background p-8 md:p-10"
              >
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60">
                  {feature.number}
                </span>
                <h3 className="mt-4 text-base font-medium tracking-wide">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.8] text-muted-foreground tracking-wide">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* 技術スタック */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          {/* セクションヘッダー */}
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Tech Stack
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          {/* 技術リスト - ミニマルなカード */}
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between p-4 border border-border/40 transition-colors hover:border-border"
              >
                <span className="text-[13px] font-medium tracking-wide">
                  {tech.name}
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
                  {tech.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-24 md:py-32">
          <div className="max-w-md">
            <span className="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Explore
            </span>
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">
              Start Exploring
            </h2>
            <p className="mt-4 text-[13px] text-muted-foreground tracking-wide leading-[1.8]">
              AIが生成した洗練されたUIセクションを閲覧
            </p>
            <div className="mt-10">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
              >
                View Gallery
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* コーナードット装飾 */}
          <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />
        </div>
      </section>
    </div>
  );
}
