import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desserts à Paris 12ème | La Sicilienne",
  description:
    "Découvrez les desserts proposés par La Sicilienne à Paris 12ème.",
  alternates: { canonical: "/menu/dessert" },
};

export default function Dessert() {
  return (
    <>
      <TypeList selectedPlat="Dessert" />
      <Plats platType="Dessert" />
    </>
  );
}
