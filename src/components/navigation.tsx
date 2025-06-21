"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container grid grid-cols-2 items-center h-[70px] bg-black/20 backdrop-blur-sm">
        <Link href="/" className="justify-self-start">
          <Image
            src="/img/icons/logo.svg"
            alt="Leonid Domahalskyy Logo"
            width={35}
            height={35}
            className="block transition-transform duration-300 hover:scale-110 active:translate-y-0.5"
          />
        </Link>

        <ul
          className={`justify-self-end ${
            isMenuOpen
              ? "flex flex-col items-center justify-center gap-8 text-4xl font-bold fixed top-[70px] left-0 w-full h-[calc(100dvh-70px)] bg-black/95 backdrop-blur-md z-[100] font-hanson"
              : "hidden lg:flex lg:flex-row lg:gap-8"
          }`}
        >
          <li className="flex items-center transition-all duration-300 text-4xl lg:text-sm uppercase hover:text-purple active:translate-y-px">
            <Link
              onClick={closeMenu}
              href="/#main"
              className="whitespace-nowrap block py-2.5 px-5 font-medium text-purple lg:text-white lg:hover:text-purple"
            >
              Projekte
            </Link>
          </li>
          <li className="flex items-center transition-all duration-300 text-4xl lg:text-sm uppercase hover:text-purple active:translate-y-px">
            <Link
              onClick={closeMenu}
              href="/about"
              className="whitespace-nowrap block py-2.5 px-5 font-medium hover:text-purple"
            >
              Über mich
            </Link>
          </li>
          <li className="flex items-center transition-all duration-300 text-4xl lg:text-sm uppercase hover:text-purple active:translate-y-px">
            <Link
              onClick={closeMenu}
              href="/contact"
              className="whitespace-nowrap block py-2.5 px-5 font-medium hover:text-purple"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        <button
          className="justify-self-end block lg:hidden cursor-pointer"
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
        </button>
      </div>
    </nav>
  );
}
