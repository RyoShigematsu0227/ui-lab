import { chromium } from "playwright";
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

async function generateScreenshots() {
  console.log(`スクリーンショット生成を開始... (${SECTION_SLUGS.length}セクション)\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();
  let success = 0;
  let failed = 0;

  for (let i = 0; i < SECTION_SLUGS.length; i++) {
    const slug = SECTION_SLUGS[i];
    try {
      const url = `${BASE_URL}/preview/${slug}`;

      process.stdout.write(`[${i + 1}/${SECTION_SLUGS.length}] 📸 ${slug}...`);

      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

      // レンダリング完了を待つ
      await page.waitForTimeout(800);

      // スクリーンショットを撮影
      await page.screenshot({
        path: `public/screenshots/${slug}.png`,
        fullPage: false,
      });

      console.log(" ✅");
      success++;
    } catch (error) {
      console.log(` ❌ ${(error as Error).message}`);
      failed++;
    }
  }

  await page.close();
  await browser.close();
  console.log(`\n✨ 完了！ 成功: ${success}, 失敗: ${failed}`);
}

generateScreenshots().catch(console.error);
