import fs from "fs";
import path from "path";

// セクションコードを実際のファイルから読み込む
export function getSectionCode(slug: string): string {
  try {
    const filePath = path.join(
      process.cwd(),
      "content/sections",
      slug,
      "code.tsx"
    );
    const code = fs.readFileSync(filePath, "utf-8");
    return code;
  } catch {
    return "// コードが見つかりません";
  }
}

// 全セクションのコードを取得（キャッシュ用）
const codeCache = new Map<string, string>();

export function getSectionCodeCached(slug: string): string {
  if (codeCache.has(slug)) {
    return codeCache.get(slug)!;
  }
  const code = getSectionCode(slug);
  codeCache.set(slug, code);
  return code;
}
