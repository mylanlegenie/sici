import PlatDetailsPage from "../../../component/PlatDetailsPage";
type PageProps = {
  params: {
    nom: string;
  };
};
export default async function Page({ params }: PageProps) {
  const { nom } = await params;

  return (
    <>
      <PlatDetailsPage name={nom} />
    </>
  );
}
