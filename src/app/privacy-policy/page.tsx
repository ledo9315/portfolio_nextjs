import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Leonid Domahalskyy",
  description:
    "Datenschutzerklärung für die Website von Leonid Domahalskyy - Fullstack Developer & UI/UX Designer aus Flensburg.",
};

export default function Datenschutz() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-labelledby="datenschutz-title"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="py-42">
          <h1 className="font-hanson text-[8vw] md:text-5xl lg:text-6xl uppercase mb-12">
            Datenschutz
          </h1>
          <section className="space-y-8">
            <div>
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6 text-[var(--text-color)]">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick
                    darüber, was mit Ihren personenbezogenen Daten passiert,
                    wenn Sie diese Website besuchen. Personenbezogene Daten sind
                    alle Daten, mit denen Sie persönlich identifiziert werden
                    können. Ausführliche Informationen zum Thema Datenschutz
                    entnehmen Sie unserer unter diesem Text aufgeführten
                    Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Datenerfassung auf dieser Website
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[var(--text-color)]">
                        Wer ist verantwortlich für die Datenerfassung auf dieser
                        Website?
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        Die Datenverarbeitung auf dieser Website erfolgt durch
                        den Websitebetreiber. Dessen Kontaktdaten können Sie dem
                        Abschnitt „Hinweis zur Verantwortlichen Stelle" in
                        dieser Datenschutzerklärung entnehmen.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[var(--text-color)]">
                        Wie erfassen wir Ihre Daten?
                      </h4>
                      <p className="text-white/70 leading-relaxed mb-3">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie
                        uns diese mitteilen. Hierbei kann es sich z. B. um Daten
                        handeln, die Sie in ein Kontaktformular eingeben.
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        Andere Daten werden automatisch oder nach Ihrer
                        Einwilligung beim Besuch der Website durch unsere
                        IT-Systeme erfasst. Das sind vor allem technische Daten
                        (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des
                        Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                        automatisch, sobald Sie diese Website betreten.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[var(--text-color)]">
                        Wofür nutzen wir Ihre Daten?
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        Ein Teil der Daten wird erhoben, um eine fehlerfreie
                        Bereitstellung der Website zu gewährleisten. Andere
                        Daten können zur Analyse Ihres Nutzerverhaltens
                        verwendet werden.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium mb-2 text-[var(--text-color)]">
                        Welche Rechte haben Sie bezüglich Ihrer Daten?
                      </h4>
                      <p className="text-white/70 leading-relaxed mb-3">
                        Sie haben jederzeit das Recht, unentgeltlich Auskunft
                        über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                        personenbezogenen Daten zu erhalten. Sie haben außerdem
                        ein Recht, die Berichtigung oder Löschung dieser Daten
                        zu verlangen. Wenn Sie eine Einwilligung zur
                        Datenverarbeitung erteilt haben, können Sie diese
                        Einwilligung jederzeit für die Zukunft widerrufen.
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        Außerdem haben Sie das Recht, unter bestimmten Umständen
                        die Einschränkung der Verarbeitung Ihrer
                        personenbezogenen Daten zu verlangen. Des Weiteren steht
                        Ihnen ein Beschwerderecht bei der zuständigen
                        Aufsichtsbehörde zu.
                      </p>
                      <p className="text-white/70 leading-relaxed">
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                        können Sie sich jederzeit an uns wenden.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="space-y-8 mt-12">
            <div>
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6 text-[var(--text-color)]">
                2. Hosting
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4 ">Strato</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  Anbieter ist die Strato AG, Otto-Ostrowski-Straße 7, 10249
                  Berlin (nachfolgend „Strato"). Wenn Sie unsere Website
                  besuchen, erfasst Strato verschiedene Logfiles inklusive Ihrer
                  IP-Adressen.
                </p>
                <p className="text-white/70 leading-relaxed mb-4">
                  Weitere Informationen entnehmen Sie der Datenschutzerklärung
                  von Strato:{" "}
                  <a
                    href="https://www.strato.de/datenschutz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:underline transition-colors duration-200"
                  >
                    https://www.strato.de/datenschutz/
                  </a>
                  .
                </p>
                <p className="text-white/70 leading-relaxed">
                  Die Verwendung von Strato erfolgt auf Grundlage von Art. 6
                  Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
                  einer möglichst verlässlichen Darstellung unserer Website.
                  Sofern eine entsprechende Einwilligung abgefragt wurde,
                  erfolgt die Verarbeitung ausschließlich auf Grundlage von Art.
                  6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
                </p>
              </div>
            </div>
          </section>{" "}
          <section className="space-y-8 mt-12">
            <div>
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6 text-[var(--text-color)]">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 ">Datenschutz</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                    persönlichen Daten sehr ernst. Wir behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den
                    gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                  </p>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Wenn Sie diese Website benutzen, werden verschiedene
                    personenbezogene Daten erhoben. Personenbezogene Daten sind
                    Daten, mit denen Sie persönlich identifiziert werden können.
                    Die vorliegende Datenschutzerklärung erläutert, welche Daten
                    wir erheben und wofür wir sie nutzen. Sie erläutert auch,
                    wie und zu welchem Zweck das geschieht.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Wir weisen darauf hin, dass die Datenübertragung im Internet
                    (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
                    aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                    Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 ">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Die verantwortliche Stelle für die Datenverarbeitung auf
                    dieser Website ist:
                  </p>
                  <address className="text-white/70 leading-relaxed not-italic mb-4 pl-4 border-l-2 border-[var(--accent-color)]">
                    Leonid Domahalskyy
                    <br />
                    Rude 13
                    <br />
                    24941 Flensburg
                    <br />
                    Telefon: 015205892880
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:leonid.domagalsky@gmail.com"
                      className="text-white/70 hover:underline transition-colors duration-200"
                    >
                      leonid.domagalsky@gmail.com
                    </a>
                  </address>
                  <p className="text-white/70 leading-relaxed">
                    Verantwortliche Stelle ist die natürliche oder juristische
                    Person, die allein oder gemeinsam mit anderen über die
                    Zwecke und Mittel der Verarbeitung von personenbezogenen
                    Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 ">Speicherdauer</h3>
                  <p className="text-white/70 leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine
                    speziellere Speicherdauer genannt wurde, verbleiben Ihre
                    personenbezogenen Daten bei uns, bis der Zweck für die
                    Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                    Löschersuchen geltend machen oder eine Einwilligung zur
                    Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                    sofern wir keine anderen rechtlich zulässigen Gründe für die
                    Speicherung Ihrer personenbezogenen Daten haben.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 ">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer
                    ausdrücklichen Einwilligung möglich. Sie können eine bereits
                    erteilte Einwilligung jederzeit widerrufen. Die
                    Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 ">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen
                    ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere
                    in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres
                    Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                    Das Beschwerderecht besteht unbeschadet anderweitiger
                    verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 ">
                    Auskunft, Berichtigung und Löschung
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                    jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                    gespeicherten personenbezogenen Daten, deren Herkunft und
                    Empfänger und den Zweck der Datenverarbeitung und ggf. ein
                    Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
                    sowie zu weiteren Fragen zum Thema personenbezogene Daten
                    können Sie sich jederzeit an uns wenden.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
