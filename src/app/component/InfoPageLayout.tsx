import NavBar from "./atoms/NavBar";
import Footer from "./Footer";

export default function InfoPageLayout({
  title,
  description,
  children,
}: Readonly<{
  title: string;
  description: string;
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-red-500 pb-6">
      <NavBar />
      <section className="mx-auto mt-10 w-[90vw] max-w-5xl rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Information
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 space-y-8 text-white/85">{children}</div>
      </section>
      <Footer />
    </main>
  );
}
