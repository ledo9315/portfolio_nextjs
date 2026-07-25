"use client";

import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import {
  MdLocationOn as MapPin,
  MdPhone as Phone,
  MdEmail as Mail,
  MdLanguage as Globe,
  MdDownload as Download,
} from "react-icons/md";
import Loading from "../loading";

const LetterPrintComponent = () => {
  return (
    <div className="cv-print bg-white text-black">
      <style jsx>{`
        .cv-print {
          font-family: "Montserrat", Arial, sans-serif;
          line-height: 1.4;
          font-size: 11pt;
          max-width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 15mm;
          background: white;
          color: black;
          box-sizing: border-box;
        }
        .cv-print h1 {
          font-family: "Hanson", Arial, sans-serif;
          font-size: 21pt;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 8pt;
          letter-spacing: 0.5pt;
          border-bottom: 2pt solid #000;
          padding-bottom: 8pt;
        }
        .cv-print h2 {
          font-family: "Hanson", Arial, sans-serif;
          font-size: 13pt;
          font-weight: bold;
          text-transform: uppercase;
          margin-top: 4pt;
          margin-bottom: 8pt;
          letter-spacing: 0.3pt;
          border-bottom: 1pt solid #000;
          padding-bottom: 4pt;
        }
        .cv-print .header {
          display: flex;
          align-items: flex-start;
          gap: 8pt;
        }
        .cv-print .header-text {
          flex: 1;
          min-width: 0;
        }
        .cv-print .profile-photo {
          width: 35mm;
          height: 44mm;
          object-fit: cover;
          object-position: 28% top;
          border: 1pt solid #000;
          flex-shrink: 0;
        }
        .cv-print .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8pt;
          margin-bottom: 10pt;
          font-size: 10pt;
        }
        .cv-print .contact-item {
          display: flex;
          align-items: center;
          gap: 4pt;
        }
        .cv-print .section {
          margin-bottom: 16pt;
        }
        .cv-print .meta {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12pt;
          margin-bottom: 16pt;
          font-size: 10pt;
        }
        .cv-print .recipient {
          line-height: 1.5;
        }
        .cv-print .recipient-label {
          color: #666;
          margin-bottom: 4pt;
        }
        .cv-print .date {
          color: #666;
          white-space: nowrap;
        }
        .cv-print .letter-text {
          font-size: 10pt;
          line-height: 1.45;
          text-align: justify;
        }
        .cv-print .letter-text p {
          margin-bottom: 8pt;
        }
        .cv-print .signature {
          margin-top: 12pt;
          font-size: 10pt;
          line-height: 1.6;
        }
        .cv-print .signature-name {
          font-weight: 600;
        }
        @media print {
          @page {
            size: A4;
            margin: 15mm;
          }
          .cv-print {
            padding: 0 !important;
            margin: 0 !important;
            box-shadow: none;
            max-width: none !important;
            min-height: auto;
            width: 100% !important;
            box-sizing: border-box;
            background: white !important;
            color: black !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Anschreiben */}
      <div className="section">
        <h2>Bewerbung als PHP Vibe-Coder (Laravel)</h2>
        <div className="letter-text">
          <p>Sehr geehrter Herr Leuschner,</p>

          <p>
            Ihre Ausschreibung habe ich mir genau angesehen, und die Aufgaben
            und Qualifikationen passen zu 100 Prozent auf mein Profil. Deshalb
            bewerbe ich mich bei Ihnen.
          </p>

          <p>
            Mit React, Next.js und TypeScript arbeite ich seit mehreren Jahren,
            seit einem Jahr entwickle ich hauptberuflich mit Laravel und PHP.
            Bei Pingu Solutions bin ich als Fullstack-Entwickler für
            Webanwendungen zuständig und setze dort Laravel, Livewire, React, Vue.js und
            Statamic ein.
          </p>

          <p>
            Ab 2023 habe ich eigene Kundenprojekte umgesetzt, jeweils von der
            Anforderungsklärung über Konzept und Design bis zur fertigen
            Anwendung. In mehreren dieser Projekte habe ich die technische
            Verantwortung getragen und sie eigenständig bis zum Livegang
            gebracht. Docker, CI/CD-Pipelines und Deployment sind für mich
            Alltag, sowohl in Firmenprojekten als auch in meinen eigenen
            Anwendungen, die ich über Laravel Forge, Laravel Cloud und Vercel betreibe.
            Automatisierte Tests gehören dazu, in PHP mit Pest, im
            JavaScript-Umfeld mit Vitest.
          </p>

          <p>
            Mit KI-Plattformen habe ich bereits praktisch gearbeitet. Mein Event
            Crawler ist eine Laravel-Anwendung, die Veranstaltungsseiten
            automatisiert crawlt und die Event-Daten über einen angebundenen
            KI-Service strukturiert extrahiert: eine mehrstufige Queue-Pipeline
            mit eigenen Kanälen für Crawling, Extraktion und Nachbearbeitung,
            dazu Duplikatserkennung, Callback-Schnittstelle für die KI-Antworten
            und ein Dashboard zur Überwachung. Ein zweites größeres Projekt ist
            eine Next.js-Plattform für Coding-Challenges, bei der Nutzercode in
            vier Sprachen in einer isolierten Docker-Umgebung ausgeführt und über
            Testfälle bewertet wird. Claude Code nutze ich täglich als
            festen Teil meines Workflows, nicht nebenbei.
          </p>

          <p>
            Fachlich komme ich aus der Medieninformatik, meinen Bachelor habe ich
            an der Hochschule Flensburg abgeschlossen. Seit diesem Jahr studiere
            ich dort im Master Angewandte Informatik mit Schwerpunkt
            Cybersecurity.
          </p>

          <p>
            Die vollständig remote ausgeschriebene Stelle passt gut zu meiner
            Arbeitsweise. Über ein Gespräch würde ich mich freuen.
          </p>
        </div>

        <div className="signature">
          Mit freundlichen Grüßen
          <br />
          <span className="signature-name">Leonid Domahalskyy</span>
        </div>
      </div>
    </div>
  );
};

export default function AnschreibenPrintPage() {
  const componentRef = useRef<HTMLDivElement>(null);

  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Leonid_Domahalskyy_Anschreiben_Plotdesk",
    pageStyle: `
      @page {
        size: A4;
        margin: 15mm;
      }
      @media print {
        body {
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
        }
        .cv-print {
          margin: 0 !important;
          padding: 0 !important;
          box-shadow: none !important;
          max-width: none !important;
          width: 100% !important;
          background: white !important;
          color: black !important;
        }
      }
    `,
  });

  if (isloading) return <Loading />;

  return (
    <div className="letter-page min-h-screen">
      {/* ponytail: strips site chrome + dark background so a headless print of this URL is a clean A4 PDF */}
      <style jsx global>{`
        @media print {
          header,
          footer,
          .print-button {
            display: none !important;
          }
          html,
          body,
          main,
          body > div {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
            /* globals.css forces print-color-adjust: exact on *, which paints the
               dark page background into the PDF — opt these wrappers back out */
            -webkit-print-color-adjust: economy !important;
            print-color-adjust: economy !important;
          }
          .letter-page,
          .letter-page .container,
          .letter-page .letter-sheet {
            margin: 0 !important;
            padding: 0 !important;
            max-width: none !important;
            width: 100% !important;
            min-height: 0 !important;
            background: white !important;
            border-radius: 0 !important;
            box-shadow: none !important;
          }
        }
      `}</style>
      <div className="container">
        <div className="print-button text-center space-y-4 mt-24 mb-8">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrint}
              className="flex items-center justify-center gap-3 py-3.5 px-4 text-white/80 no-underline rounded bg-white/[0.03] border border-white/[0.173] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-medium text-[0.95rem] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:transition-[left] before:duration-600 hover:text-[var(--accent-color)] hover:bg-[rgba(161,150,223,0.15)] hover:border-[rgba(161,150,223,0.3)] hover:-translate-y-[3px] hover:shadow-[0_8px_25px_rgba(161,150,223,0.2),0_4px_12px_rgba(0,0,0,0.1)] hover:before:left-full active:-translate-y-px"
            >
              <Download className="w-5 h-5" />
              Als PDF herunterladen
            </button>
          </div>
        </div>

        <div className="letter-sheet bg-[white] rounded-lg shadow-2xl overflow-hidden mb-8">
          <div ref={componentRef}>
            <LetterPrintComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
