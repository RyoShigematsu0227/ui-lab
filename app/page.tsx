import { GalleryView } from "@/components/gallery/gallery-view";
import { getSections, getCategories, getTags } from "@/lib/supabase";

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
      {/* ヒーローセクション - acsim.app style */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12">
          {/* コーナードット装飾 */}
          <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />
          <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-foreground/20 rounded-full hidden md:block" />

          <div className="max-w-2xl">
            {/* セクションラベル */}
            <span className="inline-block text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground mb-8">
              UI Component Gallery
            </span>

            {/* メインタイトル */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]">
              Modern UI
              <br />
              <span className="text-muted-foreground">Sections</span>
            </h1>

            {/* 説明文 */}
            <p className="mt-8 text-[15px] text-muted-foreground max-w-md leading-[1.8] tracking-wide">
              Next.js + Tailwind CSS で構築された
              <br className="hidden sm:block" />
              UIセクションのコレクション
            </p>

            {/* 統計 - シンプルなレイアウト */}
            <div className="mt-12 pt-8 border-t border-border/50">
              <div className="flex items-baseline gap-12 text-[13px] tracking-wide">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-medium tabular-nums">
                    {sections.length}
                  </span>
                  <span className="text-muted-foreground uppercase tracking-[0.15em]">
                    Sections
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-medium tabular-nums">
                    {categories.length}
                  </span>
                  <span className="text-muted-foreground uppercase tracking-[0.15em]">
                    Categories
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 下部ボーダー */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-border/40" />
      </section>

      {/* ギャラリーセクション */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
          {/* セクションヘッダー */}
          <div className="mb-12 flex items-center justify-between">
            <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Browse Collection
            </span>
            <div className="h-px flex-1 max-w-[200px] bg-border/40 ml-6 hidden sm:block" />
          </div>

          {/* ギャラリー */}
          <GalleryView sections={sections} categories={categories} tags={tags} />
        </div>
      </section>
    </>
  );
}
