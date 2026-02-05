// セクションコンポーネントのエクスポート
export { HeroGradient001 } from "./hero-gradient-001/code";
export { HeroMinimal001 } from "./hero-minimal-001/code";
export { FeatureBento001 } from "./feature-bento-001/code";
export { PricingGlass001 } from "./pricing-glass-001/code";
export { CtaGradient001 } from "./cta-gradient-001/code";

// セクションコンポーネントのマップ（slugからコンポーネントを取得）
import { HeroGradient001 } from "./hero-gradient-001/code";
import { HeroMinimal001 } from "./hero-minimal-001/code";
import { FeatureBento001 } from "./feature-bento-001/code";
import { PricingGlass001 } from "./pricing-glass-001/code";
import { CtaGradient001 } from "./cta-gradient-001/code";

export const SECTION_COMPONENTS: Record<string, React.ComponentType> = {
  "hero-gradient-001": HeroGradient001,
  "hero-minimal-001": HeroMinimal001,
  "feature-bento-001": FeatureBento001,
  "pricing-glass-001": PricingGlass001,
  "cta-gradient-001": CtaGradient001,
};

// セクションのソースコード（ビルド時に読み込み）
export const SECTION_CODES: Record<string, string> = {
  "hero-gradient-001": `export function HeroGradient001() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 via-transparent to-cyan-500/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

      {/* グリッドパターン */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: \`linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)\`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* コンテンツ */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* バッジ */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
          </span>
          Now Available
        </div>

        {/* 見出し */}
        <h1 className="mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          Build faster with
          <br />
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">
            modern UI
          </span>
        </h1>

        {/* 説明文 */}
        <p className="mb-10 max-w-2xl text-lg text-white/60 sm:text-xl">
          Create stunning websites in minutes with our collection of beautifully
          designed, production-ready components.
        </p>

        {/* CTA ボタン */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-3 font-medium text-white transition-all hover:scale-105">
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Learn More →
          </button>
        </div>

        {/* 装飾的な要素 */}
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-violet-500/30 blur-[128px]" />
        <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-cyan-500/30 blur-[128px]" />
      </div>
    </section>
  );
}`,
  "hero-minimal-001": `export function HeroMinimal001() {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl md:text-6xl">
            Simplicity is the
            <br />
            ultimate sophistication
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            Less is more. Focus on what matters most with our minimal design
            approach that puts your content first.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200">
              Start Building
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900">
              View Examples
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}`,
  "feature-bento-001": `// Bento Grid Feature Section - コードは長いため省略
// 詳細は content/sections/feature-bento-001/code.tsx を参照`,
  "pricing-glass-001": `// Glassmorphism Pricing Section - コードは長いため省略
// 詳細は content/sections/pricing-glass-001/code.tsx を参照`,
  "cta-gradient-001": `// Gradient CTA Section - コードは長いため省略
// 詳細は content/sections/cta-gradient-001/code.tsx を参照`,
};
