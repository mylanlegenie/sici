import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Card({
  name,
  price,
  platType,
}: {
  name: string;
  price: number;
  platType: string;
}) {
  const router = useRouter();

  return (
    <div className="mt-10 min-h-90 w-full border-2 border-white bg-white rounded-xl flex items-center justify-center px-4 py-6 text-center">
      <div>
        {/* <div className="flex justify-end">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-red-500 cursor-pointer bg-white text-sm ">
            ?
          </span>
        </div> */}
        <Image
          src=""
          alt={name}
          width={200}
          height={200}
          className="mx-auto mb-4 rounded-full cursor-pointer bg-black"
          onClick={() => {
            router.push(
              "?section=menu&plat=" +
                platType.toLowerCase() +
                "&name=" +
                name.toLowerCase(),
            );
          }}
        />

        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-800 font-bold">{price.toFixed(2)}€</p>
      </div>
    </div>
  );
}
