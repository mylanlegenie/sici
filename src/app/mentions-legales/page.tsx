import type { Metadata } from "next";
import InfoPageLayout from "../component/InfoPageLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site La Sicilienne.",
  alternates: { canonical: "/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <InfoPageLayout
      title="Mentions légales"
      description="Les informations essentielles relatives au site et à son exploitation."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">
          Informations générales
        </h2>
        <div className="space-y-2 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          <p>
            <span className="font-semibold text-white">
              Nom de la société :
            </span>{" "}
            SARL KENZA
          </p>
          <p>
            <span className="font-semibold text-white">Forme juridique :</span>{" "}
            SARL
          </p>
          <p>
            <span className="font-semibold text-white">SIRET :</span> à
            49454662500018
          </p>
          <p>
            <span className="font-semibold text-white">Siège social :</span> 6
            rue Dagorno, 75012 Paris
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <div className="space-y-2 text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          <p>
            <span className="font-semibold text-white">Téléphone :</span> 01 53
            33 03 33
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">
          Responsable de la publication
        </h2>
        <p className="text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          Mylan HACHEMANE
        </p>
        <p className="text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          mylanhachemane03@gmail.com
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Hébergement</h2>
        <p className="text-sm leading-6 text-white/85 sm:text-base sm:leading-7">
          Le site est hébergé par{" "}
          <span className="font-semibold text-white">Vercel Inc.</span>, 340 S
          Lemon Ave #4133, Walnut, CA 91789, États-Unis
        </p>
      </section>
    </InfoPageLayout>
  );
}
