import Link from "next/link";
import { labelsAllergenes } from "../plat";
import toSlug from "../slug";
import Image from "next/image";
import { getProductBySlug, type Category } from "../menu/catalog";
interface PlatPageProps {
  name: string;
  categorie: Category;
}

const formatCategoryLabel = (value?: string) => {
  if (!value) return "Menu";

  const normalized = value.toLowerCase();

  if (normalized === "pizza") return "Pizzas";
  if (normalized === "salade") return "Salades";
  if (normalized === "dessert") return "Desserts";

  return value;
};

export default function PlatPage({ name, categorie }: PlatPageProps) {
  const item = getProductBySlug(toSlug(name), categorie);

  if (!item) {
    return null;
  }

  const productImage =
    item.image && item.image.trim() !== "" ? item.image : null;

  const allergenes = Object.entries(item.allergenes)
    .filter(([, present]) => present)
    .map(
      ([allergene]) =>
        labelsAllergenes[allergene as keyof typeof labelsAllergenes],
    );
  const valeursNutritionnelles = item
    ? [
        {
          label: "Calories",
          value: `${item.nutrition.energieKj} kJ · ${item.nutrition.caloriesKcal} kcal`,
        },
        {
          label: "Lipides",
          value: `${item.nutrition.matieresGrassesG} g`,
          detailLabel: "dont acides gras saturés",
          detailValue: `${item.nutrition.acidesGrasSaturesG} g`,
        },
        {
          label: "Glucides",
          value: `${item.nutrition.glucidesG} g`,
          detailLabel: "dont sucres",
          detailValue: `${item.nutrition.sucresG} g`,
        },
        {
          label: "Fibres",
          value: `${item.nutrition.fibresG} g`,
        },
        {
          label: "Protéines",
          value: `${item.nutrition.proteinesG} g`,
        },
        {
          label: "Sel",
          value: `${item.nutrition.selG} g`,
        },
      ]
    : [];

  return (
    <section className="mx-auto mb-12 mt-10 w-[90vw] md:mb-20 md:mt-20 md:w-[80vw]">
      <nav
        aria-label="Fil d’Ariane"
        className="mb-6 flex flex-wrap items-center gap-2 text-base text-white/80 sm:text-lg"
      >
        <Link href="/" className="font-medium transition hover:text-white">
          Accueil
        </Link>
        <span aria-hidden="true">/</span>
        <Link
          href="/menu/pizza"
          className="font-medium transition hover:text-white"
        >
          Menu
        </Link>
        {categorie ? (
          <>
            <span aria-hidden="true">/</span>
            <Link
              href={`/menu/${categorie}`}
              className="font-medium transition hover:text-white"
            >
              {formatCategoryLabel(categorie)}
            </Link>
          </>
        ) : null}
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-white">{item?.name ?? name}</span>
      </nav>

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
            {item.categorie}
          </p>
          {"prices" in item ? (
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
                  <span>Grand</span>
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
          <p className="mt-5 text-base leading-8 text-white/90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            hendrerit lacus, nec dictum neque. Maecenas id turpis eu metus
            malesuada fermentum quis non sem. Cras vel mi elit. Nullam
            condimentum turpis ut est pulvinar, suscipit vulputate eros
            fringilla. Praesent at lacus gravida, porttitor risus mattis,
          </p>

          <div className="mt-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Allergènes
            </p>
            {allergenes.length > 0 ? (
              <ul
                className="mt-2 flex flex-wrap gap-2"
                aria-label="Liste des allergènes"
              >
                {allergenes.map((allergene) => (
                  <li
                    key={allergene}
                    className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white/90"
                  >
                    {allergene}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-white/75">
                Aucun allergène renseigné.
              </p>
            )}
          </div>
        </div>
      </div>

      <section
        className="mt-10 rounded-2xl bg-white p-5 shadow-lg sm:p-7"
        aria-labelledby="nutrition-title"
      >
        <h3
          id="nutrition-title"
          className="text-2xl font-bold text-zinc-900 sm:text-3xl"
        >
          Informations nutritionnelles
        </h3>

        <dl className="mt-5 border-t border-zinc-200">
          {valeursNutritionnelles.map(
            ({ label, value, detailLabel, detailValue }) => (
              <div
                key={label}
                className="border-b border-dashed border-zinc-300 py-4"
              >
                <div className="flex items-center justify-between gap-5">
                  <dt className="text-base font-medium text-zinc-800 sm:text-lg">
                    {label}
                  </dt>
                  <dd className="shrink-0 text-right text-base text-zinc-700 sm:text-lg">
                    {value}
                  </dd>
                </div>
                {detailLabel && detailValue ? (
                  <div className="mt-2 flex items-center justify-between gap-5 text-sm text-zinc-600 sm:text-base">
                    <dt>{detailLabel}</dt>
                    <dd className="shrink-0 text-right">{detailValue}</dd>
                  </div>
                ) : null}
              </div>
            ),
          )}
        </dl>
      </section>
    </section>
  );
}
