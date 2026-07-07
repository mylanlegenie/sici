import type { Metadata } from "next";
import InfoPageLayout from "../component/InfoPageLayout";

export const metadata: Metadata = {
  title: "Contact | La Sicilienne",
  description: "Coordonnées et horaires de La Sicilienne.",
};

const horaires = [
  ["Lundi", "12h - 22h30"],
  ["Mardi", "12h - 22h30"],
  ["Mercredi", "12h - 22h30"],
  ["Jeudi", "12h - 22h30"],
  ["Vendredi", "12h - 22h30"],
  ["Samedi", "12h - 22h30"],
  ["Dimanche", "12h - 22h30"],
];

export default function ContactPage() {
  return (
    <InfoPageLayout
      title="Contact"
      description="Retrouvez ici les informations pratiques pour joindre ou visiter La Sicilienne."
    >
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-6">
          <h2 className="text-2xl font-bold text-white">Coordonnées</h2>
          <div className="mt-5 space-y-3 leading-7">
            <p>La Sicilienne</p>
            <p>6 rue Dagorno, 75012 Paris</p>
            <p>
              <a href="tel:0153330333" className="transition hover:text-white">
                01 53 33 03 33
              </a>
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/10 p-6">
          <h2 className="text-2xl font-bold text-white">Accès</h2>
          <div className="mt-5 space-y-3 leading-7">
            <p>Métro Bel-Air</p>
            <p>Métro Daumesnil</p>
            <p>Métro Nation</p>
          </div>
        </div>
      </section>

      <section className="rounded-[1.5rem] border border-white/10 bg-black/10 p-6">
        <h2 className="text-2xl font-bold text-white">Horaires</h2>
        <div className="mt-5 space-y-3">
          {horaires.map(([day, hours]) => (
            <div
              key={day}
              className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
            >
              <span>{day}</span>
              <span>{hours}</span>
            </div>
          ))}
        </div>
      </section>
    </InfoPageLayout>
  );
}
