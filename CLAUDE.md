# UI Lab

モダンUIセクションのギャラリーサイト。AIが週次でオリジナルUIコンポーネントを自動生成し追加する。

## Tech Stack

- Next.js latest (App Router, srcディレクトリなし)
- TypeScript strict mode
- Tailwind CSS v4
- shadcn/ui
- Supabase (PostgreSQL)
- Vercel (ホスティング)
- npm

## Project Structure

```
app/                  → ページとレイアウト
  (main)/             → メインレイアウトグループ
  api/                → APIルート
components/
  ui/                 → shadcn/ui ベースの共通コンポーネント
  sections/           → UIセクションプレビュー関連
  gallery/            → ギャラリー表示関連
  layout/             → ヘッダー、フッター等
lib/
  supabase/           → Supabaseクライアント、クエリ関数
  ai/                 → AI生成パイプライン
  utils/              → ユーティリティ
content/
  sections/           → 生成されたUIセクションコード
  sites/              → サイト事例データ
scripts/              → AI生成・自動化スクリプト
docs/                 → プロジェクトドキュメント
public/
  screenshots/        → セクション・サイトのスクリーンショット
```

## Commands

- `npm run dev` — 開発サーバー (port 3000)
- `npm run build` — プロダクションビルド
- `npm run lint` — ESLint実行
- `npm run format` — Prettier実行
- `npm run db:generate` — Supabase型生成
- `npm run ai:generate` — AIセクション生成スクリプト実行

## Rules

- MUST: TypeScript strict mode。`any`型禁止
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
- DB テーブル・カラム: snake_case

## Dark Mode

- Tailwind の `dark:` バリアントを使用
- `next-themes` で制御
- すべてのUIコンポーネントはダーク/ライト両対応必須

## 詳細ドキュメント

- @docs/architecture.md — アーキテクチャ詳細
- @docs/ai-pipeline.md — AI自動更新パイプライン設計
- @docs/data-schema.md — データモデル定義
- @docs/content-categories.md — カテゴリ・タグ体系
- @SPEC.md — プロジェクト全体仕様書
