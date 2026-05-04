"use client";

import { useState } from "react";

const categories = [
  {
    label: "基本情報",
    items: [
      {
        question: "サービスの利用に必要な環境は何ですか？",
        answer:
          "最新のWebブラウザ（Chrome、Safari、Firefox、Edge）があればご利用いただけます。インストールは不要で、インターネット接続環境のみで動作します。",
      },
      {
        question: "無料プランはありますか？",
        answer:
          "はい。基本機能をすべて含む無料プランをご用意しています。プロジェクト数3件、ストレージ1GBまでご利用可能です。",
      },
      {
        question: "導入までの期間はどのくらいですか？",
        answer:
          "アカウント登録から最短5分でご利用いただけます。チーム導入の場合も、初期設定を含め通常1営業日以内に完了します。",
      },
    ],
  },
  {
    label: "料金・契約",
    items: [
      {
        question: "年間契約の割引はありますか？",
        answer:
          "年間契約の場合、月額プランと比較して20%の割引が適用されます。いつでも月額プランに戻すことが可能です。",
      },
      {
        question: "途中でプランを変更できますか？",
        answer:
          "はい、いつでもプランのアップグレード・ダウングレードが可能です。差額は日割りで計算されます。",
      },
      {
        question: "解約時の手続きはどうなりますか？",
        answer:
          "設定画面からワンクリックで解約可能です。契約期間満了まではすべての機能をご利用いただけます。データのエクスポートも解約前にいつでも可能です。",
      },
    ],
  },
  {
    label: "サポート",
    items: [
      {
        question: "サポートの対応時間を教えてください",
        answer:
          "メールサポートは平日9:00〜18:00（JST）で対応しています。Proプラン以上では24時間チャットサポートもご利用いただけます。",
      },
      {
        question: "専任のサポート担当はつきますか？",
        answer:
          "Enterpriseプランでは専任のカスタマーサクセスマネージャーが付き、導入支援から運用最適化まで伴走いたします。",
      },
      {
        question: "ドキュメントやチュートリアルはありますか？",
        answer:
          "包括的なドキュメント、動画チュートリアル、サンプルプロジェクトをご用意しています。コミュニティフォーラムでも活発な情報交換が行われています。",
      },
    ],
  },
];

export function FaqTabbed001() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setOpenIndex(null);
  };

  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border/40" />
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              FAQ
            </p>
            <div className="h-px flex-1 bg-border/40" />
          </div>
          <h2 className="mt-6 text-center text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            よくあるご質問
          </h2>
        </div>

        {/* タブ */}
        <div className="mb-12 flex items-center justify-center gap-1">
          {categories.map((cat, index) => (
            <button
              key={cat.label}
              onClick={() => handleTabChange(index)}
              className={`relative px-4 py-2 text-xs tracking-[0.15em] transition-colors duration-200 ${
                activeTab === index
                  ? "text-foreground"
                  : "text-muted-foreground/60 hover:text-muted-foreground"
              }`}
            >
              {cat.label}
              {activeTab === index && (
                <span className="absolute bottom-0 left-1/2 h-px w-6 -translate-x-1/2 bg-foreground" />
              )}
            </button>
          ))}
        </div>

        {/* FAQ リスト */}
        <div className="divide-y divide-border/60">
          {categories[activeTab].items.map((faq, index) => (
            <div key={index} className="py-6">
              <button
                className="flex w-full items-start justify-between gap-8 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="text-sm font-light tracking-wide text-foreground">
                  {faq.question}
                </span>
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                  <span
                    className={`block h-px w-3 bg-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-0" : "rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute block h-px w-3 bg-muted-foreground transition-transform duration-300 ${
                      openIndex === index ? "rotate-0" : "rotate-90"
                    }`}
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pt-4" : "max-h-0"
                }`}
              >
                <p className="text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* フッター */}
        <div className="mt-14 text-center">
          <div className="mx-auto mb-6 flex items-center justify-center gap-3">
            <div className="h-1 w-1 rounded-full bg-foreground/20" />
            <div className="h-1 w-1 rounded-full bg-foreground/20" />
            <div className="h-1 w-1 rounded-full bg-foreground/20" />
          </div>
          <p className="text-xs tracking-[0.15em] text-muted-foreground/60">
            お探しの回答が見つからない場合は{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              お問い合わせ
            </a>{" "}
            ください
          </p>
        </div>
      </div>
    </section>
  );
}
