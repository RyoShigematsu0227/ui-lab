export function NewsletterMinimal001() {
  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-6 top-6 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 left-6 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-6 right-6 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          {/* ラベル */}
          <div className="mb-6">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-muted-foreground">
              Newsletter
            </span>
          </div>

          {/* 見出し */}
          <h2 className="mb-6 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            最新情報をお届けします
          </h2>

          {/* 説明文 */}
          <p className="mb-12 text-sm font-light leading-relaxed text-muted-foreground">
            デザイン、開発、プロダクトに関する
            <br className="hidden sm:inline" />
            厳選されたインサイトを週1回お届けします
          </p>

          {/* フォーム */}
          <form className="mx-auto max-w-md">
            <div className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-14 w-full border border-border bg-transparent px-6 text-sm tracking-wide text-foreground placeholder:text-muted-foreground/50 focus:border-foreground/40 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 h-10 border border-border bg-foreground px-6 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-foreground/90"
              >
                Subscribe
              </button>
            </div>
          </form>

          {/* フッターノート */}
          <div className="mt-8">
            <div className="mb-4 flex items-center justify-center gap-6">
              <div className="h-px w-8 bg-border" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                Join 12,000+ Subscribers
              </span>
              <div className="h-px w-8 bg-border" />
            </div>
            <p className="text-xs font-light text-muted-foreground/70">
              いつでも配信停止できます。スパムは送りません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
