import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs";

// fsモジュールをモック
vi.mock("fs");

// テスト用metadata.jsonデータ
function createMetadata(overrides: Record<string, unknown> = {}) {
  return {
    title: "テストセクション",
    description: "テスト用の説明文",
    category: "hero",
    tags: ["gradient", "animation"],
    screenshotUrl: "/screenshots/test-section.png",
    isPublished: true,
    generatedBy: "ai",
    createdAt: "2025-06-01T00:00:00Z",
    updatedAt: "2025-06-01T00:00:00Z",
    ...overrides,
  };
}

// readdirSyncのモックヘルパー
function mockReaddir(names: string[]) {
  const dirents = names.map((name) => ({
    name,
    isDirectory: () => true,
    isFile: () => false,
    isBlockDevice: () => false,
    isCharacterDevice: () => false,
    isFIFO: () => false,
    isSocket: () => false,
    isSymbolicLink: () => false,
    parentPath: "",
    path: "",
  }));
  vi.mocked(fs.readdirSync).mockReturnValue(
    dirents as unknown as ReturnType<typeof fs.readdirSync>
  );
}

// モジュールキャッシュをリセットしてlib/content.tsを再読み込み
async function loadContentModule() {
  vi.resetModules();
  return await import("@/lib/content");
}

describe("lib/content.ts", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe("getSections", () => {
    it("metadata.jsonを正しくパースしてSection型に変換できること", async () => {
      const meta = createMetadata();

      mockReaddir(["hero-test-001"]);
      vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(meta));

      const { getSections } = await loadContentModule();
      const sections = await getSections();

      expect(sections).toHaveLength(1);
      const section = sections[0];
      expect(section.slug).toBe("hero-test-001");
      expect(section.title).toBe("テストセクション");
      expect(section.description).toBe("テスト用の説明文");
      expect(section.category?.slug).toBe("hero");
      expect(section.tags).toHaveLength(2);
      expect(section.tags[0].slug).toBe("gradient");
      expect(section.tags[1].slug).toBe("animation");
      expect(section.codePath).toBe("content/sections/hero-test-001/code.tsx");
      expect(section.screenshotUrl).toBe("/screenshots/test-section.png");
      expect(section.isPublished).toBe(true);
      expect(section.generatedBy).toBe("ai");
      expect(section.createdAt).toBe("2025-06-01T00:00:00Z");
    });

    it("isPublished: false のセクションが除外されること", async () => {
      const published = createMetadata({ title: "公開" });
      const unpublished = createMetadata({
        title: "非公開",
        isPublished: false,
      });

      mockReaddir(["section-a", "section-b"]);

      vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
        const p = filePath.toString();
        if (p.includes("section-a")) return JSON.stringify(published);
        if (p.includes("section-b")) return JSON.stringify(unpublished);
        throw new Error("unexpected path");
      });

      const { getSections } = await loadContentModule();
      const sections = await getSections();

      expect(sections).toHaveLength(1);
      expect(sections[0].title).toBe("公開");
    });

    it("createdAtの降順でソートされること", async () => {
      const oldest = createMetadata({
        title: "古い",
        createdAt: "2025-01-01T00:00:00Z",
      });
      const middle = createMetadata({
        title: "中間",
        createdAt: "2025-06-01T00:00:00Z",
      });
      const newest = createMetadata({
        title: "新しい",
        createdAt: "2025-12-01T00:00:00Z",
      });

      mockReaddir(["section-old", "section-mid", "section-new"]);

      vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
        const p = filePath.toString();
        if (p.includes("section-old")) return JSON.stringify(oldest);
        if (p.includes("section-mid")) return JSON.stringify(middle);
        if (p.includes("section-new")) return JSON.stringify(newest);
        throw new Error("unexpected path");
      });

      const { getSections } = await loadContentModule();
      const sections = await getSections();

      expect(sections).toHaveLength(3);
      expect(sections[0].title).toBe("新しい");
      expect(sections[1].title).toBe("中間");
      expect(sections[2].title).toBe("古い");
    });

    it("metadata.jsonが不正なディレクトリはスキップされること", async () => {
      const validMeta = createMetadata({ title: "正常" });

      mockReaddir(["valid-section", "broken-section"]);

      vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
        const p = filePath.toString();
        if (p.includes("valid-section")) return JSON.stringify(validMeta);
        if (p.includes("broken-section")) throw new Error("ENOENT");
        throw new Error("unexpected path");
      });

      const { getSections } = await loadContentModule();
      const sections = await getSections();

      expect(sections).toHaveLength(1);
      expect(sections[0].title).toBe("正常");
    });
  });

  describe("getSectionBySlug", () => {
    it("存在するslugで正しいセクションが返ること", async () => {
      const meta = createMetadata({ title: "ターゲット" });

      vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(meta));

      const { getSectionBySlug } = await loadContentModule();
      const section = await getSectionBySlug("hero-target-001");

      expect(section).toBeDefined();
      expect(section?.title).toBe("ターゲット");
      expect(section?.slug).toBe("hero-target-001");
    });

    it("存在しないslugでundefinedが返ること", async () => {
      vi.mocked(fs.readFileSync).mockImplementation(() => {
        throw new Error("ENOENT");
      });

      const { getSectionBySlug } = await loadContentModule();
      const section = await getSectionBySlug("nonexistent-slug");

      expect(section).toBeUndefined();
    });
  });

  describe("getSectionsByCategory", () => {
    it("指定カテゴリのセクションのみ返ること", async () => {
      const heroMeta = createMetadata({
        title: "ヒーロー",
        category: "hero",
      });
      const pricingMeta = createMetadata({
        title: "プライシング",
        category: "pricing",
      });

      mockReaddir(["hero-001", "pricing-001"]);

      vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
        const p = filePath.toString();
        if (p.includes("hero-001")) return JSON.stringify(heroMeta);
        if (p.includes("pricing-001")) return JSON.stringify(pricingMeta);
        throw new Error("unexpected path");
      });

      const { getSectionsByCategory } = await loadContentModule();
      const sections = await getSectionsByCategory("hero");

      expect(sections).toHaveLength(1);
      expect(sections[0].title).toBe("ヒーロー");
      expect(sections[0].category?.slug).toBe("hero");
    });
  });

  describe("getSectionsByTag", () => {
    it("指定タグを含むセクションのみ返ること", async () => {
      const withGradient = createMetadata({
        title: "グラデーション付き",
        tags: ["gradient", "minimal"],
      });
      const withoutGradient = createMetadata({
        title: "グラデーションなし",
        tags: ["animation"],
      });

      mockReaddir(["section-a", "section-b"]);

      vi.mocked(fs.readFileSync).mockImplementation((filePath) => {
        const p = filePath.toString();
        if (p.includes("section-a")) return JSON.stringify(withGradient);
        if (p.includes("section-b")) return JSON.stringify(withoutGradient);
        throw new Error("unexpected path");
      });

      const { getSectionsByTag } = await loadContentModule();
      const sections = await getSectionsByTag("gradient");

      expect(sections).toHaveLength(1);
      expect(sections[0].title).toBe("グラデーション付き");
      expect(sections[0].tags.some((t) => t.slug === "gradient")).toBe(true);
    });
  });
});
