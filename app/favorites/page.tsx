import { Metadata } from "next";
import { FavoritesPageContent } from "@/components/gallery/favorites-page-content";
import { getSections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Favorites",
  description: "お気に入りに追加したUIセクション一覧",
};

export default async function FavoritesPage() {
  const sections = await getSections();
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* 背景 */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12 text-center">
          <span className="heading-section text-muted-foreground tracking-widest-custom">
            Your Collection
          </span>
          <h1 className="mt-6 heading-display text-4xl sm:text-5xl">
            Favorites
          </h1>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            保存したセクションはここに表示されます。
            ハートをクリックして追加できます。
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* コンテンツ */}
      <section className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        <FavoritesPageContent sections={sections} />
      </section>
    </div>
  );
}
