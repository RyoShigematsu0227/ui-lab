export function NewsletterGradient001() {
  return (
    <section className="w-full py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* グラデーションカード */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px]">
          <div className="relative bg-white dark:bg-gray-950 rounded-3xl p-12 md:p-16">
            {/* 背景装飾 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl" />

            {/* コンテンツ */}
            <div className="relative z-10 text-center">
              {/* アイコン */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              {/* ヘッドライン */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                最新情報をお届けします
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                デザインのトレンド、開発のTips、製品アップデートなど、役立つコンテンツを毎週お送りします。
              </p>

              {/* フォーム */}
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="メールアドレスを入力"
                  className="flex-1 px-5 py-3 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  登録する
                </button>
              </form>

              {/* 補足テキスト */}
              <p className="text-sm text-gray-500 dark:text-gray-500">
                いつでも配信解除できます。プライバシーポリシーに同意の上ご登録ください。
              </p>

              {/* 統計情報 */}
              <div className="flex flex-wrap justify-center gap-8 mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    50,000+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    購読者
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    毎週
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    配信頻度
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    4.9/5.0
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    満足度
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
