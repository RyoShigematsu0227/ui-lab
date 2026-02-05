export function HeroMinimal001() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24">
        {/* メインコンテンツ */}
        <div className="text-center">
          {/* 見出し */}
          <h1 className="mb-6 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-zinc-100">
            Simplicity is the
            <br />
            ultimate sophistication
          </h1>

          {/* 説明文 */}
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Less is more. Focus on what matters most with our minimal design
            approach that puts your content first.
          </p>

          {/* CTA ボタン */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Start Building
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
              View Examples
            </button>
          </div>
        </div>

        {/* 装飾的な区切り線 */}
        <div className="mt-24 flex items-center gap-4">
          <div className="h-px w-12 bg-zinc-200 dark:bg-zinc-800" />
          <span className="text-sm text-zinc-400 dark:text-zinc-600">
            Trusted by 10,000+ developers
          </span>
          <div className="h-px w-12 bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* ロゴクラウド（プレースホルダー） */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-50">
          {["Company A", "Company B", "Company C", "Company D"].map(
            (company) => (
              <div
                key={company}
                className="text-sm font-medium text-zinc-400 dark:text-zinc-600"
              >
                {company}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
