type IconProps = {
  className?: string;
};

export default function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1A19.5 19.5 0 0 1 5.2 12 19.8 19.8 0 0 1 2.1 3.4 2 2 0 0 1 4 1.2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 3a2 2 0 0 1-.5 2L8 9.2a16 16 0 0 0 6.8 6.8l1.3-1.3a2 2 0 0 1 2-.5c1 .4 2 .7 3 .8A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
