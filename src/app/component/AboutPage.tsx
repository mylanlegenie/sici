import ClockIcon from "./atoms/icons/ClockIcon";
import LocationIcon from "./atoms/icons/LocationIcon";
import NearbyIcon from "./atoms/icons/NearbyIcon";
import PhoneIcon from "./atoms/icons/PhoneIcon";
import CopyButton from "./atoms/CopyButton";
import { HORRAIRES } from "../horraire";

export default function AboutPage() {
  return (
    <main className="mx-auto mb-12 mt-6 flex flex-col items-center justify-center bg-red-500 sm:mb-16">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">À Propos</h1>
        <div className="h-1 w-32 rounded-full bg-white sm:w-40"></div>
      </div>

      <div className="mt-8 grid w-[90vw] max-w-5xl grid-cols-1 gap-5 lg:mt-10 lg:w-[calc(60vw+2rem)] lg:max-w-none lg:grid-cols-2 lg:gap-8">
        <section className="h-auto min-w-0 rounded-2xl border-2 border-white p-4 lg:h-[53vh] lg:p-0">
          <div className="mb-6 flex items-center gap-3 lg:mx-4 lg:mb-8 lg:mt-4">
            <ClockIcon />
            <h2 className="text-lg font-bold text-white sm:text-xl">
              Horaires d&apos;ouverture
            </h2>
          </div>

          {HORRAIRES.map((horraire) => (
            <div
              key={horraire[0]}
              className="flex flex-col justify-between text-sm text-white sm:text-base lg:px-4"
            >
              <div className="flex items-center justify-between gap-4">
                <p>{horraire[0]}</p>
                <p className="shrink-0">{horraire[1]}</p>
              </div>
              {horraire[0] !== "Dimanche" && (
                <div className="my-2 h-0.5 w-full bg-white opacity-50"></div>
              )}
            </div>
          ))}
        </section>

        <section className="h-auto min-w-0 rounded-2xl border-2 border-white p-4 text-white sm:p-5 lg:h-[53vh]">
          <h2 className="mb-5 text-lg font-bold tracking-tight sm:mb-7 sm:text-xl">
            Nos coordonnées
          </h2>

          <div className="mt-4 space-y-4 text-sm sm:text-base">
            <div className="flex items-start justify-between gap-3 font-medium text-white/90">
              <p className="flex min-w-0 items-start gap-3">
                <LocationIcon className="h-5 w-5 shrink-0 text-red-200" />
                <span>6 rue Dagorno, 75012 Paris</span>
              </p>
              <span className="shrink-0">
                <CopyButton
                  value="6 rue Dagorno, 75012 Paris"
                  arialabel="Copier l'adresse"
                />
              </span>
            </div>

            <div className="flex items-start justify-between gap-3 font-medium text-white">
              <p className="flex min-w-0 items-center gap-3">
                <PhoneIcon className="h-5 w-5 shrink-0 text-red-200" />
                <span>01 53 33 03 33</span>
              </p>
              <span className="shrink-0">
                <CopyButton
                  value="01 53 33 03 33"
                  arialabel="Copier le numéro de téléphone"
                />
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-white sm:text-base">
              <NearbyIcon className="h-5 w-5 shrink-0 text-red-200" />À proximité
            </h2>
            <div className="flex items-center gap-2 text-sm font-medium text-white/85 sm:text-base">
              <p>Metro Bel-Air, Nation Daumesnil</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
