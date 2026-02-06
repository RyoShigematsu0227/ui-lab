# UI Lab

モダンUIセクションのギャラリーサイト。AIが週次でオリジナルUIコンポーネントを自動生成し追加する。

## Tech Stack

- Next.js latest (App Router, srcディレクトリなし)
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui
- ファイルベースCMS（content/ + fs読み込み）
- Vercel (ホスティング)
- npm

## Project Structure

```
app/                  → ページとレイアウト
components/
  ui/                 → shadcn/ui ベースの共通コンポーネント
  sections/           → UIセクションプレビュー関連
  gallery/            → ギャラリー表示関連
  layout/             → ヘッダー、フッター等
lib/
  content.ts          → ファイルベースのコンテンツ取得関数
  section-codes.ts    → セクションコード読み込み
  utils.ts            → ユーティリティ
content/
  sections/           → UIセクション（code.tsx + metadata.json）
  sites/              → サイト事例データ（JSON）
data/
  categories.ts       → カテゴリ定義（静的TypeScript）
  tags.ts             → タグ定義（静的TypeScript）
types/                → TypeScript型定義
scripts/              → AI生成・自動化スクリプト
docs/                 → プロジェクトドキュメント
public/
  screenshots/        → セクション・サイトのスクリーンショット
```

## Commands

- `npm run dev` — 開発サーバー (port 3000)
- `npm run build` — プロダクションビルド
- `npm run lint` — ESLint実行
- `npm run screenshots` — スクリーンショット生成

## Rules

- MUST: TypeScript strict mode。`any`型禁止
- NEVER: ユーザーの明示的な指示なしに git commit / push しない（/ship コマンド等で指示された場合のみ実行）
- MUST: named export を使う（default export禁止。Next.js のpage/layoutは例外）
- MUST: コンポーネントは関数コンポーネント + hooks
- MUST: Tailwind CSS のユーティリティクラスを使う。カスタムCSSファイルは作らない
- MUST: shadcn/ui コンポーネントを優先的に使う
- MUST: Server Components をデフォルトとし、必要な場合のみ "use client"
- MUST: 日本語のコメント・ドキュメント
- NEVER: `console.log` を本番コードに残さない
- NEVER: `.env` ファイルをコミットしない
- NEVER: `node_modules/`, `.next/` を編集しない

## Naming Conventions

- ファイル名: kebab-case (`hero-section.tsx`)
- コンポーネント名: PascalCase (`HeroSection`)
- 関数・変数: camelCase
- 定数: UPPER_SNAKE_CASE

## Dark Mode

- Tailwind の `dark:` バリアントを使用
- `next-themes` で制御
- すべてのUIコンポーネントはダーク/ライト両対応必須

## コンテンツ管理

セクションのデータは `content/sections/{slug}/` に自己完結で配置:
- `code.tsx` — セクションのReactコンポーネント
- `metadata.json` — タイトル、説明、カテゴリslug、タグslug配列等

カテゴリ・タグは `data/categories.ts`, `data/tags.ts` に静的定義。
`lib/content.ts` が `fs` でファイルを読み込み、全ページに提供。

## 詳細ドキュメント

- @docs/architecture.md — アーキテクチャ詳細
- @docs/ai-pipeline.md — AI自動更新パイプライン設計
- @docs/data-schema.md — データスキーマ定義
- @docs/content-categories.md — カテゴリ・タグ体系
- @SPEC.md — プロジェクト全体仕様書
