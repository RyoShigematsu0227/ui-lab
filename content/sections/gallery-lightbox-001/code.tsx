"use client";

import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    title: "幾何学パターン",
    category: "グラフィック",
    color: "from-foreground/5 to-foreground/10",
    accent: "bg-foreground/20",
  },
  {
    id: 2,
    title: "都市の輪郭",
    category: "建築",
    color: "from-foreground/8 to-foreground/3",
    accent: "bg-foreground/15",
  },
  {
    id: 3,
    title: "静寂の水面",
    category: "自然",
    color: "from-foreground/3 to-foreground/12",
    accent: "bg-foreground/25",
  },
  {
    id: 4,
    title: "構造と秩序",
    category: "建築",
    color: "from-foreground/10 to-foreground/5",
    accent: "bg-foreground/10",
  },
  {
    id: 5,
    title: "光と影の対話",
    category: "グラフィック",
    color: "from-foreground/6 to-foreground/14",
    accent: "bg-foreground/18",
  },
  {
    id: 6,
    title: "風の記憶",
    category: "自然",
    color: "from-foreground/12 to-foreground/4",
    accent: "bg-foreground/22",
  },
];

export function GalleryLightbox001() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = galleryItems.find((item) => item.id === selectedId);

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-border/40" />
            <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
            <div className="h-px w-8 bg-border/40" />
          </div>

          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Gallery
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            作品コレクション
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">
            厳選されたクリエイティブワークの数々をご覧ください
          </p>
        </div>

        {/* グリッド */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border text-left transition-all duration-300 hover:border-foreground/20"
            >
              {/* プレースホルダー背景 */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
              />

              {/* 装飾パターン */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`h-16 w-16 rounded-full ${item.accent} transition-transform duration-500 group-hover:scale-110`}
                />
              </div>
              <div className="absolute left-6 top-6">
                <div className="h-px w-6 bg-foreground/10 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/20" />
              </div>
              <div className="absolute bottom-6 right-6">
                <div className="h-px w-6 bg-foreground/10 transition-all duration-300 group-hover:w-10 group-hover:bg-foreground/20" />
              </div>

              {/* オーバーレイ情報 */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.category}
                </p>
                <h3 className="mt-1.5 text-sm font-medium tracking-wide text-foreground">
                  {item.title}
                </h3>
              </div>

              {/* 拡大アイコン */}
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                <svg
                  className="h-3.5 w-3.5 text-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* 件数表示 */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            6 作品を表示中
          </p>
          <div className="h-3 w-px bg-border/40" />
          <p className="text-[10px] tracking-[0.15em] text-muted-foreground/50">
            全コレクション
          </p>
        </div>
      </div>

      {/* ライトボックスモーダル */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative mx-4 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 閉じるボタン */}
            <button
              onClick={() => setSelectedId(null)}
              className="absolute -top-12 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* メインコンテンツ */}
            <div className="overflow-hidden rounded-lg border border-border">
              <div
                className={`relative aspect-[16/10] bg-gradient-to-br ${selectedItem.color}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`h-32 w-32 rounded-full ${selectedItem.accent}`}
                  />
                </div>

                {/* コーナー装飾 */}
                <div className="absolute left-8 top-8">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                </div>
                <div className="absolute right-8 top-8">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                </div>
                <div className="absolute bottom-8 left-8">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                </div>
                <div className="absolute bottom-8 right-8">
                  <div className="h-1.5 w-1.5 rounded-full bg-foreground/20" />
                </div>
              </div>

              {/* 情報パネル */}
              <div className="border-t border-border bg-background p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      {selectedItem.category}
                    </p>
                    <h3 className="mt-2 text-lg font-medium tracking-wide text-foreground">
                      {selectedItem.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] text-muted-foreground/50">
                    <span>{selectedItem.id}</span>
                    <span>/</span>
                    <span>{galleryItems.length}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ナビゲーション */}
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => {
                  const currentIndex = galleryItems.findIndex(
                    (item) => item.id === selectedId
                  );
                  const prevIndex =
                    (currentIndex - 1 + galleryItems.length) %
                    galleryItems.length;
                  setSelectedId(galleryItems[prevIndex].id);
                }}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                前へ
              </button>
              <button
                onClick={() => {
                  const currentIndex = galleryItems.findIndex(
                    (item) => item.id === selectedId
                  );
                  const nextIndex =
                    (currentIndex + 1) % galleryItems.length;
                  setSelectedId(galleryItems[nextIndex].id);
                }}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                次へ
                <svg
                  className="h-3.5 w-3.5"
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
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
