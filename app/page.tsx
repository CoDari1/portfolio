import {ProjectCard} from "@/components/ui/card";
import {HeroTerminal} from "@/components/self/HeroTerminal";
import {Reveal} from "@/components/self/Reveal";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-8 pt-[88px] pb-24">

            <div className="container mx-auto px-4 py-8 border-border">
                <section className="relative overflow-hidden text-center px-8 py-24 lg:py-32 border-b border-border">
                    <div className="pointer-events-none absolute left-1/2 top-[10%] h-[380px] w-[70%] -translate-x-1/2 rounded-full bg-[#7ee787] opacity-20 blur-[50px] sm:h-[450px] sm:w-[500px] sm:blur-[55px] lg:h-[500px] lg:w-[900px] lg:blur-[60px]"></div>                    <p className="mb-5 font-mono text-xs uppercase tracking-[0.14em] text-gray-500 before:content-['//_'] before:text-[#7ee787]">
                        full-stack developer
                    </p>

                    <div className="relative z-10 mx-auto max-w-3xl overflow-hidden rounded-[10px] border border-white/10 bg-[#0c0f12] text-left shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] opacity-90">
                        <div className="flex items-center gap-2 border-b border-white/10 bg-[#111519] px-4 py-3">
                            <span className="h-[11px] w-[11px] rounded-full bg-red-500"></span>
                            <span className="h-[11px] w-[11px] rounded-full bg-yellow-400"></span>
                            <span className="h-[11px] w-[11px] rounded-full bg-green-500"></span>
                            <span className="ml-2 font-mono text-[12.5px] text-gray-500">~/darius — zsh</span>
                        </div>
                        <HeroTerminal />
                    </div>

                    <a href="/contact"
                       className="mt-10 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#0d1013] px-6 py-3.5 font-mono text-base text-gray-100 transition hover:-translate-y-0.5 hover:border-[#7ee787] hover:shadow-[0_12px_30px_-10px_rgba(126,231,135,0.35)]">
                        <span className="mr-2 text-[#7ee787]">$</span>view --contact.tsx
                        <span
                            className="ml-1.5 inline-block h-[1em] w-[0.55em] animate-caret-blink bg-[#7ee787] align-text-bottom"></span>
                    </a>
                </section>


                <div className="container mx-auto px-4 py-8 border-b border-border flex flex-col items-center">
                    <Reveal>
                        <p className="mb-5 font-mono text-lg uppercase tracking-[0.14em] text-gray-500 before:content-['//_'] before:text-[#7ee787]">
                            featured projects
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <Reveal delay={0} className={'h-full'}>
                            <ProjectCard
                                filename={"UrbanHerbs"}
                                name={"Urban Herbs"}
                                description={"Restaurant Demo site"}
                                tags={["Marketing", "Next.js", "Tailwind CSS", "shadcn/ui", "EmailJS"]}
                                image={"/UrbanHerbs.png"}
                                href={"https://urban-herbs.vercel.app"}
                            />
                        </Reveal>

                        <Reveal delay={120} className={'h-full'}>
                            <ProjectCard
                                filename={"PoetsUnited"}
                                name={"Poets United"}
                                description={"A website where people can upload and read poems."}
                                tags={["Poetry", "Community", "Next.js", "Supabase", "Tiptap"]}
                                image={"/poets-united.png"}
                                href={"https://poets-united.vercel.app"}
                            />
                        </Reveal>

                        <Reveal delay={240} className={'h-full'}>
                            <ProjectCard
                                filename={"AListSuites"}
                                name={"A-List Suites"}
                                description={"A demo suite/tenant management service."}
                                tags={["SaaS", "Property Management", "Next.js", "Supabase", "shadcn/ui"]}
                                image={"/Alistsuites.png"}
                                href={"https://alistsuites.vercel.app"}
                            />
                        </Reveal>
                    </div>
                    <Reveal delay={320}>
                        <a
                        href="/projects"
                        className="mt-10 inline-flex items-center gap-1 rounded-lg border border-white/10 bg-[#0d1013] px-6 py-3.5 font-mono text-base text-gray-100 transition hover:-translate-y-0.5 hover:border-[#7ee787] hover:shadow-[0_12px_30px_-10px_rgba(126,231,135,0.35)]">
                        <span className="mr-2 text-[#7ee787]">$</span>view --more-projects
                        <span className="ml-1.5 inline-block h-[1em] w-[0.55em] animate-caret-blink bg-[#7ee787] align-text-bottom"></span>
                    </a>
                </Reveal>

            </div>
        </div>

</div>
);
}