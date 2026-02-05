# データモデル定義

## 概要

Supabase (PostgreSQL) を使用。テーブル・カラム名は snake_case。

## テーブル一覧

### sections — UIセクション

| カラム | 型 | 説明 |
|---|---|---|
| id | uuid (PK) | 自動生成 |
| slug | text (UNIQUE) | URLスラッグ（例: hero-gradient-001） |
| title | text | セクションタイトル |
| description | text | 短い説明文 |
| category_id | uuid (FK) | カテゴリへの参照 |
| code_path | text | コードファイルのパス（content/sections/...） |
| screenshot_url | text | プレビュー画像URL（Supabase Storage） |
| screenshot_mobile_url | text | モバイルプレビュー画像URL |
| is_published | boolean | 公開フラグ（デフォルト: true） |
| generated_by | text | 生成方法（ai / manual） |
| created_at | timestamptz | 作成日時 |
| updated_at | timestamptz | 更新日時 |

### section_variants — セクションのバリエーション

| カラム | 型 | 説明 |
|---|---|---|
| id | uuid (PK) | 自動生成 |
| section_id | uuid (FK) | 親セクションへの参照 |
| label | text | バリエーション名（例: ダーク、ミニマル） |
| code_path | text | バリエーションコードのパス |
| screenshot_url | text | プレビュー画像URL |
| sort_order | integer | 表示順 |
| created_at | timestamptz | 作成日時 |

### categories — カテゴリ

| カラム | 型 | 説明 |
|---|---|---|
| id | uuid (PK) | 自動生成 |
| slug | text (UNIQUE) | URLスラッグ（例: hero） |
| name | text | 表示名（例: ヒーロー / ファーストビュー） |
| description | text | カテゴリの説明 |
| icon | text | アイコン名（Lucide icon） |
| sort_order | integer | 表示順 |
| created_at | timestamptz | 作成日時 |

### tags — タグ

| カラム | 型 | 説明 |
|---|---|---|
| id | uuid (PK) | 自動生成 |
| slug | text (UNIQUE) | URLスラッグ（例: animation） |
| name | text | 表示名（例: アニメーション） |
| created_at | timestamptz | 作成日時 |

### section_tags — セクションとタグの中間テーブル

| カラム | 型 | 説明 |
|---|---|---|
| section_id | uuid (FK) | セクションへの参照 |
| tag_id | uuid (FK) | タグへの参照 |
| (PK) | (section_id, tag_id) | 複合主キー |

### sites — サイト事例

| カラム | 型 | 説明 |
|---|---|---|
| id | uuid (PK) | 自動生成 |
| slug | text (UNIQUE) | URLスラッグ |
| title | text | サイト名 |
| url | text | サイトURL |
| description | text | 短い解説 |
| screenshot_url | text | スクリーンショットURL |
| is_published | boolean | 公開フラグ |
| created_at | timestamptz | 作成日時 |
| updated_at | timestamptz | 更新日時 |

### site_tags — サイト事例とタグの中間テーブル

| カラム | 型 | 説明 |
|---|---|---|
| site_id | uuid (FK) | サイト事例へのの参照 |
| tag_id | uuid (FK) | タグへの参照 |
| (PK) | (site_id, tag_id) | 複合主キー |

## インデックス

```sql
CREATE INDEX idx_sections_category_id ON sections(category_id);
CREATE INDEX idx_sections_is_published ON sections(is_published);
CREATE INDEX idx_sections_created_at ON sections(created_at DESC);
CREATE INDEX idx_section_tags_tag_id ON section_tags(tag_id);
CREATE INDEX idx_sites_is_published ON sites(is_published);
CREATE INDEX idx_sites_created_at ON sites(created_at DESC);
```

## RLS (Row Level Security)

すべてのテーブルで RLS を有効化。
公開データのみなので、匿名ユーザーに SELECT を許可。

```sql
-- 例: sections テーブル
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
CREATE POLICY "公開セクションは誰でも閲覧可" ON sections
  FOR SELECT USING (is_published = true);
```

書き込みは Supabase の service_role キーを使う（AIパイプラインからのみ）。
