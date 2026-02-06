"use client";

export function NewsletterMinimal001() {
  return (
    <section className="relative border-y border-border bg-background py-24">
      {/* 装飾的なコーナードット */}
      <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1.5 w-1.5 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* ラベル */}
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Newsletter
          </span>

          {/* 見出し */}
          <h2 className="mt-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            最新情報をお届けします
          </h2>

          {/* 説明文 */}
          <p className="mx-auto mt-6 max-w-lg font-light leading-relaxed text-muted-foreground">
            デザイン、開発、ビジネスに関する最新のインサイトと実践的なヒントを、週に一度お届けします。
          </p>

          {/* フォーム */}
          <form className="mx-auto mt-12 max-w-md">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="メールアドレス"
                className="h-12 flex-1 border border-border bg-transparent px-4 text-sm font-light text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center border border-border bg-foreground px-8 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90 sm:w-auto"
              >
                登録
              </button>
            </div>
          </form>

          {/* 注釈 */}
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
            いつでも配信停止できます
          </p>

          {/* 装飾的な区切り線 */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-border/40" />
            <div className="h-1 w-1 rounded-full bg-foreground/20" />
            <div className="h-px w-12 bg-border/40" />
          </div>

          {/* 統計情報 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center sm:gap-12">
            <div>
              <div className="text-2xl font-light text-foreground">12,000+</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                購読者
              </div>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <div className="text-2xl font-light text-foreground">98%</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                開封率
              </div>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <div className="text-2xl font-light text-foreground">毎週</div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                配信頻度
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
