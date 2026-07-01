import NavBar from "./component/atoms/NavBar";
import Menu from "./component/MenuPage";
import PlatPage from "./component/PlatPage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section, name } = await searchParams;
  const selectedName = Array.isArray(name) ? name[0] : name;

  return (
    <main className="bg-red-500">
      <NavBar />
      {selectedName ? (
        <PlatPage name={selectedName} />
      ) : section === "menu" ? (
        <Menu />
      ) : null}
    </main>
  );
}
