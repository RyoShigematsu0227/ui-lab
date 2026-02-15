"use client";

import { useState, useSyncExternalStore } from "react";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Highlight } from "prism-react-renderer";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  initialLines?: number;
}

const DEFAULT_VISIBLE_LINES = 25;

export function CodeBlock({
  code,
  language = "tsx",
  initialLines = DEFAULT_VISIBLE_LINES,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const subscribeNoop = () => () => {};
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const { resolvedTheme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  // カスタムテーマ - acsim風のダークテーマ
  const customDarkTheme = {
    plain: {
      color: "#e4e4e7",
      backgroundColor: "#0c0c0c",
    },
    styles: [
      { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#6b7280" } },
      { types: ["punctuation"], style: { color: "#71717a" } },
      {
        types: ["property", "tag", "boolean", "number", "constant", "symbol"],
        style: { color: "#93c5fd" },
      },
      {
        types: ["selector", "attr-name", "string", "char", "builtin"],
        style: { color: "#86efac" },
      },
      { types: ["operator", "entity", "url"], style: { color: "#fcd34d" } },
      { types: ["atrule", "attr-value", "keyword"], style: { color: "#c4b5fd" } },
      { types: ["function", "class-name"], style: { color: "#7dd3fc" } },
      { types: ["regex", "important", "variable"], style: { color: "#fca5a5" } },
    ],
  };

  const customLightTheme = {
    plain: {
      color: "#27272a",
      backgroundColor: "#fafafa",
    },
    styles: [
      { types: ["comment", "prolog", "doctype", "cdata"], style: { color: "#a1a1aa" } },
      { types: ["punctuation"], style: { color: "#71717a" } },
      {
        types: ["property", "tag", "boolean", "number", "constant", "symbol"],
        style: { color: "#2563eb" },
      },
      {
        types: ["selector", "attr-name", "string", "char", "builtin"],
        style: { color: "#16a34a" },
      },
      { types: ["operator", "entity", "url"], style: { color: "#ca8a04" } },
      { types: ["atrule", "attr-value", "keyword"], style: { color: "#7c3aed" } },
      { types: ["function", "class-name"], style: { color: "#0891b2" } },
      { types: ["regex", "important", "variable"], style: { color: "#dc2626" } },
    ],
  };

  const theme = mounted && resolvedTheme === "light" ? customLightTheme : customDarkTheme;

  const trimmedCode = code.trim();
  const totalLines = trimmedCode.split("\n").length;
  const shouldCollapse = totalLines > initialLines;

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden border border-border/30",
        mounted && resolvedTheme === "light" ? "bg-[#fafafa]" : "bg-[#0c0c0c]"
      )}
    >
      {/* ヘッダー - ミニマルデザイン */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/20">
        <div className="flex items-center gap-3">
          {/* ウィンドウコントロール風 */}
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
          </div>
          <span className="text-[10px] tracking-wider uppercase text-muted-foreground">
            {language}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-muted-foreground/60">{totalLines} lines</span>
          <button
            onClick={handleCopy}
            className={cn(
              "p-2 rounded-md transition-all duration-200",
              "hover:bg-muted text-muted-foreground hover:text-foreground",
              copied && "text-green-500 hover:text-green-500"
            )}
            aria-label="Copy code"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* コード本体 */}
      <div className="relative">
        <Highlight theme={theme} code={trimmedCode} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                className,
                "overflow-x-auto p-4 text-[13px] leading-6 transition-all duration-300",
                shouldCollapse && !isExpanded && "max-h-[600px] overflow-hidden"
              )}
              style={{ ...style, margin: 0 }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  <span className="table-cell pr-6 select-none text-right text-muted-foreground/40 w-12">
                    {i + 1}
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {/* 折りたたみ時のフェードアウト */}
        {shouldCollapse && !isExpanded && (
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-32 pointer-events-none",
              mounted && resolvedTheme === "light"
                ? "bg-gradient-to-t from-[#fafafa] to-transparent"
                : "bg-gradient-to-t from-[#0c0c0c] to-transparent"
            )}
          />
        )}
      </div>

      {/* 展開/折りたたみボタン */}
      {shouldCollapse && (
        <div className="border-t border-border/20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 py-3 text-[11px] tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                Collapse
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                Show all {totalLines} lines
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
