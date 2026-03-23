// パートナー企業データ
const partners = [
  { name: "Apex Systems", letter: "A" },
  { name: "Bloom Digital", letter: "B" },
  { name: "Cipher Works", letter: "C" },
  { name: "Drift Studio", letter: "D" },
  { name: "Echo Platform", letter: "E" },
  { name: "Forge Logic", letter: "F" },
  { name: "Grain Labs", letter: "G" },
  { name: "Halo Cloud", letter: "H" },
];

// ロゴアイテムコンポーネント
function LogoItem({ name, letter }: { name: string; letter: string }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground/50">
        <span className="text-sm font-medium tracking-wider">{letter}</span>
      </div>
      <span className="whitespace-nowrap text-sm tracking-wide text-muted-foreground">
        {name}
      </span>
    </div>
  );
}

export function LogoCloudMarquee001() {
  return (
    <section className="relative bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Trusted By
          </p>
          <h2 className="mt-3 text-xl font-medium tracking-wide text-foreground sm:text-2xl">
            多くの企業に選ばれています
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            業界を問わず、成長を続ける企業のデジタル基盤として採用されています。
          </p>
        </div>
      </div>

      {/* マーキースクロール */}
      <div className="mt-16 overflow-hidden">
        {/* 上段：左から右 */}
        <div className="relative">
          {/* フェードエッジ */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-[marquee_30s_linear_infinite] items-center py-4">
            {/* 2回繰り返してシームレスにスクロール */}
            {partners.map((p) => (
              <LogoItem key={`a-${p.name}`} name={p.name} letter={p.letter} />
            ))}
            {partners.map((p) => (
              <LogoItem key={`b-${p.name}`} name={p.name} letter={p.letter} />
            ))}
          </div>
        </div>

        {/* 区切り */}
        <div className="mx-auto h-px max-w-5xl bg-border/20" />

        {/* 下段：右から左 */}
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-[marquee-reverse_35s_linear_infinite] items-center py-4">
            {[...partners].reverse().map((p) => (
              <LogoItem
                key={`c-${p.name}`}
                name={p.name}
                letter={p.letter}
              />
            ))}
            {[...partners].reverse().map((p) => (
              <LogoItem
                key={`d-${p.name}`}
                name={p.name}
                letter={p.letter}
              />
            ))}
          </div>
        </div>
      </div>

      {/* フッターテキスト */}
      <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            500社以上の導入実績
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            業界トップクラスの信頼性
          </p>
        </div>
      </div>

      {/* マーキーアニメーション用スタイル */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `,
        }}
      />
    </section>
  );
}
