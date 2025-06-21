import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[var(--bg-color)] py-20 relative">
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
                <Link
                  href="https://github.com/ledo9315"
                  className="flex items-center justify-center gap-3 py-3.5 px-4 text-white/80 no-underline rounded bg-white/[0.03] border border-white/[0.173] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-[0.95rem] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-600 hover:text-[var(--accent-color)] hover:bg-[rgba(161,150,223,0.15)] hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)] hover:before:left-full active:-translate-y-px"
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub"
                >
                  <svg
                    className="flex-shrink-0 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[5deg]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span className="text-[0.95rem]">GitHub</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/leonid-domahalskyy-0a6b95206/?originalSubdomain=de"
                  className="flex items-center justify-center gap-3 py-3.5 px-4 text-white/80 no-underline rounded bg-white/[0.03] border border-white/[0.173] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-[0.95rem] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-600 hover:text-[var(--accent-color)] hover:bg-[rgba(161,150,223,0.15)] hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)] hover:before:left-full active:-translate-y-px"
                  target="_blank"
                  rel="noopener"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="flex-shrink-0 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-[5deg]"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-[0.95rem]">LinkedIn</span>
                </Link>
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
                className="text-white/60 no-underline text-sm py-2 border-b border-transparent transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-[var(--accent-color)] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:text-[var(--accent-color)] hover:after:w-full"
              >
                Impressum
              </Link>
              <Link
                href="/privacy-policy"
                className="text-white/60 no-underline text-sm py-2 border-b border-transparent transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-px after:bg-[var(--accent-color)] after:transition-all after:duration-300 after:ease-out after:-translate-x-1/2 hover:text-[var(--accent-color)] hover:after:w-full"
              >
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
