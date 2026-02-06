# AI自動更新パイプライン設計

## 概要

毎週1回、AIが最新のUIトレンドを調査し、オリジナルのUIセクションを生成してサイトに追加する。
完全無人で運用する。

## 実行環境

- **トリガー**: GitHub Actions の cron スケジュール（毎週月曜 9:00 JST）
- **AI**: Claude API（claude-sonnet-4-20250514）
- **スクリーンショット**: Playwright
- **画像保存先**: `public/screenshots/`（Gitリポジトリ内）

## パイプライン全体フロー

```
1. トレンド調査
   └─ Claude API + Web検索でUIトレンドを調査
   └─ 生成するセクションのテーマ・方向性を決定

2. セクション生成（3〜5個/週）
   └─ テーマごとに Claude API でコード生成
   └─ Next.js + Tailwind CSS のコンポーネントとして出力
   └─ metadata.json も同時生成

3. 品質チェック
   └─ TypeScript の型チェック（tsc --noEmit）
   └─ ESLint チェック
   └─ ビルド確認

4. コンポーネント登録
   └─ content/sections/index.ts にimport・マッピングを追加

5. スクリーンショット撮影
   └─ Playwright で各セクションをレンダリング
   └─ デスクトップ / モバイル の2サイズで撮影
   └─ public/screenshots/ に保存

6. デプロイ
   └─ GitHub に push → Vercel が自動デプロイ
```

## 生成されるファイル

1セクションあたり:

```
content/sections/{slug}/
  code.tsx          → Reactコンポーネント
  metadata.json     → メタデータ
public/screenshots/
  {slug}.png        → デスクトップスクリーンショット
```

+ `content/sections/index.ts` にimport行とマッピング追加

## プロンプト設計

### トレンド調査プロンプト

```
あなたはUIデザインのトレンドリサーチャーです。
現在のWebデザインの最新トレンドを調査し、
以下の形式で今週生成すべきUIセクションのテーマを3〜5個提案してください。

対象カテゴリ: {未生成 or 少ないカテゴリを優先}

各テーマについて:
- セクション種別（ヒーロー、料金テーブル等）
- デザインの方向性（具体的なビジュアルイメージ）
- 参考にすべきトレンド要素
- 推奨タグ
```

### セクション生成プロンプト

```
あなたは一流のフロントエンドエンジニアです。
以下のテーマに基づいて、モダンで洗練されたUIセクションを生成してください。

テーマ: {トレンド調査の結果}

要件:
- Next.js + Tailwind CSS (v4) の React コンポーネント
- TypeScript strict mode
- レスポンシブ対応（モバイルファースト）
- ダークモード対応（dark: バリアント使用）
- アニメーションは Tailwind の標準機能 + CSS のみ（外部ライブラリ不可）
- 画像は placeholder を使用（public ドメインの画像URL or SVGプレースホルダー）
- 実在の企業名・ロゴは使わない
- コンポーネントは自己完結（外部依存なし、props不要）

出力形式:
- code.tsx: メインコンポーネント
- metadata.json: { title, description, category, tags, generatedBy, createdAt, updatedAt }
```

## 生成数の目安

- 週あたり: 3〜5セクション
- 月あたり: 12〜20セクション

## エラーハンドリング

| エラー種別 | 対応 |
|---|---|
| Claude API エラー | 3回リトライ後、スキップしてログ記録 |
| 型チェック失敗 | 該当セクションをスキップ、他のセクションは続行 |
| スクリーンショット失敗 | プレースホルダー画像を使用 |
| ビルドエラー | GitHub Issue を自動作成 |

## コスト見積もり

- Claude API: 週5セクション × ~$0.05/セクション ≈ $1/月
- GitHub Actions: Free tier の無料枠内（月2000分）
- Vercel: Hobby プランで十分

## 将来拡張: サイト事例自動収集（Phase 2）

Phase 1 が安定したら以下を追加:

1. Awwwards, Dribbble, ProductHunt 等の RSS / API を監視
2. 気になるサイトの URL を収集
3. Playwright でフルページスクリーンショット撮影
4. Claude API で解説文・カテゴリ分類を自動生成
5. `content/sites/{slug}.json` として保存

※ クローリングの法的・倫理的配慮が必要なため慎重に進める
