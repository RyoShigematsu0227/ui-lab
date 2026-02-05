"use client";

import { useState, useMemo } from "react";
import { Site } from "@/types";
import { SiteCard } from "./site-card";
import { SearchBar } from "./search-bar";
import { SortSelect, SortOption } from "./sort-select";
import { useDebounce } from "@/hooks/use-debounce";
import { Button } from "@/components/ui/button";
import { SearchX, Lightbulb } from "lucide-react";

interface SitesViewProps {
  sites: Site[];
}

export function SitesView({ sites }: SitesViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // 検索クエリをデバウンス（300ms）
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  // 検索とソートでフィルタリング
  const filteredSites = useMemo(() => {
    let result = [...sites];

    // 検索フィルター（デバウンス済みの値を使用）
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.toLowerCase().trim();
      result = result.filter((site) => {
        // タイトルで検索
        if (site.title.toLowerCase().includes(query)) return true;
        // 説明で検索
        if (site.description.toLowerCase().includes(query)) return true;
        // タグで検索
        if (site.tags.some((tag) => tag.name.toLowerCase().includes(query)))
          return true;
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
  }, [sites, debouncedSearchQuery, sortOption]);

  return (
    <div className="space-y-6">
      {/* 検索バーとソート */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="サイト名、説明、タグで検索..."
          />
        </div>
        <SortSelect value={sortOption} onChange={setSortOption} />
      </div>

      {/* 結果数 */}
      <p className="text-sm text-muted-foreground">
        {filteredSites.length} 件のサイト
        {debouncedSearchQuery && (
          <span className="ml-2">
            「{debouncedSearchQuery}」の検索結果
          </span>
        )}
      </p>

      {/* グリッド */}
      {filteredSites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site, index) => (
            <SiteCard key={site.id} site={site} priority={index < 3} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16 px-4">
          <div className="mb-4 rounded-full bg-muted p-4">
            <SearchX className="h-8 w-8 text-muted-foreground" />
          </div>
          <p className="mb-2 text-lg font-medium">サイトが見つかりません</p>
          <p className="mb-6 max-w-md text-center text-sm text-muted-foreground">
            {debouncedSearchQuery
              ? `「${debouncedSearchQuery}」に一致するサイトはありませんでした`
              : "検索条件に一致するサイトがありません"}
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
              <li>• サイト名の一部で検索してみてください</li>
              <li>• 「SaaS」「EC」などのジャンルで検索</li>
              <li>• 「ミニマル」「モダン」などのスタイルで検索</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
