import MarqueeHome from "./atoms/Marquee";
import Link from "next/link";
import LocationSection from "./LocationSection";
import PhoneIcon from "./atoms/icons/PhoneIcon";
import { RESTAURANT } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="home-reveal mx-auto my-16 flex sm:h-[60vh] h-[40vh] w-[60vw] flex-col items-center justify-center gap-10 space-y-3">
        <div className="relative">
          <div className="home-reveal home-scale-x home-delay-1 absolute left-0 top-1/2 h-24 w-1 -translate-x-[calc(100%+1rem)] -translate-y-1/2 rounded-full bg-white/40 sm:-left-6 sm:ml-0 ml-2" />
          <h1 className="home-reveal home-delay-1 whitespace-nowrap sm:text-7xl  min-[440px]:text-5xl min-[340px]:text-4xl text-3xl font-medium tracking-tight text-white">
            <span className="block">La Sicilienne,</span>
            <span className="block text-white/80">LA Pizzeria du 12ème</span>
          </h1>
        </div>
        <Link className="button-3d" href="/menu/pizza">
          <span>Voir le Menu</span>
        </Link>
        <div className="relative">
          <h2 className="text-2xl font-light text-white/75 md:text-4xl home-reveal home-delay-2">
            Les Parents l&apos;adorent, les Enfants l&apos;exigent
          </h2>
          <Link
            className="home-reveal home-delay-2 absolute left-1/2 top-full mt-3 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-sm text-white/75 transition-colors hover:border-white/40 hover:text-white"
            href={`tel:${RESTAURANT.telephone}`}
            aria-label="Appeler La Sicilienne"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>Nous appeler</span>
          </Link>
        </div>
      </section>
      <section className="home-reveal home-on-view mx-auto mt-20 grid w-[80vw] grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="home-reveal home-on-view home-left w-[94vw] max-w-[calc(100vw-1rem)] justify-self-center rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm md:w-auto md:max-w-none md:rounded-[2rem] md:p-6">
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
          <Link href="/menu/pizza">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-bold uppercase tracking-tight text-white">
                Menu
              </h2>

              <p className="mt-4 max-w-sm text-base leading-7 text-white/75">
                Découvrez notre sélection de plats italiens, préparés avec des
                ingrédients frais et authentiques.{" "}
                <strong>Des recettes peaufinées depuis 20 ans !</strong>
              </p>
            </div>
          </Link>

          <div className="mt-6 h-px w-full bg-linear-to-r from-white/0 via-white/30 to-white/0" />
        </div>
      </section>
      <section className="home-reveal home-on-view relative mt-20 overflow-hidden bg-[url('/pizza-slide-1.webp')] bg-cover bg-center py-10">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative">
          <h2 className="text-2xl text-center font-bold uppercase text-white md:text-5xl mb-5">
            La Sicilienne, Une Philosophie
          </h2>
          <div className="mx-auto mb-8 h-1 w-16 rounded-full bg-red-400" />
          <p className="mx-auto mb-8 max-w-2xl px-5 text-center text-base leading-7 text-white/75 md:text-lg">
            Une cuisine italienne généreuse, préparée avec attention et servie
            simplement, comme on l&apos;aime dans le quartier.
          </p>
          <div className="mx-auto flex max-w-4xl flex-row items-stretch justify-center gap-4 px-5 flex-wrap md:flex-nowrap">
            <p className="home-reveal flex items-center justify-center text-center text-white md:flex-1 [animation-delay:150ms]">
              La passion pour la cuisine italienne
            </p>
            <span className="hidden w-px bg-white/20 md:block" />
            <p className="home-reveal flex items-center justify-center text-center text-white md:flex-1 [animation-delay:300ms]">
              Un savoir-faire depuis 20 ans !
            </p>
            <span className="hidden w-px bg-white/20 md:block" />
            <p className="home-reveal flex items-center justify-center text-center text-white md:flex-1 [animation-delay:450ms]">
              Des produits frais et authentiques
            </p>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  );
}
