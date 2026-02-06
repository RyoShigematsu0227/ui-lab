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

要件:
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
