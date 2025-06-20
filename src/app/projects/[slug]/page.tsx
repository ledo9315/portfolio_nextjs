import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
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
    <main className="min-h-screen" role="main" aria-labelledby="project-title">
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          {/* Back Navigation */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zu Projekten
          </Link>

          {/* Project Header */}
          <div className="mb-12 md:mb-16">
            <h1
              id="project-title"
              className="font-hanson text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 leading-tight tracking-tight"
            >
              {project.title}
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/80 max-w-3xl">
              {project.description}
            </p>

            {/* Keywords */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.keywords
                .split(", ")
                .map((keyword: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple/20 text-purple border border-purple/30 rounded-full text-sm font-medium"
                  >
                    {keyword}
                  </span>
                ))}
            </div>

            {/* Website Link */}
            {project.websiteUrl && project.websiteUrl !== "#" && (
              <Link
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple hover:text-purple/80 transition-colors font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                {project.linkText}
              </Link>
            )}
          </div>

          {/* Project Description */}
          <div className="mb-16 md:mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-4xl">
              {project.text}
            </p>
          </div>

          {/* Project Images */}
          <div className="space-y-12 md:space-y-16">
            {project.images.frames.map(
              (frame: { src: string; alt: string }, index: number) => (
                <div key={index} className="relative">
                  <Image
                    src={frame.src}
                    alt={frame.alt}
                    width={1200}
                    height={800}
                    className="w-full rounded-lg border border-white/10 shadow-2xl"
                    quality={90}
                    priority={index === 0}
                  />
                </div>
              )
            )}
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-center mt-20 md:mt-24 pt-12 border-t border-white/10">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-purple hover:text-purple/80 transition-colors font-medium text-lg"
            >
              Alle Projekte anzeigen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
