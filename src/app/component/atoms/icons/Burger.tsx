export default function Burger({
  isClicked,
  onClick,
}: {
  isClicked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`burger-button z-50 mr-3 flex cursor-pointer select-none flex-col gap-2 rounded-full border border-white p-5 sm:mr-10 ${
        isClicked ? "burger-button-open" : ""
      }`}
      onClick={onClick}
      aria-label={isClicked ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isClicked}
      aria-controls="site-menu"
    >
      <span className="burger-line h-0.5 w-10 rounded-lg bg-white" />
      <span className="burger-line h-0.5 w-10 rounded-lg bg-white" />
      <span className="burger-line h-0.5 w-10 rounded-lg bg-white" />
    </button>
  );
}
