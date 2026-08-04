import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { desserts } from "../../../plat";
type PageProps = {
  params: {
    nom: string;
  };
};

export function generateStaticParams() {
  return desserts.map((dessert) => ({
    name: dessert.name,
  }));
}
export default async function Dessert({ params }: PageProps) {
  const { nom } = await params;

  return (
    <>
      <PlatDetailsPage name={nom} />
    </>
  );
}
