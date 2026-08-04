import TypeList from "../../component/atoms/TypeList";
import Plats from "../../component/atoms/ListePlats";

export default function Pizza() {
  return (
    <>
      <TypeList selectedPlat="Pizza" />
      <Plats platType="Pizza" />
    </>
  );
}
