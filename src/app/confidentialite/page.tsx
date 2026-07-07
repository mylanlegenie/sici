import type { Metadata } from "next";
import InfoPageLayout from "../component/InfoPageLayout";

export const metadata: Metadata = {
  title: "Confidentialité | La Sicilienne",
  description: "Politique de confidentialité du site La Sicilienne.",
};

export default function ConfidentialitePage() {
  return (
    <InfoPageLayout
      title="Confidentialité"
      description="Cette page présente la manière dont les informations peuvent être traitées lors de la consultation du site. Elle reste volontairement simple et peut être enrichie selon les outils réellement utilisés."
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Données collectées</h2>
        <p className="leading-7">
          Le site peut collecter des données techniques minimales nécessaires à
          son fonctionnement, comme des informations de navigation, des
          statistiques de consultation ou des données transmises volontairement
          lors d&apos;une prise de contact.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Utilisation</h2>
        <p className="leading-7">
          Ces données sont utilisées uniquement pour répondre aux demandes,
          améliorer le service et assurer le bon fonctionnement du site. Elles
          ne sont pas revendues à des tiers.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Conservation</h2>
        <p className="leading-7">
          Les données sont conservées pendant la durée strictement nécessaire à
          leur traitement, sauf obligation légale contraire.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Vos droits</h2>
        <p className="leading-7">
          Vous pouvez demander l&apos;accès, la rectification ou la suppression
          de vos données en contactant l&apos;établissement par téléphone ou
          directement sur place.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-bold text-white">Cookies</h2>
        <p className="leading-7">
          Si des outils de mesure d&apos;audience ou de services tiers sont
          ajoutés au site, cette section devra être complétée avec la liste des
          cookies utilisés et leur finalité.
        </p>
      </section>
    </InfoPageLayout>
  );
}
