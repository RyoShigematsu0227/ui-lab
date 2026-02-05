export function FeatureBento001() {
  return (
    <section className="bg-zinc-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6">
        {/* ヘッダー */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            Everything you need
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Powerful features designed to help you build faster and smarter.
          </p>
        </div>

        {/* ベントーグリッド */}
        <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* 大きなカード（左） */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 p-8 text-white md:row-span-2">
            <div className="relative z-10">
              <div className="mb-4 inline-flex rounded-lg bg-white/20 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-white/80">
                Optimized for performance with instant load times and smooth
                interactions.
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 transition-transform group-hover:scale-150" />
          </div>

          {/* 上段中央 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex rounded-lg bg-cyan-100 p-3 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              Customizable
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Tailor every aspect to match your brand perfectly.
            </p>
          </div>

          {/* 上段右 */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 inline-flex rounded-lg bg-orange-100 p-3 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
              Responsive
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Looks great on any device, from mobile to desktop.
            </p>
          </div>

          {/* 下段（横長） */}
          <div className="rounded-2xl bg-zinc-900 p-6 text-white dark:bg-zinc-800 md:col-span-2">
            <div className="flex items-start gap-4">
              <div className="inline-flex shrink-0 rounded-lg bg-white/10 p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Enterprise Security</h3>
                <p className="text-sm text-zinc-400">
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
