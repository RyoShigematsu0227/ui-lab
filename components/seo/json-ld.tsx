import { Section, Category } from "@/types";

// JSON-LDスクリプトを出力するコンポーネント
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// WebSiteスキーマ（トップページ用）
export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "UI Lab",
    description: "モダンUIセクションのギャラリーサイト。AIが生成したオリジナルUIコンポーネントを毎週追加。",
    url: "https://ui-lab.jp",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ui-lab.jp/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLd data={data} />;
}

// BreadcrumbListスキーマ
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

// セクション詳細ページ用スキーマ
export function SectionJsonLd({ section, url }: { section: Section; url: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: section.description,
    url,
    datePublished: section.createdAt,
    dateModified: section.updatedAt,
    author: {
      "@type": "Organization",
      name: "UI Lab",
    },
    publisher: {
      "@type": "Organization",
      name: "UI Lab",
      logo: {
        "@type": "ImageObject",
        url: "https://ui-lab.jp/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: section.tags.map((tag) => tag.name).join(", "),
    articleSection: section.category?.name,
  };

  return <JsonLd data={data} />;
}

// カテゴリページ用スキーマ
export function CategoryJsonLd({
  category,
  sections,
  url,
}: {
  category: Category;
  sections: Section[];
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} - UI Lab`,
    description: category.description,
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: sections.length,
      itemListElement: sections.slice(0, 10).map((section, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://ui-lab.jp/sections/${section.slug}`,
        name: section.title,
      })),
    },
  };

  return <JsonLd data={data} />;
}
