import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* 戻るリンク */}
      <Skeleton className="mb-6 h-9 w-48" />

      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Skeleton className="mb-3 h-6 w-24" />
            <Skeleton className="mb-3 h-9 w-80" />
            <Skeleton className="h-6 w-full max-w-lg" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-9 w-20" />
          </div>
        </div>

        {/* タグ */}
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>

      {/* プレビュー */}
      <div className="mb-8">
        <Skeleton className="aspect-video w-full rounded-lg" />
      </div>

      {/* コード */}
      <div className="mb-12">
        <Skeleton className="mb-4 h-6 w-16" />
        <Skeleton className="h-96 w-full rounded-lg" />
      </div>
    </div>
  );
}
