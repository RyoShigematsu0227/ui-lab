# UIセクション自動生成タスク

あなたはUI Labプロジェクトに新しいUIセクションを追加するタスクを実行します。
プロジェクトのルール（CLAUDE.md）を必ず遵守してください。

## 手順

### 1. 現状調査

まず以下を確認してください:

- `content/sections/` 配下のディレクトリ一覧で既存セクションを把握
- `data/categories.ts` でカテゴリ定義を確認
- `data/tags.ts` でタグ定義を確認
- カテゴリごとのセクション数を数え、**少ないカテゴリを優先**して生成対象を決定

### 2. セクション生成（3〜5個）

カテゴリバランスを考慮し、3〜5個の新しいUIセクションを生成します。

各セクションについて以下のファイルを作成:

#### `content/sections/{slug}/code.tsx`

技術要件:
- React関数コンポーネント（named export、default export禁止）
- TypeScript strict mode（`any`型禁止）
- Tailwind CSS v4 のユーティリティクラスのみ使用
- `dark:` バリアントでダークモード対応必須
- レスポンシブ対応（モバイルファースト）
- アニメーションは Tailwind 標準機能 + CSS のみ（外部ライブラリ不可）
- 外部依存なし（import は React のみ許可）
- props 不要の自己完結コンポーネント
- 画像は SVG プレースホルダーまたは背景グラデーションで代替
- 実在の企業名・ロゴは使わない
- 日本語のダミーテキストを使用
- コンポーネント名は PascalCase（例: `HeroModern002`）
- **重要**: `useState`, `useEffect`, `onClick`, `onSubmit`, `onChange` 等のhooksやイベントハンドラを使う場合、ファイル先頭に `"use client";` を必ず記述すること。これがないとランタイムエラーになる

デザインガイドライン（既存セクションとの統一が最重要）:

**必ず既存セクション（`content/sections/` 内の code.tsx）を2〜3個読み、トーンを合わせること。**

- カラー: ハードコードした色は使わない。Tailwindのセマンティックトークンのみ使用
  （`foreground`, `background`, `muted-foreground`, `border`, `primary`, `primary-foreground`）
  透明度で階層を表現（`foreground/20`, `foreground/40`, `foreground/60`）
- タイポグラフィ: ラベルは `text-[10px]`〜`text-xs` + `uppercase tracking-[0.2em]`〜`tracking-[0.3em]`。
  見出しは `font-medium`（boldは使わない）。本文は `font-light` + `leading-relaxed`
- 装飾: コーナードット（`w-1.5 h-1.5 rounded-full`）、細い区切り線（`h-px bg-border/40`）等、
  控えめで建築的な装飾。過度なグラデーション・シャドウ・ボーダーは禁止
- 余白: 大きめの余白を取る。`py-24`〜`py-32`、`gap-6`〜`gap-8` 等
- 全体トーン: "洗練されたミニマリズム"。プロフェッショナルで落ち着いた印象。
  派手・ポップ・遊び心のあるデザインは避ける

#### `content/sections/{slug}/metadata.json`

```json
{
  "title": "セクションの日本語タイトル",
  "description": "セクションの説明文（日本語）",
  "category": "カテゴリslug",
  "tags": ["tag-slug-1", "tag-slug-2"],
  "screenshotUrl": "/screenshots/{slug}.png",
  "isPublished": true,
  "generatedBy": "ai",
  "createdAt": "ISO 8601形式の現在日時",
  "updatedAt": "ISO 8601形式の現在日時"
}
```

### 3. slug の命名規則

`{カテゴリslug}-{特徴}-{連番3桁}`

例: `hero-parallax-001`, `pricing-gradient-002`, `faq-animated-001`

既存のslugと重複しないこと。連番は既存の最大値+1。

### 4. コンポーネント登録

`content/sections/index.ts` に以下を追記:
- ファイル上部の export 行に追加
- ファイル下部の import 行に追加
- `SECTION_COMPONENTS` マップにエントリ追加

### 5. 品質チェック

生成後に `npm run build` を実行し、ビルドエラーがないことを確認してください。
エラーがあれば修正してください。

## 利用可能なカテゴリslug

hero, navigation, feature, pricing, testimonial, cta, footer, faq, team, stats, logo-cloud, contact, blog, gallery, newsletter

## 利用可能なタグslug

gradient, glassmorphism, dark-mode, minimal, bold-typography, illustration, 3d, retro, neomorphism, animation, scroll-driven, hover-effect, interactive, parallax, grid, bento, asymmetric, full-width, split
