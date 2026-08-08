"use client";

import { useState } from "react";
import CopyIcon from "./icons/CopyIcon";

export default function CopyButton({
  value,
  ariaLabel,
}: {
  value: string;
  ariaLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copyText}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/30 bg-white/10 text-white transition hover:bg-white/20"
        aria-label={ariaLabel}
        title="Copier"
      >
        <CopyIcon className="h-4 w-4" />
      </button>

      <span aria-live="polite" className="text-sm text-white">
        {status === "success" && "Copié !"}
        {status === "error" && "Erreur"}
      </span>
    </div>
  );
}
