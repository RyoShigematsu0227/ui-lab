-- UI Lab データベーススキーマ
-- Supabase SQL Editorで実行してください

-- カテゴリテーブル
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- タグテーブル
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- セクションテーブル
CREATE TABLE sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  code_path TEXT NOT NULL,
  screenshot_url TEXT,
  screenshot_mobile_url TEXT,
  is_published BOOLEAN DEFAULT TRUE,
  generated_by TEXT DEFAULT 'ai' CHECK (generated_by IN ('ai', 'manual')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- セクションバリエーションテーブル
CREATE TABLE section_variants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  label TEXT NOT NULL,
  code_path TEXT NOT NULL,
  screenshot_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- セクション・タグ中間テーブル
CREATE TABLE section_tags (
  section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (section_id, tag_id)
);

-- サイト事例テーブル
CREATE TABLE sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  screenshot_url TEXT,
  is_published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- サイト・タグ中間テーブル
CREATE TABLE site_tags (
  site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (site_id, tag_id)
);

-- インデックス
CREATE INDEX idx_sections_category_id ON sections(category_id);
CREATE INDEX idx_sections_is_published ON sections(is_published);
CREATE INDEX idx_sections_created_at ON sections(created_at DESC);
CREATE INDEX idx_section_tags_tag_id ON section_tags(tag_id);
CREATE INDEX idx_sites_is_published ON sites(is_published);
CREATE INDEX idx_sites_created_at ON sites(created_at DESC);

-- RLS (Row Level Security)
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE section_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_tags ENABLE ROW LEVEL SECURITY;

-- 公開データは誰でも閲覧可能
CREATE POLICY "カテゴリは誰でも閲覧可" ON categories FOR SELECT USING (true);
CREATE POLICY "タグは誰でも閲覧可" ON tags FOR SELECT USING (true);
CREATE POLICY "公開セクションは誰でも閲覧可" ON sections FOR SELECT USING (is_published = true);
CREATE POLICY "セクションバリエーションは誰でも閲覧可" ON section_variants FOR SELECT USING (true);
CREATE POLICY "セクションタグは誰でも閲覧可" ON section_tags FOR SELECT USING (true);
CREATE POLICY "公開サイトは誰でも閲覧可" ON sites FOR SELECT USING (is_published = true);
CREATE POLICY "サイトタグは誰でも閲覧可" ON site_tags FOR SELECT USING (true);

-- updated_at自動更新トリガー
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sections_updated_at
  BEFORE UPDATE ON sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER sites_updated_at
  BEFORE UPDATE ON sites
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();
