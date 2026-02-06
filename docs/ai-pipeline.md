# AI自動更新パイプライン設計

## 概要

毎週1回、AIが自動的にオリジナルのUIセクションを生成してサイトに追加する。
完全無人で運用する。

## 実行環境

- **トリガー**: GitHub Actions の cron スケジュール（毎週月曜 9:00 JST）+ 手動実行
- **AI**: Claude Code CLI（`@anthropic-ai/claude-code`）
- **プロンプト**: `scripts/generate-sections-prompt.md`
- **スクリーンショット**: Playwright
- **画像保存先**: `public/screenshots/`（Gitリポジトリ内）

## パイプライン全体フロー

```
1. セクション生成（2個/週）
   └─ Claude Code CLI がプロンプトに従い自律的に実行
   └─ 既存セクションを参照しデザイントーンを統一
   └─ カテゴリバランスを考慮（少ないカテゴリを優先）
   └─ code.tsx + metadata.json を生成
   └─ content/sections/index.ts にimport・マッピングを追加

2. 品質チェック
   └─ npm run build でビルド確認

3. スクリーンショット撮影
   └─ dev サーバーを起動
   └─ Playwright で各セクションをレンダリング
   └─ ダーク / ライト の2テーマで撮影（新規のみ）
   └─ public/screenshots/ に保存

4. デプロイ
   └─ GitHub に push → Vercel が自動デプロイ
```

## ワークフロー

`.github/workflows/generate-sections.yml` で定義:

```yaml
on:
  schedule:
    - cron: "0 0 * * 1"  # 毎週月曜 9:00 JST
  workflow_dispatch:       # 手動実行
```

主なステップ:
1. チェックアウト + Node.js セットアップ
2. `npx @anthropic-ai/claude-code -p` でセクション生成
3. `npm run build` でビルド確認
4. Playwright でスクリーンショット撮影
5. 変更があれば自動コミット & プッシュ

Secrets:
- `ANTHROPIC_API_KEY` — Claude API キー（リポジトリSecrets）

## 生成プロンプト

`scripts/generate-sections-prompt.md` に定義。以下を含む:

- カテゴリバランスを考慮した生成対象の決定
- 技術要件（Tailwind CSS v4、dark:対応、外部依存なし）
- デザインガイドライン（セマンティックトークン、タイポグラフィ、装飾ルール）
- 既存セクションのトーンに合わせる指示
- `content/sections/index.ts` への登録

## 生成されるファイル

1セクションあたり:

```
content/sections/{slug}/
  code.tsx          → Reactコンポーネント
  metadata.json     → メタデータ
public/screenshots/
  {slug}.png        → ダークテーマスクリーンショット
  {slug}-light.png  → ライトテーマスクリーンショット
```

+ `content/sections/index.ts` にexport・import・マッピング追加

## スクリーンショット

- `npm run screenshots` — 新規セクションのみ撮影
- `npm run screenshots:all` — 全セクションを再撮影
- ダーク/ライト両テーマで撮影（`{slug}.png` / `{slug}-light.png`）
- ナビゲーション・フッターは専用の小さいビューポートを使用

## 生成数の目安

- 週あたり: 2セクション
- 月あたり: 8セクション

## エラーハンドリング

| エラー種別 | 対応 |
|---|---|
| Claude Code CLI エラー | GitHub Actions のログに記録、次週にリトライ |
| ビルドエラー | ワークフロー失敗として記録 |
| スクリーンショット失敗 | 該当セクションをスキップ |

## コスト見積もり

- Claude API: Claude Code CLI 利用料（Pro/Max プランまたはAPI キー）
- GitHub Actions: Free tier の無料枠内（月2000分）
- Vercel: Hobby プランで十分
