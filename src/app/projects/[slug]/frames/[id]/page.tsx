import Image from "next/image";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";
import { notFound } from "next/navigation";

// Typ für die generateStaticParams Rückgabe
interface StaticParams {
  slug: string;
  id: string;
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  const projectSlugs = await getAllProjectSlugs();
  const params: StaticParams[] = [];

  for (const slug of projectSlugs) {
    const project = await getProjectBySlug(slug);
    if (project && project.images.frames) {
      // Generiere Parameter basierend auf den tatsächlichen Frames im Projekt
      project.images.frames.forEach((frame, index) => {
        params.push({
          slug: slug,
          id: (index + 1).toString(),
        });
      });
    }
  }

  return params;
}

export default async function FramePage({
  params,
}: {
  params: Promise<{ slug: string; id: string }>;
}) {
  const { slug, id } = await params;
  const frameIndex = parseInt(id) - 1;

  // Lade das Projekt um die korrekten Frame-Daten zu bekommen
  const project = await getProjectBySlug(slug);

  if (!project || !project.images.frames[frameIndex]) {
    return notFound();
  }

  // Verwende die korrekten Frame-Daten aus dem Projekt
  const frame = project.images.frames[frameIndex];

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <Image
          alt={frame.alt}
          src={frame.src}
          width={1200}
          height={800}
          className="w-full h-auto"
          priority
        />
      </div>
    </main>
  );
}
