// ショーケース型チーム紹介セクション
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-foreground/20" />
      <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-foreground/20" />
    </div>
  );
}

// SVGアバタープレースホルダー
function AvatarPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-muted">
      <span className="text-lg font-medium tracking-wider text-muted-foreground/60">
        {initials}
      </span>
    </div>
  );
}

export function TeamShowcase001() {
  const members = [
    {
      name: "佐藤 美咲",
      role: "CEO / 共同創業者",
      initials: "MS",
      bio: "10年以上のプロダクト開発経験を持ち、ユーザー体験を軸にしたビジョンでチームを牽引。",
    },
    {
      name: "田中 健太",
      role: "CTO / 共同創業者",
      initials: "KT",
      bio: "分散システムとクラウドアーキテクチャのスペシャリスト。スケーラブルな基盤設計を担当。",
    },
    {
      name: "山本 理恵",
      role: "デザインリード",
      initials: "RY",
      bio: "ブランドからプロダクトまで一貫したデザインシステムの構築を推進。",
    },
    {
      name: "鈴木 大輝",
      role: "エンジニアリング",
      initials: "DS",
      bio: "フロントエンドからインフラまで幅広い技術領域をカバーするフルスタックエンジニア。",
    },
    {
      name: "中村 あかり",
      role: "プロダクト",
      initials: "AN",
      bio: "データドリブンなアプローチでプロダクトの成長戦略を設計・実行。",
    },
    {
      name: "高橋 翔太",
      role: "マーケティング",
      initials: "ST",
      bio: "コンテンツとコミュニティを軸に、ブランドの認知拡大と信頼構築を推進。",
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Team
            </p>
            <h2 className="mt-3 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
              私たちのチーム
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            多様なバックグラウンドを持つメンバーが、
            ひとつのビジョンに向かって協働しています。
          </p>
        </div>

        {/* 区切り線 */}
        <div className="mt-10 h-px bg-border/40" />

        {/* メンバーグリッド */}
        <div className="mt-14 grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-background p-8"
            >
              {/* 番号 */}
              <span className="text-[10px] font-light tracking-[0.2em] text-muted-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* アバター */}
              <div className="mt-5 h-14 w-14 overflow-hidden rounded-full border border-border transition-colors duration-300 group-hover:border-foreground/30">
                <AvatarPlaceholder initials={member.initials} />
              </div>

              {/* 情報 */}
              <h3 className="mt-5 text-sm font-medium tracking-wide text-foreground">
                {member.name}
              </h3>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {member.role}
              </p>

              {/* バイオ */}
              <p className="mt-4 text-xs font-light leading-relaxed text-foreground/50">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-14 h-px bg-border/40" />
        <div className="mt-8 text-center">
          <p className="text-xs font-light tracking-wide text-muted-foreground">
            一緒に働きませんか？{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 transition-colors duration-200 hover:text-muted-foreground"
            >
              採用情報を見る
            </a>
          </p>
        </div>
      </div>

      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />
    </section>
  );
}
