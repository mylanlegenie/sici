import NavBar from "./component/atoms/NavBar";
import MenuPage from "./component/MenuPage";
import AboutPage from "./component/AboutPage";
import HomePage from "./component/HomePage";
import Footer from "./component/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { section, name } = await searchParams;
  const selectedName = Array.isArray(name) ? name[0] : name;

  return (
    <main className="bg-red-500 pb-6">
      <NavBar />
      {section === "about" ? (
        <AboutPage />
      ) : section === "menu" ? (
        <MenuPage selectedName={selectedName} section={section} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </main>
  );
}
