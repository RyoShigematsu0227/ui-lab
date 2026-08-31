export function TeamTimeline001() {
  const members = [
    {
      name: "田中 美咲",
      role: "CEO / 共同創業者",
      year: "2020",
      description:
        "事業構想とプロダクト戦略を統括。10年以上のスタートアップ経験を持つ。",
      initials: "MT",
    },
    {
      name: "佐藤 健一",
      role: "CTO / 共同創業者",
      year: "2020",
      description:
        "技術基盤の設計とエンジニアリング組織を牽引。分散システムの専門家。",
      initials: "KS",
    },
    {
      name: "鈴木 あかり",
      role: "デザインリード",
      year: "2021",
      description:
        "プロダクトのUI/UXデザインを担当。ユーザー中心設計のアプローチを推進。",
      initials: "AS",
    },
    {
      name: "山本 拓也",
      role: "エンジニアリングマネージャー",
      year: "2022",
      description:
        "バックエンド開発チームを率いる。大規模システムの運用経験が豊富。",
      initials: "TY",
    },
    {
      name: "中村 優子",
      role: "プロダクトマネージャー",
      year: "2023",
      description:
        "ユーザーリサーチとプロダクトロードマップの策定を推進。",
      initials: "YN",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      {/* コーナードット装飾 */}
      <div className="absolute left-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/15" />
      <div className="absolute right-6 top-6 h-1.5 w-1.5 rounded-full bg-foreground/15" />
      <div className="absolute bottom-6 left-6 h-1.5 w-1.5 rounded-full bg-foreground/15" />
      <div className="absolute bottom-6 right-6 h-1.5 w-1.5 rounded-full bg-foreground/15" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Our Team
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            チームの歩み
          </h2>
          <div className="mx-auto mt-6 h-px w-12 bg-foreground/20" />
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 中央線 */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/40 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-12">
            {members.map((member, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={member.name} className="relative">
                  {/* タイムラインドット */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 sm:left-1/2">
                    <div className="flex h-3 w-3 items-center justify-center rounded-full border border-border bg-background">
                      <div className="h-1 w-1 rounded-full bg-foreground/40" />
                    </div>
                  </div>

                  {/* カード */}
                  <div
                    className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      isLeft
                        ? "sm:mr-auto sm:pr-0"
                        : "sm:ml-auto sm:pl-0"
                    }`}
                  >
                    <div className="group">
                      {/* 年ラベル */}
                      <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                        {member.year}
                      </p>

                      <div className="mt-4 flex items-start gap-5">
                        {/* アバタープレースホルダー */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-muted/30 transition-colors group-hover:border-foreground/20">
                          <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                            {member.initials}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-medium tracking-wide text-foreground">
                            {member.name}
                          </h3>
                          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                            {member.role}
                          </p>
                          <p className="mt-3 text-sm font-light leading-relaxed text-foreground/60">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* フッター */}
        <div className="mt-20 border-t border-border/40 pt-10 text-center">
          <p className="text-sm font-light tracking-wide text-muted-foreground">
            私たちと一緒に働きませんか？
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 border border-border px-6 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            採用情報を見る
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
