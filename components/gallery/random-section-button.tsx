"use client";

import { useRouter } from "next/navigation";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MOCK_SECTIONS } from "@/data/mock-sections";

export function RandomSectionButton() {
  const router = useRouter();

  const handleRandomSection = () => {
    const randomIndex = Math.floor(Math.random() * MOCK_SECTIONS.length);
    const randomSection = MOCK_SECTIONS[randomIndex];
    router.push(`/sections/${randomSection.slug}`);
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
