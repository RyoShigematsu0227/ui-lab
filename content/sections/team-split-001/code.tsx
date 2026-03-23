// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

// メンバーデータ
const members = [
  {
    name: "田中 美咲",
    role: "CEO & Co-Founder",
    description:
      "10年以上のプロダクト開発経験を持ち、テクノロジーとデザインの融合を追求。",
    initials: "TM",
  },
  {
    name: "佐藤 健一",
    role: "CTO",
    description:
      "分散システムとクラウドアーキテクチャの専門家。オープンソースコミュニティに貢献。",
    initials: "SK",
  },
  {
    name: "鈴木 彩花",
    role: "Head of Design",
    description:
      "ユーザー中心設計のスペシャリスト。アクセシビリティを重視したデザインシステムを構築。",
    initials: "SA",
  },
  {
    name: "山田 翔太",
    role: "Lead Engineer",
    description:
      "フルスタックエンジニアとして複数のスタートアップで成長を牽引してきた経験を持つ。",
    initials: "YS",
  },
];

export function TeamSplit001() {
  return (
    <section className="relative bg-background py-28">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー部分：左右分割 */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左：タイトル */}
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-border/40" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Our Team
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-medium tracking-wide text-foreground sm:text-4xl">
              ビジョンを共有する
              <br />
              チーム
            </h2>
          </div>

          {/* 右：説明文 */}
          <div className="flex items-end">
            <p className="text-sm font-light leading-relaxed text-muted-foreground lg:max-w-sm">
              多様なバックグラウンドを持つメンバーが集まり、
              テクノロジーの力で社会に新しい価値を届けることを目指しています。
              一人ひとりの専門性が、プロダクトの品質を支えています。
            </p>
          </div>
        </div>

        {/* 区切り線 */}
        <div className="my-16 h-px bg-border/40" />

        {/* メンバーリスト */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-muted/30 sm:p-10"
            >
              {/* 番号とイニシャル */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border text-foreground/60 transition-colors duration-300 group-hover:border-foreground/20 group-hover:text-foreground">
                  <span className="text-xs font-medium tracking-wider">
                    {member.initials}
                  </span>
                </div>
                <div className="h-1 w-1 rounded-full bg-muted-foreground/30" />
              </div>

              {/* メンバー情報 */}
              <div className="mt-6">
                <h3 className="text-base font-medium tracking-wide text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  {member.role}
                </p>
              </div>

              {/* 説明 */}
              <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
                {member.description}
              </p>

              {/* 区切り装飾 */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px w-6 bg-border/40" />
                <div className="h-1 w-1 rounded-full bg-foreground/10" />
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            {members.length}名のコアメンバー
          </p>
          <p className="text-sm tracking-wide text-muted-foreground">
            仲間を募集しています。{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              採用情報を見る
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
