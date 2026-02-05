import { GalleryView } from "@/components/gallery/gallery-view";
import { RecentSections } from "@/components/gallery/recent-sections";
import { getSections, getCategories, getTags } from "@/lib/supabase";
import { ArrowDown, Sparkles, Layers, Zap } from "lucide-react";

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
      <section className="relative overflow-hidden border-b border-border/50">
        {/* 背景パターン */}
        <div className="absolute inset-0 bg-dot-pattern opacity-50 dark:opacity-30" />

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* グロー効果 */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[800px] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10" />
        </div>

        <div className="container relative mx-auto max-w-screen-xl px-4 pb-20 pt-24 md:pb-28 md:pt-32">
          {/* バッジ */}
          <div className="mb-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-muted-foreground">週次でAIが新セクションを追加</span>
            </div>
          </div>

          {/* タイトル */}
          <h1 className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 fill-mode-both">
            <span className="block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient">Modern UI</span>
              <span className="text-foreground"> Sections</span>
            </span>
            <span className="mt-2 block text-lg font-medium text-muted-foreground sm:text-xl md:mt-4 md:text-2xl">
              洗練されたUIコンポーネントのギャラリー
            </span>
          </h1>

          {/* 説明文 */}
          <p className="mx-auto mt-6 max-w-2xl text-center text-base text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 fill-mode-both md:mt-8 md:text-lg">
            AIが生成したNext.js + Tailwind CSSのUIセクションを
            <br className="hidden sm:inline" />
            ワンクリックでコピー。プロジェクトにすぐに導入できます。
          </p>

          {/* 統計カード */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 fill-mode-both md:mt-16 md:gap-6">
            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <Layers className="mb-2 h-5 w-5 text-primary md:h-6 md:w-6" />
                <p className="text-2xl font-bold tracking-tight md:text-4xl">{sections.length}</p>
                <p className="text-xs text-muted-foreground md:text-sm">セクション</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <Sparkles className="mb-2 h-5 w-5 text-primary md:h-6 md:w-6" />
                <p className="text-2xl font-bold tracking-tight md:text-4xl">{categories.length}</p>
                <p className="text-xs text-muted-foreground md:text-sm">カテゴリ</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <Zap className="mb-2 h-5 w-5 text-primary md:h-6 md:w-6" />
                <p className="text-2xl font-bold tracking-tight md:text-4xl">AI</p>
                <p className="text-xs text-muted-foreground md:text-sm">週次更新</p>
              </div>
            </div>
          </div>

          {/* スクロールインジケーター */}
          <div className="mt-16 flex justify-center animate-in fade-in duration-700 delay-500 fill-mode-both md:mt-20">
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-xs tracking-wider uppercase">Scroll</span>
              <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ギャラリーセクション */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-16 md:py-24">
        {/* 最近閲覧したセクション */}
        <RecentSections />

        {/* ギャラリー */}
        <div className="animate-in fade-in duration-500 delay-100 fill-mode-both">
          <GalleryView sections={sections} categories={categories} tags={tags} />
        </div>
      </section>
    </>
  );
}
