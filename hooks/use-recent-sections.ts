"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "ui-lab-recent-sections";
const MAX_RECENT = 5;

export function useRecentSections() {
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // LocalStorageから読み込み
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setRecentSlugs(JSON.parse(stored));
      } catch {
        setRecentSlugs([]);
      }
    }
    setIsLoaded(true);
  }, []);

  // セクションを追加
  const addRecentSection = useCallback((slug: string) => {
    setRecentSlugs((prev) => {
      // 既存のものを削除して先頭に追加
      const filtered = prev.filter((s) => s !== slug);
      const updated = [slug, ...filtered].slice(0, MAX_RECENT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  // クリア
  const clearRecentSections = useCallback(() => {
    setRecentSlugs([]);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    recentSlugs,
    isLoaded,
    addRecentSection,
    clearRecentSections,
  };
}
