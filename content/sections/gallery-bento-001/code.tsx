export function GalleryBento001() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              作品集
            </h2>
          </div>
          <a
            href="#"
            className="hidden text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            すべて見る
          </a>
        </div>

        {/* ベントーグリッド */}
        <div className="grid grid-cols-4 gap-4 sm:gap-6">
          {/* 大きいアイテム 1 */}
          <div className="group relative col-span-4 row-span-2 overflow-hidden border border-border sm:col-span-2">
            <div className="relative aspect-[4/3] sm:aspect-auto sm:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Featured Work
                  </div>
                  <div className="mt-3 text-xl font-light text-foreground">
                    Project Alpha
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中アイテム 2 */}
          <div className="group relative col-span-2 overflow-hidden border border-border sm:col-span-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/3 to-foreground/8" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Branding
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    Identity Design
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中アイテム 3 */}
          <div className="group relative col-span-2 overflow-hidden border border-border sm:col-span-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/8 to-foreground/3" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Web Design
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    Landing Page
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小アイテム 4 */}
          <div className="group relative col-span-2 overflow-hidden border border-border sm:col-span-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/2 to-foreground/6" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    UI/UX
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 小アイテム 5 */}
          <div className="group relative col-span-2 overflow-hidden border border-border sm:col-span-1">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/6 to-foreground/2" />
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    Mobile
                  </div>
                  <div className="mt-2 text-sm font-light text-foreground">
                    App Design
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 大きいアイテム 6 */}
          <div className="group relative col-span-4 overflow-hidden border border-border sm:col-span-2">
            <div className="relative aspect-[4/3]">
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/4 to-foreground/9" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                    Case Study
                  </div>
                  <div className="mt-3 text-xl font-light text-foreground">
                    Project Beta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* モバイル用View All */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            すべて見る
          </a>
        </div>
      </div>
    </section>
  );
}
