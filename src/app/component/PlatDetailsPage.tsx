import {
  desserts,
  labelsAllergenes,
  pizzas,
  salades,
} from "../plat";
import Image from "next/image";
interface PlatPageProps {
  name: string;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

export default function PlatPage({ name }: PlatPageProps) {
  const item = [...pizzas, ...salades, ...desserts].find(
    (plat) => normalize(plat.name) === normalize(name),
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
            className="mt-10 rounded-2xl border border-white/20 bg-red-600 p-5 shadow-lg sm:p-7"
            aria-labelledby="nutrition-title"
          >
            <h3
              id="nutrition-title"
              className="text-2xl font-bold text-white sm:text-3xl"
            >
              Informations nutritionnelles
            </h3>

            <dl className="mt-5 border-t border-white/30">
              {valeursNutritionnelles.map(
                ({ label, value, detailLabel, detailValue }) => (
                <div
                  key={label}
                  className="border-b border-dashed border-white/30 py-4"
                >
                  <div className="flex items-center justify-between gap-5">
                    <dt className="text-base font-medium text-white sm:text-lg">
                      {label}
                    </dt>
                    <dd className="shrink-0 text-right text-base font-semibold text-white sm:text-lg">
                      {value}
                    </dd>
                  </div>
                  {detailLabel && detailValue ? (
                    <div className="mt-2 flex items-center justify-between gap-5 text-sm text-white/75 sm:text-base">
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
