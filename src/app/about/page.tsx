"use client";

import { TechCategory } from "@/components/tech-category";
import {
  MdInventory as Box,
  MdStorage as Database,
  MdInsertDriveFile as File,
  MdLanguage as Globe,
  MdLayers as Layers,
  MdPalette as Palette,
  MdDeveloperBoard as Server,
  MdColorLens as SwatchBook,
  MdBuild as Wrench,
  MdGroup as Users,
  MdGpsFixed as Target,
  MdLocationOn as MapPin,
  MdSchool as GraduationCap,
  MdCode as Code,
  MdFavorite as Heart,
} from "react-icons/md";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function AboutContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "0px" });

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 60 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pt-20 pb-16 md:pt-32 md:pb-24"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={
                heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
              }
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              id="about-title"
              className="text-4xl md:text-6xl font-hanson font-bold uppercase mb-6 leading-tight tracking-tight"
            >
              Das bin ich
            </motion.h1>
            {/* About Content */}
            <div className="about-content">
              <div className="about-text">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={
                    heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                  }
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  className="text-content max-w-3xl"
                  role="article"
                  aria-describedby="about-description"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
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
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className="text-lg leading-relaxed mb-6"
                  >
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
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                    className="text-lg leading-relaxed mb-6"
                  >
                    Nach meinem Abschluss strebe ich eine Stelle im Bereich
                    Webentwicklung an, um meine Kenntnisse in Frontend- und
                    Full-Stack-Entwicklung weiter zu vertiefen. Neue
                    Technologien faszinieren mich, aber ich setze nur das ein,
                    was wirklich Sinn macht.
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Personal Info Cards */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <MapPin className="w-5 h-5 text-purple" />,
                title: "Wo ich zu Hause bin",
                description: "Flensburg - ganz oben im Norden",
                delay: 0.2,
              },
              {
                icon: <GraduationCap className="w-5 h-5 text-purple" />,
                title: "Was ich gerade mache",
                description: "B.Sc. Medieninformatik",
                delay: 0.4,
              },
              {
                icon: <Target className="w-5 h-5 text-purple" />,
                title: "Wo es hingeht",
                description:
                  "Vollzeit-Stelle im Bereich\nFrontend/Full-Stack Development",
                delay: 0.6,
              },
            ].map((card, index) => {
              const cardRef = useRef(null);
              const cardInView = useInView(cardRef, {
                once: true,
                margin: "0px",
              });

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: card.delay,
                  }}
                  className={`bg-white/[0.02] border border-white/[0.1] rounded-xl p-6 ${
                    index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                  } ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-purple/10 rounded-lg">
                      {card.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-white/70">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white/[0.01] border-y border-white/[0.1]">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <motion.div
            ref={useRef(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-hanson font-bold uppercase mb-4 tracking-tight">
              Was mich ausmacht
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Diese Eigenschaften zeichnen mich aus - sowohl im Team als auch
              bei der Arbeit mit Kunden
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-purple" />,
                title: "Innovationsfreude",
                description:
                  "Ich liebe es, neue Ideen umzusetzen und kreative Lösungen zu finden, die echten Mehrwert schaffen. Dabei bleibe ich aber immer realistisch und praxisorientiert.",
                delay: 0.2,
              },
              {
                icon: <Users className="w-8 h-8 text-purple" />,
                title: "Teamfähigkeit",
                description:
                  "Zusammenarbeit im Team motiviert mich, und ich schätze den Austausch, um gemeinsam die besten Ergebnisse zu erzielen. Die coolsten Projekte entstehen nun mal zusammen!",
                delay: 0.4,
              },
              {
                icon: <Target className="w-8 h-8 text-purple" />,
                title: "Kundenfokus",
                description:
                  "Mir ist wichtig, die Wünsche der Kunden zu verstehen und Ergebnisse zu liefern, die wirklich überzeugen. Am Ende soll das Projekt genau das werden, was du dir vorgestellt hast.",
                delay: 0.6,
              },
            ].map((value, index) => {
              const valueRef = useRef(null);
              const valueInView = useInView(valueRef, {
                once: true,
                margin: "0px",
              });

              return (
                <motion.div
                  key={index}
                  ref={valueRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    valueInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: value.delay,
                  }}
                  className={`group bg-white/[0.02] border border-white/[0.1] rounded-xl p-8 ${
                    index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 bg-purple/10 rounded-xl mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <motion.div
            ref={useRef(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-hanson font-bold uppercase tracking-tight">
              Was mich antreibt
            </h2>
            <p className="text-lg leading-relaxed text-white/80 mb-8">
              Diese Balance zwischen technischer Perfektion und kreativem Design
              - das ist es, was mich jeden Tag aufs Neue fasziniert. Es ist wie
              ein Puzzle: Alles muss perfekt zusammenpassen.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: "Sauberer Code",
                  description:
                    "Code muss nicht nur funktionieren - er muss sauber, wartbar und performant sein. Das ist für mich keine Option, sondern Standard.",
                  delay: 0.2,
                },
                {
                  title: "Benutzerfreundliches Design",
                  description:
                    "Eine Website soll Spaß machen zu bedienen! Jede Interaktion sollte sich natürlich anfühlen - das ist für mich gute User Experience.",
                  delay: 0.4,
                },
              ].map((item, index) => {
                const itemRef = useRef(null);
                const itemInView = useInView(itemRef, {
                  once: true,
                  margin: "0px",
                });

                return (
                  <motion.div
                    key={index}
                    ref={itemRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                      delay: item.delay,
                    }}
                    className="text-left"
                  >
                    <h3 className="text-xl text-center font-semibold mb-4 text-purple">
                      {item.title}
                    </h3>
                    <p className="text-white/70 text-center leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        className="py-20 md:py-32 bg-white/[0.01] border-y border-white/[0.1]"
        aria-labelledby="tech-stack-title"
      >
        <div className="container mx-auto px-4 md:px-16 lg:px-32 max-w-7xl">
          <motion.div
            ref={useRef(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="section-header text-center mb-20"
          >
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
          </motion.div>

          <div className="tech-categories grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: "Design & UX",
                icon: <SwatchBook />,
                technologies: [
                  { name: "Figma", level: "Expert", type: "expert" as const },
                  {
                    name: "UI/UX Design",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Prototyping",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.1,
              },
              {
                title: "Frontend Technologies",
                icon: <Layers />,
                technologies: [
                  {
                    name: "React",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Next.js",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "TypeScript",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "JavaScript",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                ],
                delay: 0.2,
              },
              {
                title: "Styling & UI Components",
                icon: <Palette />,
                technologies: [
                  {
                    name: "CSS3 & SCSS",
                    level: "Expert",
                    type: "expert" as const,
                  },
                  {
                    name: "Tailwind CSS",
                    level: "Expert",
                    type: "expert" as const,
                  },
                  {
                    name: "shadcn/ui",
                    level: "Expert",
                    type: "expert" as const,
                  },
                  {
                    name: "Bootstrap",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                ],
                delay: 0.3,
              },
              {
                title: "State & Data Management",
                icon: <Box />,
                technologies: [
                  {
                    name: "TanStack Query",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Zustand",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "React Hook Form",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Redux Toolkit",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                  {
                    name: "Zod",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.4,
              },
              {
                title: "Backend & Runtime",
                icon: <Server />,
                technologies: [
                  {
                    name: "Node.js",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Express.js",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Better-Auth",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Deno",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                  {
                    name: "Oak",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                  {
                    name: "Stripe",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.5,
              },
              {
                title: "Database & ORM",
                icon: <Database />,
                technologies: [
                  {
                    name: "PostgreSQL",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "MySQL",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "SQLite",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Drizzle ORM",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                  {
                    name: "Prisma",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.6,
              },
              {
                title: "Content Management",
                icon: <File />,
                technologies: [
                  {
                    name: "WordPress",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Elementor",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Kirby CMS",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                  {
                    name: "Payload CMS",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.7,
              },
              {
                title: "Tools & Deployment",
                icon: <Wrench />,
                technologies: [
                  {
                    name: "Git & GitHub",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Vite",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Vercel",
                    level: "Advanced",
                    type: "advanced" as const,
                  },
                  {
                    name: "Docker",
                    level: "Intermediate",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.8,
              },
              {
                title: "Sprachen",
                icon: <Globe />,
                technologies: [
                  { name: "Deutsch", level: "C2", type: "expert" as const },
                  { name: "Russisch", level: "C2", type: "expert" as const },
                  {
                    name: "Ukrainisch",
                    level: "Native",
                    type: "expert" as const,
                  },
                  {
                    name: "Englisch",
                    level: "B1",
                    type: "intermediate" as const,
                  },
                ],
                delay: 0.9,
              },
            ].map((category, index) => {
              const categoryRef = useRef(null);
              const categoryInView = useInView(categoryRef, {
                once: true,
                margin: "0px",
              });

              return (
                <motion.div
                  key={index}
                  ref={categoryRef}
                  initial={{ opacity: 0, y: 60 }}
                  animate={
                    categoryInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 60 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: category.delay,
                  }}
                >
                  <TechCategory
                    title={category.title}
                    icon={category.icon}
                    technologies={category.technologies}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
