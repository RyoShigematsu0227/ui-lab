import { Skeleton } from "@/components/ui/skeleton";
import { SiteGridSkeleton } from "@/components/gallery/site-card-skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <Skeleton className="mb-3 h-9 w-36" />
        <Skeleton className="h-6 w-80" />
        <Skeleton className="mt-2 h-5 w-24" />
      </div>

      {/* サイト一覧 */}
      <SiteGridSkeleton count={6} />
    </div>
  );
}
