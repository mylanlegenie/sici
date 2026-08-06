import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { desserts } from "../../../plat";
import toSlug from "../../../slug";
import { notFound } from "next/navigation";
type PageProps = {
  params: {
    name: string;
  };
};

export function generateStaticParams() {
  return desserts.map((dessert) => ({
    name: toSlug(dessert.name),
  }));
}
export default async function Dessert({ params }: PageProps) {
  const { name } = await params;
  if (!desserts.find((d) => toSlug(d.name) === name)) {
    notFound();
  }

  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
