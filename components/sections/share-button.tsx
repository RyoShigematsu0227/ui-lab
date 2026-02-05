"use client";

import { useState, useEffect } from "react";
import { Share2, Twitter, Link as LinkIcon, Smartphone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareButtonProps {
  title: string;
  slug?: string;
  url?: string;
  description?: string;
}

export function ShareButton({ title, slug, url, description }: ShareButtonProps) {
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    // Web Share API が使用可能かチェック
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const getUrl = () => {
    if (url) return url;
    if (slug) {
      return typeof window !== "undefined"
        ? `${window.location.origin}/sections/${slug}`
        : `/sections/${slug}`;
    }
    return typeof window !== "undefined" ? window.location.href : "/";
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: `${title} | UI Lab`,
        text: description || `${title} - UI Lab`,
        url: getUrl(),
      });
    } catch (error) {
      // ユーザーがキャンセルした場合は何もしない
      if ((error as Error).name !== "AbortError") {
        toast.error("共有に失敗しました");
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      toast.success("リンクをコピーしました");
    } catch {
      toast.error("コピーに失敗しました");
    }
  };

  const handleShareTwitter = () => {
    const text = `${title} | UI Lab`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(getUrl())}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          共有
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {canNativeShare && (
          <>
            <DropdownMenuItem onClick={handleNativeShare}>
              <Smartphone className="mr-2 h-4 w-4" />
              アプリで共有
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem onClick={handleCopyLink}>
          <LinkIcon className="mr-2 h-4 w-4" />
          リンクをコピー
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleShareTwitter}>
          <Twitter className="mr-2 h-4 w-4" />
          Xでシェア
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
