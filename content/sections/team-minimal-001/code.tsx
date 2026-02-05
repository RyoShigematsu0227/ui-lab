import Image from "next/image";

// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-muted-foreground/40" />
    </div>
  );
}

export function TeamMinimal001() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emily Watson",
      role: "Design Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "David Kim",
      role: "Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Lisa Park",
      role: "Product",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "James Wilson",
      role: "Operations",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section className="relative bg-background py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            Team
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-foreground sm:text-4xl">
            The people behind
          </h2>
        </div>

        {/* チームグリッド */}
        <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              {/* アバター */}
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full border border-border transition-all group-hover:border-muted-foreground/60">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>

              {/* 情報 */}
              <p className="mt-4 text-sm font-medium tracking-wide text-foreground">
                {member.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* フッターテキスト */}
        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-sm tracking-wide text-muted-foreground">
            We&apos;re always looking for talented individuals.{" "}
            <a
              href="#"
              className="text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
            >
              Join us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
