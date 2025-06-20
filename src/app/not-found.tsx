import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main
      role="main"
      className="min-h-screen flex items-center justify-center bg-[var(--bg-color)]"
      aria-labelledby="error-heading"
    >
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1
            id="error-heading"
            className="font-hanson text-9xl sm:text-[12rem] lg:text-[16rem] leading-none uppercase text-[var(--accent-color)] mb-8"
            aria-label="Fehler 404"
          >
            404
          </h1>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="font-hanson text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase mb-4 text-[var(--text-color)]">
              Seite nicht gefunden
            </h2>
            <p className="text-[var(--light-grey)] text-lg max-w-md mx-auto leading-relaxed">
              Diese Seite existiert nicht oder wurde verschoben. Kehre zur
              Startseite zurück und entdecke meine Projekte.
            </p>
          </div>

          {/* Back to Home Button */}
          <Link
            className="inline-flex items-center justify-center gap-3 py-3.5 px-6 text-white/80 no-underline rounded bg-white/[0.03] border border-white/[0.173] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-base relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-600 hover:text-[var(--accent-color)] hover:bg-[rgba(161,150,223,0.15)] hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)] hover:before:left-full active:-translate-y-px"
            href="/"
            aria-label="Zurück zur Startseite"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
