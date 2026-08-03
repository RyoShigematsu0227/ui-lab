export function TeamFeatured001() {
  const members = [
    {
      name: "田中 美咲",
      role: "CEO & Co-Founder",
      description:
        "プロダクト戦略とビジョンを統括。10年以上のスタートアップ経験を持つ。",
      initial: "M",
    },
    {
      name: "佐藤 健一",
      role: "CTO",
      description:
        "技術基盤とアーキテクチャ設計を担当。大規模システムの構築に精通。",
      initial: "K",
    },
    {
      name: "鈴木 あかり",
      role: "Design Lead",
      description:
        "ブランドとプロダクトデザインを主導。ユーザー体験の最適化に注力。",
      initial: "A",
    },
    {
      name: "山田 拓也",
      role: "Engineering Manager",
      description:
        "開発チームのマネジメントとデリバリーを統括。品質と速度の両立を追求。",
      initial: "T",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Our Team
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
              私たちのチーム
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            多様なバックグラウンドを持つメンバーが、一つのビジョンに向かって共創しています。
          </p>
        </div>

        {/* 区切り線 */}
        <div className="mt-10 h-px bg-border/40" />

        {/* メンバーリスト */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative border border-border/60 p-6 transition-colors duration-300 hover:border-foreground/20"
            >
              {/* 番号 */}
              <span className="absolute right-6 top-6 text-[10px] tracking-[0.2em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* アバター + 名前 */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted transition-colors duration-300 group-hover:border-foreground/20">
                  <span className="text-sm font-medium tracking-wider text-foreground">
                    {member.initial}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium tracking-wide text-foreground">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* 説明文 */}
              <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                {member.description}
              </p>

              {/* コーナードット */}
              <div className="absolute bottom-3 left-3 h-1.5 w-1.5 rounded-full bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/20" />
              <div className="absolute bottom-3 right-3 h-1.5 w-1.5 rounded-full bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground/20" />
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-12 flex items-center justify-between border-t border-border/40 pt-8">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            4 members
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-light tracking-wide text-foreground transition-colors duration-200 hover:text-muted-foreground"
          >
            全メンバーを見る
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
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
          </a>
        </div>
      </div>
    </section>
  );
}
