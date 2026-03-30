"use client";

import { useState } from "react";

const projects = [
  {
    title: "デジタルプロダクト",
    category: "プロダクトデザイン",
    year: "2024",
    description: "直感的なインターフェースを追求した、次世代のプロダクト体験。",
  },
  {
    title: "ブランドリニューアル",
    category: "ブランディング",
    year: "2024",
    description: "企業の本質を捉え直し、新たなビジュアル言語で再構築。",
  },
  {
    title: "空間デザイン",
    category: "インテリア",
    year: "2023",
    description: "光と素材の対話から生まれる、静謐で上質な空間設計。",
  },
  {
    title: "エディトリアル",
    category: "グラフィック",
    year: "2024",
    description: "情報の階層を丁寧に整理し、読む体験そのものをデザイン。",
  },
  {
    title: "ウェブプラットフォーム",
    category: "ウェブデザイン",
    year: "2023",
    description: "複雑な機能を簡潔に提示する、洗練されたインターフェース。",
  },
];

export function GalleryCarousel001() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) {
      setCurrent(projects.length - 1);
    } else if (index >= projects.length) {
      setCurrent(0);
    } else {
      setCurrent(index);
    }
  };

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Gallery
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              厳選されたプロジェクト
            </h2>
          </div>

          {/* ナビゲーション */}
          <div className="flex items-center gap-4">
            <span className="text-xs tabular-nums tracking-[0.2em] text-muted-foreground/60">
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => goTo(current - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                aria-label="前のプロジェクト"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors duration-200 hover:border-foreground/40 hover:text-foreground"
                aria-label="次のプロジェクト"
              >
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* カルーセル本体 */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* ビジュアルエリア */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 transition-all duration-700" />
              {/* コーナードット */}
              <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              <div className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              <div className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-foreground/20" />
              {/* 中央ラベル */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30">
                  {projects[current].category}
                </span>
                <span className="text-lg font-medium tracking-wide text-foreground/40">
                  {projects[current].title}
                </span>
              </div>
            </div>

            {/* テキストエリア */}
            <div className="flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                    {projects[current].year}
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
                <h3 className="mt-6 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
                  {projects[current].title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {projects[current].category}
                </p>
                <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
                  {projects[current].description}
                </p>
              </div>

              {/* 下部のインジケーター */}
              <div className="mt-8 flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-px transition-all duration-300 ${
                      index === current
                        ? "w-8 bg-foreground"
                        : "w-4 bg-border/60 hover:bg-foreground/30"
                    }`}
                    aria-label={`プロジェクト ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* サムネイルリスト */}
        <div className="mt-12 grid grid-cols-5 gap-3">
          {projects.map((project, index) => (
            <button
              key={project.title}
              onClick={() => setCurrent(index)}
              className={`group text-left transition-opacity duration-200 ${
                index === current ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              <div className="aspect-[3/2] overflow-hidden rounded border border-border bg-muted">
                <div className="h-full w-full bg-gradient-to-br from-foreground/5 to-foreground/10" />
              </div>
              <p className="mt-2 truncate text-[10px] tracking-[0.15em] text-muted-foreground">
                {project.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
