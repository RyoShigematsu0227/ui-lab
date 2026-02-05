import { GalleryView } from "@/components/gallery/gallery-view";
import { RecentSections } from "@/components/gallery/recent-sections";
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
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヒーローセクション */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-4 text-4xl font-bold tracking-tight duration-500 md:text-5xl lg:text-6xl">
          UI Lab
        </h1>
        <p className="mx-auto max-w-2xl animate-in fade-in slide-in-from-bottom-4 text-lg text-muted-foreground duration-500 delay-100 fill-mode-both md:text-xl">
          AIが生成するモダンUIセクションのギャラリー。
          <br className="hidden sm:inline" />
          洗練されたUIコンポーネントを閲覧・コピーできます。
        </p>

        {/* 統計 */}
        <div className="mt-8 flex justify-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
          <div className="transition-transform hover:scale-105">
            <p className="text-3xl font-bold">{sections.length}</p>
            <p className="text-sm text-muted-foreground">セクション</p>
          </div>
          <div className="transition-transform hover:scale-105">
            <p className="text-3xl font-bold">{categories.length}</p>
            <p className="text-sm text-muted-foreground">カテゴリ</p>
          </div>
          <div className="transition-transform hover:scale-105">
            <p className="text-3xl font-bold">AI</p>
            <p className="text-sm text-muted-foreground">週次更新</p>
          </div>
        </div>
      </section>

      {/* 最近閲覧したセクション */}
      <RecentSections />

      {/* ギャラリー */}
      <section className="animate-in fade-in duration-500 delay-300 fill-mode-both">
        <GalleryView sections={sections} categories={categories} tags={tags} />
      </section>
    </div>
  );
}
