// Four-point throwing star with a hollow centre — the site's mark.
export default function Shuriken({ size = 24, className = "" }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z M50 42 A8 8 0 1 0 50 58 A8 8 0 1 0 50 42 Z"
      />
    </svg>
  );
}
