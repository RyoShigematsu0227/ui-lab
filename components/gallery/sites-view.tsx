"use client";

import { useState, useMemo } from "react";
import { Site } from "@/types";
import { SiteCard } from "./site-card";
import { SearchBar } from "./search-bar";
import { SortSelect, SortOption } from "./sort-select";

interface SitesViewProps {
  sites: Site[];
}

export function SitesView({ sites }: SitesViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("newest");

  // 検索とソートでフィルタリング
  const filteredSites = useMemo(() => {
    let result = [...sites];

    // 検索フィルター
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
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
  }, [sites, searchQuery, sortOption]);

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
        {searchQuery && (
          <span className="ml-2">
            「{searchQuery}」の検索結果
          </span>
        )}
      </p>

      {/* グリッド */}
      {filteredSites.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.map((site) => (
            <SiteCard key={site.id} site={site} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-16">
          <p className="mb-2 text-lg font-medium">サイトが見つかりません</p>
          <p className="text-sm text-muted-foreground">
            検索条件を変更してみてください
          </p>
        </div>
      )}
    </div>
  );
}
