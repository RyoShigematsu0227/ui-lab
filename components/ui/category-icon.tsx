import {
  Layout,
  Menu,
  Sparkles,
  CreditCard,
  MessageSquare,
  MousePointerClick,
  PanelBottom,
  HelpCircle,
  Users,
  BarChart3,
  Building2,
  Mail,
  FileText,
  Image,
  Newspaper,
  LayoutGrid,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// アイコン名からコンポーネントへのマッピング
const iconMap: Record<string, LucideIcon> = {
  Layout,
  Menu,
  Sparkles,
  CreditCard,
  MessageSquare,
  MousePointerClick,
  PanelBottom,
  HelpCircle,
  Users,
  BarChart3,
  Building2,
  Mail,
  FileText,
  Image,
  Newspaper,
  LayoutGrid,
};

interface CategoryIconProps {
  name: string;
  className?: string;
}

export function CategoryIcon({ name, className }: CategoryIconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // フォールバック: LayoutGrid アイコンを使用
    return <LayoutGrid className={cn("h-4 w-4", className)} />;
  }

  return <IconComponent className={cn("h-4 w-4", className)} />;
}

// アイコンマップをエクスポート（他のコンポーネントで再利用可能）
export { iconMap };
