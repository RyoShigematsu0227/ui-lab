import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSites, getSiteBySlug } from "@/lib/supabase";

interface SitePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const sites = await getSites();
  return sites.map((site) => ({
    slug: site.slug,
  }));
}

export async function generateMetadata({ params }: SitePageProps) {
  const { slug } = await params;
  const site = await getSiteBySlug(slug);

  if (!site) {
    return { title: "サイトが見つかりません" };
  }

  return {
    title: `${site.title} | UI Lab`,
    description: site.description,
  };
}

export default async function SitePage({ params }: SitePageProps) {
  const { slug } = await params;
  const site = await getSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  // 関連サイト（他のサイト、最大3件）
  const allSites = await getSites();
  const relatedSites = allSites.filter((s) => s.id !== site.id).slice(0, 3);

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-8">
      {/* 戻るリンク */}
      <Link href="/sites">
        <Button variant="ghost" size="sm" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" />
          サイト事例一覧に戻る
        </Button>
      </Link>

      {/* メインコンテンツ */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* スクリーンショット */}
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="aspect-[16/10] bg-muted">
              {/* プレースホルダー */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="text-center">
                  <p className="text-4xl font-bold text-muted-foreground/50">
                    {site.title}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    スクリーンショット（実装予定）
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* サイト情報 */}
        <div>
          <h1 className="mb-2 text-2xl font-bold">{site.title}</h1>

          {/* URL */}
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            {site.url}
            <ExternalLink className="h-3 w-3" />
          </a>

          {/* 説明 */}
          <p className="mb-6 text-muted-foreground">{site.description}</p>

          {/* タグ */}
          <div className="mb-6">
            <h2 className="mb-2 text-sm font-semibold">タグ</h2>
            <div className="flex flex-wrap gap-2">
              {site.tags.map((tag) => (
                <Link key={tag.id} href={`/tags/${tag.slug}`}>
                  <Badge variant="outline">{tag.name}</Badge>
                </Link>
              ))}
            </div>
          </div>

          {/* アクション */}
          <a href={site.url} target="_blank" rel="noopener noreferrer">
            <Button className="w-full gap-2">
              <ExternalLink className="h-4 w-4" />
              サイトを開く
            </Button>
          </a>
        </div>
      </div>

      {/* 関連サイト */}
      {relatedSites.length > 0 && (
        <div className="mt-12">
          <h2 className="mb-6 text-xl font-semibold">他のサイト事例</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSites.map((relatedSite) => (
              <Link key={relatedSite.id} href={`/sites/${relatedSite.slug}`}>
                <Card className="overflow-hidden transition-all hover:shadow-lg hover:ring-2 hover:ring-primary/20">
                  <div className="aspect-[16/10] bg-muted">
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                      <span className="text-2xl font-bold text-muted-foreground/30">
                        {relatedSite.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{relatedSite.title}</h3>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {relatedSite.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
