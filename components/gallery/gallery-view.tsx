"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Section, Category, Tag, SortOption } from "@/types";
import { SectionGrid } from "./section-grid";
import { CategoryFilter } from "./category-filter";
import { TagFilter } from "./tag-filter";
import { SearchBar } from "./search-bar";
import { SortSelect } from "./sort-select";
import { filterAndSortSections } from "@/lib/filter-sections";
import { RandomSectionButton } from "./random-section-button";
import { useDebounce } from "@/hooks/use-debounce";
import { SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryViewProps {
  sections: Section[];
  categories: Category[];
  tags: Tag[];
}

const ITEMS_PER_PAGE = 12;

// モジュールレベルキャッシュ（SPA遷移間で保持、リロードでリセット）
let cachedVisibleCount = ITEMS_PER_PAGE;
const cachedScrollMap: Record<string, number> = {};

export function GalleryView({ sections, categories, tags }: GalleryViewProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // URLパラメータから初期値を取得
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [selectedTags, setSelectedTags] = useState<string[]>(
    searchParams.get("tags")?.split(",").filter(Boolean) || []
  );
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [sortOption, setSortOption] = useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "newest"
  );
  // SPA遷移で戻ってきた場合はキャッシュから復元（リロード時は12にリセット）
  const [visibleCount, setVisibleCount] = useState(cachedVisibleCount);
  // 復元時は全アイテムのアニメーションをスキップ
  const [animateFrom, setAnimateFrom] = useState(
    cachedVisibleCount > ITEMS_PER_PAGE ? cachedVisibleCount : 0
  );
  const [showFilters, setShowFilters] = useState(false);

  const shouldRestore = useRef(cachedVisibleCount > ITEMS_PER_PAGE);

  // ブラウザのスクロール復元を無効化（SPA全体で自前管理）
  useEffect(() => {
    history.scrollRestoration = "manual";
  }, []);

  // スクロール位置をページ別で常時キャッシュ（変数代入のみなので軽量）
  const isActive = useRef(true);
  useEffect(() => {
    isActive.current = true;
    const onScroll = () => {
      if (isActive.current) {
        cachedScrollMap[pathname] = window.scrollY;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      isActive.current = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  // スクロール位置の復元/リセット
  useEffect(() => {
    if (shouldRestore.current) {
      // SPA遷移で戻ってきた: 即座に復元 + Next.jsのscroll-to-top後にも再復元
      const savedY = cachedScrollMap[pathname] ?? 0;
      window.scrollTo(0, savedY);
      requestAnimationFrame(() => window.scrollTo(0, savedY));
    } else {
      // リロード/初回訪問: トップへ
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // 表示件数をモジュールキャッシュに同期
  useEffect(() => {
    cachedVisibleCount = visibleCount;
  }, [visibleCount]);

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
  const filteredSections = useMemo(
    () =>
      filterAndSortSections({
        sections,
        selectedCategory,
        selectedTags,
        searchQuery: debouncedSearchQuery,
        sortOption,
      }),
    [sections, selectedCategory, selectedTags, debouncedSearchQuery, sortOption]
  );

  // 表示するセクション
  const visibleSections = useMemo(() => {
    return filteredSections.slice(0, visibleCount);
  }, [filteredSections, visibleCount]);

  const hasMore = visibleCount < filteredSections.length;

  const handleLoadMore = () => {
    setAnimateFrom(visibleCount);
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const resetPagination = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    setAnimateFrom(0);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    resetPagination();
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    resetPagination();
  };

  const handleToggleTag = (tagSlug: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagSlug) ? prev.filter((t) => t !== tagSlug) : [...prev, tagSlug]
    );
    resetPagination();
  };

  const handleClearTags = () => {
    setSelectedTags([]);
    resetPagination();
  };

  const handleClearAll = () => {
    setSelectedCategory(null);
    setSelectedTags([]);
    setSearchQuery("");
    setSortOption("newest");
    resetPagination();
  };

  const handleSortChange = (option: SortOption) => {
    setSortOption(option);
    resetPagination();
  };

  const hasActiveFilters = selectedCategory || selectedTags.length > 0 || debouncedSearchQuery;
  const activeFilterCount =
    (selectedCategory ? 1 : 0) + selectedTags.length + (debouncedSearchQuery ? 1 : 0);

  return (
    <div className="space-y-8">
      {/* コントロールバー */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{filteredSections.length}</span> sections
          </p>
          {hasActiveFilters && (
            <button
              onClick={handleClearAll}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex items-center gap-3">
          <RandomSectionButton slugs={sections.map((s) => s.slug)} />
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex items-center gap-2 px-3 py-2 text-sm rounded-lg border transition-all duration-300",
              showFilters
                ? "border-primary/50 bg-primary/5 text-foreground"
                : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
            {activeFilterCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-medium text-background">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* 検索バーとソート */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex-1">
          <SearchBar value={searchQuery} onChange={handleSearch} placeholder="Search sections..." />
        </div>
        <SortSelect value={sortOption} onChange={handleSortChange} />
      </div>

      {/* フィルターパネル */}
      <div
        className={cn(
          "overflow-hidden rounded-lg border border-border/50 bg-card/30 transition-all duration-500",
          showFilters ? "max-h-[600px] opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <div className="space-y-8 p-6">
          {/* カテゴリフィルター */}
          <div>
            <h3 className="heading-section text-muted-foreground tracking-widest-custom mb-4">
              Categories
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
            <h3 className="heading-section text-muted-foreground tracking-widest-custom mb-4">
              Tags
            </h3>
            <TagFilter
              tags={tags}
              selectedTags={selectedTags}
              onToggleTag={handleToggleTag}
              onClearTags={handleClearTags}
            />
          </div>
        </div>
      </div>

      {/* アクティブフィルター表示 */}
      {hasActiveFilters && !showFilters && (
        <div className="flex flex-wrap items-center gap-2">
          {selectedCategory && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-muted rounded-lg">
              {categories.find((c) => c.slug === selectedCategory)?.name}
              <button onClick={() => handleCategorySelect(null)} className="hover:text-foreground">
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
          {selectedTags.map((tagSlug) => {
            const tag = tags.find((t) => t.slug === tagSlug);
            return tag ? (
              <span
                key={tagSlug}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-muted rounded-lg"
              >
                {tag.name}
                <button onClick={() => handleToggleTag(tagSlug)} className="hover:text-foreground">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ) : null;
          })}
          {debouncedSearchQuery && (
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-muted rounded-lg">
              &ldquo;{debouncedSearchQuery}&rdquo;
              <button onClick={() => setSearchQuery("")} className="hover:text-foreground">
                <X className="h-3 w-3" />
              </button>
            </span>
          )}
        </div>
      )}

      {/* グリッド */}
      {visibleSections.length > 0 ? (
        <>
          <SectionGrid sections={visibleSections} animateFrom={animateFrom} />

          {/* もっと見るボタン */}
          {hasMore && (
            <div className="flex justify-center pt-12">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 text-sm tracking-wide border border-border/50 rounded-lg hover:border-border hover:bg-muted/50 transition-all duration-300"
              >
                Load more
                <span className="ml-2 text-muted-foreground">
                  ({filteredSections.length - visibleCount})
                </span>
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-24">
          <p className="text-lg font-medium mb-2">No sections found</p>
          <p className="text-sm text-muted-foreground mb-6">
            Try adjusting your filters or search query
          </p>
          {hasActiveFilters && (
            <button
              onClick={handleClearAll}
              className="px-6 py-2 text-sm border border-border/50 rounded-lg hover:border-border transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>
      )}
    </div>
  );
}
