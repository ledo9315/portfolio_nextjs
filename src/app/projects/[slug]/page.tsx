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
    <main className="min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] pt-[70px]">
      <div className="container py-8">
        {/* Back Navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[var(--light-grey)] hover:text-[var(--text-color)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zu Projekten
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="font-hanson text-4xl sm:text-6xl uppercase mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-[var(--light-grey)] mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.keywords
              .split(", ")
              .map((keyword: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[var(--accent-color)] text-[var(--bg-color)] rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
          </div>
          {project.websiteUrl && project.websiteUrl !== "#" && (
            <Link
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent-color)] hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              {project.linkText}
            </Link>
          )}
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <p className="text-lg leading-relaxed">{project.text}</p>
        </div>

        {/* Project Images */}
        <div className="space-y-8">
          {project.images.frames.map(
            (frame: { src: string; alt: string }, index: number) => (
              <div key={index} className="relative">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  width={1200}
                  height={800}
                  className="w-full rounded-lg border border-white/10"
                  quality={90}
                  priority={index === 0}
                />
              </div>
            )
          )}
        </div>

        {/* Navigation to next/previous projects */}
        <div className="flex justify-between items-center mt-16 pt-8 border-t border-white/10">
          <div>{/* Add previous project navigation if needed */}</div>
          <Link
            href="/#projects"
            className="text-[var(--accent-color)] hover:underline"
          >
            Alle Projekte anzeigen
          </Link>
        </div>
      </div>
    </main>
  );
}
