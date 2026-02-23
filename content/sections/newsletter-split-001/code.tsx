"use client";

import { useState } from "react";

export function NewsletterSplit001() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const topics = [
    { label: "UI/UXトレンド", desc: "最新のデザイン潮流を解説" },
    { label: "技術ノート", desc: "実践的なフロントエンド技法" },
    { label: "事例紹介", desc: "優れたWebサイトの分析" },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左カラム: コンテンツ */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-border/40" />
              <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Newsletter
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              デザインの最前線を
              <br />
              お届けします
            </h2>
            <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
              厳選されたデザインとテクノロジーの知見を、毎週お届け。
              <br />
              あなたのクリエイティブワークに新しい視点を。
            </p>

            {/* トピック一覧 */}
            <div className="mt-10 space-y-4">
              {topics.map((topic) => (
                <div key={topic.label} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-foreground/30" />
                  <div>
                    <p className="text-xs font-medium tracking-wide text-foreground">
                      {topic.label}
                    </p>
                    <p className="mt-0.5 text-[11px] font-light tracking-wide text-muted-foreground/60">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 右カラム: フォーム */}
          <div className="flex flex-col justify-center">
            <div className="rounded-lg border border-border p-8 sm:p-10">
              <p className="text-xs font-medium tracking-wide text-foreground">
                無料で購読する
              </p>
              <p className="mt-2 text-[11px] font-light leading-relaxed text-muted-foreground/60">
                2,500名以上のデザイナー・エンジニアが購読中
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="newsletter-split-email"
                    className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                  >
                    メールアドレス
                  </label>
                  <input
                    id="newsletter-split-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-sm font-light tracking-wide text-foreground placeholder-muted-foreground/30 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 border border-foreground py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-all duration-200 hover:bg-foreground hover:text-background"
                >
                  購読を開始
                  <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
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

              {/* 補足 */}
              <div className="mt-8 flex items-center gap-4">
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
                  スパムは送りません
                </p>
                <div className="h-2.5 w-px bg-border/40" />
                <p className="text-[10px] tracking-[0.15em] text-muted-foreground/40">
                  いつでも解除可能
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
