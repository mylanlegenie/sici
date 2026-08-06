import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { pizzas } from "../../../plat";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
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

  if (!pizzas.find((p) => toSlug(p.name) === name)) {
    notFound();
  }
  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
