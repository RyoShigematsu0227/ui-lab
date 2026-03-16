"use client";

import { useState } from "react";

export function NewsletterCard001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* カード */}
          <div className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-12">
            {/* ヘッダー */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border">
                <svg
                  className="h-4 w-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  ニュースレター
                </p>
                <h2 className="mt-2 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
                  最新のデザイントレンドを
                  <br className="hidden sm:block" />
                  お届けします
                </h2>
              </div>
            </div>

            {/* 説明文 */}
            <p className="mt-6 text-sm font-light leading-relaxed text-muted-foreground">
              UIデザイン、フロントエンド開発、アクセシビリティに関する厳選された情報を毎週配信。実務に役立つインサイトをお届けします。
            </p>

            {/* 区切り線 */}
            <div className="my-8 h-px bg-border/40" />

            {/* フォーム */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="メールアドレスを入力"
                  required
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-3 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200 focus:border-foreground/20 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-foreground px-6 py-3 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:bg-foreground/90"
                >
                  購読する
                </button>
              </div>
            </form>

            {/* フッター情報 */}
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <span className="text-xs tracking-wide text-muted-foreground/60">
                  毎週月曜配信
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                <span className="text-xs tracking-wide text-muted-foreground/60">
                  いつでも解除可能
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
