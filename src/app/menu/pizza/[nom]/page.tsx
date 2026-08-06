import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { pizzas } from "../../../plat";
import toSlug from "../../../slug";
type PageProps = {
  params: {
    name: string;
  };
};

export function generateStaticParams() {
  return pizzas.map((pizza) => ({
    name: toSlug(pizza.name),
  }));
}
export default async function Page({ params }: PageProps) {
  const { name } = await params;

  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
