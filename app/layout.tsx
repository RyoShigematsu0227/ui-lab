import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FavoritesProvider } from "@/components/layout/favorites-provider";
import { RecentSectionsProvider } from "@/components/layout/recent-sections-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { KeyboardShortcuts } from "@/components/layout/keyboard-shortcuts";
import { Toaster } from "@/components/ui/sonner";
import { WebSiteJsonLd } from "@/components/seo/json-ld";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UI Lab - モダンUIセクションギャラリー",
    template: "%s | UI Lab",
  },
  description:
    "AIが生成するモダンUIセクションのギャラリー。ヒーロー、料金テーブル、CTA等のUIコンポーネントを閲覧・コピーできます。Next.js + Tailwind CSSのコードを無料で提供。",
  keywords: [
    "UI",
    "UIデザイン",
    "コンポーネント",
    "React",
    "Next.js",
    "Tailwind CSS",
    "ヒーロー",
    "ランディングページ",
    "Webデザイン",
  ],
  authors: [{ name: "UI Lab" }],
  creator: "UI Lab",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "UI Lab",
    title: "UI Lab - モダンUIセクションギャラリー",
    description:
      "AIが生成するモダンUIセクションのギャラリー。洗練されたUIコンポーネントを閲覧・コピーできます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Lab - モダンUIセクションギャラリー",
    description:
      "AIが生成するモダンUIセクションのギャラリー。洗練されたUIコンポーネントを閲覧・コピーできます。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <WebSiteJsonLd />
        <ThemeProvider>
          <FavoritesProvider>
            <RecentSectionsProvider>
              <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
              <ScrollToTop />
              <KeyboardShortcuts />
              <Toaster />
            </RecentSectionsProvider>
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
