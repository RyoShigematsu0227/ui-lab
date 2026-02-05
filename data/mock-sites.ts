import { Site } from "@/types";
import { TAGS } from "./tags";

// モックサイト事例データ（開発用）
export const MOCK_SITES: Site[] = [
  {
    id: "1",
    slug: "linear-app",
    title: "Linear",
    url: "https://linear.app",
    description:
      "プロジェクト管理ツール。ダークモードベースのミニマルなデザインと、スムーズなアニメーションが特徴。",
    screenshotUrl: "/screenshots/sites/linear.png",
    tags: [TAGS[2], TAGS[3], TAGS[9]],
    isPublished: true,
    createdAt: "2024-01-15T00:00:00Z",
    updatedAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    slug: "vercel",
    title: "Vercel",
    url: "https://vercel.com",
    description:
      "フロントエンドクラウドプラットフォーム。グラデーションとグリッドを効果的に使用したモダンなデザイン。",
    screenshotUrl: "/screenshots/sites/vercel.png",
    tags: [TAGS[0], TAGS[14], TAGS[9]],
    isPublished: true,
    createdAt: "2024-01-14T00:00:00Z",
    updatedAt: "2024-01-14T00:00:00Z",
  },
  {
    id: "3",
    slug: "stripe",
    title: "Stripe",
    url: "https://stripe.com",
    description:
      "決済プラットフォーム。美しいグラデーションとアニメーションで、複雑な機能を分かりやすく表現。",
    screenshotUrl: "/screenshots/sites/stripe.png",
    tags: [TAGS[0], TAGS[9], TAGS[4]],
    isPublished: true,
    createdAt: "2024-01-13T00:00:00Z",
    updatedAt: "2024-01-13T00:00:00Z",
  },
  {
    id: "4",
    slug: "raycast",
    title: "Raycast",
    url: "https://raycast.com",
    description:
      "生産性向上アプリ。ダークテーマとグラスモーフィズムを組み合わせた洗練されたデザイン。",
    screenshotUrl: "/screenshots/sites/raycast.png",
    tags: [TAGS[2], TAGS[1], TAGS[9]],
    isPublished: true,
    createdAt: "2024-01-12T00:00:00Z",
    updatedAt: "2024-01-12T00:00:00Z",
  },
  {
    id: "5",
    slug: "arc-browser",
    title: "Arc Browser",
    url: "https://arc.net",
    description:
      "次世代ブラウザ。大胆なカラーパレットと革新的なUIで新しいブラウジング体験を提案。",
    screenshotUrl: "/screenshots/sites/arc.png",
    tags: [TAGS[0], TAGS[4], TAGS[12]],
    isPublished: true,
    createdAt: "2024-01-11T00:00:00Z",
    updatedAt: "2024-01-11T00:00:00Z",
  },
  {
    id: "6",
    slug: "framer",
    title: "Framer",
    url: "https://framer.com",
    description:
      "Webサイトビルダー。インタラクティブなデモとスムーズなアニメーションが印象的。",
    screenshotUrl: "/screenshots/sites/framer.png",
    tags: [TAGS[9], TAGS[12], TAGS[17]],
    isPublished: true,
    createdAt: "2024-01-10T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
  },
];

export const getSiteBySlug = (slug: string): Site | undefined => {
  return MOCK_SITES.find((site) => site.slug === slug);
};
