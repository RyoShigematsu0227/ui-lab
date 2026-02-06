# アーキテクチャ詳細

## 全体構成図

```
┌─────────────┐     ┌─────────────────┐
│   Vercel     │     │ GitHub Actions  │
│  (Next.js)   │     │  (週次Cron)      │
└──────┬───────┘     └────────┬────────┘
       │                      │
       │  ビルド時に           │  Claude Code CLI →
       │  fsで読み込み         │  ファイル生成 →
       │                      │  git push
       ▼                      ▼
┌─────────────────────────────────────┐
│         Git リポジトリ               │
│                                     │
│  content/sections/{slug}/           │
│    code.tsx + metadata.json         │
│  content/sites/{slug}.json          │
│  data/categories.ts + tags.ts       │
│  public/screenshots/                │
└─────────────────────────────────────┘
```

## データ管理方式

外部DBは使わず、すべてのデータをファイルとしてGitリポジトリ内に保持する。

- **セクションメタデータ**: `content/sections/{slug}/metadata.json`
- **セクションコード**: `content/sections/{slug}/code.tsx`
- **サイト事例**: `content/sites/{slug}.json`
- **カテゴリ**: `data/categories.ts`（静的TypeScript）
- **タグ**: `data/tags.ts`（静的TypeScript）

`lib/content.ts` が `fs.readFileSync` でファイルを読み込み、モジュールレベルキャッシュで高速化。

### メリット

- ネットワーク通信なし（障害リスクゼロ）
- ビルド時に全データが静的化される
- Gitで履歴管理
- AI pipelineはファイル生成 + git push だけで完結

## レンダリング戦略

- **トップページ**: ISR、revalidate: 3600（1時間）
- **セクション詳細**: ISR、revalidate: 86400（24時間）
- **サイト事例一覧**: ISR、revalidate: 3600（1時間）
- **お気に入り**: Static（クライアントサイドでlocalStorage読み込み）
- **About**: Static

週次更新のコンテンツなので、ISRで十分。リアルタイム性は不要。

## データフロー

### 閲覧フロー

1. ユーザーがページにアクセス
2. ISR キャッシュがあればキャッシュを返す
3. Next.js Server Component が `lib/content.ts` 経由でファイルを読み込み
4. UIセクションのコードは `content/sections/{slug}/code.tsx` から取得
5. プレビューは `/preview/[slug]` ページを iframe で埋め込み

### AI生成フロー

1. GitHub Actions が週次 Cron で Claude Code CLI を実行
2. `scripts/generate-sections-prompt.md` の指示に従いセクションを生成
3. `content/sections/{slug}/code.tsx` と `metadata.json` を生成
4. `content/sections/index.ts` にexport・import・マッピングを追加
5. `npm run build` でビルド確認
6. Playwright でプレビュースクリーンショットを撮影（新規のみ）
7. スクリーンショットを `public/screenshots/` に保存
8. GitHub に push → Vercel が自動デプロイ

## セクションのファイル構成

```
content/sections/
  hero-gradient-001/
    code.tsx          → セクションのReactコンポーネント
    metadata.json     → メタデータ（カテゴリ、タグ、説明等）
  hero-minimal-001/
    code.tsx
    metadata.json
  ...
```

### metadata.json スキーマ

```json
{
  "title": "グラデーションヒーロー",
  "description": "美しいグラデーション背景を使用したモダンなヒーローセクション",
  "category": "hero",
  "tags": ["gradient", "animation", "full-width"],
  "screenshotUrl": "/screenshots/hero-gradient-001.png",
  "isPublished": true,
  "generatedBy": "ai",
  "createdAt": "2024-01-15T00:00:00Z",
  "updatedAt": "2024-01-15T00:00:00Z"
}
```

## コンポーネントマッピング

`content/sections/index.ts` が全セクションのReactコンポーネントをimportし、`SECTION_COMPONENTS` マップ（slug → ComponentType）として提供。プレビューページがこのマップで動的にコンポーネントをレンダリングする。

## 認証・管理画面

管理画面は設けない。コンテンツ追加・更新はすべてAIパイプライン経由またはGitを通じて行う。

## エラーハンドリング

- AI生成が失敗した場合: GitHub Actions のログに記録、次週にリトライ
- metadata.json の読み込み失敗: 該当セクションをスキップ（他は正常表示）
- 不正なセクションコード: ビルド時に型チェックで検出
