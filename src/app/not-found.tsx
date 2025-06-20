import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Seite nicht gefunden | Leonid Domahalskyy Portfolio",
  description:
    "Die gesuchte Seite konnte nicht gefunden werden. Zurück zur Startseite.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundPage() {
  return (
    <main className="relative h-screen">
      <div className="container grid items-center h-full pt-[70px]">
        <div className="self-center text-center">
          {/* 404 Number - positioned like the hero heading */}
          <div className="mb-8">
            <span className="font-hanson text-[8rem] sm:text-[12rem] leading-[1.1] uppercase text-purple/20 select-none font-bold">
              404
            </span>
          </div>

          {/* Main heading - styled like hero text */}
          <h1 className="font-hanson text-[2.5rem] sm:text-[4.2rem] leading-[1.1] uppercase mb-8 text-white">
            Seite
            <br />
            <span className="text-purple">nicht gefunden</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-md mx-auto">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>

          {/* Action links - styled like navigation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/"
              className="text-white hover:text-purple transition-colors duration-300 text-lg font-medium underline underline-offset-4 decoration-2 decoration-transparent hover:decoration-purple"
            >
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
