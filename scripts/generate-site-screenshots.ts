import { chromium } from "playwright";
import path from "path";

// サイト情報
const SITES = [
  { slug: "linear", url: "https://linear.app" },
  { slug: "vercel", url: "https://vercel.com" },
  { slug: "stripe", url: "https://stripe.com" },
  { slug: "raycast", url: "https://raycast.com" },
  { slug: "arc", url: "https://arc.net" },
  { slug: "framer", url: "https://framer.com" },
];

async function generateScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  const outputDir = path.join(process.cwd(), "public/screenshots/sites");

  console.log("Starting site screenshot generation...\n");

  for (const site of SITES) {
    const page = await context.newPage();
    const outputPath = path.join(outputDir, `${site.slug}.png`);

    try {
      console.log(`📸 Capturing ${site.slug}...`);

      await page.goto(site.url, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      // ページ読み込み後少し待機
      await page.waitForTimeout(2000);

      await page.screenshot({
        path: outputPath,
        type: "png",
      });

      console.log(`   ✓ Saved: ${outputPath}`);
    } catch (error) {
      console.error(`   ✗ Failed: ${site.slug}`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("\n✨ Done!");
}

generateScreenshots().catch(console.error);
