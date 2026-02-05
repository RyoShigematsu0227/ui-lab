"use client";

import { Share2, Twitter, Link as LinkIcon } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ShareButtonProps {
  title: string;
  slug: string;
}

export function ShareButton({ title, slug }: ShareButtonProps) {
  const getUrl = () => {
    return typeof window !== "undefined"
      ? `${window.location.origin}/sections/${slug}`
      : `/sections/${slug}`;
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(getUrl());
    toast.success("リンクをコピーしました");
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
