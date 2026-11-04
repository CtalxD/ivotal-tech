// app/components/Icons.tsx
// Four service icons drawn for Ivotal on one 56px grid: 2.5 stroke, round caps, one filled accent shape each.
// Strokes use the surrounding text colour; the filled shape uses --ic (see globals.css).

export type IconName = "web" | "app" | "software" | "design";

export default function Icon({ name }: { name: IconName }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "web" && (
        <>
          <rect x="6" y="10" width="44" height="36" rx="6" />
          <path d="M6 21H50" />
          <circle cx="12.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
          <circle cx="17.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
          <rect className="icon__acc" x="12" y="27" width="15" height="13" rx="2.5" />
          <path d="M32 29H44M32 34H44M32 39H39" />
        </>
      )}

      {name === "app" && (
        <>
          <rect x="6" y="8" width="44" height="40" rx="6" />
          <path d="M19 8V48" />
          <circle cx="12.5" cy="16" r="1.4" fill="currentColor" stroke="none" />
          <path d="M10 24H15M10 30H15" />
          <rect x="25" y="33" width="5" height="8" rx="1.5" />
          <rect className="icon__acc" x="32" y="27" width="5" height="14" rx="1.5" />
          <rect x="39" y="20" width="5" height="21" rx="1.5" />
        </>
      )}

      {name === "software" && (
        <>
          <rect x="4" y="8" width="32" height="24" rx="4" />
          <path d="M20 32V38M13 38H27" />
          <path d="M15 16L10 21.5 15 27M25 16L30 21.5 25 27M22 15L18 28" />
          <rect className="icon__acc" x="32" y="24" width="18" height="27" rx="4.5" />
        </>
      )}

      {name === "design" && (
        <>
          <path d="M10 42C14 14 42 14 46 42" />
          <path d="M10 42L14 14M46 42L42 14" />
          <circle cx="14" cy="14" r="2.4" fill="currentColor" stroke="none" />
          <circle cx="42" cy="14" r="2.4" fill="currentColor" stroke="none" />
          <rect className="icon__acc" x="6.5" y="38.5" width="7" height="7" rx="1.5" />
          <rect className="icon__acc" x="42.5" y="38.5" width="7" height="7" rx="1.5" />
        </>
      )}
    </svg>
  );
}