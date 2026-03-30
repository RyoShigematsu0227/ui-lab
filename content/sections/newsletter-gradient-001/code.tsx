"use client";

import { useState } from "react";

export function NewsletterGradient001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
          {/* 背景グラデーション */}
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-foreground/[0.06]" />

          {/* コーナードット */}
          <div className="absolute left-5 top-5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
          <div className="absolute right-5 top-5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
          <div className="absolute bottom-5 left-5 h-1.5 w-1.5 rounded-full bg-foreground/15" />
          <div className="absolute bottom-5 right-5 h-1.5 w-1.5 rounded-full bg-foreground/15" />

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* 左カラム: テキスト */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="h-px w-6 bg-foreground/20" />
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Newsletter
                  </p>
                </div>

                <h2 className="mt-6 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
                  デザインの最前線を、
                  <br />
                  あなたの手元に
                </h2>

                <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                  UIトレンド、プロダクトデザインの考察、厳選されたインスピレーション。月2回、丁寧にお届けします。
                </p>

                {/* 特徴リスト */}
                <div className="mt-8 space-y-3">
                  {[
                    "最新UIトレンドの解説",
                    "厳選デザインリソース",
                    "実践的なケーススタディ",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="flex h-4 w-4 items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-foreground/40" />
                      </div>
                      <span className="text-xs font-light tracking-wide text-muted-foreground/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右カラム: フォーム */}
              <div className="flex flex-col justify-center">
                <div className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm sm:p-8">
                  <p className="text-xs font-medium tracking-wide text-foreground">
                    無料で購読する
                  </p>
                  <p className="mt-2 text-[10px] tracking-[0.15em] text-muted-foreground/60">
                    いつでも解除できます
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                      <label
                        htmlFor="newsletter-email"
                        className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50"
                      >
                        Email
                      </label>
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/30 transition-colors duration-200 focus:border-foreground/60 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-200 hover:bg-foreground/10"
                    >
                      登録する
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
                  </form>

                  <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="h-1 w-1 rounded-full bg-foreground/10" />
                    <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
                      3,200+ デザイナーが購読中
                    </p>
                    <div className="h-1 w-1 rounded-full bg-foreground/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
