import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

export default function Dessert() {
  return (
    <>
      <TypeList selectedPlat="Dessert" />
      <Plats platType="Dessert" />
    </>
  );
}
