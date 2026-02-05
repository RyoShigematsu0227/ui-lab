import { chromium } from "playwright";

// セクションのスラッグ一覧
const SECTION_SLUGS = [
  "hero-gradient-001",
  "hero-minimal-001",
  "feature-bento-001",
  "pricing-glass-001",
  "testimonial-carousel-001",
  "cta-gradient-001",
  "stats-animated-001",
  "faq-accordion-001",
  "navigation-modern-001",
  "footer-modern-001",
  "team-grid-001",
  "logo-cloud-001",
  "contact-form-001",
  "blog-cards-001",
  "gallery-masonry-001",
  "hero-split-001",
  "newsletter-simple-001",
  "feature-list-001",
  "testimonial-grid-001",
  "pricing-table-001",
  "cta-image-001",
  "footer-minimal-001",
  "stats-icons-001",
  "faq-two-column-001",
  "feature-alternating-001",
  "hero-video-001",
  "cta-minimal-001",
  "navigation-centered-001",
  "team-cards-001",
  "trust-badges-001",
];

const BASE_URL = "http://localhost:3000";

async function generateScreenshots() {
  console.log("スクリーンショット生成を開始...\n");

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();

  for (const slug of SECTION_SLUGS) {
    try {
      const url = `${BASE_URL}/preview/${slug}`;

      process.stdout.write(`📸 ${slug}...`);

      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });

      // レンダリング完了を待つ
      await page.waitForTimeout(1000);

      // スクリーンショットを撮影
      await page.screenshot({
        path: `public/screenshots/${slug}.png`,
        fullPage: false,
      });

      console.log(" ✅");
    } catch (error) {
      console.log(` ❌ ${(error as Error).message}`);
    }
  }

  await page.close();
  await browser.close();
  console.log("\n✨ スクリーンショット生成完了！");
}

generateScreenshots().catch(console.error);
