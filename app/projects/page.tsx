import React from 'react'
import projects from '../projects.json'
import { ProjectCard } from '@/components/ui/card'

const Page = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p: any) => (
                    <ProjectCard
                        key={p.id || p.filename}
                        filename={p.filename}
                        name={p.name}
                        description={p.description}
                        tags={p.tags}
                        image={p.image}
                        href={p.href}
                    />
                ))}
            </section>
        </div>
    )
}
export default Page
