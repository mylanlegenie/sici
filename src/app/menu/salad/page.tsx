import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

export default function Salad() {
  return (
    <>
      <TypeList selectedPlat="Salad" />
      <Plats platType="Salad" />
    </>
  );
}
