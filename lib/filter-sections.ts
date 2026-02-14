import { Section, SortOption } from "@/types";

interface FilterAndSortParams {
  sections: Section[];
  selectedCategory: string | null;
  selectedTags: string[];
  searchQuery: string;
  sortOption: SortOption;
}

export function filterAndSortSections({
  sections,
  selectedCategory,
  selectedTags,
  searchQuery,
  sortOption,
}: FilterAndSortParams): Section[] {
  let result = [...sections];

  // カテゴリフィルター
  if (selectedCategory) {
    result = result.filter(
      (section) => section.category?.slug === selectedCategory
    );
  }

  // タグフィルター（AND条件：選択したすべてのタグを含む）
  if (selectedTags.length > 0) {
    result = result.filter((section) =>
      selectedTags.every((tagSlug) =>
        section.tags.some((tag) => tag.slug === tagSlug)
      )
    );
  }

  // 検索フィルター
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase().trim();
    result = result.filter((section) => {
      if (section.title.toLowerCase().includes(query)) return true;
      if (section.description.toLowerCase().includes(query)) return true;
      if (section.tags.some((tag) => tag.name.toLowerCase().includes(query)))
        return true;
      if (section.category?.name.toLowerCase().includes(query)) return true;
      return false;
    });
  }

  // ソート
  result.sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "oldest":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "title-asc":
        return a.title.localeCompare(b.title, "ja");
      case "title-desc":
        return b.title.localeCompare(a.title, "ja");
      default:
        return 0;
    }
  });

  return result;
}
