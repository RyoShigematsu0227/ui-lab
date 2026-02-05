"use client";

import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  initialLines?: number;
}

const DEFAULT_VISIBLE_LINES = 20;

export function CodeBlock({ code, language = "tsx", initialLines = DEFAULT_VISIBLE_LINES }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("コードをコピーしました");
    setTimeout(() => setCopied(false), 2000);
  };

  // ダークモードに応じてテーマを切り替え
  const theme = resolvedTheme === "dark" ? themes.nightOwl : themes.nightOwlLight;

  const trimmedCode = code.trim();
  const totalLines = trimmedCode.split("\n").length;
  const shouldCollapse = totalLines > initialLines;

  return (
    <div className="relative rounded-lg border border-border overflow-hidden">
      {/* ヘッダー */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <span className="text-xs text-muted-foreground">
          {language}
          <span className="ml-2 text-muted-foreground/60">({totalLines} lines)</span>
        </span>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 gap-2"
          onClick={handleCopy}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span className="text-xs">コピー済み</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="text-xs">コピー</span>
            </>
          )}
        </Button>
      </div>

      {/* コード（シンタックスハイライト） */}
      <div className="relative">
        <Highlight theme={theme} code={trimmedCode} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={cn(
                className,
                "overflow-x-auto p-4 text-sm transition-all duration-300",
                shouldCollapse && !isExpanded && "max-h-[480px] overflow-hidden"
              )}
              style={{ ...style, margin: 0 }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="mr-4 inline-block w-8 select-none text-right text-muted-foreground/50">
                    {i + 1}
                  </span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

        {/* 折りたたみ時のフェードアウト */}
        {shouldCollapse && !isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted to-transparent pointer-events-none" />
        )}
      </div>

      {/* 展開/折りたたみボタン */}
      {shouldCollapse && (
        <div className="border-t border-border bg-muted/50">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                折りたたむ
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                すべて表示（{totalLines} 行）
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
