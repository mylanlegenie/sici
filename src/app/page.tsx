import NavBar from "../app/component/NavBar";
import Menu from "../app/component/Menu";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section } = await searchParams;

  return (
    <main className="bg-red-500 h-screen">
      <NavBar />
      {section === "menu" && <Menu />}
    </main>
  );
}
