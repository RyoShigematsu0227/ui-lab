import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSections, getCategories, getSites } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "UI Labについて - AIが生成するモダンUIセクションのギャラリー",
};

const pipeline = [
  {
    number: "01",
    title: "Observe",
    description: "AIが世界のUIトレンドを静かに観測し続ける",
  },
  {
    number: "02",
    title: "Create",
    description: "トレンドから着想を得て、オリジナルのUIをコードごと生成",
  },
  {
    number: "03",
    title: "Deliver",
    description: "毎週月曜、新しいインスピレーションが届く",
  },
];

const usage = [
  {
    number: "01",
    title: "Find",
    description: "カテゴリとタグで、目的のUIに最短で辿り着く",
  },
  {
    number: "02",
    title: "Copy",
    description: "Next.js + Tailwind CSS。コードはワンクリック",
  },
  {
    number: "03",
    title: "Use",
    description: "ダーク/ライト完全対応。そのまま実装へ",
  },
];

const techStack = [
  { name: "Next.js", label: "App Router" },
  { name: "TypeScript", label: "Strict" },
  { name: "Tailwind CSS", label: "v4" },
  { name: "shadcn/ui", label: "Components" },
  { name: "Claude Code", label: "AI Generation" },
  { name: "Playwright", label: "Screenshots" },
];

export default async function AboutPage() {
  const [sections, categories, sites] = await Promise.all([
    getSections(),
    getCategories(),
    getSites(),
  ]);

  const numbers = [
    { value: sections.length.toString(), label: "Sections" },
    { value: categories.length.toString(), label: "Categories" },
    { value: sites.length.toString(), label: "Sites" },
    { value: "Weekly", label: "Updates" },
  ];

  return (
    <div className="min-h-screen">
      {/* ヒーロー */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />
        <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />

        <div className="container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12">
          <span className="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
            About
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]">
            トレンドは、
            <br />
            追いかけなくていい。
          </h1>

          <p className="mt-8 text-[15px] text-muted-foreground max-w-lg leading-[1.8] tracking-wide">
            UIの最前線を、AIが自動で追い続ける。
            <br className="hidden sm:block" />
            あなたはただ、眺めるだけでいい。
          </p>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* AI Pipeline */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              AI Pipeline
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          <div className="grid gap-px bg-border/30 md:grid-cols-3">
            {pipeline.map((step) => (
              <div key={step.title} className="bg-background p-8 md:p-10">
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-medium tracking-wide">{step.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.8] text-muted-foreground tracking-wide">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* Numbers */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Numbers
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          <div className="grid grid-cols-2 gap-px bg-border/30 md:grid-cols-4">
            {numbers.map((item) => (
              <div key={item.label} className="bg-background p-8 md:p-10">
                <span className="text-2xl md:text-3xl font-medium tracking-tight">
                  {item.value}
                </span>
                <p className="mt-3 text-[10px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* For Developers */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              For Developers
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          <div className="grid gap-px bg-border/30 md:grid-cols-3">
            {usage.map((step) => (
              <div key={step.title} className="bg-background p-8 md:p-10">
                <span className="text-[10px] font-medium tracking-[0.2em] text-muted-foreground/60">
                  {step.number}
                </span>
                <h3 className="mt-4 text-base font-medium tracking-wide">{step.title}</h3>
                <p className="mt-3 text-[13px] leading-[1.8] text-muted-foreground tracking-wide">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* Tech Stack */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 py-20 md:py-28">
          <div className="mb-16 flex items-center">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Tech Stack
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-border/40 ml-6" />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center justify-between p-4 border border-border/40 transition-colors hover:border-border"
              >
                <span className="text-[13px] font-medium tracking-wide">{tech.name}</span>
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
            <h2 className="text-xl md:text-2xl font-medium tracking-tight">まず、眺めてみる</h2>
            <p className="mt-4 text-[13px] text-muted-foreground tracking-wide leading-[1.8]">
              次のプロジェクトのヒントが見つかるかもしれない
            </p>
            <div className="mt-10 flex flex-wrap gap-8">
              <Link
                href="/"
                className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.1em] uppercase transition-opacity hover:opacity-60"
              >
                Browse Sections
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/sites"
                className="group inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.1em] uppercase text-muted-foreground transition-opacity hover:opacity-60"
              >
                View Sites
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />
        </div>
      </section>
    </div>
  );
}
