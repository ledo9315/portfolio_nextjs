import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "@/data/projects";
import { Button } from "@/components/button";
import { ProjectImagesGrid } from "@/components/project-images-grid";
import { AnimatedThumbnail } from "@/components/animated-thumbnail";
import { AnimatedSection } from "@/components/animated-section";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Project Description Section */}
      <section className="pt-42">
        <div className="container">
          <div className="max-w-[700px]">
            <AnimatedSection delay={0.1}>
              <h1
                id="project-title"
                className="font-hanson uppercase text-[6vw] md:text-5xl leading-tight mb-5"
              >
                {project.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-white/60 font-medium mb-5">
                {project.description}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mb-5 text-base font-medium leading-7">
                {project.text}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="bg-white text-black px-2 py-0.5 rounded-sm w-fit text-sm font-medium"
                  >
                    {keyword}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Website Link */}
            {project.websiteUrl && (
              <AnimatedSection delay={0.5}>
                <aside className="inline-block mt-2.5">
                  <Button
                    href={project.websiteUrl}
                    external
                    aria-label={`Besuche ${project.title} Website`}
                  >
                    {project.linkText}
                  </Button>
                </aside>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* Project Images Section */}
      <section className="py-[100px] md:py-[200px]">
        <div className="container">
          <h2 className="sr-only">Projekt Medien</h2>

          {/* Optional Video Section */}
          {project.video && (
            <AnimatedSection delay={0.1} className="mb-12">
              <video
                className="w-full border border-white/30"
                controls
                preload="metadata"
                aria-label={project.video.alt || `Video von ${project.title}`}
                src={project.video.src}
                poster={project.video.poster}
              ></video>
            </AnimatedSection>
          )}

          {project.images.thumbnail && (
            <AnimatedThumbnail
              src={project.images.thumbnail}
              alt={`${project.title} Thumbnail`}
              title={project.title}
            />
          )}

          <ProjectImagesGrid frames={project.images.frames} />
        </div>
      </section>
    </>
  );
}
