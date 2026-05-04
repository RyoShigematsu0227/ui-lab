function AvatarPlaceholder({ initials }: { initials: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="200" height="200" className="fill-muted" />
      <text
        x="100"
        y="108"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-muted-foreground/40 text-4xl font-light"
        style={{ fontSize: "48px" }}
      >
        {initials}
      </text>
    </svg>
  );
}

const members = [
  {
    name: "田中 美咲",
    initials: "TM",
    role: "CEO & Founder",
    description:
      "プロダクト戦略とビジョンを統括。10年以上のスタートアップ経験を持つ。",
  },
  {
    name: "佐藤 健一",
    initials: "SK",
    role: "CTO",
    description:
      "技術アーキテクチャとエンジニアリング組織を率いる。分散システムの専門家。",
  },
  {
    name: "鈴木 あかり",
    initials: "SA",
    role: "Design Lead",
    description:
      "デザインシステムとUX戦略を担当。ユーザー中心設計を推進する。",
  },
  {
    name: "山本 大輝",
    initials: "YD",
    role: "Engineering",
    description:
      "フロントエンドからインフラまで幅広く担当。パフォーマンス最適化が得意領域。",
  },
  {
    name: "中村 由紀",
    initials: "NY",
    role: "Product",
    description:
      "ユーザーリサーチと機能設計を担当。データドリブンな意思決定を重視する。",
  },
];

export function TeamHorizontal001() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Our Team
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              チームを紹介します
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-relaxed text-muted-foreground">
            多様なバックグラウンドを持つメンバーが、一つのビジョンのもとに集まっています。
          </p>
        </div>

        <div className="h-px w-full bg-border/40" />

        {/* メンバーリスト */}
        <div className="mt-12 grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-5">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group flex flex-col bg-background p-6"
            >
              {/* 番号 */}
              <p className="text-[10px] tabular-nums tracking-[0.2em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </p>

              {/* アバター */}
              <div className="mt-5 h-16 w-16 overflow-hidden rounded-full border border-border transition-colors duration-300 group-hover:border-foreground/30">
                <AvatarPlaceholder initials={member.initials} />
              </div>

              {/* 情報 */}
              <p className="mt-5 text-sm font-medium tracking-wide text-foreground">
                {member.name}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {member.role}
              </p>

              {/* 説明 */}
              <p className="mt-4 text-xs font-light leading-relaxed text-muted-foreground/70">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
              {members.length} members
            </p>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            採用情報を見る
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
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
