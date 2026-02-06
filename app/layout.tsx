import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { FavoritesProvider } from "@/components/layout/favorites-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { KeyboardShortcuts } from "@/components/layout/keyboard-shortcuts";
import { Toaster } from "@/components/ui/sonner";
import { WebSiteJsonLd } from "@/components/seo/json-ld";
import { getSections } from "@/lib/content";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://ui-lab.jp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "UI Lab - Modern UI Components Gallery",
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
    title: "UI Lab - Modern UI Components Gallery",
    description:
      "AIが生成するモダンUIセクションのギャラリー。洗練されたUIコンポーネントを閲覧・コピーできます。",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Lab - Modern UI Components Gallery",
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
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sections = await getSections();
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YZKMTT5P97"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZKMTT5P97');
          `}
        </Script>
      </head>
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        <WebSiteJsonLd />
        <ThemeProvider>
          <FavoritesProvider>
            {/* サイドライン装飾 */}
            <div className="fixed top-0 bottom-0 left-6 w-px bg-border/40 dark:bg-border/50 hidden lg:block z-40" />
            <div className="fixed top-0 bottom-0 right-6 w-px bg-border/40 dark:bg-border/50 hidden lg:block z-40" />

            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1 pt-16 md:pt-20">{children}</main>
              <Footer />
            </div>
            <ScrollToTop />
            <KeyboardShortcuts sections={sections.slice(0, 10)} />
            <Toaster />
          </FavoritesProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
