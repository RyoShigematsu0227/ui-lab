import Image from "next/image";
import Link from "next/link";

// コーナードット装飾コンポーネント
function CornerDots({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute h-3 w-3 ${className}`}>
      <div className="absolute left-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute right-0 top-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 left-0 h-1 w-1 rounded-full bg-zinc-600" />
      <div className="absolute bottom-0 right-0 h-1 w-1 rounded-full bg-zinc-600" />
    </div>
  );
}

export function TeamGrid001() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      bio: "Former VP at Google. 15+ years in tech.",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Ex-Amazon principal engineer. Open source advocate.",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Award-winning designer. Previously at Figma.",
    },
    {
      name: "David Kim",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Built systems at scale for Netflix.",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-24">
      {/* コーナードット装飾 */}
      <CornerDots className="left-6 top-6" />
      <CornerDots className="right-6 top-6" />
      <CornerDots className="bottom-6 left-6" />
      <CornerDots className="bottom-6 right-6" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ヘッダー */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            The People
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-wide text-white sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-4 text-base tracking-wide text-zinc-400">
            We&apos;re a passionate group of people working together to build
            something amazing.
          </p>
        </div>

        {/* チームグリッド */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group relative border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              {/* コーナードット */}
              <div className="absolute left-2 top-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute right-2 top-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute bottom-2 left-2 h-1 w-1 rounded-full bg-zinc-700" />
              <div className="absolute bottom-2 right-2 h-1 w-1 rounded-full bg-zinc-700" />

              {/* アバター */}
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-zinc-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                />
              </div>

              {/* 情報 */}
              <div className="mt-6 text-center">
                <h3 className="text-base font-medium tracking-wide text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed tracking-wide text-zinc-400">
                  {member.bio}
                </p>
              </div>

              {/* ソーシャルリンク */}
              <div className="mt-5 flex justify-center gap-3">
                <Link
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-zinc-600 transition-colors hover:text-white"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
