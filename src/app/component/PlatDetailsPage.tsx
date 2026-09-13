import toSlug from "../slug";
import Image from "next/image";
import { getProductBySlug, type Category } from "../menu/catalog";
import UndoIcon from "./atoms/icons/Undo";

import Link from "next/link";
interface PlatPageProps {
  name: string;
  categorie: Category;
}

const categoryLabels: Record<Category, string> = {
  pizza: "Pizza",
  salade: "Salade",
  pate: "Pâtes",
  assiette: "Assiette",
  sandwich: "Sandwich",
  burger: "Burger",
  dessert: "Dessert",
};

export default function PlatPage({ name, categorie }: PlatPageProps) {
  const item = getProductBySlug(toSlug(name), categorie);

  if (!item) {
    return null;
  }

  const productImage =
    item.image && item.image.trim() !== "" ? item.image : null;

  return (
    <section className="mx-auto mb-12 mt-10 w-[90vw] md:mb-20 md:mt-20 md:w-[80vw]">
      <Link
        href={"/menu/" + categorie}
        className="mb-6 flex flex-wrap items-center gap-2 text-base text-white/80 sm:text-lg"
      >
        <UndoIcon className="h-4 w-4" />
        <span className="font-semibold text-white">Retour au menu</span>
      </Link>

      <div className="flex flex-col md:flex-row md:items-start">
        <div className="mx-auto w-full md:w-[40vw]">
          {productImage ? (
            <Image
              className="mx-auto h-auto w-full max-w-[420px] rounded-2xl mb-4 bg-zinc-900 object-cover shadow-lg md:max-w-[520px]"
              src={productImage}
              width={500}
              height={500}
              alt={item.name}
              priority
            />
          ) : (
            <div className="mx-auto flex h-[260px] w-full max-w-[420px] items-center justify-center rounded-2xl bg-black shadow-lg md:h-[420px] md:max-w-[520px]">
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                {item.name}
              </span>
            </div>
          )}
        </div>
        <div className="hidden md:block md:mx-10 md:h-[30rem] md:w-px md:bg-white/40" />
        <div className="mx-auto flex w-full flex-col justify-center md:w-[30vw]">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            {item.name}
          </h1>
          <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/70">
            {"base" in item
              ? `Pizza · Base ${item.base === "tomate" ? "sauce tomate" : "crème fraîche"}`
              : categoryLabels[item.categorie]}
          </p>
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mt-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Ingrédients
              </h2>
              <p className="mt-2 text-base leading-7 text-white">
                {item.ingredients.join(", ")}
              </p>
            </div>
          )}
          {"options" in item && item.options && item.options.length > 0 ? (
            <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-3 text-white/90 md:p-4">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 md:text-xs">
                Formats et prix
              </div>
              <div className="space-y-2 text-sm">
                {item.options.map((option, index) => (
                  <div
                    key={option.label}
                    className={`flex items-center justify-between gap-4 ${index < item.options!.length - 1 ? "border-b border-white/10 pb-2" : ""}`}
                  >
                    <span>{option.label}</span>
                    <strong className="font-semibold text-white">
                      {option.price.toFixed(2)}€
                    </strong>
                  </div>
                ))}
              </div>
            </div>
          ) : "prices" in item ? (
            <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-3 text-white/90 md:p-4">
              <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white/60 md:text-xs">
                Prix
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                  <span>Junior</span>
                  <strong className="font-semibold text-white">
                    {item.prices.junior != null
                      ? `${item.prices.junior.toFixed(2)}€`
                      : "-"}
                  </strong>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                  <span>Medium</span>
                  <strong className="font-semibold text-white">
                    {item.prices.senior != null
                      ? `${item.prices.senior.toFixed(2)}€`
                      : "-"}
                  </strong>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Grande</span>
                  <strong className="font-semibold text-white">
                    {item.prices.mega != null
                      ? `${item.prices.mega.toFixed(2)}€`
                      : "-"}
                  </strong>
                </div>
              </div>
            </div>
          ) : (
            <strong className="mt-4 text-base font-semibold text-white/90">
              {item.price != null
                ? `${item.price.toFixed(2)}€`
                : "Prix sur demande"}
            </strong>
          )}
          {item.description && (
            <div className="mt-5">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                Description
              </h2>
              <p className="mt-2 text-base leading-8 text-white/90">
                {item.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
