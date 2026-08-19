import Link from "next/link";
import { desserts, labelsAllergenes, pizza, salades } from "../plat";
import toSlug from "../slug";
import Image from "next/image";
interface PlatPageProps {
  name: string;
  categorie?: string;
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
  const items = [...pizza, ...salades, ...desserts];
  const item = items.find(
    (plat) =>
      toSlug(plat.name) === toSlug(name) &&
      (!categorie || toSlug(plat.categorie) === categorie),
  );
  const allergenes = item
    ? Object.entries(item.allergenes)
        .filter(([, present]) => present)
        .map(
          ([allergene]) =>
            labelsAllergenes[allergene as keyof typeof labelsAllergenes],
        )
    : [];
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

      {item ? (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="mx-auto w-full md:w-[40vw]">
              <Image
                className="mx-auto h-auto w-full max-w-125 rounded-2xl bg-black"
                src=""
                width={500}
                height={500}
                alt={item.name}
              />
            </div>
            <div className="my-8 h-0.5 w-full rounded-full bg-white md:mx-10 md:my-0 md:h-130 md:w-0.5" />
            <div className="mx-auto flex w-full flex-col justify-center md:w-[30vw]">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                {item.name}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-white/70">
                {item.categorie}
              </p>
              <strong className="mt-4 text-base font-semibold text-white/90">
                5€
              </strong>
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
                <div className="mt-2 flex flex-wrap gap-2">
                  {allergenes.length > 0 ? (
                    allergenes.map((allergene) => (
                      <span
                        key={allergene}
                        className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white/90"
                      >
                        {allergene}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-white/75">
                      Aucun allergène renseigné.
                    </span>
                  )}
                </div>
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
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-red-500">{name}</h2>
          <p className="mt-4 text-lg text-gray-800">
            Aucun plat ne correspond à ce nom.
          </p>
        </>
      )}
    </section>
  );
}
