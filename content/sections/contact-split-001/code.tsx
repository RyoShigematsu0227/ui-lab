export function ContactSplit001() {
  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
      title: "メール",
      value: "hello@example.com",
      link: "mailto:hello@example.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "電話",
      value: "03-1234-5678",
      link: "tel:+81312345678",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "住所",
      value: "東京都渋谷区1-2-3",
      link: null,
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左側：情報エリア */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-full mb-4">
                お問い合わせ
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                お気軽にご連絡ください
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                ご質問やご相談がございましたら、フォームまたは下記の連絡先よりお気軽にお問い合わせください。
                担当者より迅速に対応させていただきます。
              </p>
            </div>

            {/* 連絡先情報 */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mb-1">
                      {info.title}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-gray-900 dark:text-white font-semibold">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* ソーシャルリンク */}
            <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                SNSでフォロー
              </p>
              <div className="flex gap-3">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="text-xs font-semibold">
                      {social[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右側：フォーム */}
          <div className="relative">
            {/* 背景装飾 */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl -z-10" />

            <form className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="space-y-6">
                {/* 名前 */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="山田太郎"
                  />
                </div>

                {/* メール */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* 件名 */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    件名
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="お問い合わせ内容"
                  />
                </div>

                {/* メッセージ */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                  >
                    メッセージ
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="お問い合わせ内容を入力してください"
                  />
                </div>

                {/* 送信ボタン */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
