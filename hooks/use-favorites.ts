"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "ui-lab-favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 初期化時にローカルストレージから読み込み
  // SSR中はlocalStorageにアクセスできないため、クライアントサイドでのハイドレーションが必要
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setFavorites(JSON.parse(stored));
      }
    } catch {
      // ローカルストレージが使えない場合は無視
    }
    setIsLoaded(true);
  }, []);

  // お気に入りが変更されたらローカルストレージに保存
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
      } catch {
        // ローカルストレージが使えない場合は無視
      }
    }
  }, [favorites, isLoaded]);

  // お気に入りに追加
  const addFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      if (prev.includes(slug)) return prev;
      return [...prev, slug];
    });
  }, []);

  // お気に入りから削除
  const removeFavorite = useCallback((slug: string) => {
    setFavorites((prev) => prev.filter((s) => s !== slug));
  }, []);

  // お気に入りをトグル
  const toggleFavorite = useCallback((slug: string) => {
    setFavorites((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((s) => s !== slug);
      }
      return [...prev, slug];
    });
  }, []);

  // お気に入りかどうかをチェック
  const isFavorite = useCallback(
    (slug: string) => favorites.includes(slug),
    [favorites]
  );

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
  };
}
