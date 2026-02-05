import { GalleryView } from "@/components/gallery/gallery-view";
import { MOCK_SECTIONS } from "@/data/mock-sections";
import { CATEGORIES } from "@/data/categories";

export default function Home() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヒーローセクション */}
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          UI Lab
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
          AIが生成するモダンUIセクションのギャラリー。
          <br className="hidden sm:inline" />
          洗練されたUIコンポーネントを閲覧・コピーできます。
        </p>

        {/* 統計 */}
        <div className="mt-8 flex justify-center gap-8">
          <div>
            <p className="text-3xl font-bold">{MOCK_SECTIONS.length}</p>
            <p className="text-sm text-muted-foreground">セクション</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{CATEGORIES.length}</p>
            <p className="text-sm text-muted-foreground">カテゴリ</p>
          </div>
          <div>
            <p className="text-3xl font-bold">AI</p>
            <p className="text-sm text-muted-foreground">週次更新</p>
          </div>
        </div>
      </section>

      {/* ギャラリー */}
      <section>
        <GalleryView sections={MOCK_SECTIONS} categories={CATEGORIES} />
      </section>
    </div>
  );
}
