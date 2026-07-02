import NavBar from "./component/atoms/NavBar";
import MenuPage from "./component/MenuPage";
import AboutPage from "./component/AboutPage";

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
      {section === "about" ? <AboutPage /> : null}
      {section === "menu" ? (
        <MenuPage selectedName={selectedName} section={section} />
      ) : null}
    </main>
  );
}
