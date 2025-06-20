import Modal from "@/components/modal";
import Image from "next/image";
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Typ für die generateStaticParams Rückgabe
interface StaticParams {
  slug: string;
  id: string;
}

// Static generation für alle Frame-Kombinationen
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

// Loading Skeleton für das Bild
function ImageSkeleton() {
  return (
    <div className="w-full max-w-4xl aspect-[4/3] bg-gray-800 animate-pulse rounded-lg flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

// Optimierte Bildkomponente
function ModalImage({
  src,
  alt,
  priority = true,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={900}
        className="w-full h-full object-contain"
        priority={priority}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
}

export default async function PhotoPage({
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
    <Modal>
      <div
        className="w-full flex flex-col items-center"
        role="img"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <h1 id="modal-title" className="sr-only">
          {frame.alt}
        </h1>
        <p id="modal-description" className="sr-only">
          Bild {frameIndex + 1} von {project.images.frames.length} aus dem
          Projekt {project.title}
        </p>

        <Suspense fallback={<ImageSkeleton />}>
          <ModalImage src={frame.src} alt={frame.alt} priority={true} />
        </Suspense>

        {/* Bild-Metadaten */}
        <div className="mt-2 py-2 text-center">
          <p className="text-white/90 text-sm font-medium">{frame.alt}</p>
          <p className="text-white/60 text-xs mt-1">
            {frameIndex + 1} von {project.images.frames.length}
          </p>
        </div>
      </div>
    </Modal>
  );
}
