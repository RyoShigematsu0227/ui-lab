"use client";

// プレビューiframe内でのエラーハンドリング
// ユーザーにはエラー詳細を見せず、空状態を表示する
export default function PreviewError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/10" />
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground/40">
          Preview unavailable
        </span>
      </div>
    </div>
  );
}
