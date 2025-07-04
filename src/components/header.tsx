"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NAV_LINKS = [
    {
      title: "PROJEKTE",
      href: "/#main",
    },
    {
      title: "ÜBER MICH",
      href: "/about",
    },
    {
      title: "KONTAKT",
      href: "/contact",
    },
  ];

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

  return (
    <header className="absolute w-full z-50 transition-all duration-300 py-4 bg-black/20 backdrop-blur-sm">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="hover:scale-105 active:scale-95 transition-all duration-300"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            stiffness: 100,
            damping: 25,
            duration: 0.7,
          }}
        >
          <Link href="/">
            <Image
              src="/img/icons/logo.svg"
              alt="Leonid Domahalskyy Logo"
              width={35}
              height={35}
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <nav>
          <ul className={"hidden lg:flex gap-8"}>
            {NAV_LINKS.map((link, index) => (
              <motion.li
                initial={{ opacity: 0, y: -45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: 1.2 + index * 0.2,
                }}
                key={link.title}
              >
                <Link
                  onClick={closeMenu}
                  href={link.href}
                  className="text-white no-underline text-sm py-2 border-b border-transparent transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-[var(--accent-color)] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:text-purple hover:after:w-full"
                >
                  {link.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="lg:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Hauptmenü"
        >
          <span
            className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-[var(--white)] ${
              isMenuOpen ? "transform translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-[var(--white)] ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 my-1.5 mx-auto transition-all duration-300 ease-in-out bg-[var(--white)] ${
              isMenuOpen ? "transform -translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden overflow-hidden backdrop-blur-md shadow-lg px-4 py-5 space-y-5"
          >
            <nav>
              <ul className="flex flex-col space-y-5 pb-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="group flex items-center justify-center h-12 bg-gradient-to-br from-dark-grey/50 to-dark-grey/30 hover:from-purple/20 hover:to-purple/10 border border-purple/30 hover:border-purple/50 rounded-xl transition-all duration-300 ease-out transform hover:scale-102 hover:shadow-lg hover:shadow-purple/20"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple/30 to-transparent mb-6"></div>

            <div className="flex justify-center gap-x-6">
              {SOCIAL_LINKS.map((link) => (
                <div key={link.title}>
                  <Link
                    className="group flex items-center justify-center w-12 h-12 bg-gradient-to-br from-dark-grey/50 to-dark-grey/30 hover:from-purple/20 hover:to-purple/10 border border-purple/30 hover:border-purple/50 rounded-xl transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple/20"
                    onClick={toggleMenu}
                    href={link.href}
                  >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
