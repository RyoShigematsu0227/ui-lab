"use client";

import { useEffect } from "react";
import { useRecentSectionsContext } from "@/components/layout/recent-sections-provider";

interface SectionViewTrackerProps {
  slug: string;
}

export function SectionViewTracker({ slug }: SectionViewTrackerProps) {
  const { addRecentSection } = useRecentSectionsContext();

  useEffect(() => {
    addRecentSection(slug);
  }, [slug, addRecentSection]);

  return null;
}
