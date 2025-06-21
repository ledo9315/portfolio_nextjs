import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { ProjectsSection } from "@/components/projects-section";

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
            <video
              className="absolute top-0 left-0 w-full h-screen object-cover -z-10"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              poster="/img/fallback-image.webp"
            >
              <source src="/video/bg-video.mp4" type="video/mp4" />
              <Image
                src="/img/fallback-image.webp"
                alt=""
                width={1920}
                height={1080}
                priority
                className="absolute top-0 left-0 w-full h-screen object-cover"
              />
            </video>

            {/* Light theme overlay for better text contrast */}
            <div
              className="absolute top-0 left-0 w-full h-screen bg-black/20 dark:bg-black/20 light:bg-white/30 -z-[5]"
              aria-hidden="true"
            ></div>

            <div className="self-end">
              <h1
                id="hero-heading"
                className="font-hanson text-[2.5rem] sm:text-[4.2rem] leading-[1.1] uppercase mb-2.5 text-white dark:text-white light:text-black"
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
              className="self-end justify-self-center flex justify-center items-end mb-8 w-full h-8 focus:outline-none focus:ring-2 focus:ring-portfolio-purple focus:ring-offset-2 focus:ring-offset-transparent rounded"
              aria-label="Zu den Projekten scrollen"
            >
              <ChevronDown
                className="cursor-pointer text-white dark:text-white light:text-black w-12 h-12 animate-bounce-arrow"
                aria-hidden="true"
              />
              <span className="sr-only">Nach unten scrollen zu Projekte</span>
            </a>
          </div>
        </section>

        <section
          className="py-32 lg:py-44 bg-[var(--bg-color)] border-y border-white/[0.1]"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <ProjectsSection />
          </div>
        </section>
      </main>
    </>
  );
}
