import { TechCategory } from "@/components/tech-category";
import {
  Box,
  Database,
  File,
  Globe,
  Layers,
  Palette,
  Server,
  SwatchBook,
  Wrench,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich - Leonid Domahalskyy",
  description:
    "Lerne mehr über Leonid Domahalskyy - Fullstack Developer & UI/UX Designer aus Flensburg",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" role="main" aria-labelledby="about-title">
      {/* About Section */}
      <section className="py-20 md:py-42" aria-labelledby="about-title">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="about-content flex flex-col gap-10">
            <div className="about-text">
              <h1
                id="about-title"
                className="text-4xl md:text-5xl font-hanson font-bold uppercase mb-10 leading-tight tracking-tight"
                aria-label="Über mich"
              >
                Wer ich bin
              </h1>
              <div
                className="text-content max-w-3xl"
                role="article"
                aria-describedby="about-description"
              >
                <p
                  id="about-description"
                  className="text-lg leading-relaxed mb-6"
                >
                  Ich bin ein passionierter Programmierer aus Flensburg im
                  Norden Deutschlands. Mein Wissen in der Softwareentwicklung
                  habe ich durch kontinuierliches Engagement, praktische
                  Erfahrungen und mein Studium der{" "}
                  <span
                    className="font-semibold relative text-purple"
                    aria-label="Studiengang Medieninformatik"
                  >
                    Medieninformatik
                  </span>{" "}
                  an der Hochschule Flensburg erworben.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Ich habe eine besondere Leidenschaft für die Entwicklung von
                  Webanwendungen, insbesondere im Bereich{" "}
                  <span
                    className="font-semibold relative text-purple"
                    aria-label="Schwerpunkt UI/UX Design"
                  >
                    UI/UX Design
                  </span>{" "}
                  und{" "}
                  <span
                    className="font-semibold relative text-purple"
                    aria-label="Schwerpunkt Webentwicklung"
                  >
                    Webentwicklung
                  </span>
                  . Mir ist es wichtig, dass Lösungen nicht nur funktional,
                  sondern auch benutzerfreundlich sind.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Ich halte mich stets über die neuesten Technologien auf dem
                  Laufenden, um sicherzustellen, dass meine Fähigkeiten den
                  aktuellen Anforderungen entsprechen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        className="py-32 md:py-40"
        aria-labelledby="tech-stack-title"
        role="region"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="section-header text-center mb-20 md:mb-28">
            <h2
              id="tech-stack-title"
              className="text-4xl font-hanson md:text-5xl font-bold uppercase mb-4 tracking-tight"
              aria-label="Meine Technologie-Kenntnisse"
            >
              Mein Tech Stack
            </h2>
            <p
              className="text-lg md:text-xl mb-16 text-white/60 font-medium"
              aria-describedby="tech-stack-description"
            >
              <span id="tech-stack-description">
                Technologien, mit denen ich täglich arbeite
              </span>
            </p>
          </div>

          <div
            className="tech-categories grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16 lg:gap-20"
            role="grid"
            aria-label="Technologie-Kategorien"
            aria-describedby="tech-stack-description"
          >
            {/* Frontend Development */}
            <TechCategory
              title="Frontend Frameworks"
              icon={<Layers />}
              technologies={[
                { name: "React", level: "Advanced", type: "advanced" },
                { name: "Next.js", level: "Advanced", type: "advanced" },
                { name: "TypeScript", level: "Advanced", type: "advanced" },
                { name: "JavaScript", level: "Advanced", type: "advanced" },
                { name: "Vite", level: "Advanced", type: "advanced" },
              ]}
            />
            {/* Styling & UI */}
            <TechCategory
              title="Styling & UI Components"
              icon={<Palette />}
              technologies={[
                { name: "CSS3 & SCSS", level: "Expert", type: "expert" },
                { name: "Tailwind CSS", level: "Expert", type: "expert" },
                { name: "Bootstrap", level: "Advanced", type: "advanced" },
                { name: "shadcn/ui", level: "Advanced", type: "advanced" },
              ]}
            />
            {/* State Management */}
            <TechCategory
              title="State & Data Management"
              icon={<Box />}
              technologies={[
                { name: "TanStack Query", level: "Advanced", type: "advanced" },
                { name: "Zustand", level: "Advanced", type: "advanced" },
                {
                  name: "React Hook Form",
                  level: "Advanced",
                  type: "advanced",
                },
                {
                  name: "Redux Toolkit",
                  level: "Intermediate",
                  type: "intermediate",
                },
              ]}
            />
            {/* Backend & Runtime */}
            <TechCategory
              title="Backend & Runtime"
              icon={<Server />}
              technologies={[
                { name: "Node.js", level: "Advanced", type: "advanced" },
                { name: "Express.js", level: "Advanced", type: "advanced" },
                { name: "Deno", level: "Intermediate", type: "intermediate" },
                { name: "Oak", level: "Intermediate", type: "intermediate" },
              ]}
            />
            {/* Database & ORM */}
            <TechCategory
              title="Database & ORM"
              icon={<Database />}
              technologies={[
                { name: "PostgreSQL", level: "Advanced", type: "advanced" },
                { name: "MySQL", level: "Advanced", type: "advanced" },
                { name: "SQLite", level: "Advanced", type: "advanced" },
                {
                  name: "Drizzle ORM",
                  level: "Intermediate",
                  type: "intermediate",
                },
                { name: "Prisma", level: "Intermediate", type: "intermediate" },
              ]}
            />
            {/* Tools & Deployment */}
            <TechCategory
              title="Tools & Deployment"
              icon={<Wrench />}
              technologies={[
                { name: "Git & GitHub", level: "Advanced", type: "advanced" },
                { name: "Vercel", level: "Advanced", type: "advanced" },
                {
                  name: "Better-Auth",
                  level: "Intermediate",
                  type: "intermediate",
                },
              ]}
            />{" "}
            {/* CMS */}
            <TechCategory
              title="Content Management"
              icon={<File />}
              technologies={[
                {
                  name: "Kirby CMS",
                  level: "Intermediate",
                  type: "intermediate",
                },
              ]}
            />
            {/* Design & UX */}
            <TechCategory
              title="Design & UX"
              icon={<SwatchBook />}
              technologies={[
                { name: "Figma", level: "Expert", type: "expert" },
                { name: "UI/UX Design", level: "Advanced", type: "advanced" },
                {
                  name: "Prototyping",
                  level: "Intermediate",
                  type: "intermediate",
                },
              ]}
            />
            {/* Languages */}
            <TechCategory
              title="Sprachen"
              icon={<Globe />}
              technologies={[
                { name: "Deutsch", level: "C2", type: "expert" },
                { name: "Russisch", level: "C2", type: "expert" },
                { name: "Ukrainisch", level: "Native", type: "expert" },
                { name: "Englisch", level: "B1", type: "intermediate" },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
