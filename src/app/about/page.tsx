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
  Users,
  Target,
  MapPin,
  GraduationCap,
  Code,
  Heart,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich - Leonid Domahalskyy",
  description:
    "Hey! Ich bin Leonid und stehe kurz vor meinem Abschluss. Von der Leidenschaft zur Webentwicklung - hier erfährst du mehr über meinen Weg.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-20 pb-16 md:pt-32 md:pb-24"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="max-w-4xl">
            <h1
              id="about-title"
              className="text-4xl md:text-6xl font-hanson font-bold uppercase mb-6 leading-tight tracking-tight"
            >
              Das bin ich
            </h1>
            {/* About Content */}
            <div className="about-content">
              <div className="about-text">
                <div
                  className="text-content max-w-3xl"
                  role="article"
                  aria-describedby="about-description"
                >
                  <p
                    id="about-description"
                    className="text-lg leading-relaxed mb-6"
                  >
                    Ich komme aus Flensburg und studiere hier an der Hochschule{" "}
                    <span className="font-semibold relative text-purple">
                      Medieninformatik
                    </span>
                    . Meine Programmier-Kenntnisse habe ich durch
                    kontinuierliches Lernen, praxisnahe Projekte und natürlich
                    mein Studium aufgebaut. Was als Interesse begann, ist heute
                    meine komplette Leidenschaft.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Was mich richtig begeistert? Die Kombination aus{" "}
                    <span className="font-semibold relative text-purple">
                      kreativem Design
                    </span>{" "}
                    und{" "}
                    <span className="font-semibold relative text-purple">
                      sauberer Programmierung
                    </span>
                    . Eine Website muss nicht nur funktionieren - sie muss auch
                    richtig gut aussehen und sich intuitiv bedienen lassen.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Nach meinem Abschluss strebe ich eine Stelle im Bereich
                    Webentwicklung an, um meine Kenntnisse in Frontend- und
                    Full-Stack-Entwicklung weiter zu vertiefen. Neue
                    Technologien faszinieren mich, aber ich setze nur das ein,
                    was wirklich Sinn macht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Info Cards */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-purple/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple" />
                </div>
                <h3 className="text-lg font-semibold">Wo ich zu Hause bin</h3>
              </div>
              <p className="text-white/70">Flensburg - ganz oben im Norden</p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-purple/10 rounded-lg">
                  <GraduationCap className="w-5 h-5 text-purple" />
                </div>
                <h3 className="text-lg font-semibold">Was ich gerade mache</h3>
              </div>
              <p className="text-white/70">B.Sc. Medieninformatik</p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-purple/10 rounded-lg">
                  <Target className="w-5 h-5 text-purple" />
                </div>
                <h3 className="text-lg font-semibold">Wo es hingeht</h3>
              </div>
              <p className="text-white/70">
                Vollzeit-Stelle im Bereich
                <br />
                Frontend/Full-Stack Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white/[0.01] border-y border-white/[0.1]">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-hanson font-bold uppercase mb-4 tracking-tight">
              Was mich ausmacht
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Diese Eigenschaften zeichnen mich aus - sowohl im Team als auch
              bei der Arbeit mit Kunden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/[0.02] border border-white/[0.1] rounded-xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple/10 rounded-xl mb-6">
                  <Code className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Innovationsfreude
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Ich liebe es, neue Ideen umzusetzen und kreative Lösungen zu
                  finden, die echten Mehrwert schaffen. Dabei bleibe ich aber
                  immer realistisch und praxisorientiert.
                </p>
              </div>
            </div>

            <div className="group bg-white/[0.02] border border-white/[0.1] rounded-xl p-8">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple/10 rounded-xl mb-6">
                  <Users className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Teamfähigkeit</h3>
                <p className="text-white/70 leading-relaxed">
                  Zusammenarbeit im Team motiviert mich, und ich schätze den
                  Austausch, um gemeinsam die besten Ergebnisse zu erzielen. Die
                  coolsten Projekte entstehen nun mal zusammen!
                </p>
              </div>
            </div>

            <div className="group bg-white/[0.02] border border-white/[0.1] rounded-xl p-8 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-purple/10 rounded-xl mb-6">
                  <Target className="w-8 h-8 text-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Kundenfokus</h3>
                <p className="text-white/70 leading-relaxed">
                  Mir ist wichtig, die Wünsche der Kunden zu verstehen und
                  Ergebnisse zu liefern, die wirklich überzeugen. Am Ende soll
                  das Projekt genau das werden, was du dir vorgestellt hast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <Heart className="w-6 h-6 text-purple" />
              <h2 className="text-2xl md:text-3xl font-hanson font-bold uppercase tracking-tight">
                Was mich antreibt
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              Diese Balance zwischen technischer Perfektion und kreativem Design
              - das ist es, was mich jeden Tag aufs Neue fasziniert. Es ist wie
              ein Puzzle: Alles muss perfekt zusammenpassen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-purple">
                  Technische Exzellenz
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Code muss nicht nur funktionieren - er muss sauber, wartbar
                  und performant sein. Das ist für mich keine Option, sondern
                  Standard.
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4 text-purple">
                  Benutzerfreundliches Design
                </h3>
                <p className="text-white/70 leading-relaxed">
                  Eine Website soll Spaß machen zu bedienen! Jede Interaktion
                  sollte sich natürlich anfühlen - das ist für mich gute User
                  Experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        className="py-20 md:py-32 bg-white/[0.01] border-y border-white/[0.1]"
        aria-labelledby="tech-stack-title"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="section-header text-center mb-20">
            <h2
              id="tech-stack-title"
              className="text-3xl md:text-4xl font-hanson font-bold uppercase mb-6 tracking-tight"
            >
              Technologie-Stack
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Moderne Technologien, mit denen ich täglich arbeite und innovative
              Lösungen entwickle
            </p>
          </div>

          <div className="tech-categories grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16">
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
            />
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
    </>
  );
}
