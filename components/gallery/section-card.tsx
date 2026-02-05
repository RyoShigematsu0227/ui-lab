import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Section } from "@/types";

interface SectionCardProps {
  section: Section;
}

export function SectionCard({ section }: SectionCardProps) {
  return (
    <Link href={`/sections/${section.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:ring-2 hover:ring-primary/20">
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {/* プレースホルダー画像 */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
            <span className="text-4xl font-bold text-muted-foreground/30">
              {section.title.charAt(0)}
            </span>
          </div>
          {/* ホバーオーバーレイ */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-sm font-medium text-white">詳細を見る</span>
          </div>
        </div>

        <CardContent className="p-4">
          {/* カテゴリ */}
          {section.category && (
            <p className="mb-1 text-xs text-muted-foreground">
              {section.category.name}
            </p>
          )}

          {/* タイトル */}
          <h3 className="mb-2 line-clamp-1 font-semibold leading-tight">
            {section.title}
          </h3>

          {/* 説明 */}
          <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
            {section.description}
          </p>

          {/* タグ */}
          <div className="flex flex-wrap gap-1">
            {section.tags.slice(0, 3).map((tag) => (
              <Badge key={tag.id} variant="secondary" className="text-xs">
                {tag.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
