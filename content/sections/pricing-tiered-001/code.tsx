export function PricingTiered001() {
  const tiers = [
    {
      label: "STARTER",
      price: "¥0",
      period: "月額",
      description: "個人プロジェクトや学習目的に最適なプラン",
      features: ["プロジェクト3件まで", "基本分析機能", "コミュニティサポート"],
      highlighted: false,
    },
    {
      label: "PROFESSIONAL",
      price: "¥2,980",
      period: "月額",
      description: "本格的なプロダクト開発に必要な機能を網羅",
      features: [
        "プロジェクト無制限",
        "高度な分析・レポート",
        "優先サポート",
        "API アクセス",
        "カスタムドメイン",
      ],
      highlighted: true,
    },
    {
      label: "ENTERPRISE",
      price: "要相談",
      period: "",
      description: "大規模チーム向けのカスタマイズ可能なプラン",
      features: [
        "Professional の全機能",
        "専任サポート担当",
        "SLA 保証",
        "SSO / SAML 認証",
        "オンプレミス対応",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            シンプルな料金体系
          </h2>
          <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            必要な機能に合わせて、最適なプランをお選びください。
            いつでもアップグレード可能です。
          </p>
        </div>

        {/* ティアリスト */}
        <div className="space-y-0">
          {tiers.map((tier, index) => (
            <div key={tier.label}>
              {/* 区切り線 */}
              {index === 0 && <div className="h-px bg-border/40" />}

              <div
                className={`relative py-10 sm:py-12 ${
                  tier.highlighted ? "bg-muted/30" : ""
                }`}
              >
                {/* コーナードット（ハイライト時） */}
                {tier.highlighted && (
                  <>
                    <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <div className="absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                  </>
                )}

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-[200px_1fr_180px] sm:items-start">
                  {/* プラン名と価格 */}
                  <div className={tier.highlighted ? "px-6" : ""}>
                    <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                      {tier.label}
                    </p>
                    <div className="mt-3">
                      <span className="text-2xl font-light text-foreground">
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="ml-1 text-xs text-muted-foreground">
                          / {tier.period}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 説明と機能リスト */}
                  <div className={tier.highlighted ? "px-6" : ""}>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {tier.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {tier.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-sm tracking-wide text-foreground/70"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-start ${tier.highlighted ? "px-6" : ""}`}
                  >
                    <button
                      className={`w-full py-3 text-[10px] font-medium uppercase tracking-[0.2em] transition-all ${
                        tier.highlighted
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-border text-foreground/60 hover:border-foreground/30 hover:text-foreground"
                      }`}
                    >
                      {tier.highlighted ? "今すぐ始める" : tier.price === "要相談" ? "お問い合わせ" : "無料で始める"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border/40" />
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-14 text-center">
          <p className="text-xs font-light tracking-wide text-muted-foreground">
            全プラン14日間の無料トライアル付き。クレジットカード不要。
          </p>
        </div>
      </div>
    </section>
  );
}
