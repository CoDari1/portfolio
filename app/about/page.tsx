import { Reveal } from "@/components/self/Reveal";

const mediums = [
    {
        tag: "01_digital",
        title: "The Digital Medium",
        body: "Web design, front-end development, UI/UX. Building interfaces that are as intentional as they are functional.",
    },
    {
        tag: "02_written",
        title: "The Written Medium",
        body: "Code and poetry aren't as far apart as people think — both live and die by structure, precision, and knowing how to assign meaning to lines.",
    },
    {
        tag: "03_musical",
        title: "The Musical Medium",
        body: "Percussionist. Music taught me expression, discipline, and how to lead a group toward one outcome.",
    },
];

const leadership = [
    {
        tag: "leadership_01",
        title: "TSA President",
        body: "Led a Tech-based student organization, managed initiatives, represented the group externally.",
    },
    {
        tag: "leadership_02",
        title: "Band Captain",
        body: "Coordinated a section, held people accountable under performance pressure, communicated under deadline.",
    },
];

const stack = {
    Languages: ["TypeScript", "JavaScript", "Python"],
    Frameworks: ["Next.js", "React"],
    Styling: ["Tailwind CSS", "shadcn/ui"],
    "Backend / DB": ["Supabase", "PostgreSQL"],
    Tools: ["Vercel", "Figma", "Git"],
};

function TerminalWindow({
                            title,
                            children,
                        }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-3">
                <span className="h-[11px] w-[11px] rounded-full bg-red-500" />
                <span className="h-[11px] w-[11px] rounded-full bg-yellow-400" />
                <span className="h-[11px] w-[11px] rounded-full bg-green-500" />
                <span className="ml-2 font-mono text-[12.5px] text-gray-500">{title}</span>
            </div>
            <div className="p-6 sm:p-8">{children}</div>
        </div>
    );
}

export default function AboutPage() {
    return (
        <main className="relative min-h-screen px-4 pb-24 pt-[88px] text-gray-100 sm:px-8">
            {/* Soft green glow — same treatment as Home/Contact */}
            <div className="pointer-events-none absolute left-1/2 top-[8%] h-[380px] w-[70%] -translate-x-1/2 rounded-full bg-[#7ee787] opacity-15 blur-[60px] sm:h-[450px] sm:w-[500px]" />

            <div className="relative mx-auto flex w-full max-w-3xl flex-col gap-10">
                {/* Hook */}
                <Reveal>
                    <TerminalWindow title="~/darius — about">
                        <p className="font-mono text-sm text-[#7ee787]">$ cat about.md</p>
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-50 sm:text-4xl">
                            I don&apos;t think in one language. I think in code, in circuits, in
                            verse, in rhythm.
                        </h1>
                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-400">
                            Creativity isn&apos;t a single medium — it&apos;s a habit of mind I
                            carry into everything I touch.
                        </p>
                    </TerminalWindow>
                </Reveal>

                {/* Education */}
                <Reveal delay={80}>
                    <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12] p-6 font-mono text-sm shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] sm:p-8">
                        <p className="text-gray-500">
                            <span className="text-[#7ee787]">//</span> education
                        </p>
                        <p className="mt-3">
                            <span className="text-[#FFA657]">const</span>{" "}
                            <span className="text-[#79C0FF]">education</span> = {"{"}
                        </p>
                        <p className="pl-4 text-gray-300">
                            majors:{" "}
                            <span className="text-[#7ee787]">
                &quot;Computer Science + Computer Engineering&quot;
              </span>
                            ,
                        </p>
                        <p className="pl-4 text-gray-300">
                            school:{" "}
                            <span className="text-[#7ee787]">&quot;Auburn University&quot;</span>,
                        </p>
                        <p className="pl-4 text-gray-300">
                            highSchool:{" "}
                            <span className="text-[#7ee787]">&quot;Salutatorian of Eufaula High&quot;</span>,
                        </p>
                        <p>{"}"}</p>

                    </div>
                </Reveal>

                {/* Multiple mediums */}
                <div>
                    <Reveal delay={80}>
                        <p className="mb-5 font-mono text-sm uppercase tracking-[0.14em] text-gray-500 before:content-['//_'] before:text-[#7ee787]">
                            multiple mediums
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {mediums.map((m, i) => (
                            <Reveal key={m.tag} delay={60 * i}>
                                <div className="group h-full overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12] transition-colors hover:border-white/20">
                                    <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-2.5">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#7ee787]" />
                                        <span className="font-mono text-xs text-gray-500">{m.tag}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-medium text-gray-50">{m.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                            {m.body}
                                        </p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={80}>
                    <TerminalWindow title="~/darius — why-it-matters">
                        <p className="font-mono text-xs text-[#FFA657]">
                            // why it matters for clients
                        </p>
                        <p className="mt-3 text-base leading-relaxed text-gray-300">
                            Most developers can make a site work. Fewer can make it say
                            something. Moving across mediums gives me a storytelling instinct for every build: not
                            just does this function, but does this feel like your business.
                        </p>
                    </TerminalWindow>
                </Reveal>

                {/* Leadership */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {leadership.map((l, i) => (
                        <Reveal key={l.tag} delay={60 * i}>
                            <div className="h-full overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12]">
                                <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-2.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#79C0FF]" />
                                    <span className="font-mono text-xs text-gray-500">{l.tag}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-medium text-gray-50">{l.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                                        {l.body}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Stack */}
                <Reveal delay={80}>
                    <div className="overflow-hidden rounded-[12px] border border-white/10 bg-[#0c0f12]">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-2.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-[#7ee787]" />
                            <span className="font-mono text-xs text-gray-500">
                ~/darius — stack.json
              </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-6 p-6 sm:grid-cols-3 sm:p-8">
                            {Object.entries(stack).map(([category, items]) => (
                                <div key={category}>
                                    <p className="font-mono text-xs text-gray-500">{category}</p>
                                    <ul className="mt-2 space-y-1">
                                        {items.map((item) => (
                                            <li key={item} className="text-sm text-gray-300">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* CTA */}
                <Reveal delay={80}>
                    <div className="flex justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#0d1013] px-6 py-3.5 font-mono text-base text-gray-100 transition hover:-translate-y-0.5 hover:border-[#7ee787] hover:shadow-[0_12px_30px_-10px_rgba(126,231,135,0.35)]"
                        >
                            <span className="mr-2 text-[#7ee787]">$</span>
                            open --contact
                            <span className="ml-1.5 inline-block h-[1em] w-[0.55em] animate-caret-blink bg-[#7ee787] align-text-bottom" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </main>
    );
}