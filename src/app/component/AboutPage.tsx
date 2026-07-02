"use client";

import CopyIcon from "./atoms/icons/CopyIcon";
import ClockIcon from "./atoms/icons/ClockIcon";
import LocationIcon from "./atoms/icons/LocationIcon";
import NearbyIcon from "./atoms/icons/NearbyIcon";
import PhoneIcon from "./atoms/icons/PhoneIcon";

export default function AboutPage() {
  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      // Silent fail to avoid interrupting the page if clipboard is blocked.
    }
  };

  const HORRAIRES = [
    { day: "Lundi", hours: "12h-22h30" },
    { day: "Mardi", hours: "12h-22h30" },
    { day: "Mercredi", hours: "12h-22h30" },
    { day: "Jeudi", hours: "12h-22h30" },
    { day: "Vendredi", hours: "12h-22h30" },
    { day: "Samedi", hours: "12h-22h30" },
    { day: "Dimanche", hours: "12h-22h30" },
  ];

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
              key={horraire.day}
              className="flex flex-col justify-between px-4 text-white"
            >
              <div className="flex flex-row justify-between">
                <p>{horraire.day}</p>
                <p>{horraire.hours}</p>
              </div>
              {horraire.day !== "Dimanche" && (
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
              <button
                type="button"
                onClick={() => copyText("6 rue Dagorno, 75012 Paris")}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Copier l'adresse"
                title="Copier"
              >
                <CopyIcon className="h-4 w-4 cursor-pointer" />
              </button>
            </div>

            <div className="flex items-center gap-2 font-medium text-white">
              <p className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-red-200" />
                01 53 33 03 33
              </p>
              <button
                type="button"
                onClick={() => copyText("01 53 33 03 33")}
                className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
                aria-label="Copier le numéro de téléphone"
                title="Copier"
              >
                <CopyIcon className="h-4 w-4 cursor-pointer" />
              </button>
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
