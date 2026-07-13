export function PricingHorizontal001() {
  const plans = [
    {
      name: "STARTER",
      price: "$0",
      period: "月額",
      description: "個人プロジェクトや小規模な検証に最適なプラン",
      features: ["プロジェクト 3件", "基本機能", "コミュニティサポート"],
      cta: "無料で始める",
      highlight: false,
    },
    {
      name: "PROFESSIONAL",
      price: "$29",
      period: "月額",
      description: "本格的な運用に必要なすべてを備えたプラン",
      features: [
        "無制限プロジェクト",
        "高度な分析機能",
        "優先サポート",
        "API アクセス",
      ],
      cta: "14日間無料体験",
      highlight: true,
    },
    {
      name: "ENTERPRISE",
      price: "要相談",
      period: "",
      description: "大規模チームのためのカスタマイズ可能なプラン",
      features: [
        "Professional の全機能",
        "専任サポート担当",
        "SLA 保証",
        "オンプレミス対応",
      ],
      cta: "お問い合わせ",
      highlight: false,
    },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Pricing
            </p>
          </div>
          <h2 className="mt-6 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            シンプルな料金体系
          </h2>
          <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-muted-foreground">
            必要な機能に合わせて、最適なプランをお選びください。
            すべてのプランに14日間の無料トライアルが含まれます。
          </p>
        </div>

        {/* プランリスト */}
        <div className="space-y-0">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative border-t border-border py-10 sm:py-12 ${
                index === plans.length - 1 ? "border-b" : ""
              }`}
            >
              {/* 推奨マーク */}
              {plan.highlight && (
                <div className="absolute -top-px right-0 flex items-center gap-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary">
                    Recommended
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
              )}

              <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-12 sm:gap-6">
                {/* プラン名と価格 */}
                <div className="sm:col-span-3">
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-light text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-xs text-muted-foreground">
                        / {plan.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* 説明と機能 */}
                <div className="sm:col-span-6">
                  <p className="text-sm font-light leading-relaxed text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                    {plan.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-xs tracking-wide text-foreground/60"
                      >
                        <span className="h-1 w-1 rounded-full bg-foreground/30" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-start sm:col-span-3 sm:justify-end">
                  <button
                    className={`px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all ${
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-border text-foreground/70 hover:border-foreground/40 hover:text-foreground"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            すべてのプランに SSL・自動バックアップが含まれます
          </p>
          <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
        </div>
      </div>
    </section>
  );
}
