import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizzas à Paris 12ème | La Sicilienne",
  description:
    "Découvrez la carte des pizzas de La Sicilienne, préparées à Paris 12ème.",
  alternates: { canonical: "/menu/pizza" },
};

export default function Pizza() {
  return (
    <>
      <TypeList selectedPlat="Pizza" />
      <Plats platType="Pizza" />
    </>
  );
}
