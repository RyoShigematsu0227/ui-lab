import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Site } from "@/types";

interface SiteCardProps {
  site: Site;
  priority?: boolean;
}

// 7日以内に作成されたサイトは新着とみなす
function isNew(createdAt: string): boolean {
  const created = new Date(createdAt);
  const now = new Date();
  const diffDays = (now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays <= 7;
}

export function SiteCard({ site, priority = false }: SiteCardProps) {
  const isNewSite = isNew(site.createdAt);

  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:ring-2 hover:ring-primary/20">
      <Link href={`/sites/${site.slug}`}>
        {/* サムネイル */}
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {site.screenshotUrl ? (
            <Image
              src={site.screenshotUrl}
              alt={site.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            /* プレースホルダー */
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <span className="text-4xl font-bold text-muted-foreground/30">
                {site.title.charAt(0)}
              </span>
            </div>
          )}
          {/* NEWバッジ */}
          {isNewSite && (
            <div className="absolute left-2 top-2 z-10">
              <Badge className="bg-green-500 text-white hover:bg-green-500">
                NEW
              </Badge>
            </div>
          )}
          {/* ホバーオーバーレイ */}
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="text-sm font-medium text-white">詳細を見る</span>
          </div>
        </div>
      </Link>

      <CardContent className="p-4">
        {/* タイトル + 外部リンク */}
        <div className="mb-2 flex items-start justify-between gap-2">
          <Link href={`/sites/${site.slug}`}>
            <h3 className="line-clamp-1 font-semibold leading-tight hover:underline">
              {site.title}
            </h3>
          </Link>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="sr-only">サイトを開く</span>
          </a>
        </div>

        {/* 説明 */}
        <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">
          {site.description}
        </p>

        {/* タグ */}
        <div className="flex flex-wrap gap-1">
          {site.tags.slice(0, 3).map((tag) => (
            <Badge key={tag.id} variant="secondary" className="text-xs">
              {tag.name}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
