"use client";

import { useState } from "react";

export function NewsletterElegant001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const topics = [
    { label: "デザイントレンド", count: "週1回" },
    { label: "テクノロジー", count: "月2回" },
    { label: "ケーススタディ", count: "月1回" },
  ];

  return (
    <section className="bg-background py-32 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-5">
          {/* 左: テキストコンテンツ */}
          <div className="lg:col-span-3">
            {/* デコレーション */}
            <div className="flex items-center gap-4">
              <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
              <div className="h-px w-12 bg-border/40" />
            </div>

            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Newsletter
            </p>

            <h2 className="mt-4 text-3xl font-medium leading-snug tracking-wide text-foreground sm:text-4xl">
              知見を、
              <br />
              あなたの受信箱へ。
            </h2>

            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
              デザインとテクノロジーの最前線をお届けします。
              厳選されたインサイトと実践的なナレッジを、
              定期的にお届けします。
            </p>

            {/* トピック一覧 */}
            <div className="mt-10 space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                Topics
              </p>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <div
                    key={topic.label}
                    className="flex items-center gap-3"
                  >
                    <div className="h-px w-3 bg-foreground/20" />
                    <span className="text-xs font-light tracking-wide text-foreground/80">
                      {topic.label}
                    </span>
                    <div className="h-px flex-1 bg-border/20" />
                    <span className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
                      {topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右: フォームカード */}
          <div className="lg:col-span-2">
            <div className="relative rounded-lg border border-border p-8">
              {/* コーナードット */}
              <div className="absolute left-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute bottom-2.5 left-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
              <div className="absolute bottom-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-foreground/15" />

              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Subscribe
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor="newsletter-elegant-email"
                    className="sr-only"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="newsletter-elegant-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="メールアドレスを入力"
                    required
                    className="block w-full border-b border-border bg-transparent py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-sm border border-foreground bg-foreground py-3 text-xs font-medium uppercase tracking-[0.15em] text-background transition-all duration-200 hover:bg-foreground/90"
                >
                  購読を開始する
                </button>
              </form>

              <div className="mt-6 h-px bg-border/30" />

              <div className="mt-5 flex items-center justify-between">
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground/50">
                  スパムは送りません
                </p>
                <p className="text-[10px] tracking-[0.1em] text-muted-foreground/50">
                  いつでも解除可能
                </p>
              </div>

              {/* 購読者数 */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {Array.from({ length: 3 }, (_, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 rounded-full border border-background bg-muted"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-light tracking-wide text-muted-foreground/60">
                  2,400+ が購読中
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
