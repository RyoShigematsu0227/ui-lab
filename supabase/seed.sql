-- UI Lab 初期データ
-- schema.sql実行後に実行してください

-- カテゴリ
INSERT INTO categories (slug, name, description, icon, sort_order) VALUES
  ('hero', 'ヒーロー', 'ページ冒頭のメインビジュアルセクション', 'Layout', 1),
  ('navigation', 'ナビゲーション', 'サイトナビゲーション、ヘッダーバー', 'Menu', 2),
  ('feature', 'フィーチャー', 'サービスや製品の特徴・機能を紹介', 'Sparkles', 3),
  ('pricing', '料金テーブル', '料金プランの比較表示', 'CreditCard', 4),
  ('testimonial', 'テスティモニアル', 'ユーザーレビュー、推薦コメント', 'MessageSquare', 5),
  ('cta', 'CTA', 'ユーザーに行動を促すセクション', 'MousePointerClick', 6),
  ('footer', 'フッター', 'ページ最下部のナビゲーション・情報', 'PanelBottom', 7),
  ('faq', 'FAQ', 'よくある質問と回答', 'HelpCircle', 8),
  ('team', 'チーム紹介', 'メンバー紹介セクション', 'Users', 9),
  ('stats', '統計', '実績数字やKPIの表示', 'BarChart3', 10);

-- タグ
INSERT INTO tags (slug, name) VALUES
  ('gradient', 'グラデーション'),
  ('glassmorphism', 'ガラスモーフィズム'),
  ('dark-mode', 'ダークモード'),
  ('minimal', 'ミニマル'),
  ('bold-typography', 'タイポグラフィ重視'),
  ('illustration', 'イラスト付き'),
  ('3d', '3D要素'),
  ('retro', 'レトロ'),
  ('neomorphism', 'ニューモーフィズム'),
  ('animation', 'アニメーション'),
  ('scroll-driven', 'スクロール連動'),
  ('hover-effect', 'ホバーエフェクト'),
  ('interactive', 'インタラクティブ'),
  ('parallax', 'パララックス'),
  ('grid', 'グリッドレイアウト'),
  ('bento', 'ベントーグリッド'),
  ('asymmetric', '非対称'),
  ('full-width', 'フルワイド'),
  ('split', 'スプリット');

-- セクション（カテゴリIDは実際の値に置き換えが必要）
-- ※ 以下はサンプル。実際のカテゴリIDを取得してから実行すること

-- INSERT INTO sections (slug, title, description, category_id, code_path, generated_by) VALUES
--   ('hero-gradient-001', 'グラデーションヒーロー', '美しいグラデーション背景を使用したモダンなヒーローセクション', (SELECT id FROM categories WHERE slug = 'hero'), 'content/sections/hero-gradient-001/code.tsx', 'ai');

-- セクションとタグの関連付け
-- INSERT INTO section_tags (section_id, tag_id) VALUES
--   ((SELECT id FROM sections WHERE slug = 'hero-gradient-001'), (SELECT id FROM tags WHERE slug = 'gradient'));
