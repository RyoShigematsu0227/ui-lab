import { chromium } from "playwright";
import fs from "fs";
import path from "path";

// 新規セクション（スクリーンショットがまだないもの）を検証する
// エラーが発生したセクションは isPublished: false に設定して非公開にする

const sectionsDir = path.join(process.cwd(), "content/sections");
const screenshotsDir = path.join(process.cwd(), "public/screenshots");
const BASE_URL = "http://localhost:3000";

// --all フラグで全セクションを対象にする（デフォルトは新規のみ）
const forceAll = process.argv.includes("--all");

const ALL_SLUGS = fs
  .readdirSync(sectionsDir)
  .filter((item) => {
    const itemPath = path.join(sectionsDir, item);
    return fs.statSync(itemPath).isDirectory();
  })
  .sort();

const TARGET_SLUGS = forceAll
  ? ALL_SLUGS
  : ALL_SLUGS.filter((slug) => !fs.existsSync(path.join(screenshotsDir, `${slug}.png`)));

async function validateSections() {
  if (TARGET_SLUGS.length === 0) {
    console.log("検証対象のセクションはありません。");
    return;
  }

  console.log(
    `セクション検証を開始... (${TARGET_SLUGS.length}件)${forceAll ? "" : "（新規のみ）"}\n`
  );

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  const page = await context.newPage();

  const errors: string[] = [];
  let passed = 0;

  for (let i = 0; i < TARGET_SLUGS.length; i++) {
    const slug = TARGET_SLUGS[i];
    process.stdout.write(`[${i + 1}/${TARGET_SLUGS.length}] ${slug}...`);

    try {
      // ページ内のJSエラーを検出
      let pageError: Error | null = null;
      page.on("pageerror", (err) => {
        pageError = err;
      });

      const response = await page.goto(`${BASE_URL}/preview/${slug}`, {
        waitUntil: "networkidle",
        timeout: 30000,
      });

      // HTTP エラーチェック
      if (!response || response.status() >= 400) {
        throw new Error(`HTTP ${response?.status()}`);
      }

      // ページ内エラーチェック
      if (pageError) {
        throw pageError;
      }

      // エラーUIが表示されていないか確認
      const hasErrorUI = await page.evaluate(() => {
        const text = document.body.innerText;
        return (
          text.includes("エラーが発生しました") ||
          text.includes("Application error") ||
          text.includes("Unhandled Runtime Error")
        );
      });

      if (hasErrorUI) {
        throw new Error("エラーUIが表示されている");
      }

      console.log(" OK");
      passed++;
      page.removeAllListeners("pageerror");
    } catch (error) {
      const msg = (error as Error).message;
      console.log(` FAIL: ${msg}`);
      errors.push(slug);
      page.removeAllListeners("pageerror");

      // metadata.json の isPublished を false に設定
      const metadataPath = path.join(sectionsDir, slug, "metadata.json");
      try {
        const raw = fs.readFileSync(metadataPath, "utf-8");
        const metadata = JSON.parse(raw);
        metadata.isPublished = false;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + "\n");
        console.log(`  → ${slug} を非公開に設定`);
      } catch {
        console.log(`  → metadata.json の更新に失敗`);
      }
    }
  }

  await browser.close();

  console.log(`\n検証完了: ${passed} 成功, ${errors.length} 失敗`);
  if (errors.length > 0) {
    console.log(`非公開にしたセクション: ${errors.join(", ")}`);
  }
}

validateSections().catch(console.error);
