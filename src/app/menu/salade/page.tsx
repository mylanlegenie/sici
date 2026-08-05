import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salades à Paris 12ème | La Sicilienne",
  description:
    "Découvrez les salades de La Sicilienne, préparées à Paris 12ème.",
  alternates: { canonical: "/menu/salade" },
};

export default function Salad() {
  return (
    <>
      <TypeList selectedPlat="Salade" />
      <Plats platType="Salade" />
    </>
  );
}
