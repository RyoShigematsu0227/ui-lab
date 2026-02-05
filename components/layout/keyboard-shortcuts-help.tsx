"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface KeyboardShortcutsHelpProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const shortcuts = [
  { keys: ["⌘", "K"], description: "コマンドパレットを開く" },
  { keys: ["⌘", "D"], description: "ダークモード切替" },
  { keys: ["G", "H"], description: "ホームに移動" },
  { keys: ["G", "F"], description: "お気に入りに移動" },
  { keys: ["G", "S"], description: "サイト事例に移動" },
  { keys: ["G", "A"], description: "Aboutに移動" },
  { keys: ["?"], description: "このヘルプを表示" },
];

export function KeyboardShortcutsHelp({
  open,
  onOpenChange,
}: KeyboardShortcutsHelpProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>キーボードショートカット</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {shortcuts.map((shortcut, index) => (
            <div
              key={index}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-muted-foreground">{shortcut.description}</span>
              <div className="flex gap-1">
                {shortcut.keys.map((key, keyIndex) => (
                  <kbd
                    key={keyIndex}
                    className="rounded border border-border bg-muted px-2 py-1 font-mono text-xs"
                  >
                    {key}
                  </kbd>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          ※ Windowsの場合は ⌘ の代わりに Ctrl を使用
        </p>
      </DialogContent>
    </Dialog>
  );
}
