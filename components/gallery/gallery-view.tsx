"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Section, Category, Tag } from "@/types";
import { SectionGrid } from "./section-grid";
import { CategoryFilter } from "./category-filter";
import { TagFilter } from "./tag-filter";
import { SearchBar } from "./search-bar";
import { SortSelect, SortOption } from "./sort-select";
import { RandomSectionButton } from "./random-section-button";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchX, Lightbulb } from "lucide-react";

interface GalleryViewProps {
  sections: Section[];
  categories: Category[];
  tags: Tag[];
}

const ITEMS_PER_PAGE = 12;

export function GalleryView({ sections, categories, tags }: GalleryViewProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URLパラメータから初期値を取得
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags")?.split(",").filter(Boolean) || []
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("q") || ""
  );
  const [sortOption, setSortOption] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "newest"
  );
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // 検索クエリをデバウンス（300ms）
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // URLパラメータを更新
  const updateURLParams = useCallback(() => {
    const params = new URLSearchParams();

    if (selectedCategory) {
      params.set("category", selectedCategory);
    }
    if (selectedTags.length > 0) {
      params.set("tags", selectedTags.join(","));
    }
    if (debouncedSearchQuery) {
      params.set("q", debouncedSearchQuery);
    }
    if (sortOption !== "newest") {
      params.set("sort", sortOption);
    }

    const queryString = params.toString();
    const newURL = queryString ? `?${queryString}` : "/";

    router.replace(newURL, { scroll: false });
  }, [selectedCategory, selectedTags, debouncedSearchQuery, sortOption, router]);

  // フィルター変更時にURLを更新
  useEffect(() => {
    updateURLParams();
  }, [updateURLParams]);

  // 検索、カテゴリ、タグ、ソートでフィルタリング
  const filteredSections = useMemo(() => {
    let result = [...sections];

    // カテゴリフィルター
    if (selectedCategory) {
      result = result.filter(
        (section) => section.category?.slug === selectedCategory
      );
    }

    // タグフィルター（AND条件：選択したすべてのタグを含む）
    if (selectedTags.length > 0) {
      result = result.filter((section) =>
        selectedTags.every((tagSlug) =>
          section.tags.some((tag) => tag.slug === tagSlug)
        )
      );
    }

    // 検索フィルター（デバウンス済みの値を使用）
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      result = result.filter((section) => {
        // タイトルで検索
        if (section.title.toLowerCase().includes(query)) return true;
        // 説明で検索
        if (section.description.toLowerCase().includes(query)) return true;
        // タグで検索
        if (section.tags.some((tag) => tag.name.toLowerCase().includes(query)))
          return true;
        // カテゴリ名で検索
        if (section.category?.name.toLowerCase().includes(query)) return true;
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
  }, [sections, selectedCategory, selectedTags, debouncedSearchQuery, sortOption]);

  // 表示するセクション
  const visibleSections = useMemo(() => {
    return filteredSections.slice(0, visibleCount);
  }, [filteredSections, visibleCount]);

  const hasMore = visibleCount < filteredSections.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleToggleTag = (tagSlug: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagSlug)
        ? prev.filter((t) => t !== tagSlug)
        : [...prev, tagSlug]
    );
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleClearTags = () => {
    setSelectedTags([]);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleClearAll = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery("");
    setSortOption("newest");
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || debouncedSearchQuery;

  return (
    <div className="space-y-6">
      {/* 検索バーとソート */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="タイトル、説明、タグで検索..."
          />
        </div>
        <div className="flex items-center gap-2">
          <RandomSectionButton />
          <SortSelect value={sortOption} onChange={handleSortChange} />
        </div>
      </div>

      {/* カテゴリフィルター */}
      <CategoryFilter
        categories={categories}
        sections={sections}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      {/* タグフィルター */}
      <TagFilter
        tags={tags}
        selectedTags={selectedTags}
        onToggleTag={handleToggleTag}
        onClearTags={handleClearTags}
      />

      {/* 結果数 */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {filteredSections.length} 件のセクション
          {debouncedSearchQuery && (
            <span className="ml-2">
              「{debouncedSearchQuery}」の検索結果
            </span>
          )}
        </p>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            フィルターをクリア
          </Button>
        )}
      </div>

      {/* グリッド */}
      {visibleSections.length > 0 ? (
        <>
          <SectionGrid sections={visibleSections} />

          {/* もっと見るボタン */}
          {hasMore && (
            <div className="flex justify-center pt-4">
              <Button
                variant="outline"
                onClick={handleLoadMore}
                className="min-w-[200px]"
              >
                もっと見る（残り {filteredSections.length - visibleCount} 件）
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 px-4">
          <div className="mb-4 rounded-full bg-muted p-4">
            <SearchX className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="mb-2 text-lg font-medium">セクションが見つかりません</p>
          <p className="mb-6 max-w-md text-center text-sm text-muted-foreground">
            {debouncedSearchQuery
              ? `「${debouncedSearchQuery}」に一致するセクションはありませんでした`
              : "選択した条件に一致するセクションがありません"}
          </p>

          {hasActiveFilters && (
            <Button variant="outline" size="sm" onClick={handleClearAll} className="mb-6">
              フィルターをクリア
            </Button>
          )}

          {/* 検索のヒント */}
          <div className="w-full max-w-md rounded-lg bg-muted/50 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
              検索のヒント
            </div>
            <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
              <li>• キーワードを短くしてみてください</li>
              <li>• 別の言い方で検索してみてください</li>
              <li>• カテゴリやタグを変えてみてください</li>
            </ul>

            {/* 人気のタグ */}
            <p className="mb-2 text-xs font-medium text-muted-foreground">人気のタグ:</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 6).map((tag) => (
                <Badge
                  key={tag.id}
                  variant="secondary"
                  className="cursor-pointer hover:bg-accent"
                  onClick={() => {
                    handleClearAll();
                    handleToggleTag(tag.slug);
                  }}
                >
                  {tag.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
