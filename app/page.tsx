import { GalleryView } from "@/components/gallery/gallery-view";
import { RecentSections } from "@/components/gallery/recent-sections";
import { getSections, getCategories, getTags } from "@/lib/supabase";
import { ArrowDown } from "lucide-react";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export default async function Home() {
  const [sections, categories, tags] = await Promise.all([
    getSections(),
    getCategories(),
    getTags(),
  ]);

  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* 背景グロー */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        </div>

        {/* 背景ドットパターン */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

        <div className="relative z-10 container mx-auto max-w-screen-lg px-6 sm:px-8 md:px-12 text-center">
          {/* サブテキスト */}
          <div className="mb-8 opacity-0 animate-fade-up">
            <span className="heading-section text-muted-foreground tracking-widest-custom">
              AI-Powered UI Components
            </span>
          </div>

          {/* メインタイトル */}
          <h1 className="opacity-0 animate-fade-up delay-100">
            <span className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-gradient glow-text">UI Lab</span>
            </span>
          </h1>

          {/* 説明文 */}
          <p className="mt-8 md:mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-200">
            AIが生成した洗練されたUIセクションを
            <br className="hidden sm:inline" />
            ワンクリックでコピー。
          </p>

          {/* 統計 */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 md:gap-20 opacity-0 animate-fade-up delay-300">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{sections.length}</p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-widest-custom uppercase">Sections</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">{categories.length}</p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-widest-custom uppercase">Categories</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">AI</p>
              <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm text-muted-foreground tracking-widest-custom uppercase">Generated</p>
            </div>
          </div>

          {/* スクロールインジケーター - モバイルでは非表示 */}
          <div className="hidden sm:block absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
            <div className="flex flex-col items-center gap-3 text-muted-foreground hover-opacity cursor-pointer">
              <span className="text-[10px] tracking-widest-custom uppercase">Scroll</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* 下部ボーダー */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* ギャラリーセクション */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-20 md:py-32">
          {/* 最近閲覧したセクション */}
          <RecentSections />

          {/* セクションヘッダー */}
          <div className="mb-12 opacity-0 animate-fade-up">
            <span className="heading-section text-muted-foreground tracking-widest-custom">
              Browse Collection
            </span>
          </div>

          {/* ギャラリー */}
          <div className="opacity-0 animate-fade-up delay-100">
            <GalleryView sections={sections} categories={categories} tags={tags} />
          </div>
        </div>
      </section>
    </>
  );
}
