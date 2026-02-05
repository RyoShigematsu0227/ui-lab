import { Skeleton } from "@/components/ui/skeleton";
import { SectionGridSkeleton } from "@/components/gallery/section-card-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヒーローセクション */}
      <section className="mb-12 text-center">
        <Skeleton className="mx-auto mb-4 h-12 w-48 md:h-14 lg:h-16" />
        <Skeleton className="mx-auto mb-2 h-6 w-96 max-w-full" />
        <Skeleton className="mx-auto h-6 w-72 max-w-full" />

        {/* 統計 */}
        <div className="mt-8 flex justify-center gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <Skeleton className="mb-1 h-8 w-12" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* ギャラリー */}
      <section className="space-y-6">
        {/* 検索バー */}
        <Skeleton className="h-10 w-full max-w-md" />

        {/* カテゴリフィルター */}
        <div className="flex gap-2 overflow-x-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-9 w-24 shrink-0 rounded-full" />
          ))}
        </div>

        {/* 結果数 */}
        <Skeleton className="h-5 w-32" />

        {/* グリッド */}
        <SectionGridSkeleton count={8} />
      </section>
    </div>
  );
}
