export function NewsletterBanner001() {
  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-border/40 bg-muted/30 px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          {/* コーナードット */}
          <div className="absolute left-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute bottom-4 left-4 h-1.5 w-1.5 rounded-full bg-foreground/10" />
          <div className="absolute bottom-4 right-4 h-1.5 w-1.5 rounded-full bg-foreground/10" />

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* テキスト */}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Newsletter
              </p>
              <h2 className="mt-4 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
                最新情報をお届けします
              </h2>
              <p className="mt-4 text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                デザインとテクノロジーに関する洞察、最新のトレンド、
                プロジェクトの舞台裏を月2回お届けします。
              </p>
            </div>

            {/* フォーム */}
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="メールアドレスを入力"
                    className="w-full border-b border-border bg-transparent py-3 pr-4 text-sm tracking-wide text-foreground placeholder-muted-foreground/40 transition-colors duration-200 focus:border-foreground focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-border bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background transition-all duration-200 hover:bg-foreground/90"
                >
                  購読する
                </button>
              </form>
              <p className="mt-4 text-[10px] tracking-wide text-muted-foreground/40">
                いつでも配信を停止できます。スパムは送りません。
              </p>
            </div>
          </div>

          {/* 装飾ライン */}
          <div className="absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-border/40 lg:w-6" />
          <div className="absolute right-0 top-1/2 h-px w-4 -translate-y-1/2 bg-border/40 lg:w-6" />
        </div>
      </div>
    </section>
  );
}
