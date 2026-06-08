"use client";

import { useState } from "react";

function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  items: FaqItem[];
}

export function FaqColumns001() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categories: FaqCategory[] = [
    {
      title: "はじめに",
      items: [
        {
          question: "アカウント登録に必要なものは何ですか？",
          answer:
            "メールアドレスのみで登録いただけます。クレジットカードの登録は、有料プランへの移行時に必要となります。",
        },
        {
          question: "無料プランの制限を教えてください",
          answer:
            "無料プランでは、3プロジェクトまで作成可能で、1GBのストレージをご利用いただけます。基本的な機能はすべてお使いいただけます。",
        },
        {
          question: "データの移行はサポートされていますか？",
          answer:
            "CSV、JSON形式でのインポートに対応しています。大規模なデータ移行については、専任チームがサポートいたします。",
        },
      ],
    },
    {
      title: "料金・プラン",
      items: [
        {
          question: "支払い方法にはどのようなものがありますか？",
          answer:
            "クレジットカード（Visa、Mastercard、AMEX）および銀行振込に対応しています。年間契約の場合は請求書払いも可能です。",
        },
        {
          question: "プランの変更はいつでもできますか？",
          answer:
            "はい、いつでもアップグレード・ダウングレードが可能です。差額は日割りで計算されます。",
        },
        {
          question: "解約時にデータはどうなりますか？",
          answer:
            "解約後30日間はデータを保持します。その間にエクスポートいただくか、再契約いただければデータは維持されます。",
        },
      ],
    },
  ];

  return (
    <section className="relative bg-background py-28">
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mb-20">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            FAQ
          </p>
          <div className="mt-4 h-px w-12 bg-border/40" />
          <h2 className="mt-6 text-2xl font-light tracking-wide text-foreground sm:text-3xl">
            よくあるご質問
          </h2>
        </div>

        {/* カテゴリ別カラムレイアウト */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {category.title}
              </p>
              <div className="mt-4 h-px bg-border/40" />

              <div className="mt-6 space-y-0 divide-y divide-border/30">
                {category.items.map((item, itemIndex) => {
                  const key = `${catIndex}-${itemIndex}`;
                  const isOpen = openItems[key] ?? false;

                  return (
                    <div key={itemIndex} className="py-5">
                      <button
                        className="flex w-full items-start justify-between text-left"
                        onClick={() => toggleItem(key)}
                      >
                        <span className="pr-6 text-sm font-light tracking-wide text-foreground">
                          {item.question}
                        </span>
                        <span className="mt-0.5 flex-shrink-0 text-muted-foreground/60">
                          <svg
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
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
                          isOpen ? "max-h-96 pt-3" : "max-h-0"
                        }`}
                      >
                        <p className="text-sm font-light leading-relaxed text-muted-foreground/70">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
