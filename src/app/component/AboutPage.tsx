import ClockIcon from "./atoms/icons/ClockIcon";
import LocationIcon from "./atoms/icons/LocationIcon";
import NearbyIcon from "./atoms/icons/NearbyIcon";
import PhoneIcon from "./atoms/icons/PhoneIcon";
import CopyButton from "./atoms/CopyButton";
import { HORRAIRES } from "../horraire";

export default function AboutPage() {
  return (
    <main className="bg-red-500 flex flex-col justify-center items-center mx-auto mb-16 mt-6">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-white font-bold text-4xl">À Propos</h1>
        <div className="w-40 h-1 bg-white rounded-full "></div>
      </div>

      <div className="flex flex-row justify-center items-start gap-8 mt-10">
        <div className="w-[30vw] h-[53vh] border-2 border-white rounded-2xl">
          <div className="flex flex-row items-center mx-4 mt-4 mb-8 gap-3">
            <ClockIcon />
            <h2 className="text-white text-xl font-bold  ">
              Horaires d&apos;ouverture
            </h2>
          </div>

          {HORRAIRES.map((horraire) => (
            <div
              key={horraire[0]}
              className="flex flex-col justify-between px-4 text-white"
            >
              <div className="flex flex-row justify-between">
                <p>{horraire[0]}</p>
                <p>{horraire[1]}</p>
              </div>
              {horraire[0] !== "Dimanche" && (
                <div className="h-0.5 w-full bg-white my-2 opacity-50"></div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[30vw] h-[53vh] border-2 border-white rounded-2xl p-5 text-white">
          <h2 className="text-xl font-bold tracking-tight mb-7">
            Nos coordonnées
          </h2>

          <div className="mt-4 space-y-3 text-base">
            <div className="flex items-center gap-2 font-medium text-white/90">
              <p className="flex items-center gap-3">
                <LocationIcon className="h-5 w-5 text-red-200" />6 rue Dagorno,
                75012 Paris
              </p>
              <CopyButton
                value="6 rue Dagorno, 75012 Paris"
                arialabel="Copier l'adresse"
              />
            </div>

            <div className="flex items-center gap-2 font-medium text-white">
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-red-200" />
                01 53 33 03 33
              </p>
              <CopyButton
                value="01 53 33 03 33"
                arialabel="Copier le numéro de téléphone"
              />
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <h2 className="flex items-center gap-3 text-base font-semibold uppercase tracking-wide text-white">
              <NearbyIcon className="h-5 w-5 text-red-200" />À proximité
            </h2>
            <div className="flex items-center gap-2 text-base font-medium text-white/85">
              <p>Metro Bel-Air, Nation Daumesnil</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
