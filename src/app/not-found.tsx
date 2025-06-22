import Link from "next/link";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <>
      <div className="container text-center">
        <div className="max-w-2xl mx-auto py-42">
          {/* 404 Number */}
          <h1
            id="error-heading"
            className="font-hanson text-9xl sm:text-[12rem] lg:text-[16rem] leading-none uppercase text-purple mb-8"
            aria-label="Fehler 404"
          >
            404
          </h1>

          {/* Error Message */}
          <div className="mb-12">
            <h2 className="font-hanson text-4xl sm:text-5xl lg:text-6xl leading-tight uppercase mb-4">
              Seite nicht gefunden
            </h2>
            <p className="text-white/60 text-lg max-w-md mx-auto leading-relaxed">
              Diese Seite existiert nicht oder wurde verschoben. Kehre zur
              Startseite zurück und entdecke meine Projekte.
            </p>
          </div>

          {/* Back to Home Button */}
          <Button href="/" aria-label="Zurück zur Startseite">
            Zur Startseite
          </Button>
        </div>
      </div>
    </>
  );
}
