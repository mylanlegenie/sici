import MarqueeHome from "../component/atoms/Marquee";
import Link from "next/link";
import LocationSection from "./LocationSection";

export default function HomePage() {
  return (
    <>
      <section className="home-reveal mx-auto my-16 flex h-[60vh] w-[60vw] flex-col items-center justify-center gap-10 space-y-3">
        <div className="relative">
          <div className="home-reveal home-scale-x home-delay-1 absolute -left-6 top-6 h-24 w-1 origin-top rounded-full bg-white/40 sm:ml-0 ml-2" />
          <h1 className="home-reveal home-delay-1 whitespace-nowrap sm:text-7xl text-5xl font-medium tracking-tight text-white">
            <span className="block">La Sicilienne,</span>
            <span className="block text-white/80">LA Pizzeria du 12ème</span>
          </h1>
        </div>
        <Link
          target="_blank"
          className="button-3d"
          href="https://www.tripadvisor.fr/Restaurant_Review-g187147-d12326598-Reviews-La_Sicilienne_Pizzeria-Paris_Ile_de_France.html"
        >
          <span>Mettez un avis !</span>
        </Link>
      </section>
      <section className="home-reveal home-on-view mx-auto mt-20 grid w-[80vw] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="home-reveal home-on-view home-left rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm md:rounded-[2rem] md:p-6">
          <div className="mb-3 flex items-center gap-2 md:mb-5 md:gap-3">
            <span className="h-2 w-2 rounded-full bg-red-400 md:h-2.5 md:w-2.5" />
            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] text-white md:text-4xl md:tracking-[0.16em]">
              NOS BEST SELLERS
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/10 p-2 md:rounded-[1.5rem] md:p-3">
            <MarqueeHome />
          </div>
        </div>

        <div className="home-reveal home-on-view home-right mx-auto flex w-full max-w-md flex-col justify-center rounded-[2rem] border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
          <div className="flex flex-col items-center">
            <Link href="/menu/pizza">
              <h2 className="text-4xl font-bold uppercase tracking-tight text-white">
                Menu
              </h2>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/75">
              Découvrez notre sélection de plats italiens, préparés avec des
              ingrédients frais et authentiques.
            </p>
          </div>

          <div className="mt-6 h-px w-full bg-linear-to-r from-white/0 via-white/30 to-white/0" />
        </div>
      </section>
      <LocationSection />
    </>
  );
}
