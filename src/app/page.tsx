import NavBar from "./component/atoms/NavBar";
import Menu from "./component/MenuPage";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section } = await searchParams;

  return (
    <main className="bg-red-500">
      <NavBar />
      {section === "menu" && <Menu />}
    </main>
  );
}
