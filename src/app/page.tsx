import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ProjectsSection } from "@/components/projects-section";
import { Suspense } from "react";

// Loading Skeleton für Projekte
function ProjectsSkeleton() {
  return (
    <div className="grid gap-8 md:gap-12">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-gray-800 rounded-lg h-64 mb-4"></div>
          <div className="bg-gray-700 h-6 rounded mb-2"></div>
          <div className="bg-gray-700 h-4 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <main role="main" className="relative">
        <section
          className="relative h-screen"
          aria-labelledby="hero-heading"
          role="banner"
        >
          <div className="container grid items-center h-full pt-[70px]">
            {/* Optimiertes Video mit besserer Performance */}
            <video
              className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              poster="/img/fallback-image.webp"
            >
              <source src="/videos/bg-video.mp4" type="video/mp4" />
              {/* Fallback Image mit Next.js Optimierung */}
              <Image
                src="/img/fallback-image.webp"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={85}
              />
            </video>

            {/* Optimiertes Overlay */}
            <div
              className="absolute top-0 left-0 w-full h-screen bg-black/20 -z-[5]"
              aria-hidden="true"
            />

            <div className="self-end">
              <h1
                id="hero-heading"
                className="font-hanson text-[2.5rem] sm:text-[4.2rem] leading-[1.1] uppercase mb-2.5 text-white"
              >
                Hey
                <br />
                ich bin Leonid
              </h1>
              <div
                className="font-hanson text-[2.5rem] sm:text-[4.2rem] leading-[1.1] uppercase h-20 sm:h-[140px] overflow-hidden mb-8"
                aria-live="polite"
                aria-label="Berufstitel Animation"
              >
                <span className="relative animate-header-subtitle">
                  <span className="text-yellow-green not-italic">UI/UX</span>
                  <br />
                  <span className="text-purple not-italic">designer</span>
                  <br />
                  <span className="text-purple not-italic">fullstack</span>
                  <br />
                  <span className="text-yellow-green not-italic">
                    developer
                  </span>
                </span>
              </div>
            </div>

            <a
              href="#projects"
              className="self-end justify-self-center flex justify-center items-end mb-8 w-full h-8 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-offset-2 focus:ring-offset-transparent rounded"
              aria-label="Zu den Projekten scrollen"
            >
              <ChevronDown
                className="cursor-pointer text-white w-12 h-12 animate-bounce-arrow"
                aria-hidden="true"
              />
              <span className="sr-only">Nach unten scrollen zu Projekte</span>
            </a>
          </div>
        </section>

        {/* Projects Section mit Suspense für bessere Performance */}
        <section
          className="py-32 lg:py-44 bg-[var(--bg-color)]"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <Suspense fallback={<ProjectsSkeleton />}>
              <ProjectsSection />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
}
