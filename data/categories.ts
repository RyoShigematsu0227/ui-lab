import { Category } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "1",
    slug: "hero",
    name: "ヒーロー",
    description: "ページ冒頭のメインビジュアルセクション",
    icon: "Layout",
    sortOrder: 1,
  },
  {
    id: "2",
    slug: "navigation",
    name: "ナビゲーション",
    description: "サイトナビゲーション、ヘッダーバー",
    icon: "Menu",
    sortOrder: 2,
  },
  {
    id: "3",
    slug: "feature",
    name: "フィーチャー",
    description: "サービスや製品の特徴・機能を紹介",
    icon: "Sparkles",
    sortOrder: 3,
  },
  {
    id: "4",
    slug: "pricing",
    name: "料金テーブル",
    description: "料金プランの比較表示",
    icon: "CreditCard",
    sortOrder: 4,
  },
  {
    id: "5",
    slug: "testimonial",
    name: "テスティモニアル",
    description: "ユーザーレビュー、推薦コメント",
    icon: "MessageSquare",
    sortOrder: 5,
  },
  {
    id: "6",
    slug: "cta",
    name: "CTA",
    description: "ユーザーに行動を促すセクション",
    icon: "MousePointerClick",
    sortOrder: 6,
  },
  {
    id: "7",
    slug: "footer",
    name: "フッター",
    description: "ページ最下部のナビゲーション・情報",
    icon: "PanelBottom",
    sortOrder: 7,
  },
  {
    id: "8",
    slug: "faq",
    name: "FAQ",
    description: "よくある質問と回答",
    icon: "HelpCircle",
    sortOrder: 8,
  },
  {
    id: "9",
    slug: "team",
    name: "チーム紹介",
    description: "メンバー紹介セクション",
    icon: "Users",
    sortOrder: 9,
  },
  {
    id: "10",
    slug: "stats",
    name: "統計",
    description: "実績数字やKPIの表示",
    icon: "BarChart3",
    sortOrder: 10,
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return CATEGORIES.find((category) => category.slug === slug);
};
