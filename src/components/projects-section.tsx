import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";
import { motion, useInView } from "framer-motion";
import type Project from "@/types/project";
import { useRef } from "react";

// Separate Komponente für jedes Projekt-Item
function ProjectItem({ project, index }: { project: Project; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.1,
      }}
      className="justify-self-center cursor-pointer relative overflow-hidden group"
    >
      <figure>
        <Link href={`/projects/${project.slug}`}>
          <Image
            src={project.images.cover}
            alt={`Screenshot von ${project.title}`}
            className="block border border-white/26 transition-opacity duration-300 ease-out group-hover:opacity-30"
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
        </Link>
        <figcaption className="mt-4">{project.title}</figcaption>
      </figure>
    </motion.li>
  );
}

export function ProjectsSection() {
  return (
    <>
      <h2
        className="font-hanson text-4xl sm:text-5xl uppercase tracking-[-0.02em] mb-12"
        id="projects-title"
      >
        Projekte
      </h2>

      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-16">
        {projects.map((project, index) => {
          const ref = useRef<HTMLLIElement>(null);
          const isInView = useInView(ref, { once: true, margin: "0px" });

          return (
            <li
              key={project.slug}
              ref={ref}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(80px)",
                transition: `all 0.8s ease-out ${index * 0.1}s`,
              }}
              className="justify-self-center cursor-pointer relative overflow-hidden group"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="block focus-visible:scale-[1.02] focus-visible:no-underline transition-transform duration-300"
              >
                <Image
                  src={project.images.cover}
                  alt={`Screenshot von ${project.title}`}
                  className="block border border-white/26 transition-opacity duration-300 ease-out group-hover:opacity-30"
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
            </li>
          );
        })}
      </ul>
    </>
  );
}
