import { chromium } from "playwright";
import fs from "fs";
import path from "path";

// --all フラグで全サイトを対象にする（デフォルトは新規のみ）
const forceAll = process.argv.includes("--all");

// content/sites/ から全サイト情報を読み込み
const sitesDir = path.join(process.cwd(), "content/sites");
const screenshotsDir = path.join(process.cwd(), "public/screenshots/sites");

interface SiteData {
  slug: string;
  url: string;
  title: string;
}

const ALL_SITES: SiteData[] = fs
  .readdirSync(sitesDir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(sitesDir, file), "utf-8"));
    // screenshotUrl からファイル名を推定（/screenshots/sites/xxx.png → xxx）
    const screenshotFile = data.screenshotUrl
      ?.replace("/screenshots/sites/", "")
      .replace(".png", "");
    return {
      slug: screenshotFile || file.replace(".json", ""),
      url: data.url,
      title: data.title,
    };
  })
  .sort((a, b) => a.slug.localeCompare(b.slug));

// 新規のみ: スクリーンショットが存在しないものだけ対象
const SITES = forceAll
  ? ALL_SITES
  : ALL_SITES.filter((site) => !fs.existsSync(path.join(screenshotsDir, `${site.slug}.png`)));

async function generateScreenshots() {
  if (SITES.length === 0) {
    console.log(
      "新しいサイトはありません。スキップします。\n（全サイト対象: --all フラグを付けてください）"
    );
    return;
  }

  console.log(
    `サイトスクリーンショット生成を開始... (${SITES.length}サイト)${forceAll ? "" : "（新規のみ）"}\n`
  );

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  let success = 0;
  let failed = 0;

  for (let i = 0; i < SITES.length; i++) {
    const site = SITES[i];
    const page = await context.newPage();
    const outputPath = path.join(screenshotsDir, `${site.slug}.png`);

    try {
      process.stdout.write(`[${i + 1}/${SITES.length}] 📸 ${site.title} (${site.slug})...`);

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

      console.log(" ✅");
      success++;
    } catch (error) {
      console.log(` ❌ ${(error as Error).message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\n✨ 完了！ 成功: ${success}, 失敗: ${failed}`);
}

generateScreenshots().catch(console.error);
