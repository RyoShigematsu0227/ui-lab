"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { KeyboardShortcutsHelp } from "./keyboard-shortcuts-help";

export function KeyboardShortcuts() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドにフォーカスがある場合は無視
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      // モーダルが開いている場合は無視
      if (helpOpen) {
        return;
      }

      // Cmd/Ctrl + K: 検索にフォーカス
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>(
          'input[placeholder*="検索"]'
        );
        if (searchInput) {
          searchInput.focus();
        }
      }

      // Cmd/Ctrl + D: ダークモード切替
      if ((e.metaKey || e.ctrlKey) && e.key === "d") {
        e.preventDefault();
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }

      // G + H/F/S/A: ナビゲーション
      if (e.key === "g") {
        const handleNextKey = (nextE: KeyboardEvent) => {
          if (nextE.key === "h") {
            router.push("/");
          } else if (nextE.key === "f") {
            router.push("/favorites");
          } else if (nextE.key === "s") {
            router.push("/sites");
          } else if (nextE.key === "a") {
            router.push("/about");
          }
          document.removeEventListener("keydown", handleNextKey);
        };
        document.addEventListener("keydown", handleNextKey, { once: true });
        setTimeout(() => {
          document.removeEventListener("keydown", handleNextKey);
        }, 1000);
      }

      // ?: ショートカットヘルプを表示
      if (e.key === "?" && e.shiftKey) {
        e.preventDefault();
        setHelpOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router, setTheme, resolvedTheme, helpOpen]);

  return <KeyboardShortcutsHelp open={helpOpen} onOpenChange={setHelpOpen} />;
}
