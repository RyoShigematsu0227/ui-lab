"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { KeyboardShortcutsHelp } from "./keyboard-shortcuts-help";
import { CommandPalette } from "./command-palette";

export function KeyboardShortcuts() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [helpOpen, setHelpOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // 入力フィールドにフォーカスがある場合は無視（コマンドパレット以外）
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        // Cmd/Ctrl + K は常に動作
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          setCommandPaletteOpen(true);
        }
        return;
      }

      // モーダルが開いている場合は無視
      if (helpOpen || commandPaletteOpen) {
        return;
      }

      // Cmd/Ctrl + K: コマンドパレットを開く
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen(true);
        return;
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
  }, [router, setTheme, resolvedTheme, helpOpen, commandPaletteOpen]);

  return (
    <>
      <KeyboardShortcutsHelp open={helpOpen} onOpenChange={setHelpOpen} />
      <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
    </>
  );
}
