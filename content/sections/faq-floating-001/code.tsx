"use client";

import { useState } from "react";

const faqItems = [
  {
    number: "01",
    question: "導入までの期間はどのくらいですか？",
    answer:
      "標準的なプロジェクトで2〜4週間、大規模なカスタマイズが必要な場合は6〜8週間が目安です。初回のヒアリングで詳細なスケジュールをご提案いたします。",
  },
  {
    number: "02",
    question: "料金体系を教えてください。",
    answer:
      "月額サブスクリプション制で、チーム規模と利用機能に応じた3つのプランをご用意しています。年間契約で20%の割引が適用されます。",
  },
  {
    number: "03",
    question: "既存システムとの連携は可能ですか？",
    answer:
      "主要なCRM・ERP・会計ソフトとのAPI連携に対応しています。Webhookによるカスタム連携も可能です。技術的なご質問はサポートチームまでお問い合わせください。",
  },
  {
    number: "04",
    question: "セキュリティ対策について教えてください。",
    answer:
      "SOC 2 Type IIおよびISO 27001の認証を取得済みです。すべてのデータはAES-256で暗号化され、日次バックアップと99.9%のアップタイム保証を提供しています。",
  },
  {
    number: "05",
    question: "無料トライアルはありますか？",
    answer:
      "14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要で、すべての機能を制限なくお試しいただけます。",
  },
  {
    number: "06",
    question: "解約時のデータはどうなりますか？",
    answer:
      "解約後30日間はデータを保持し、エクスポート機能で全データをダウンロードいただけます。保持期間終了後は安全に削除いたします。",
  },
];

export function FaqFloating001() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              FAQ
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
              よくあるご質問
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
            ご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-4 h-px bg-border/40" />

        {/* FAQ カードグリッド */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-lg border border-border/60 bg-background transition-colors duration-300 hover:border-border"
            >
              {/* コーナードット */}
              <div className="absolute left-3 top-3 h-1 w-1 rounded-full bg-foreground/10" />
              <div className="absolute right-3 top-3 h-1 w-1 rounded-full bg-foreground/10" />

              <div className="p-6">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-start gap-4 text-left"
                >
                  <span className="mt-0.5 shrink-0 text-[10px] tracking-[0.2em] text-muted-foreground/40">
                    {item.number}
                  </span>
                  <span className="flex-1 text-sm font-medium tracking-wide text-foreground">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-muted-foreground/40">
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
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

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "mt-4 max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="h-px bg-border/40" />
                  <p className="pt-4 pl-[calc(10px+1rem)] text-sm font-light leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-border/40" />
          <a
            href="#"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
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
          <div className="h-px w-8 bg-border/40" />
        </div>
      </div>
    </section>
  );
}
