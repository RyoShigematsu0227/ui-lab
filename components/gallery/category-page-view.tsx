"use client";

import { useState, useMemo } from "react";
import { Section, Category } from "@/types";
import { SectionGrid } from "./section-grid";
import { SearchBar } from "./search-bar";
import { SortSelect, SortOption } from "./sort-select";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import { SearchX, Lightbulb } from "lucide-react";
import { CategoryIcon } from "@/components/ui/category-icon";

interface CategoryPageViewProps {
  category: Category;
  sections: Section[];
}

export function CategoryPageView({ category, sections }: CategoryPageViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // 検索クエリをデバウンス（300ms）
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // 検索とソートでフィルタリング
  const filteredSections = useMemo(() => {
    let result = [...sections];

    // 検索フィルター（デバウンス済みの値を使用）
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      result = result.filter((section) => {
        if (section.title.toLowerCase().includes(query)) return true;
        if (section.description.toLowerCase().includes(query)) return true;
        if (section.tags.some((tag) => tag.name.toLowerCase().includes(query))) return true;
        return false;
      });
    }

    // ソート
    result.sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title, "ja");
        case "title-desc":
          return b.title.localeCompare(a.title, "ja");
        default:
          return 0;
      }
    });

    return result;
  }, [sections, debouncedSearchQuery, sortOption]);

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div>
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <CategoryIcon name={category.icon} className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold">{category.name}</h1>
        </div>
        <p className="text-lg text-muted-foreground">{category.description}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          {sections.length} 件のセクション
        </p>
      </div>

      {/* 検索バーとソート */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="セクションを検索..."
          />
        </div>
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      {/* 結果数 */}
      <p className="text-sm text-muted-foreground">
        {filteredSections.length} 件のセクション
        {debouncedSearchQuery && (
          <span className="ml-2">
            「{debouncedSearchQuery}」の検索結果
          </span>
        )}
      </p>

      {/* グリッド */}
      {filteredSections.length > 0 ? (
        <SectionGrid sections={filteredSections} />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 px-4">
          <div className="mb-4 rounded-full bg-muted p-4">
            <SearchX className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="mb-2 text-lg font-medium">セクションが見つかりません</p>
          <p className="mb-6 max-w-md text-center text-sm text-muted-foreground">
            {debouncedSearchQuery
              ? `「${debouncedSearchQuery}」に一致するセクションはありませんでした`
              : "このカテゴリに一致するセクションがありません"}
          </p>

          {debouncedSearchQuery && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="mb-6"
            >
              検索をクリア
            </Button>
          )}

          {/* 検索のヒント */}
          <div className="w-full max-w-md rounded-lg bg-muted/50 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              検索のヒント
            </div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• キーワードを短くしてみてください</li>
              <li>• タグ名で検索してみてください</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
