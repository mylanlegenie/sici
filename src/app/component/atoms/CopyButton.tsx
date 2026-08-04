"use client";
import CopyIcon from "./icons/CopyIcon";

export default function CopyButton({
  value,
  arialabel,
}: {
  value: string;
  arialabel: string;
}) {
  const copyText = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={() => copyText(value)}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
      aria-label={arialabel}
      title="Copier"
    >
      <CopyIcon className="h-4 w-4 cursor-pointer" />
    </button>
  );
}
