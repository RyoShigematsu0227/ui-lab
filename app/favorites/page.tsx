import { Metadata } from "next";
import { FavoritesPageContent } from "@/components/gallery/favorites-page-content";
import { Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "お気に入り",
  description: "お気に入りに追加したUIセクション一覧",
};

export default function FavoritesPage() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
              <Heart className="h-6 w-6 fill-red-500 text-red-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                お気に入り
              </h1>
              <p className="mt-2 max-w-xl text-lg text-muted-foreground">
                保存したセクションはここに表示されます。
                ハートをクリックして追加できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* コンテンツ */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
        <FavoritesPageContent />
      </section>
    </div>
  );
}
