import { chromium, Browser } from "playwright";
import fs from "fs";
import path from "path";

// セクションディレクトリから全スラッグを取得
const sectionsDir = path.join(process.cwd(), "content/sections");
const SECTION_SLUGS = fs.readdirSync(sectionsDir)
  .filter(item => {
    const itemPath = path.join(sectionsDir, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .sort();

const BASE_URL = "http://localhost:3000";

// ナビゲーション・フッターはスケルトン付きで表示されるので専用ビューポートを使用
function isSmallComponent(slug: string): boolean {
  return slug.startsWith("navigation-") || slug.startsWith("footer-");
}

async function generateScreenshots() {
  console.log(`スクリーンショット生成を開始... (${SECTION_SLUGS.length}セクション × 2テーマ)\n`);

  const browser: Browser = await chromium.launch();

  // 通常サイズのコンテキスト
  const normalContext = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const normalPage = await normalContext.newPage();

  // ナビ・フッター用のコンテキスト（スケルトン付きで表示）
  const smallContext = await browser.newContext({
    viewport: { width: 1280, height: 480 },
  });
  const smallPage = await smallContext.newPage();

  let success = 0;
  let failed = 0;

  const themes: Array<{ name: string; suffix: string }> = [
    { name: "dark", suffix: "" },
    { name: "light", suffix: "-light" },
  ];

  for (let i = 0; i < SECTION_SLUGS.length; i++) {
    const slug = SECTION_SLUGS[i];
    const isSmall = isSmallComponent(slug);
    const page = isSmall ? smallPage : normalPage;

    for (const theme of themes) {
      try {
        // URLパラメータでテーマを指定
        const url = `${BASE_URL}/preview/${slug}?theme=${theme.name}`;
        const filename = `${slug}${theme.suffix}.png`;

        process.stdout.write(`[${i + 1}/${SECTION_SLUGS.length}] 📸 ${filename}...`);

        await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });

        // レンダリング完了を待つ
        await page.waitForTimeout(500);

        // スクリーンショットを撮影
        await page.screenshot({
          path: `public/screenshots/${filename}`,
          fullPage: false,
        });

        console.log(" ✅");
        success++;
      } catch (error) {
        console.log(` ❌ ${(error as Error).message}`);
        failed++;
      }
    }
  }

  await normalPage.close();
  await smallPage.close();
  await browser.close();
  console.log(`\n✨ 完了！ 成功: ${success}, 失敗: ${failed}`);
}

generateScreenshots().catch(console.error);
