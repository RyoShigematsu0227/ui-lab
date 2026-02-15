# UI Lab

AIが生成するモダンUIセクションのギャラリーサイト。

https://ui-lab.jp

## 概要

フロントエンド開発者・UIデザイナー向けに、洗練されたUIセクションをカテゴリ別に閲覧できるギャラリー。AIが週次でオリジナルコンポーネントを自動生成して追加する。

- 79個のUIセクション（ヒーロー、料金テーブル、CTA等）
- 15カテゴリ、19タグによる分類
- ワンクリックでコードコピー
- ライブプレビュー
- ダークモード / ライトモード対応

## Tech Stack

- **Next.js** (App Router) + **TypeScript** strict mode
- **Tailwind CSS v4** + **shadcn/ui**
- **ファイルベースCMS**（`content/` ディレクトリ + `fs` 読み込み）
- **Vercel** ホスティング
- **Claude API** UIセクション自動生成

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 で開発サーバーが起動します。

## コマンド

| コマンド              | 説明                             |
| --------------------- | -------------------------------- |
| `npm run dev`         | 開発サーバー起動                 |
| `npm run build`       | プロダクションビルド             |
| `npm run lint`        | ESLint実行                       |
| `npm run screenshots` | セクションスクリーンショット生成 |

## プロジェクト構造

```
app/                  → ページとレイアウト
components/           → Reactコンポーネント
  ui/                 → shadcn/ui ベース
  sections/           → プレビュー・コードブロック
  gallery/            → ギャラリー表示・フィルタ
  layout/             → ヘッダー、フッター等
lib/
  content.ts          → ファイルベースのコンテンツ取得
  section-codes.ts    → セクションコード読み込み
  utils.ts            → ユーティリティ
content/
  sections/           → UIセクション（code.tsx + metadata.json）
  sites/              → サイト事例データ（JSON）
data/
  categories.ts       → カテゴリ定義
  tags.ts             → タグ定義
types/                → TypeScript型定義
docs/                 → プロジェクトドキュメント
public/screenshots/   → スクリーンショット画像
```

## セクションの追加方法

新しいセクションを追加するには:

1. `content/sections/{slug}/code.tsx` にコンポーネントを作成
2. `content/sections/{slug}/metadata.json` にメタデータを作成
3. `content/sections/index.ts` にimport・exportとマッピングを追加

metadata.json の形式:

```json
{
  "title": "セクション名",
  "description": "説明文",
  "category": "hero",
  "tags": ["gradient", "animation"],
  "screenshotUrl": "/screenshots/slug.png",
  "generatedBy": "ai",
  "createdAt": "2024-01-15T00:00:00Z",
  "updatedAt": "2024-01-15T00:00:00Z"
}
```

## ドキュメント

- [SPEC.md](./SPEC.md) — プロジェクト仕様書
- [docs/architecture.md](./docs/architecture.md) — アーキテクチャ詳細
- [docs/ai-pipeline.md](./docs/ai-pipeline.md) — AI自動更新パイプライン
- [docs/data-schema.md](./docs/data-schema.md) — データスキーマ定義
- [docs/content-categories.md](./docs/content-categories.md) — カテゴリ・タグ体系
