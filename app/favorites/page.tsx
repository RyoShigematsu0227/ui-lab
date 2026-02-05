import { Metadata } from "next";
import { FavoritesPageContent } from "@/components/gallery/favorites-page-content";

export const metadata: Metadata = {
  title: "お気に入り",
  description: "お気に入りに追加したUIセクション一覧",
};

export default function FavoritesPage() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold">お気に入り</h1>
        <p className="text-muted-foreground">
          お気に入りに追加したセクションがここに表示されます。
        </p>
      </div>

      {/* コンテンツ（Client Component） */}
      <FavoritesPageContent />
    </div>
  );
}
