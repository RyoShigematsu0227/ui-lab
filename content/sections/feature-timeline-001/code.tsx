export function FeatureTimeline001() {
  const features = [
    {
      year: "Phase 01",
      title: "基盤構築",
      description:
        "堅牢なインフラストラクチャと自動化されたデプロイメントパイプラインを整備。チーム全員が同じ環境で開発可能に。",
      details: ["CI/CD パイプライン", "インフラ自動化", "開発環境統一"],
    },
    {
      year: "Phase 02",
      title: "プロダクト開発",
      description:
        "ユーザーリサーチに基づいた機能設計と、高速なイテレーションサイクルでプロダクトを磨き上げる。",
      details: ["ユーザーリサーチ", "プロトタイピング", "A/Bテスト基盤"],
    },
    {
      year: "Phase 03",
      title: "スケーリング",
      description:
        "グローバル展開に向けたアーキテクチャの最適化と、パフォーマンスモニタリングの高度化。",
      details: ["エッジ配信", "パフォーマンス最適化", "グローバル対応"],
    },
    {
      year: "Phase 04",
      title: "エコシステム拡張",
      description:
        "API公開とパートナー連携により、プラットフォームとしての価値を拡大。外部開発者のエコシステムを育成。",
      details: ["API公開", "パートナー連携", "開発者ポータル"],
    },
  ];

  return (
    <section className="relative bg-background py-32">
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
          <div className="h-px w-12 bg-border/40" />
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Roadmap
        </p>

        <h2 className="mt-4 text-3xl font-medium leading-snug tracking-wide text-foreground sm:text-4xl">
          段階的に、
          <br />
          確実に前進する。
        </h2>

        <p className="mt-6 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
          プロダクトの成長に合わせた段階的なアプローチで、
          持続可能なスケーリングを実現します。
        </p>

        <div className="mt-20 space-y-0">
          {features.map((feature, index) => (
            <div
              key={feature.year}
              className="group relative grid grid-cols-1 gap-6 border-t border-border py-10 sm:grid-cols-12 sm:gap-8"
            >
              <div className="sm:col-span-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {feature.year}
                </span>
              </div>

              <div className="sm:col-span-5">
                <h3 className="text-lg font-medium tracking-wide text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              <div className="sm:col-span-4">
                <div className="space-y-2.5">
                  {feature.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <div className="h-px w-3 bg-foreground/20" />
                      <span className="text-xs font-light tracking-wide text-foreground/70">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {index === features.length - 1 && (
                <div className="col-span-full h-px bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-border px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
          >
            詳細を見る
            <div className="h-px w-4 bg-current" />
          </a>
        </div>
      </div>
    </section>
  );
}
