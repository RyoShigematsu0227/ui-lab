# アーキテクチャ詳細

## 全体構成図

```
┌─────────────┐     ┌─────────────┐     ┌─────────────────┐
│   Vercel     │────▶│  Supabase   │     │ GitHub Actions  │
│  (Next.js)   │◀────│ (PostgreSQL)│◀────│  (週次Cron)      │
└─────────────┘     └─────────────┘     └────────┬────────┘
                          ▲                       │
                          │                       ▼
                    ┌─────┴─────┐          ┌─────────────┐
                    │  Supabase │          │  Claude API  │
                    │  Storage  │◀─────────│  (生成AI)    │
                    │  (画像)   │          └─────────────┘
                    └───────────┘
```

## レンダリング戦略

- **トップページ**: ISR（Incremental Static Regeneration）、revalidate: 3600（1時間）
- **セクション詳細**: ISR、revalidate: 86400（24時間）
- **サイト事例詳細**: ISR、revalidate: 86400（24時間）
- **カテゴリ/タグページ**: ISR、revalidate: 3600（1時間）

週次更新のコンテンツなので、ISRで十分。リアルタイム性は不要。

## データフロー

### 閲覧フロー

1. ユーザーがページにアクセス
2. Next.js が Supabase からデータ取得（Server Component）
3. ISR キャッシュがあればキャッシュを返す
4. UIセクションのコードは `content/sections/` にファイルとして保持
5. プレビューは iframe でレンダリング

### AI生成フロー

1. GitHub Actions が週次 Cron で `scripts/generate-sections.ts` を実行
2. Claude API でトレンド調査 → セクションコード生成
3. 生成されたコードを `content/sections/` に保存
4. Playwright でプレビュースクリーンショットを撮影
5. スクリーンショットを Supabase Storage にアップロード
6. メタデータを Supabase DB に登録
7. Vercel に自動デプロイ（GitHub push トリガー）

## UIセクションのプレビュー方式

各セクションのコードは独立した React コンポーネントとして `content/sections/` に保存する。
プレビュー表示には iframe + `srcdoc` を使い、サイト本体のスタイルと干渉しないようにする。

```
content/sections/
  hero-gradient-001/
    code.tsx          → セクションのソースコード
    metadata.json     → カテゴリ、タグ、説明等
    variants/
      dark.tsx        → ダークバリエーション
      minimal.tsx     → ミニマルバリエーション
```

## 認証・管理画面

管理画面は設けない。コンテンツ追加・更新はすべてAIパイプライン経由またはGitを通じて行う。

## エラーハンドリング

- AI生成が失敗した場合: GitHub Actions のログに記録、次週にリトライ
- Supabase 接続エラー: Next.js の error.tsx でフォールバック表示
- 不正なセクションコード: ビルド時に型チェックで検出
