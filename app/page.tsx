import {ProjectCard} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-8 pt-[88px] pb-24">
        <div className="container mx-auto px-4 py-8 border-b border-border">
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <div className="text-3xl mb-20 text-center text-primary/60">//featured-projects</div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                    filename={"UrbanHerbs"}
                    name={"Urban Herbs"}
                    description={"Restaurant Demo site"}
                    tags={[ "Marketing", "Next.js", "Tailwind CSS", "shadcn/ui", "EmailJS",]}
                    image={"/UrbanHerbs.png"}
                    href={"https://urban-herbs.vercel.app"}
                />

                <ProjectCard
                    filename={"PoetsUnited"}
                    name={"Poets United"}
                    description={"A website where people can upload and read poems."}
                    tags={["Poetry", "Community", "Next.js", "Supabase", "Tiptap",]}
                  image={"/poets-united.png"}
                  href={"https://poets-united.vercel.app"}
              />

              <ProjectCard
                  filename={"AListSuites"}
                  name={"A-List Suites"}
                  description={"A demo suite/tenant management service."}
                  tags={["SaaS", "Property Management", "Next.js", "Supabase", "shadcn/ui"]}
                  image={"/Alistsuites.png"}
                  href={"https://alistsuites.vercel.app"}
              />

                <Link href="/projects" className="w-60 h-10 flex justify-center items-center text-accent-foreground transition-all duration-200 fade-in hover:underline border border-white">$ view --more-projects → <div className='w-2 h-6 bg-white animate-caret-blink'/></Link>
            </div>
        </div>
    </div>
  );
}
