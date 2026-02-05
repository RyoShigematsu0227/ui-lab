import { Metadata } from "next";
import { SitesView } from "@/components/gallery/sites-view";
import { getSites } from "@/lib/supabase";
import { Globe } from "lucide-react";

// ISR: 1時間ごとに再生成
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "サイト事例 | UI Lab",
  description: "洗練されたWebサイトのデザイン事例集",
};

export default async function SitesPage() {
  const sites = await getSites();

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="border-b border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                サイト事例
              </h1>
              <p className="mt-2 max-w-xl text-lg text-muted-foreground">
                洗練されたWebサイトのデザイン事例を紹介。
                インスピレーションの参考にどうぞ。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* サイト一覧 */}
      <section className="container mx-auto max-w-screen-2xl px-4 py-12 md:py-16">
        <SitesView sites={sites} />
      </section>
    </div>
  );
}
