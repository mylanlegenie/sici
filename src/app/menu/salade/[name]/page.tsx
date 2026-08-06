import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { salades } from "../../../plat";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    name: string;
  };
};
export function generateStaticParams() {
  return salades.map((salad) => ({
    name: toSlug(salad.name),
  }));
}
export default async function Page({ params }: PageProps) {
  const { name } = await params;
  const salad = salades.find((s) => toSlug(s.name) === name);
  if (!salad) {
    notFound();
  }

  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
