import { Metadata } from "next";
import { SiteCard } from "@/components/gallery/site-card";
import { getSites } from "@/lib/supabase";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "サイト事例 | UI Lab",
  description: "洗練されたWebサイトのデザイン事例集",
};

export default async function SitesPage() {
  const sites = await getSites();

  return (
    <div className="container mx-auto max-w-screen-2xl px-4 py-8">
      {/* ヘッダー */}
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold">サイト事例</h1>
        <p className="text-lg text-muted-foreground">
          洗練されたWebサイトのデザイン事例を紹介します。
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          {sites.length} 件のサイト
        </p>
      </div>

      {/* サイト一覧 */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>
    </div>
  );
}
