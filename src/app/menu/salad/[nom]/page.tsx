import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { salades } from "../../../plat";

type PageProps = {
  params: {
    nom: string;
  };
};
export function generateStaticParams() {
  return salades.map((salad) => ({
    name: salad.name,
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
