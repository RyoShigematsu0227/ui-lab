"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "サービスの導入にはどのくらいの期間がかかりますか？",
    answer:
      "プロジェクトの規模により異なりますが、標準的な導入で2〜4週間、大規模なカスタマイズが必要な場合は6〜8週間が目安です。初回のヒアリングで正確なスケジュールをご提案いたします。",
  },
  {
    question: "料金体系について教えてください。",
    answer:
      "月額サブスクリプション制で、チームの規模と利用機能に応じた3つのプランをご用意しています。年間契約の場合は20%の割引が適用されます。詳細は料金ページをご覧ください。",
  },
  {
    question: "既存のシステムとの連携は可能ですか？",
    answer:
      "主要なCRM、ERP、会計ソフトとのAPI連携に対応しています。Webhook による外部サービスとの連携も可能です。連携に関する技術的なご質問はサポートチームにお問い合わせください。",
  },
  {
    question: "データのセキュリティはどのように保証されますか？",
    answer:
      "SOC 2 Type II および ISO 27001 の認証を取得しており、すべてのデータは AES-256 で暗号化されます。日次のバックアップと99.9%のアップタイム保証を提供しています。",
  },
  {
    question: "無料トライアルはありますか？",
    answer:
      "14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要で、すべての機能を制限なくお試しいただけます。トライアル期間終了後、自動的に課金されることはありません。",
  },
  {
    question: "サポート体制について教えてください。",
    answer:
      "平日9:00〜18:00のチャット・メールサポートを全プランで提供しています。エンタープライズプランでは、24時間365日の優先サポートと専任のカスタマーサクセスマネージャーが対応いたします。",
  },
];

export function FaqNumbered001() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-28 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            よくあるご質問
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm font-light leading-relaxed text-muted-foreground">
            お客様からよくいただくご質問をまとめました。その他のご質問はお気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* 質問リスト */}
        <div className="mt-12">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-border/60">
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-start gap-6 py-6 text-left transition-colors"
              >
                {/* 番号 */}
                <span className="mt-0.5 shrink-0 text-[10px] tracking-[0.2em] text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* 質問テキスト */}
                <span className="flex-1 text-sm font-medium tracking-wide text-foreground">
                  {item.question}
                </span>

                {/* 開閉アイコン */}
                <span className="mt-0.5 shrink-0 text-muted-foreground/40 transition-transform duration-200">
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              {/* 回答 */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-64 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="pl-[calc(10px+1.5rem)] text-sm font-light leading-relaxed text-muted-foreground sm:pl-[calc(10px+1.5rem)]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-12 text-center">
          <p className="text-xs font-light tracking-wide text-muted-foreground/60">
            お探しの回答が見つかりませんか？
          </p>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            お問い合わせ
            <svg
              className="h-3 w-3"
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
          </a>
        </div>
      </div>
    </section>
  );
}
