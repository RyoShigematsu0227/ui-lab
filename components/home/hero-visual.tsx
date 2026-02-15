"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// フローティングカードコンポーネント
function FloatingCard({
  className,
  delay = 0,
  duration = 6,
  mouseX,
  mouseY,
  parallaxStrength = 0.02,
  children,
}: {
  className?: string;
  delay?: number;
  duration?: number;
  mouseX: number;
  mouseY: number;
  parallaxStrength?: number;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);

  // マウス位置に基づくパララックス移動
  const parallaxX = (mouseX - 0.5) * 100 * parallaxStrength;
  const parallaxY = (mouseY - 0.5) * 100 * parallaxStrength;

  return (
    <div
      className={cn(
        "absolute rounded-lg border bg-card/90 backdrop-blur-sm shadow-lg",
        "transition-all duration-500 ease-out cursor-pointer",
        "border-border/80 dark:border-border",
        isHovered && "scale-110 z-50 shadow-2xl border-primary/50",
        "animate-float",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        transform: `translate(${parallaxX}px, ${parallaxY}px) ${isHovered ? "scale(1.1) rotateX(-5deg) rotateY(5deg)" : ""}`,
        transformStyle: "preserve-3d",
        boxShadow: isHovered
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(var(--primary-rgb, 100, 100, 255), 0.3)"
          : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ホバー時のグロー */}
      <div
        className={cn(
          "absolute -inset-px rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

// ミニUIプレビューカード
function MiniCard({
  title,
  type,
  isActive,
}: {
  title: string;
  type: "hero" | "pricing" | "feature" | "cta";
  isActive?: boolean;
}) {
  return (
    <div className="p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-2 h-2 rounded-full transition-all duration-300",
            isActive ? "bg-primary scale-125" : "bg-primary/60"
          )}
        />
        <span className="text-[9px] font-medium tracking-wider uppercase text-muted-foreground">
          {type}
        </span>
      </div>
      <p className="text-xs font-medium text-foreground/90">{title}</p>
      <div className="space-y-1">
        <div
          className={cn(
            "h-1.5 w-full bg-muted rounded transition-all duration-500",
            isActive && "bg-primary/30"
          )}
        />
        <div
          className={cn(
            "h-1.5 w-3/4 bg-muted rounded transition-all duration-500 delay-75",
            isActive && "bg-primary/20"
          )}
        />
      </div>
    </div>
  );
}

// コードスニペットカード - タイピングアニメーション
function CodeCard({ isActive }: { isActive?: boolean }) {
  const [visibleLines, setVisibleLines] = useState(4);

  useEffect(() => {
    if (isActive) {
      queueMicrotask(() => setVisibleLines(0));
      const timer1 = setTimeout(() => setVisibleLines(1), 100);
      const timer2 = setTimeout(() => setVisibleLines(2), 200);
      const timer3 = setTimeout(() => setVisibleLines(3), 300);
      const timer4 = setTimeout(() => setVisibleLines(4), 400);
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }
  }, [isActive]);

  const lines = [
    { text: "<Hero", color: "text-blue-400" },
    { text: '  title="..."', color: "text-muted-foreground", indent: true },
    { text: '  variant="gradient"', color: "text-muted-foreground", indent: true },
    { text: "/>", color: "text-blue-400" },
  ];

  return (
    <div className="p-3 font-mono text-[10px] space-y-1">
      <div className="flex gap-1.5 mb-2">
        <div
          className={cn(
            "w-2 h-2 rounded-full transition-colors",
            isActive ? "bg-red-500" : "bg-red-500/60"
          )}
        />
        <div
          className={cn(
            "w-2 h-2 rounded-full transition-colors",
            isActive ? "bg-yellow-500" : "bg-yellow-500/60"
          )}
        />
        <div
          className={cn(
            "w-2 h-2 rounded-full transition-colors",
            isActive ? "bg-green-500" : "bg-green-500/60"
          )}
        />
      </div>
      {lines.map((line, i) => (
        <p
          key={i}
          className={cn(
            line.color,
            line.indent && "pl-3",
            "transition-all duration-200",
            i < visibleLines ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
          )}
        >
          {line.text}
          {isActive && i === visibleLines - 1 && (
            <span className="inline-block w-1.5 h-3 bg-primary ml-0.5 animate-pulse" />
          )}
        </p>
      ))}
    </div>
  );
}

// 統計カード - バーアニメーション
function StatsCard({ isActive }: { isActive?: boolean }) {
  const heights = [40, 65, 45, 80, 55, 70, 90];

  return (
    <div className="p-3 space-y-2">
      <span className="text-[9px] font-medium tracking-wider uppercase text-muted-foreground">
        Statistics
      </span>
      <div className="flex items-end gap-1 h-8">
        {heights.map((h, i) => (
          <div
            key={i}
            className={cn(
              "w-2 rounded-t transition-all duration-500",
              isActive ? "bg-primary" : "bg-primary/40"
            )}
            style={{
              height: isActive ? `${h}%` : "20%",
              transitionDelay: `${i * 50}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// パルスするドット
function PulseDot({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div className={cn("absolute w-2 h-2", className)} style={{ animationDelay: `${delay}s` }}>
      <div className="absolute inset-0 rounded-full bg-primary/60 animate-ping" />
      <div className="absolute inset-0 rounded-full bg-primary" />
    </div>
  );
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full" style={{ perspective: "1000px" }}>
      {/* グリッド背景 - マウスに反応 */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-50 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%,
              rgba(var(--primary-rgb, 100, 100, 255), 0.1) 0%,
              transparent 50%
            )
          `,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--border) 1px, transparent 1px),
              linear-gradient(to bottom, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* 中心のグロー - マウスに追従 */}
      <div
        className="absolute w-64 h-64 bg-primary/10 rounded-full blur-3xl transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* フローティングカード群 */}
      <FloatingCard
        className="top-2 left-4 w-28 sm:top-4 sm:left-8 sm:w-36"
        delay={0}
        duration={7}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        parallaxStrength={0.03}
      >
        <div onMouseEnter={() => setActiveCard(0)} onMouseLeave={() => setActiveCard(null)}>
          <MiniCard title="Hero Section" type="hero" isActive={activeCard === 0} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="top-10 right-2 w-24 sm:top-16 sm:right-4 sm:w-32"
        delay={1.5}
        duration={6}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        parallaxStrength={0.025}
      >
        <div onMouseEnter={() => setActiveCard(1)} onMouseLeave={() => setActiveCard(null)}>
          <StatsCard isActive={activeCard === 1} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="top-1/2 left-0 w-32 -translate-y-1/2 sm:w-40"
        delay={0.8}
        duration={8}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        parallaxStrength={0.02}
      >
        <div onMouseEnter={() => setActiveCard(2)} onMouseLeave={() => setActiveCard(null)}>
          <CodeCard isActive={activeCard === 2} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-12 right-4 w-28 sm:bottom-24 sm:right-8 sm:w-36"
        delay={2}
        duration={7}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        parallaxStrength={0.035}
      >
        <div onMouseEnter={() => setActiveCard(3)} onMouseLeave={() => setActiveCard(null)}>
          <MiniCard title="Pricing Table" type="pricing" isActive={activeCard === 3} />
        </div>
      </FloatingCard>

      <FloatingCard
        className="bottom-2 left-8 w-24 sm:bottom-8 sm:left-16 sm:w-32"
        delay={1}
        duration={6.5}
        mouseX={mousePos.x}
        mouseY={mousePos.y}
        parallaxStrength={0.04}
      >
        <div onMouseEnter={() => setActiveCard(4)} onMouseLeave={() => setActiveCard(null)}>
          <MiniCard title="CTA Banner" type="cta" isActive={activeCard === 4} />
        </div>
      </FloatingCard>

      {/* パルスするドット - 線の終点付近に配置 */}
      <PulseDot className="top-[45%] left-[45%]" delay={0} />
      <PulseDot className="top-[50%] left-[55%]" delay={1.5} />
      <PulseDot className="top-[55%] left-[50%]" delay={0.8} />

      {/* 接続線（装飾） */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="20%"
          y1="15%"
          x2="45%"
          y2="45%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="1s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="80%"
          y1="25%"
          x2="55%"
          y2="50%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </line>
        <line
          x1="30%"
          y1="85%"
          x2="50%"
          y2="55%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          strokeDasharray="4 4"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="8"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </line>
      </svg>
    </div>
  );
}
