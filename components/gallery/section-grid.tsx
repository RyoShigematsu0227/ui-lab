import { Section } from "@/types";
import { SectionCard } from "./section-card";

interface SectionGridProps {
  sections: Section[];
}

export function SectionGrid({ sections }: SectionGridProps) {
  if (sections.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border">
        <p className="text-muted-foreground">セクションがありません</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sections.map((section) => (
        <SectionCard key={section.id} section={section} />
      ))}
    </div>
  );
}
