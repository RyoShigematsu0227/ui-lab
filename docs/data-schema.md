# データスキーマ定義

## 概要

外部DBは使わず、すべてのデータをファイルベースで管理する。

- セクション: `content/sections/{slug}/metadata.json`
- サイト事例: `content/sites/{slug}.json`
- カテゴリ: `data/categories.ts`
- タグ: `data/tags.ts`

`lib/content.ts` が `fs` でファイルを読み込み、TypeScript型に変換して提供。

## セクション metadata.json

ファイルパス: `content/sections/{slug}/metadata.json`

| フィールド          | 型               | 必須 | 説明                                            |
| ------------------- | ---------------- | ---- | ----------------------------------------------- |
| title               | string           | Yes  | セクションタイトル                              |
| description         | string           | Yes  | 短い説明文                                      |
| category            | string           | Yes  | カテゴリslug（例: hero）                        |
| tags                | string[]         | Yes  | タグslugの配列（例: ["gradient", "animation"]） |
| screenshotUrl       | string           | No   | プレビュー画像パス                              |
| screenshotMobileUrl | string           | No   | モバイルプレビュー画像パス                      |
| isPublished         | boolean          | No   | 公開フラグ（デフォルト: true）                  |
| generatedBy         | "ai" \| "manual" | No   | 生成方法（デフォルト: "ai"）                    |
| createdAt           | string           | Yes  | 作成日時（ISO 8601）                            |
| updatedAt           | string           | No   | 更新日時（デフォルト: createdAt）               |

例:

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

## サイト事例 JSON

ファイルパス: `content/sites/{slug}.json`

| フィールド    | 型       | 必須 | 説明                           |
| ------------- | -------- | ---- | ------------------------------ |
| title         | string   | Yes  | サイト名                       |
| url           | string   | Yes  | サイトURL                      |
| description   | string   | Yes  | 短い解説                       |
| screenshotUrl | string   | No   | スクリーンショットパス         |
| tags          | string[] | Yes  | タグslugの配列                 |
| isPublished   | boolean  | No   | 公開フラグ（デフォルト: true） |
| createdAt     | string   | Yes  | 作成日時（ISO 8601）           |
| updatedAt     | string   | No   | 更新日時                       |

## カテゴリ (data/categories.ts)

TypeScript配列として静的定義。

| フィールド  | 型     | 説明                    |
| ----------- | ------ | ----------------------- |
| id          | string | カテゴリID              |
| slug        | string | URLスラッグ（例: hero） |
| name        | string | 表示名（例: ヒーロー）  |
| description | string | カテゴリの説明          |
| icon        | string | Lucide アイコン名       |
| sortOrder   | number | 表示順                  |

## タグ (data/tags.ts)

TypeScript配列として静的定義。

| フィールド | 型     | 説明                         |
| ---------- | ------ | ---------------------------- |
| id         | string | タグID                       |
| slug       | string | URLスラッグ（例: animation） |
| name       | string | 表示名（例: アニメーション） |

## TypeScript型定義 (types/index.ts)

```typescript
interface Section {
  id: string; // slug をそのまま使用
  slug: string;
  title: string;
  description: string;
  categoryId: string;
  category?: Category;
  tags: Tag[];
  codePath: string; // lib/content.ts が自動設定
  screenshotUrl: string;
  screenshotMobileUrl?: string;
  isPublished: boolean;
  generatedBy: "ai" | "manual";
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  sortOrder: number;
}

interface Tag {
  id: string;
  slug: string;
  name: string;
}

interface Site {
  id: string; // slug をそのまま使用
  slug: string;
  title: string;
  url: string;
  description: string;
  screenshotUrl: string;
  tags: Tag[];
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}
```

## データ取得関数 (lib/content.ts)

| 関数                        | 戻り値                | 説明                              |
| --------------------------- | --------------------- | --------------------------------- |
| getSections()               | Section[]             | 全公開セクション（createdAt降順） |
| getSectionBySlug(slug)      | Section \| undefined  | slug指定で1件取得                 |
| getSectionsByCategory(slug) | Section[]             | カテゴリslugでフィルタ            |
| getSectionsByTag(slug)      | Section[]             | タグslugでフィルタ                |
| getCategories()             | Category[]            | 全カテゴリ（sortOrder順）         |
| getCategoryBySlug(slug)     | Category \| undefined | slug指定で1件取得                 |
| getTags()                   | Tag[]                 | 全タグ                            |
| getTagBySlug(slug)          | Tag \| undefined      | slug指定で1件取得                 |
| getSites()                  | Site[]                | 全公開サイト事例（createdAt降順） |
| getSiteBySlug(slug)         | Site \| undefined     | slug指定で1件取得                 |
