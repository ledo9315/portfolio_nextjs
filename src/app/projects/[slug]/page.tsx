import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Project from "@/types/project";
import projects from "@/data/projects";

// Projekt-Daten Definition

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen" role="main" aria-labelledby="project-title">
      {/* Project Description Section */}
      <section
        className="project-description pt-12 md:pt-40"
        aria-labelledby="project-title"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="project-description__wrapper max-w-3xl">
            <h1
              id="project-title"
              className="project-description__name text-3xl md:text-5xl font-bold uppercase mb-5 leading-tight tracking-tight"
              style={{
                fontFamily: 'var(--font-hanson, "Hanson", sans-serif)',
                lineHeight: "1.2",
              }}
            >
              {project.title}
            </h1>
            <p className="project-description__description mb-5 text-base md:text-lg text-white/60 leading-relaxed">
              {project.description}
            </p>
            <p className="project-description__text mb-5 text-base md:text-lg leading-relaxed">
              {project.text}
            </p>
            <p className="project-description__keywords italic text-base">
              {project.keywords}
            </p>
          </div>

          <aside className="inline-block mt-8 px-5 py-2 border-l-4 border-purple">
            <a
              target="_blank"
              href={project.websiteUrl}
              className="flex italic underline transition-colors duration-300 hover:text-purple-400"
              rel="noopener noreferrer"
            >
              {project.linkText}
            </a>
          </aside>
        </div>
      </section>

      {/* Project Images Section */}
      <section
        className="project-images py-24 md:py-52"
        aria-labelledby="project-gallery-title"
      >
        <h2 id="project-gallery-title" className="sr-only">
          Bilder Galerie
        </h2>
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="project-images__wrapper grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {/* Thumbnail - spans full width */}

            {project.images.thumbnail && (
              <div className="col-span-1 md:col-span-2">
                <Image
                  src={project.images.thumbnail}
                  alt={`${project.title} Hauptbild`}
                  width={1200}
                  height={800}
                  className="w-full h-auto border"
                  priority
                />
              </div>
            )}

            {/* Project frames */}
            {project.images.frames.map((frame, index) => (
              <div key={index}>
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto border"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
