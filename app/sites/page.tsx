import { Metadata } from "next";
import { SitesView } from "@/components/gallery/sites-view";
import { getSites } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sites",
  description: "洗練されたWebサイトのデザイン事例集",
};

export default async function SitesPage() {
  const sites = await getSites();

  return (
    <div className="min-h-screen">
      {/* ヘッダー */}
      <section className="relative min-h-[40vh] flex items-center justify-center">
        {/* 背景 */}
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 container mx-auto max-w-screen-md px-6 sm:px-8 md:px-12 text-center">
          <span className="heading-section text-muted-foreground tracking-widest-custom">
            Inspiration
          </span>
          <h1 className="mt-6 heading-display text-4xl sm:text-5xl">Site Examples</h1>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
            洗練されたWebサイトのデザイン事例。 インスピレーションの参考にどうぞ。
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* サイト一覧 */}
      <section className="container mx-auto max-w-screen-2xl px-6 sm:px-8 md:px-12 py-16 md:py-24">
        <SitesView sites={sites} />
      </section>
    </div>
  );
}
