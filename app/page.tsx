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
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12">
          <div className="max-w-3xl">
            {/* メインタイトル */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Modern UI
              <br />
              <span className="text-muted-foreground">Components</span>
            </h1>

            {/* 説明文 */}
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Next.js + Tailwind CSS で構築されたUIセクション。
              コードをコピーしてすぐに使えます。
            </p>

            {/* 統計 - インライン */}
            <div className="mt-10 flex items-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">{sections.length}</span>
                <span className="text-muted-foreground">sections</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-2xl font-semibold">{categories.length}</span>
                <span className="text-muted-foreground">categories</span>
              </div>
            </div>
          </div>
        </div>

        {/* 下部ボーダー */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50" />
      </section>

      {/* ギャラリーセクション */}
      <section className="relative">
        <div className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-20 md:py-32">
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
