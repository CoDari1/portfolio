import {ProjectCard} from "@/components/ui/card";

export default function Home() {
  return (
    <div className=''>
        <div className="container mx-auto px-4 py-8 border-t border-b border-border ">
      <div className="text-5xl mb-20 text-center text-">Projects</div>

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
      </div>
        </div>
    </div>
  );
}
