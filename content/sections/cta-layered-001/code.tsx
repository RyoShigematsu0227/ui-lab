function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

export function CtaLayered001() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* 背面レイヤー */}
          <div className="absolute inset-0 translate-x-3 translate-y-3 border border-border/30" />
          <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-border/50" />

          {/* メインカード */}
          <div className="relative border border-border bg-background p-12 sm:p-16">
            <CornerDots className="left-4 top-4" />
            <CornerDots className="right-4 top-4" />
            <CornerDots className="bottom-4 left-4" />
            <CornerDots className="bottom-4 right-4" />

            <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between">
              {/* テキスト */}
              <div className="max-w-md text-center sm:text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  次のステップへ
                </p>
                <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
                  あなたのプロジェクトを
                  <br />
                  一緒に始めましょう
                </h2>
                <div className="mx-auto mt-6 h-px w-12 bg-foreground/20 sm:mx-0" />
                <p className="mt-6 text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                  初回の無料相談で、プロジェクトの方向性と最適なアプローチをご提案します。お気軽にお問い合わせください。
                </p>
              </div>

              {/* ボタングループ */}
              <div className="flex flex-col gap-3 sm:pt-8">
                <button className="bg-primary px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90">
                  無料で相談する
                </button>
                <button className="border border-border px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:border-foreground/40 hover:text-foreground">
                  詳しく見る
                </button>
              </div>
            </div>

            {/* 補足テキスト */}
            <div className="mt-12 flex items-center justify-center gap-6 border-t border-border/40 pt-8 sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  無料相談
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  即日対応
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-foreground/30" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  NDA対応可
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
