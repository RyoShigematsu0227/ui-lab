export function CtaGradient001() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* CTA カード */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-12 text-center md:p-16">
          {/* 装飾的な要素 */}
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          {/* グリッドパターン */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />

          {/* コンテンツ */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
              Join thousands of developers building amazing products with our
              components. Start your free trial today.
            </p>

            {/* ボタン */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-semibold text-violet-600 transition-transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="inline-flex h-12 items-center justify-center rounded-full border-2 border-white/30 px-8 font-semibold text-white transition-colors hover:bg-white/10">
                Talk to Sales
              </button>
            </div>

            {/* 補足テキスト */}
            <p className="mt-6 text-sm text-white/60">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
