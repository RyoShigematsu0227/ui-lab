export function TestimonialTimeline001() {
  const testimonials = [
    {
      quote:
        "プロジェクトの本質を深く理解し、期待を超えるアウトプットを提供していただきました。",
      author: "田中 美咲",
      role: "CEO",
      company: "テックスタート株式会社",
      year: "2025",
    },
    {
      quote:
        "デザインシステムの構築からUIの実装まで、一貫した品質で仕上げていただきました。",
      author: "佐藤 健一",
      role: "プロダクトマネージャー",
      company: "クラウドベース株式会社",
      year: "2024",
    },
    {
      quote:
        "緻密なリサーチに基づいた提案で、ユーザー体験が大幅に改善されました。",
      author: "鈴木 あかり",
      role: "デザインディレクター",
      company: "デジタルクラフト株式会社",
      year: "2024",
    },
    {
      quote:
        "スピードと品質の両立。短期間でこれほどの成果を上げられるチームは稀有です。",
      author: "高橋 涼太",
      role: "CTO",
      company: "イノベーションラボ株式会社",
      year: "2023",
    },
  ];

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Client Voices
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            お客様の声
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            これまでご一緒させていただいたクライアントからの評価をご紹介します。
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="h-px w-12 bg-border/40" />
        </div>

        {/* タイムライン */}
        <div className="relative mt-16">
          {/* 中央線 */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/40 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12 sm:space-y-16">
            {testimonials.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* ドットインジケーター */}
                  <div className="absolute left-4 top-1 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-3 w-3 items-center justify-center rounded-full border border-border bg-background">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div
                    className={`pl-10 sm:w-1/2 sm:pl-0 ${
                      isLeft
                        ? "sm:pr-12 sm:text-right"
                        : "sm:ml-auto sm:pl-12"
                    }`}
                  >
                    {/* 年 */}
                    <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">
                      {item.year}
                    </span>

                    {/* 引用 */}
                    <p className="mt-3 text-base font-light leading-relaxed tracking-wide text-foreground/90 sm:text-lg">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    {/* 著者情報 */}
                    <div
                      className={`mt-4 flex items-center gap-3 ${
                        isLeft ? "sm:justify-end" : ""
                      }`}
                    >
                      <span className="h-px w-6 bg-border/60" />
                      <div>
                        <p className="text-sm tracking-wide text-foreground">
                          {item.author}
                        </p>
                        <p className="mt-0.5 text-xs tracking-wide text-muted-foreground/70">
                          {item.role} — {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ボトムアクセント */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
            <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
