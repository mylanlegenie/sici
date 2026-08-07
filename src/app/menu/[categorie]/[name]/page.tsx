import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { desserts, pizzas, salades } from "../../../plat";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
type PageProps = {
  params: {
    categorie: string;
    name: string;
  };
};

export function generateStaticParams() {
  return [...desserts, ...pizzas, ...salades].map((plat) => ({
    categorie: toSlug(plat.categorie),
    name: toSlug(plat.name),
  }));
}
export default async function Page({ params }: PageProps) {
  const { categorie, name } = params;
  const plat = [...desserts, ...pizzas, ...salades].find(
    (item) =>
      toSlug(item.categorie) === categorie && toSlug(item.name) === name,
  );

  if (!plat) {
    notFound();
  }

  return (
    <>
      <PlatDetailsPage name={name} categorie={categorie} />
    </>
  );
}
