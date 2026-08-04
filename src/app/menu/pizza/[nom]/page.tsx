import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { pizzas } from "../../../plat";
type PageProps = {
  params: {
    nom: string;
  };
};

export function generateStaticParams() {
  return pizzas.map((pizza) => ({
    name: pizza.name,
  }));
}
export default async function Page({ params }: PageProps) {
  const { nom } = await params;

  return (
    <>
      <PlatDetailsPage name={nom} />
    </>
  );
}
