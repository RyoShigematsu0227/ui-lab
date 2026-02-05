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
import { SearchX, Lightbulb, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [showFilters, setShowFilters] = useState(false);

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
        if (section.title.toLowerCase().includes(query)) return true;
        if (section.description.toLowerCase().includes(query)) return true;
        if (section.tags.some((tag) => tag.name.toLowerCase().includes(query)))
          return true;
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
  const activeFilterCount = (selectedCategory ? 1 : 0) + selectedTags.length + (debouncedSearchQuery ? 1 : 0);

  return (
    <div className="space-y-8">
      {/* ヘッダー */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">セクション</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {filteredSections.length} 件のコンポーネント
          </p>
        </div>
        <div className="flex items-center gap-2">
          <RandomSectionButton />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "gap-2",
              showFilters && "bg-accent"
            )}
          >
            <Filter className="h-4 w-4" />
            フィルター
            {activeFilterCount > 0 && (
              <Badge variant="secondary" className="ml-1 h-5 w-5 rounded-full p-0 text-xs">
                {activeFilterCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>

      {/* 検索バーとソート */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={handleSearch}
            placeholder="タイトル、説明、タグで検索..."
          />
        </div>
        <SortSelect value={sortOption} onChange={handleSortChange} />
      </div>

      {/* フィルターパネル */}
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-border/50 bg-card/50 transition-all duration-300",
          showFilters ? "max-h-[500px] opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="space-y-6 p-6">
          {/* カテゴリフィルター */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              カテゴリ
            </h3>
            <CategoryFilter
              categories={categories}
              sections={sections}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>

          {/* タグフィルター */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              タグ
            </h3>
            <TagFilter
              tags={tags}
              selectedTags={selectedTags}
              onToggleTag={handleToggleTag}
              onClearTags={handleClearTags}
            />
          </div>

          {/* クリアボタン */}
          {hasActiveFilters && (
            <div className="flex justify-end border-t border-border/50 pt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearAll}
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
                すべてクリア
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* アクティブフィルター表示 */}
      {hasActiveFilters && !showFilters && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted-foreground">絞り込み:</span>
          {selectedCategory && (
            <Badge
              variant="secondary"
              className="gap-1 pr-1"
            >
              {categories.find(c => c.slug === selectedCategory)?.name}
              <button
                onClick={() => handleCategorySelect(null)}
                className="ml-1 rounded-full p-0.5 hover:bg-background/50"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {selectedTags.map(tagSlug => {
            const tag = tags.find(t => t.slug === tagSlug);
            return tag ? (
              <Badge
                key={tagSlug}
                variant="secondary"
                className="gap-1 pr-1"
              >
                {tag.name}
                <button
                  onClick={() => handleToggleTag(tagSlug)}
                  className="ml-1 rounded-full p-0.5 hover:bg-background/50"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ) : null;
          })}
          {debouncedSearchQuery && (
            <Badge
              variant="secondary"
              className="gap-1 pr-1"
            >
              「{debouncedSearchQuery}」
              <button
                onClick={() => setSearchQuery("")}
                className="ml-1 rounded-full p-0.5 hover:bg-background/50"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          <button
            onClick={handleClearAll}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            すべてクリア
          </button>
        </div>
      )}

      {/* グリッド */}
      {visibleSections.length > 0 ? (
        <>
          <SectionGrid sections={visibleSections} />

          {/* もっと見るボタン */}
          {hasMore && (
            <div className="flex justify-center pt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={handleLoadMore}
                className="min-w-[200px] rounded-full"
              >
                もっと見る
                <span className="ml-2 text-muted-foreground">
                  ({filteredSections.length - visibleCount} 件)
                </span>
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/50 bg-card/30 py-20 px-4">
          <div className="mb-6 rounded-2xl bg-muted/50 p-5">
            <SearchX className="h-10 w-10 text-muted-foreground/50" />
          </div>
          <p className="mb-2 text-xl font-semibold">セクションが見つかりません</p>
          <p className="mb-8 max-w-md text-center text-sm text-muted-foreground">
            {debouncedSearchQuery
              ? `「${debouncedSearchQuery}」に一致するセクションはありませんでした`
              : "選択した条件に一致するセクションがありません"}
          </p>

          {hasActiveFilters && (
            <Button
              variant="outline"
              onClick={handleClearAll}
              className="mb-8 rounded-full"
            >
              フィルターをクリア
            </Button>
          )}

          {/* 検索のヒント */}
          <div className="w-full max-w-md rounded-xl border border-border/50 bg-card/50 p-6">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              検索のヒント
            </div>
            <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                キーワードを短くしてみてください
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                別の言い方で検索してみてください
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                カテゴリやタグを変えてみてください
              </li>
            </ul>

            {/* 人気のタグ */}
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              人気のタグ
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 6).map((tag) => (
                <Badge
                  key={tag.id}
                  variant="outline"
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
