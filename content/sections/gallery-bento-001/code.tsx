export function GalleryBento001() {
  const projects = [
    {
      title: "プロダクトデザイン",
      category: "デザイン",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "ブランディング",
      category: "マーケティング",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "UI/UXデザイン",
      category: "デジタル",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "モーションデザイン",
      category: "アニメーション",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "イラストレーション",
      category: "アート",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "3Dモデリング",
      category: "3D",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            プロジェクトギャラリー
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            私たちのクリエイティブワークをご覧ください
          </p>
        </div>

        {/* ベントーグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[240px]">
          {/* 大きいアイテム (2x2) */}
          <div className="md:col-span-3 md:row-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-white/80 text-sm mb-2">
                {projects[0].category}
              </span>
              <h3 className="text-white text-3xl font-bold">
                {projects[0].title}
              </h3>
            </div>
          </div>

          {/* 中サイズアイテム (2x1) */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/80 text-sm mb-2">
                {projects[1].category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {projects[1].title}
              </h3>
            </div>
          </div>

          {/* 小サイズアイテム (1x1) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/80 text-sm mb-2">
                {projects[2].category}
              </span>
              <h3 className="text-white text-xl font-bold">
                {projects[2].title}
              </h3>
            </div>
          </div>

          {/* 小サイズアイテム (1x1) */}
          <div className="md:col-span-1 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/80 text-xs mb-1">
                {projects[3].category}
              </span>
              <h3 className="text-white text-lg font-bold">
                {projects[3].title}
              </h3>
            </div>
          </div>

          {/* 中サイズアイテム (2x1) */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/80 text-sm mb-2">
                {projects[4].category}
              </span>
              <h3 className="text-white text-xl font-bold">
                {projects[4].title}
              </h3>
            </div>
          </div>

          {/* 中サイズアイテム (3x1) */}
          <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-white/80 text-sm mb-2">
                {projects[5].category}
              </span>
              <h3 className="text-white text-2xl font-bold">
                {projects[5].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
