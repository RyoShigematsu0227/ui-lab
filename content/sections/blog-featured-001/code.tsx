export function BlogFeatured001() {
  const featuredPost = {
    title: "次世代のWebデザイントレンド2026",
    excerpt:
      "AIとクリエイティビティが融合する新しい時代のデザイン手法を探求します。モーションデザイン、3D要素、そして没入型体験の最前線。",
    category: "デザイン",
    readTime: "8分",
    date: "2026年2月1日",
  };

  const posts = [
    {
      title: "マイクロインタラクションの力",
      excerpt: "小さなアニメーションがUXに与える大きな影響について",
      category: "UI/UX",
      readTime: "5分",
      date: "2026年1月28日",
    },
    {
      title: "アクセシビリティファースト設計",
      excerpt: "すべてのユーザーに優れた体験を提供する方法",
      category: "開発",
      readTime: "6分",
      date: "2026年1月25日",
    },
    {
      title: "カラーシステムの構築方法",
      excerpt: "一貫性のあるデザインを実現するカラーパレット設計",
      category: "デザインシステム",
      readTime: "7分",
      date: "2026年1月22日",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              最新記事
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            注目の記事
          </h2>
        </div>

        {/* フィーチャード記事（大きいカード） */}
        <div className="mb-8">
          <article className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="relative h-full bg-white dark:bg-gray-950 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                {/* 左側：テキストコンテンツ */}
                <div className="flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full w-fit mb-4">
                    {featuredPost.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <span>{featuredPost.date}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                {/* 右側：ビジュアル */}
                <div className="relative">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* グリッド記事 */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              {/* サムネイル */}
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-700 group-hover:scale-105 transition-transform duration-300" />

              {/* コンテンツ */}
              <div className="p-6">
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold rounded mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
