import { Metadata } from "next";
import { SitesView } from "@/components/gallery/sites-view";
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
      </div>

      {/* サイト一覧 */}
      <SitesView sites={sites} />
    </div>
  );
}
