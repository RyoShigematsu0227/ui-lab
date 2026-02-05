import { Skeleton } from "@/components/ui/skeleton";
import { SectionGridSkeleton } from "@/components/gallery/section-card-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* パンくずリスト */}
      <div className="mb-6 flex items-center gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-28" />
      </div>

      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <Skeleton className="h-6 w-6 rounded-full" />
          <Skeleton className="h-9 w-40" />
        </div>
        <Skeleton className="h-5 w-32" />
      </div>

      {/* 検索・ソートバー */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Skeleton className="h-10 w-full max-w-md" />
        <Skeleton className="h-9 w-32" />
      </div>

      {/* グリッド */}
      <SectionGridSkeleton count={8} />
    </div>
  );
}
