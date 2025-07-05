"use client";

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  MdLocationOn as MapPin,
  MdPhone as Phone,
  MdEmail as Mail,
  MdLanguage as Globe,
  MdDownload as Download,
  MdSchool as GraduationCap,
  MdWork as Briefcase,
  MdStar as Award,
  MdCode as Code,
  MdTranslate as Languages,
  MdFavorite as Heart,
  MdOpenInNew as ExternalLink,
} from "react-icons/md";

const CVPrintComponent = () => {
  return (
    <div className="cv-print bg-white text-black font-mono">
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
          font-size: 24pt;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 8pt;
          letter-spacing: 0.5pt;
          border-bottom: 2pt solid #000;
          padding-bottom: 8pt;
        }
        .cv-print h2 {
          font-family: "Hanson", Arial, sans-serif;
          font-size: 14pt;
          font-weight: bold;
          text-transform: uppercase;
          margin-top: 16pt;
          margin-bottom: 8pt;
          letter-spacing: 0.3pt;
          border-bottom: 1pt solid #000;
          padding-bottom: 4pt;
        }
        .cv-print h3 {
          font-weight: 600;
          font-size: 12pt;
          margin-bottom: 4pt;
        }
        .cv-print .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8pt;
          margin-bottom: 16pt;
          font-size: 10pt;
        }
        .cv-print .contact-item {
          display: flex;
          align-items: center;
          gap: 4pt;
        }
        .cv-print .section {
          margin-bottom: 16pt;
          break-inside: avoid;
        }
        .cv-print .job-entry {
          margin-bottom: 12pt;
          padding-left: 12pt;
          border-left: 3pt solid #000;
          break-inside: avoid;
        }
        .cv-print .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4pt;
        }
        .cv-print .job-title {
          font-weight: 600;
          font-size: 11pt;
        }
        .cv-print .job-date {
          font-size: 9pt;
          color: #666;
        }
        .cv-print .job-company {
          color: #666;
          font-size: 10pt;
          margin-bottom: 4pt;
        }
        .cv-print .job-description {
          font-size: 10pt;
          margin-bottom: 4pt;
          line-height: 1.3;
        }
        .cv-print .job-tech {
          font-size: 9pt;
          color: #555;
          font-style: italic;
        }
        .cv-print .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12pt;
        }
        .cv-print .skill-category {
          break-inside: avoid;
        }
        .cv-print .skill-category h3 {
          font-size: 11pt;
          margin-bottom: 6pt;
          font-weight: 600;
        }
        .cv-print .skill-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .cv-print .skill-list li {
          font-size: 10pt;
          margin-bottom: 2pt;
          line-height: 1.2;
        }
        .cv-print .language-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6pt;
        }
        .cv-print .language-item {
          display: flex;
          justify-content: space-between;
          font-size: 10pt;
        }
        .cv-print .strengths-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12pt;
        }
        .cv-print .strength-item {
          break-inside: avoid;
        }
        .cv-print .strength-title {
          font-weight: 600;
          font-size: 10pt;
          margin-bottom: 2pt;
        }
        .cv-print .strength-desc {
          font-size: 9pt;
          line-height: 1.3;
          color: #444;
        }
        .cv-print .subtitle {
          font-size: 14pt;
          color: #666;
          margin-bottom: 12pt;
          font-weight: normal;
        }
        .cv-print .about-text {
          font-size: 10pt;
          line-height: 1.4;
          text-align: justify;
          margin-bottom: 16pt;
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
          .print-button {
            display: none !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          body {
            margin: 0 !important;
            padding: 0 !important;
          }
        }
      `}</style>

      {/* Header */}
      <div className="section">
        <h1>Leonid Domahalskyy</h1>
        <div className="subtitle">Fullstack Developer & UI/UX Designer</div>

        <div className="contact-grid">
          <div className="contact-item">
            <MapPin size={12} />
            <span>Rude 13, 24941 Flensburg, Deutschland</span>
          </div>
          <div className="contact-item">
            <Mail size={12} />
            <span>leonid.domagalsky@gmail.com</span>
          </div>
          <div className="contact-item">
            <Globe size={12} />
            <span>www.leonid-domahalskyy.com</span>
          </div>
          <div className="contact-item">
            <Phone size={12} />
            <span>0176/41195609</span>
          </div>
        </div>
      </div>

      {/* Über mich */}
      <div className="section">
        <h2>Über mich</h2>
        <div className="about-text">
          Ich komme aus Flensburg und studiere hier an der Hochschule
          Medieninformatik. Meine Programmier-Kenntnisse habe ich durch
          kontinuierliches Lernen, praxisnahe Projekte und natürlich mein
          Studium aufgebaut. Was mich richtig begeistert ist die Kombination aus
          kreativem Design und sauberer Programmierung. Eine Website muss nicht
          nur funktionieren - sie muss auch richtig gut aussehen und sich
          intuitiv bedienen lassen.
        </div>
      </div>

      {/* Ausbildung */}
      <div className="section">
        <h2>Ausbildung</h2>
        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">
              Bachelor of Science - Medieninformatik
            </div>
            <div className="job-date">09.2022 - voraussichtlich 2025</div>
          </div>
          <div className="job-company">Hochschule Flensburg</div>
          <div className="job-description">
            Schwerpunkte: Webentwicklung, UI/UX Design, Softwareentwicklung,
            Datenbanken
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">
              Verfahrensmechaniker für Kunststoff- und Kautschuktechnik
            </div>
            <div className="job-date">2015 - 2018</div>
          </div>
          <div className="job-company">BBZ Norderstedt</div>
          <div className="job-description">
            Ausbildung zum Verfahrensmechaniker
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Mittlere Reife</div>
            <div className="job-date">2013 - 2015</div>
          </div>
          <div className="job-company">VHS Flensburg</div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Berufsgrundbildungsjahr</div>
            <div className="job-date">2010 - 2011</div>
          </div>
          <div className="job-company">BEK, Kappeln</div>
        </div>
      </div>

      {/* Berufserfahrung */}
      <div className="section">
        <h2>Berufserfahrung</h2>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Job-Coach</div>
            <div className="job-date">03.2023 - 01.2025</div>
          </div>
          <div className="job-company">
            Deutsche Angestellten Akademie - DAA · Teilzeit
          </div>
          <div className="job-description">
            • Beratung und Betreuung von Arbeitssuchenden
            <br />
            • Unterstützung bei der beruflichen Orientierung und Qualifizierung
            <br />• Vermittlung in den Arbeitsmarkt
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Sprachmittler</div>
            <div className="job-date">03.2023 - 09.2023</div>
          </div>
          <div className="job-company">Hochschule Flensburg · Teilzeit</div>
          <div className="job-description">
            • Übersetzung und Dolmetschen für Studierende und Mitarbeiter
            <br />
            • Unterstützung bei der Kommunikation zwischen verschiedenen
            Sprachen
            <br />• Betreuung internationaler Studierender
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">
              Verfahrensmechaniker für Kunststoff- und Kautschuktechnik
            </div>
            <div className="job-date">04.2021 - 07.2022</div>
          </div>
          <div className="job-company">Schur Star Systems</div>
          <div className="job-description">
            • Führen und Umrüsten von Beutelmaschinen
            <br />
            • Qualitätskontrolle
            <br />• Kontrolle der Prozessparameter
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">
              Verfahrensmechaniker für Kunststoff- und Kautschuktechnik
            </div>
            <div className="job-date">08.2015 - 04.2021</div>
          </div>
          <div className="job-company">Multiflex Folien</div>
          <div className="job-description">
            • Einfahren von Extrusionsanlagen gemäß der Vorgabe
            <br />
            • Sicherstellung der lückenlosen Materialversorgung
            <br />
            • Instandsetzen und Pflege der Maschinen
            <br />• Qualitätskontrolle
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Aushilfe im Verkauf</div>
            <div className="job-date">01.2012 - 08.2015</div>
          </div>
          <div className="job-company">Schuh Eggers</div>
          <div className="job-description">
            • Führen von Verkaufsgesprächen
            <br />
            • Gestaltung des Verkaufsraums
            <br />• Einräumen der Ware
          </div>
        </div>
      </div>

      {/* Projekte */}
      <div className="section">
        <h2>Projekte & Erfahrung</h2>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Taskify - Todo-App</div>
            <div className="job-date">2025</div>
          </div>
          <div className="job-company">Fullstack Web-Entwicklung</div>
          <div className="job-description">
            Entwicklung einer modernen Todo-App mit Next.js, SQLite und Drizzle
            ORM. Implementierung von Benutzerauthentifizierung und responsive
            Design.
          </div>
          <div className="job-tech">
            Next.js, TypeScript, SQLite, Drizzle ORM, React Hook Form, TanStack
            Query
          </div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Metropol Theater Website</div>
            <div className="job-date">2025</div>
          </div>
          <div className="job-company">Fullstack Webentwicklung</div>
          <div className="job-description">
            Entwicklung einer Fullstack-Website für ein Kino mit Dashboard zur
            Filmverwaltung und Programmplanung. Implementierung von
            Vorstellungszeiten und Filminformationen.
          </div>
          <div className="job-tech">Deno, Oak, SQLite, Nunjucks</div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Popcorn Buddys - Tower Defense Game</div>
            <div className="job-date">2024</div>
          </div>
          <div className="job-company">Game Development</div>
          <div className="job-description">
            Entwicklung eines innovativen Tower-Defense-Spiels mit
            VR/PC-Koop-Gameplay. Verantwortlich für Level-Design, Game-Design
            und Programmierung.
          </div>
          <div className="job-tech">Unity, C#</div>
        </div>

        <div className="job-entry">
          <div className="job-header">
            <div className="job-title">Angela's Dance Academy</div>
            <div className="job-date">2023</div>
          </div>
          <div className="job-company">Frontend Development & Design</div>
          <div className="job-description">
            Entwicklung einer dynamischen Website mit fokus auf Branding und
            visueller Identität. Responsives Design und moderne Animationen.
          </div>
          <div className="job-tech">HTML, SCSS</div>
        </div>
      </div>

      {/* Technische Fähigkeiten */}
      <div className="section">
        <h2>Technische Fähigkeiten</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>• React, Next.js</li>
              <li>• TypeScript, JavaScript</li>
              <li>• CSS3, SCSS, Tailwind CSS</li>
              <li>• HTML5</li>
              <li>• Vite, Bootstrap</li>
              <li>• Framer Motion</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend & Database</h3>
            <ul className="skill-list">
              <li>• Node.js, Express.js</li>
              <li>• PostgreSQL, MySQL, SQLite</li>
              <li>• Drizzle ORM, Prisma</li>
              <li>• Deno, Oak</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Deployment</h3>
            <ul className="skill-list">
              <li>• Git & GitHub</li>
              <li>• Vercel</li>
              <li>• Figma (Expert)</li>
              <li>• Better-Auth</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>State Management</h3>
            <ul className="skill-list">
              <li>• TanStack Query</li>
              <li>• Zustand</li>
              <li>• React Hook Form</li>
              <li>• Redux Toolkit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sprachen */}
      <div className="section">
        <h2>Sprachen</h2>
        <div className="language-grid">
          <div className="language-item">
            <span>Deutsch</span>
            <span>Deutsch</span>
          </div>
          <div className="language-item">
            <span>Ukrainisch</span>
            <span>Muttersprache</span>
          </div>
          <div className="language-item">
            <span>Russisch</span>
            <span>Fließend (C2)</span>
          </div>
          <div className="language-item">
            <span>Englisch</span>
            <span>Gut (B1)</span>
          </div>
        </div>
      </div>

      {/* Persönliche Stärken */}
      <div className="section">
        <h2>Persönliche Stärken</h2>
        <div className="strengths-grid">
          <div className="strength-item">
            <div className="strength-title">Innovationsfreude</div>
            <div className="strength-desc">
              Liebe es, neue Ideen umzusetzen und kreative, praxisorientierte
              Lösungen zu finden.
            </div>
          </div>
          <div className="strength-item">
            <div className="strength-title">Teamfähigkeit</div>
            <div className="strength-desc">
              Starke Zusammenarbeit im Team und Austausch für optimale
              Ergebnisse.
            </div>
          </div>
          <div className="strength-item">
            <div className="strength-title">Kundenfokus</div>
            <div className="strength-desc">
              Verstehe Kundenwünsche und liefere überzeugende, zielgerichtete
              Ergebnisse.
            </div>
          </div>
          <div className="strength-item">
            <div className="strength-title">Technische Exzellenz</div>
            <div className="strength-desc">
              Sauberer, wartbarer und performanter Code ist für mich Standard.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LebenslaufOptimizedPage() {
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Leonid_Domahalskyy_Lebenslauf",
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

  return (
    <div className="min-h-screen">
      <div className="container">
        {/* Navigation & Print Button */}
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

        {/* CV Content */}
        <div className="bg-gray-200 rounded-lg shadow-2xl overflow-hidden mb-8">
          <div ref={componentRef}>
            <CVPrintComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
