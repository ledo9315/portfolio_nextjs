import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects";

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
    <main role="main" aria-labelledby="project-title">
      {/* Project Description Section */}
      <section className="pt-12 md:pt-36">
        <div className="container">
          <div className="max-w-[700px]">
            <h1
              id="project-title"
              className="font-hanson uppercase text-5xl leading-tight mb-5"
            >
              {project.title}
            </h1>
            <p className="text-white/60 font-medium mb-5">
              {project.description}
            </p>
            <p className="mb-5 text-base font-medium leading-7">
              {project.text}
            </p>
            <p className="italic mb-5 font-medium">{project.keywords}</p>

            {/* Website Link */}
            {project.websiteUrl && (
              <aside className="inline-block mt-2.5">
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-base underline border-l-5 py-3 pl-4 italic border-purple hover:text-purple transition-colors"
                >
                  {project.linkText}
                </Link>
              </aside>
            )}
          </div>
        </div>
      </section>

      {/* Project Images Section */}
      <section className="py-[100px] md:py-[200px]">
        <div className="container">
          <h2 className="sr-only">Projekt Bilder</h2>

          {project.images.thumbnail && (
            <div className="mb-8">
              <Image
                src={project.images.thumbnail}
                alt={`${project.title} Thumbnail`}
                width={1200}
                height={900}
                className="w-full border border-white/30"
                quality={90}
                priority
              />
            </div>
          )}

          <div className="sm:grid grid-cols-2 gap-8">
            {/* All frame images */}
            {project.images.frames.map((frame, index) => (
              <div key={index}>
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={1200}
                  height={900}
                  className="w-full rounded border border-white/[0.26] block"
                  quality={90}
                  loading={index < 2 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
