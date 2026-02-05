import { Skeleton } from "@/components/ui/skeleton";
import { SectionGridSkeleton } from "@/components/gallery/section-card-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <Skeleton className="mb-3 h-9 w-48" />
        <Skeleton className="h-6 w-80" />
      </div>

      {/* コンテンツ */}
      <div className="space-y-6">
        <Skeleton className="h-5 w-32" />
        <SectionGridSkeleton count={4} />
      </div>
    </div>
  );
}
