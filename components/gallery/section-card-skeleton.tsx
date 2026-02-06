import { Skeleton } from "@/components/ui/skeleton";

export function SectionCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-border/50 bg-card">
      {/* サムネイル */}
      <Skeleton className="aspect-[16/10] rounded-none" />

      {/* コンテンツ */}
      <div className="p-4">
        {/* カテゴリ */}
        <Skeleton className="mb-2 h-2.5 w-16" />

        {/* タイトル + お気に入り */}
        <div className="flex items-start justify-between gap-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-7 w-7 shrink-0 rounded-md" />
        </div>

        {/* タグ */}
        <div className="mt-3 flex gap-2">
          <Skeleton className="h-2.5 w-12" />
          <Skeleton className="h-2.5 w-16" />
        </div>
      </div>
    </div>
  );
}

export function SectionGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: count }).map((_, i) => (
        <SectionCardSkeleton key={i} />
      ))}
    </div>
  );
}
