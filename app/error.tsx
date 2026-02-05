"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // エラーをログに記録（本番環境では外部サービスに送信）
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">エラーが発生しました</h1>
      <p className="mb-8 text-muted-foreground">
        申し訳ありません。予期しないエラーが発生しました。
      </p>
      <div className="flex gap-4">
        <Button onClick={reset}>もう一度試す</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>
          トップページに戻る
        </Button>
      </div>
    </div>
  );
}
