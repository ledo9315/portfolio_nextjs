"use client";

import Link from "next/link";
import { MdRefresh as RefreshCw, MdHome as Home } from "react-icons/md";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-hanson text-[4rem] sm:text-[6rem] leading-none uppercase text-purple mb-6">
            Oops!
          </h1>

          <div className="mb-8">
            <h2 className="font-hanson text-[1.5rem] sm:text-[2rem] leading-tight uppercase mb-4 text-purple">
              Etwas ist schief gelaufen
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Es ist ein unerwarteter Fehler aufgetreten. Bitte versuche es
              erneut oder kehre zur Startseite zurück.
            </p>
            {process.env.NODE_ENV === "development" && (
              <details className="text-left bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <summary className="cursor-pointer text-red-400 font-medium mb-2">
                  Fehlerdetails (Development)
                </summary>
                <pre className="text-sm text-red-300 overflow-auto">
                  {error.message}
                </pre>
              </details>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--accent-color)] text-white font-medium rounded-lg hover:bg-[var(--dark-purple)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--bg-color)]"
            >
              <RefreshCw size={18} />
              Erneut versuchen
            </button>

            <Link
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 border border-[var(--accent-color)] text-[var(--accent-color)] font-medium rounded-lg hover:bg-[var(--accent-color)] hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--bg-color)]"
            >
              <Home size={18} />
              Zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
