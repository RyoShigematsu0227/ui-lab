"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface CodeDownloadButtonProps {
  code: string;
  filename: string;
}

export function CodeDownloadButton({ code, filename }: CodeDownloadButtonProps) {
  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.tsx`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("ファイルをダウンロードしました");
  };

  return (
    <Button variant="outline" size="sm" className="gap-2" onClick={handleDownload}>
      <Download className="h-4 w-4" />
      ダウンロード
    </Button>
  );
}
