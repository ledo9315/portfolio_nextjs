"use client";

import { useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";

export function Footer() {
  const SOCIAL_LINKS = [
    {
      title: "GitHub",
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/ledo9315",
    },
    {
      title: "LinkedIn",
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/leonid-domahalskyy-0a6b95206/?originalSubdomain=de",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <motion.footer
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(80px)",
        transition: `all 0.8s ease-out`,
      }}
      className="bg-[var(--bg-color)] py-20 relative"
    >
      <div className="container">
        <div className="bg-white/5 rounded border border-white/26 p-[60px_40px] backdrop-blur-[10px] relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.1)] max-[767px]:rounded-2xl max-[767px]:py-10 max-[767px]:px-2.5 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.02)_1px,transparent_0)] before:bg-[length:20px_20px] before:pointer-events-none">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_auto] gap-[50px] md:gap-20 items-start mb-[50px] relative z-[1]">
            <div className="text-center md:text-left">
              <h3 className="font-hanson text-[5vw] md:text-4xl font-bold text-white mb-3 uppercase tracking-[1px]">
                Leonid Domahalskyy
              </h3>
              <p className="text-[1.1rem] text-white/80 mb-2 font-medium">
                Fullstack Developer & UI/UX Designer
              </p>
              <p className="text-[0.95rem] text-white/60 m-0 before:content-['📍_'] before:mr-1">
                Flensburg, Deutschland
              </p>
            </div>

            <div className="text-center md:text-left w-full 2xl:w-40 justify-self-end">
              <div className="flex flex-col sm:flex-row sm:justify-center md:flex-col md:justify-start gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center justify-center gap-3 py-3.5 px-4 text-white/80 no-underline rounded bg-white/[0.03] border border-white/[0.173] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-[0.95rem] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-600 hover:text-[var(--accent-color)] hover:bg-[rgba(161,150,223,0.15)] hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)] hover:before:left-full active:-translate-y-px"
                    target="_blank"
                    rel="noopener"
                    aria-label="GitHub"
                  >
                    {link.icon}
                    <span className="text-[0.95rem]">{link.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row gap-5 md:justify-between md:items-center md:gap-10 pt-[30px] border-t border-white/[0.08] relative z-[1]">
            <nav
              className="flex gap-6 justify-center md:justify-end"
              aria-label="Legal"
            >
              <Link
                href="/legal"
                className="text-white/60 no-underline text-sm py-2 border-b border-transparent transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-[var(--accent-color)] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:text-purple hover:after:w-full"
              >
                Impressum
              </Link>
              <Link
                href="/privacy-policy"
                className="text-white/60 no-underline text-sm py-2 border-b border-transparent transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-[var(--accent-color)] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:text-purple hover:after:w-full"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
