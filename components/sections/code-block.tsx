"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { resolvedTheme } = useTheme();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("コードをコピーしました");
    setTimeout(() => setCopied(false), 2000);
  };

  // ダークモードに応じてテーマを切り替え
  const theme = resolvedTheme === "dark" ? themes.nightOwl : themes.nightOwlLight;

  return (
    <div className="relative rounded-lg border border-border overflow-hidden">
      {/* ヘッダー */}
      <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2">
        <span className="text-xs text-muted-foreground">{language}</span>
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
      <Highlight theme={theme} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto p-4 text-sm`}
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
    </div>
  );
}
