export function TeamCards001() {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Sarah brings 15 years of experience in tech leadership. Previously VP at Google.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Michael is an open-source advocate and former principal engineer at Amazon.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      bio: "Emily is an award-winning designer with a passion for accessible design systems.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      social: {
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="bg-gray-50 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Meet the people driving our mission forward
          </p>
        </div>

        {/* Team Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {member.role}
                </p>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 transition-colors hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
