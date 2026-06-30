export default function Plat({ plat }: { plat: string }) {
  return (
    <div className="w-25 h-15 border-white border-2 rounded-xl flex items-center justify-center cursor-pointer mx-2">
      <span className="text-white text-xl font-semibold">{plat}</span>
    </div>
  );
}
