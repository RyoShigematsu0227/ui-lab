import { Skeleton } from "@/components/ui/skeleton";
import { SectionGridSkeleton } from "@/components/gallery/section-card-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* パンくずリスト */}
      <div className="mb-6 flex items-center gap-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* ヘッダー */}
      <div className="mb-8">
        <Skeleton className="mb-3 h-9 w-48" />
        <Skeleton className="mb-2 h-6 w-96 max-w-full" />
        <Skeleton className="h-5 w-32" />
      </div>

      {/* グリッド */}
      <SectionGridSkeleton count={8} />
    </div>
  );
}
