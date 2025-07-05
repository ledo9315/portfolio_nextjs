"use client";

import { MdKeyboardArrowDown as ChevronDown } from "react-icons/md";
import { BackgroundVideo } from "@/components/background-video";
import { ProjectsSection } from "@/components/projects-section";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <section
        className="relative h-screen"
        aria-labelledby="hero-heading"
        role="banner"
      >
        <div className="container grid items-center h-full">
          <BackgroundVideo />
          <div
            className="absolute top-0 left-0 w-full h-screen bg-black/20 dark:bg-black/20 light:bg-white/30 -z-[5]"
            aria-hidden="true"
          ></div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 50,
              delay: 0.2,
            }}
            className="self-end"
          >
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
            >
              <span className="relative animate-header-subtitle">
                <span className="text-yellow-green not-italic">UI/UX</span>
                <br />
                <span className="text-purple not-italic">designer</span>
                <br />
                <span className="text-purple not-italic">web</span>
                <br />
                <span className="text-yellow-green not-italic">developer</span>
              </span>
            </div>

            <div className="w-full sm:w-[250px]">
              <a
                href="/lebenslauf-print"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 py-3.5 px-6 text-white/90 no-underline rounded-lg bg-gradient-to-r from-purple/20 to-yellow-green/20 border border-white/20 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-[0.95rem] relative overflow-hidden backdrop-blur-sm hover:text-white hover:bg-gradient-to-r hover:from-purple/30 hover:to-yellow-green/30 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(161,150,223,0.25),0_6px_15px_rgba(144,212,145,0.15)] active:-translate-y-0.5 focus-visible:text-white focus-visible:bg-gradient-to-r focus-visible:from-purple/30 focus-visible:to-yellow-green/30 focus-visible:border-white/30 focus-visible:-translate-y-1 focus-visible:shadow-[0_12px_30px_rgba(161,150,223,0.25),0_6px_15px_rgba(144,212,145,0.15)] focus-visible:no-underline"
                aria-label="Lebenslauf als PDF öffnen"
              >
                <span>Lebenslauf ansehen</span>
                <LuSquareArrowOutUpRight />
              </a>
            </div>
          </motion.div>

          <a
            href="#projects"
            className="self-end justify-self-center flex justify-center items-end mb-8 w-auto h-8 rounded p-2 focus-visible:bg-white/10"
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
    </>
  );
}
