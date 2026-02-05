import { Tag } from "@/types";

export const TAGS: Tag[] = [
  // ビジュアルスタイル
  { id: "1", slug: "gradient", name: "グラデーション" },
  { id: "2", slug: "glassmorphism", name: "ガラスモーフィズム" },
  { id: "3", slug: "dark-mode", name: "ダークモード" },
  { id: "4", slug: "minimal", name: "ミニマル" },
  { id: "5", slug: "bold-typography", name: "タイポグラフィ重視" },
  { id: "6", slug: "illustration", name: "イラスト付き" },
  { id: "7", slug: "3d", name: "3D要素" },
  { id: "8", slug: "retro", name: "レトロ" },
  { id: "9", slug: "neomorphism", name: "ニューモーフィズム" },

  // インタラクション
  { id: "10", slug: "animation", name: "アニメーション" },
  { id: "11", slug: "scroll-driven", name: "スクロール連動" },
  { id: "12", slug: "hover-effect", name: "ホバーエフェクト" },
  { id: "13", slug: "interactive", name: "インタラクティブ" },
  { id: "14", slug: "parallax", name: "パララックス" },

  // レイアウト
  { id: "15", slug: "grid", name: "グリッドレイアウト" },
  { id: "16", slug: "bento", name: "ベントーグリッド" },
  { id: "17", slug: "asymmetric", name: "非対称" },
  { id: "18", slug: "full-width", name: "フルワイド" },
  { id: "19", slug: "split", name: "スプリット" },
];

export const getTagBySlug = (slug: string): Tag | undefined => {
  return TAGS.find((tag) => tag.slug === slug);
};

export const getTagsByIds = (ids: string[]): Tag[] => {
  return TAGS.filter((tag) => ids.includes(tag.id));
};
