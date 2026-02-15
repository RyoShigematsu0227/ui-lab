"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Search, Home, Heart, Globe, Info, Moon, Sun, Keyboard, Layout } from "lucide-react";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { CATEGORIES } from "@/data/categories";
import { Section } from "@/types";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  sections: Section[];
}

type CommandItem = {
  id: string;
  label: string;
  description?: string;
  icon: typeof Home;
  action: () => void;
  keywords?: string[];
};

export function CommandPalette({ open, onOpenChange, sections }: CommandPaletteProps) {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // コマンド一覧
  const commands: CommandItem[] = useMemo(() => {
    const navigate = (path: string) => {
      router.push(path);
      onOpenChange(false);
    };

    const baseCommands: CommandItem[] = [
      {
        id: "home",
        label: "ホーム",
        description: "トップページに移動",
        icon: Home,
        action: () => navigate("/"),
        keywords: ["top", "トップ", "home"],
      },
      {
        id: "favorites",
        label: "お気に入り",
        description: "お気に入りセクションを表示",
        icon: Heart,
        action: () => navigate("/favorites"),
        keywords: ["favorite", "like", "保存"],
      },
      {
        id: "sites",
        label: "サイト事例",
        description: "サイト事例一覧を表示",
        icon: Globe,
        action: () => navigate("/sites"),
        keywords: ["site", "example", "事例"],
      },
      {
        id: "about",
        label: "About",
        description: "UI Labについて",
        icon: Info,
        action: () => navigate("/about"),
        keywords: ["about", "info", "情報"],
      },
      {
        id: "theme",
        label: resolvedTheme === "dark" ? "ライトモードに切替" : "ダークモードに切替",
        description: "テーマを切り替える",
        icon: resolvedTheme === "dark" ? Sun : Moon,
        action: () => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
          onOpenChange(false);
        },
        keywords: ["theme", "dark", "light", "テーマ", "ダーク", "ライト"],
      },
      {
        id: "shortcuts",
        label: "キーボードショートカット",
        description: "ショートカット一覧を表示",
        icon: Keyboard,
        action: () => {
          onOpenChange(false);
          // ショートカットヘルプを表示するために ? を発火
          setTimeout(() => {
            document.dispatchEvent(new KeyboardEvent("keydown", { key: "?", shiftKey: true }));
          }, 100);
        },
        keywords: ["keyboard", "shortcut", "キーボード", "ショートカット"],
      },
    ];

    // カテゴリを追加
    const categoryCommands: CommandItem[] = CATEGORIES.map((category) => ({
      id: `category-${category.slug}`,
      label: category.name,
      description: `カテゴリ: ${category.description}`,
      icon: Layout,
      action: () => navigate(`/?category=${category.slug}`),
      keywords: [category.slug, category.name, "category", "カテゴリ"],
    }));

    // セクションを追加
    const sectionCommands: CommandItem[] = sections.slice(0, 10).map((section) => ({
      id: `section-${section.slug}`,
      label: section.title,
      description: section.description,
      icon: Layout,
      action: () => navigate(`/sections/${section.slug}`),
      keywords: [section.slug, section.title, ...section.tags.map((t) => t.name)],
    }));

    return [...baseCommands, ...categoryCommands, ...sectionCommands];
  }, [router, onOpenChange, setTheme, resolvedTheme]);

  // フィルタリング
  const filteredCommands = useMemo(() => {
    if (!query.trim()) {
      return commands.slice(0, 10);
    }

    const lowerQuery = query.toLowerCase();
    return commands
      .filter((cmd) => {
        if (cmd.label.toLowerCase().includes(lowerQuery)) return true;
        if (cmd.description?.toLowerCase().includes(lowerQuery)) return true;
        if (cmd.keywords?.some((kw) => kw.toLowerCase().includes(lowerQuery))) return true;
        return false;
      })
      .slice(0, 10);
  }, [commands, query]);

  // キーボードナビゲーション
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((i) => Math.min(i + 1, filteredCommands.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((i) => Math.max(i - 1, 0));
          break;
        case "Enter":
          e.preventDefault();
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action();
          }
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, filteredCommands, selectedIndex]);

  // クエリ変更ハンドラー
  const handleQueryChange = (newQuery: string) => {
    setQuery(newQuery);
    setSelectedIndex(0);
  };

  // ダイアログの開閉ハンドラー
  const handleOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setQuery("");
      setSelectedIndex(0);
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-lg gap-0 overflow-hidden p-0">
        <VisuallyHidden>
          <DialogTitle>コマンドパレット</DialogTitle>
        </VisuallyHidden>
        {/* 検索入力 */}
        <div className="flex items-center border-b border-border px-3">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            type="text"
            placeholder="検索またはコマンドを入力..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground"
            autoFocus
          />
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* コマンドリスト */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filteredCommands.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted-foreground">結果が見つかりません</p>
          ) : (
            <div className="space-y-1">
              {filteredCommands.map((cmd, index) => (
                <button
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    index === selectedIndex
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50"
                  }`}
                >
                  <cmd.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="flex-1 overflow-hidden">
                    <p className="truncate font-medium">{cmd.label}</p>
                    {cmd.description && (
                      <p className="truncate text-xs text-muted-foreground">{cmd.description}</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="flex items-center justify-between border-t border-border px-3 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>↑↓ 移動</span>
            <span>↵ 選択</span>
          </div>
          <span>ESC で閉じる</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
