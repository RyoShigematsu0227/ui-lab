export function TeamBento001() {
  const members = [
    {
      name: "田中 美咲",
      role: "CEO & Founder",
      desc: "プロダクト戦略とビジョンを統括。10年以上のスタートアップ経験。",
      initials: "MT",
      span: "col-span-1 row-span-2",
    },
    {
      name: "佐藤 隆太",
      role: "CTO",
      desc: "アーキテクチャ設計とエンジニアリング文化の構築をリード。",
      initials: "RS",
      span: "col-span-1 row-span-1",
    },
    {
      name: "鈴木 彩花",
      role: "Head of Design",
      desc: "デザインシステムとユーザー体験を統括。",
      initials: "AS",
      span: "col-span-1 row-span-1",
    },
    {
      name: "山本 健一",
      role: "Lead Engineer",
      desc: "フロントエンドからインフラまで、技術基盤を支える。",
      initials: "KY",
      span: "col-span-1 row-span-1",
    },
    {
      name: "中村 優子",
      role: "Head of Growth",
      desc: "マーケティング戦略とグロース施策を推進。",
      initials: "YN",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Our Team
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
            チームを紹介します
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            多様な専門性を持つメンバーが、ひとつのビジョンに向かって取り組んでいます。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 grid-rows-none gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`group relative border border-border bg-muted/20 p-6 transition-all duration-300 hover:border-foreground/20 hover:bg-muted/40 ${
                index === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <div className="absolute left-2.5 top-2.5 h-1 w-1 rounded-full bg-muted-foreground/20" />
              <div className="absolute right-2.5 top-2.5 h-1 w-1 rounded-full bg-muted-foreground/20" />

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-background text-xs font-medium tracking-wider text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
                  {member.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium tracking-wide text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="mt-4 h-px w-full bg-border/40" />

              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground/80">
                {member.desc}
              </p>

              {index === 0 && (
                <div className="mt-6 flex gap-3">
                  <span className="inline-flex items-center border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                    Strategy
                  </span>
                  <span className="inline-flex items-center border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                    Vision
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-light tracking-wide text-muted-foreground/50">
            全メンバーがリモートファーストで働いています
          </p>
        </div>
      </div>
    </section>
  );
}
