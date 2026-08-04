import { useId } from "react";

export default function ClockIcon() {
  const titleId = `clock-icon-title-${useId()}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-labelledby={titleId}
    >
      <title id={titleId}>Horaires d&apos;ouverture</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
