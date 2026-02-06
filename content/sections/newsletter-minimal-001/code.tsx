"use client";

import { useState } from "react";

export function NewsletterMinimal001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* デコレーション */}
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>

          {/* ヘッダー */}
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Newsletter
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            最新情報をお届け
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            デザインとテクノロジーに関する最新の知見を、週1回お届けします。
          </p>
        </div>

        {/* フォーム */}
        <form onSubmit={handleSubmit} className="mt-12">
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="メールアドレスを入力"
              required
              className="flex-1 border-b border-border bg-transparent px-1 py-3.5 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 border-b border-foreground py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors duration-200 hover:border-muted-foreground hover:text-muted-foreground sm:px-2"
            >
              購読する
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* 補足 */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            スパムは送りません
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            いつでも解除可能
          </p>
        </div>
      </div>
    </section>
  );
}
