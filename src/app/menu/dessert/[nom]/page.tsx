import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { desserts } from "../../../plat";
import toSlug from "../../../slug";
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

  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
