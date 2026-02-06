import { Skeleton } from "@/components/ui/skeleton";
import { SectionGridSkeleton } from "@/components/gallery/section-card-skeleton";

export default function Loading() {
  return (
    <>
      {/* ヒーローセクション */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container mx-auto max-w-screen-xl px-6 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* 左側: テキストコンテンツ */}
            <div className="max-w-xl">
              {/* セクションラベル */}
              <Skeleton className="mb-8 h-3 w-36" />

              {/* メインタイトル */}
              <Skeleton className="mb-2 h-10 w-64 sm:h-12 md:h-14" />
              <Skeleton className="h-10 w-44 sm:h-12 md:h-14" />

              {/* 説明文 */}
              <div className="mt-8">
                <Skeleton className="mb-2 h-4 w-72" />
                <Skeleton className="h-4 w-56" />
              </div>

              {/* 統計 */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex items-baseline gap-12">
                  <div className="flex items-baseline gap-3">
                    <Skeleton className="h-7 w-10" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                  <div className="flex items-baseline gap-3">
                    <Skeleton className="h-7 w-6" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            </div>

            {/* 右側: ビジュアルプレースホルダー */}
            <div className="hidden lg:block relative h-[400px]" />
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
            <Skeleton className="h-3 w-32" />
            <div className="h-px flex-1 max-w-[200px] bg-border/40 ml-6 hidden sm:block" />
          </div>

          {/* コントロールバー */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Skeleton className="h-4 w-24" />
              <div className="flex items-center gap-3">
                <Skeleton className="h-9 w-9 rounded-lg" />
                <Skeleton className="h-9 w-24 rounded-lg" />
              </div>
            </div>

            {/* 検索バーとソート */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Skeleton className="h-10 flex-1 rounded-lg" />
              <Skeleton className="h-10 w-32 rounded-lg" />
            </div>

            {/* グリッド */}
            <SectionGridSkeleton count={12} />
          </div>
        </div>
      </section>
    </>
  );
}
