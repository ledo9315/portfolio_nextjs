import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Leonid Domahalskyy",
  description:
    "Impressum und Kontaktdaten von Leonid Domahalskyy - Fullstack Developer & UI/UX Designer aus Flensburg.",
};

export default function Impressum() {
  return (
    <main
      className="min-h-screen"
      role="main"
      aria-labelledby="impressum-title"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <article className="py-42">
          <h1
            className="font-hanson text-[8vw] md:text-5xl lg:text-6xl uppercase  mb-12"
            id="impressum-title"
          >
            Impressum
          </h1>

          <div className="space-y-8">
            <div className="bg-white/[0.02] border border-white/[0.1] rounded-lg p-6 md:p-8">
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6 ">
                Angaben gemäß § 5 TMG
              </h2>

              <address className="text-white/70 text-lg leading-relaxed not-italic">
                <div className=" block mb-2x">Leonid Domahalskyy</div>
                Rude 13
                <br />
                24941 Flensburg
                <br />
                Deutschland
              </address>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.1] rounded-lg p-6 md:p-8">
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6 ">
                Kontakt
              </h2>

              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <div className="flex items-center gap-3">
                  <span className=" font-medium min-w-16">E-Mail:</span>
                  <a
                    href="mailto:leonid.domagalsky@gmail.com"
                    className=" hover:underline transition-colors duration-200"
                  >
                    leonid.domagalsky
                    <wbr />
                    @gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className=" font-medium min-w-16">Telefon:</span>
                  <a
                    href="tel:+49015205892880"
                    className="text-white/70 hover: transition-colors duration-200"
                  >
                    015205892880
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.1] rounded-lg p-6 md:p-8">
              <h2 className="font-hanson text-[5vw] md:text-3xl uppercase mb-6">
                Haftungs
                <wbr />
                ausschluss
              </h2>

              <div className="space-y-6 text-white/70 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Haftung für Inhalte
                  </h3>
                  <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                    Diensteanbieter jedoch nicht unter der Verpflichtung,
                    übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Haftung für Links
                  </h3>
                  <p>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    Für die Inhalte der verlinkten Seiten ist stets der
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    Urheberrecht
                  </h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke
                    auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                    der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                    bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
