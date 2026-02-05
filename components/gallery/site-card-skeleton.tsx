import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SiteCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      {/* スクリーンショット */}
      <Skeleton className="aspect-[16/10] rounded-none" />

      <CardContent className="p-4">
        {/* タイトル */}
        <Skeleton className="mb-2 h-5 w-3/4" />

        {/* 説明 */}
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="mb-3 h-4 w-2/3" />

        {/* タグ */}
        <div className="flex gap-1">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export function SiteGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <SiteCardSkeleton key={i} />
      ))}
    </div>
  );
}
