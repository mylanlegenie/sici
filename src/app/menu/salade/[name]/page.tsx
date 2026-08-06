import PlatDetailsPage from "../../../component/PlatDetailsPage";
import { salades } from "../../../plat";
import toSlug from "../../../slug";

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

  return (
    <>
      <PlatDetailsPage name={name} />
    </>
  );
}
