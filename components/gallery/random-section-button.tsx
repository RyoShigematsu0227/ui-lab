"use client";

import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RandomSectionButtonProps {
  slugs: string[];
}

export function RandomSectionButton({ slugs }: RandomSectionButtonProps) {
  const router = useRouter();

  const handleRandomSection = () => {
    if (slugs.length === 0) return;
    const randomIndex = Math.floor(Math.random() * slugs.length);
    router.push(`/sections/${slugs[randomIndex]}`);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="gap-2"
      onClick={handleRandomSection}
      aria-label="ランダムなセクションを表示"
    >
      <Shuffle className="h-4 w-4" aria-hidden="true" />
      ランダム
    </Button>
  );
}
