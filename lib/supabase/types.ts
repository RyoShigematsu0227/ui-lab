// Supabaseデータベースの型定義
// 実際のスキーマに合わせて `npm run db:generate` で自動生成することを推奨

export interface Database {
  public: {
    Tables: {
      sections: {
        Row: {
          id: string;
          slug: string;
          title: string;
          description: string;
          category_id: string;
          code_path: string;
          screenshot_url: string | null;
          screenshot_mobile_url: string | null;
          is_published: boolean;
          generated_by: "ai" | "manual";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          description: string;
          category_id: string;
          code_path: string;
          screenshot_url?: string | null;
          screenshot_mobile_url?: string | null;
          is_published?: boolean;
          generated_by?: "ai" | "manual";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          description?: string;
          category_id?: string;
          code_path?: string;
          screenshot_url?: string | null;
          screenshot_mobile_url?: string | null;
          is_published?: boolean;
          generated_by?: "ai" | "manual";
          created_at?: string;
          updated_at?: string;
        };
      };
      section_variants: {
        Row: {
          id: string;
          section_id: string;
          label: string;
          code_path: string;
          screenshot_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          section_id: string;
          label: string;
          code_path: string;
          screenshot_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          section_id?: string;
          label?: string;
          code_path?: string;
          screenshot_url?: string | null;
          sort_order?: number;
          created_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string;
          icon: string;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description: string;
          icon: string;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          description?: string;
          icon?: string;
          sort_order?: number;
          created_at?: string;
        };
      };
      tags: {
        Row: {
          id: string;
          slug: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          name?: string;
          created_at?: string;
        };
      };
      section_tags: {
        Row: {
          section_id: string;
          tag_id: string;
        };
        Insert: {
          section_id: string;
          tag_id: string;
        };
        Update: {
          section_id?: string;
          tag_id?: string;
        };
      };
      sites: {
        Row: {
          id: string;
          slug: string;
          title: string;
          url: string;
          description: string;
          screenshot_url: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          url: string;
          description: string;
          screenshot_url?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          title?: string;
          url?: string;
          description?: string;
          screenshot_url?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      site_tags: {
        Row: {
          site_id: string;
          tag_id: string;
        };
        Insert: {
          site_id: string;
          tag_id: string;
        };
        Update: {
          site_id?: string;
          tag_id?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
