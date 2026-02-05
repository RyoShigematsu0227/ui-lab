"use client";

import { ShareButton } from "@/components/sections/share-button";

interface SiteShareButtonProps {
  title: string;
  slug: string;
  description: string;
}

export function SiteShareButton({ title, slug, description }: SiteShareButtonProps) {
  const url = typeof window !== "undefined"
    ? `${window.location.origin}/sites/${slug}`
    : `/sites/${slug}`;

  return (
    <ShareButton
      title={title}
      url={url}
      description={description}
    />
  );
}
