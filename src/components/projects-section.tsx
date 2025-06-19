import { getAllProjects } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export async function ProjectsSection() {
  const projects = await getAllProjects();

  return (
    <section
      className="relative"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2
        className="font-hanson text-4xl sm:text-5xl uppercase tracking-[-0.02em] mb-12"
        id="projects-title"
      >
        Projekte
      </h2>

      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-16">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="justify-self-center cursor-pointer relative overflow-hidden group"
          >
            <figure>
              <Link href={`/projects/${project.slug}`}>
                <Image
                  src={project.images.frames[0].src}
                  alt={project.images.frames[0].alt}
                  className="block border border-white/26 rounded transition-opacity duration-300 ease-out group-hover:opacity-30"
                  width={800}
                  height={600}
                  quality={90}
                />

                <div className="absolute top-5 left-5 opacity-0 text-[1.2rem] leading-[1.1] transition-all duration-300 ease-out translate-y-1/2 group-hover:opacity-100 group-hover:translate-y-0">
                  {project.title} <br />
                  <span className="text-xs text-[var(--light-grey)] uppercase">
                    {project.description}
                  </span>
                </div>

                <figcaption className="mt-4">{project.title}</figcaption>
              </Link>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
