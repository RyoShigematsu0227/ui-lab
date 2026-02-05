"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRecentSections } from "@/hooks/use-recent-sections";

interface RecentSectionsContextType {
  recentSlugs: string[];
  isLoaded: boolean;
  addRecentSection: (slug: string) => void;
  clearRecentSections: () => void;
}

const RecentSectionsContext = createContext<RecentSectionsContextType | null>(null);

export function RecentSectionsProvider({ children }: { children: ReactNode }) {
  const recentSections = useRecentSections();

  return (
    <RecentSectionsContext.Provider value={recentSections}>
      {children}
    </RecentSectionsContext.Provider>
  );
}

export function useRecentSectionsContext() {
  const context = useContext(RecentSectionsContext);
  if (!context) {
    throw new Error("useRecentSectionsContext must be used within RecentSectionsProvider");
  }
  return context;
}
