// ベントーグリッドフィーチャー - ライト/ダーク両対応
export function FeatureBento001() {
  return (
    <section className="relative bg-background py-32">
      {/* コーナードット装飾 */}
      <div className="absolute left-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute right-8 top-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 left-8 h-1 w-1 rounded-full bg-foreground/20" />
      <div className="absolute bottom-8 right-8 h-1 w-1 rounded-full bg-foreground/20" />

      <div className="mx-auto max-w-6xl px-6">
        {/* ヘッダー */}
        <div className="mb-20 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Core Features
          </p>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Everything you need
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            Powerful features designed to help you build faster and smarter.
          </p>
        </div>

        {/* ベントーグリッド */}
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
          {/* 大きなカード（左） */}
          <div className="relative bg-background p-8 sm:col-span-2 md:col-span-1 md:row-span-2 md:p-10">
            <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />
            <div className="mb-8">
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-lg font-light tracking-wide text-foreground">
              Lightning Fast
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Optimized for performance with instant load times and smooth
              interactions. Built on the latest technologies.
            </p>
          </div>

          {/* 上段中央 */}
          <div className="relative bg-background p-8">
            <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />
            <div className="mb-6">
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-base font-light tracking-wide text-foreground">
              Customizable
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Tailor every aspect to match your brand perfectly.
            </p>
          </div>

          {/* 上段右 */}
          <div className="relative bg-background p-8">
            <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />
            <div className="mb-6">
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="mb-3 text-base font-light tracking-wide text-foreground">
              Responsive
            </h3>
            <p className="text-sm font-light leading-relaxed text-muted-foreground">
              Looks great on any device, from mobile to desktop.
            </p>
          </div>

          {/* 下段（横長） */}
          <div className="relative bg-background p-8 sm:col-span-2">
            <div className="absolute right-4 top-4 h-1 w-1 rounded-full bg-foreground/20" />
            <div className="flex items-start gap-6">
              <div className="shrink-0">
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-base font-light tracking-wide text-foreground">
                  Enterprise Security
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  Bank-grade encryption and security measures to keep your data
                  safe. SOC 2 compliant and GDPR ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
