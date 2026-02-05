import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UI Lab - モダンUIセクションギャラリー",
    short_name: "UI Lab",
    description: "AIが生成したモダンなUIセクションのギャラリーサイト。ヒーロー、ナビゲーション、料金テーブルなど、コピー可能なコンポーネントを探せます。",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["development", "design", "utilities"],
    lang: "ja",
    dir: "ltr",
  };
}
