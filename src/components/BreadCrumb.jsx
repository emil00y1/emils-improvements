import Link from "next/link";

function BreadCrumb({ name }) {
  return (
    <nav className="flex gap-1 items-center text-darkwhite text-xs">
      <Link href="/lineup">Lineup</Link>
      <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
        <path d="M6 3.5L1 6V3.5V1L6 3.5Z" stroke="#C8C8C8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <p className="underline pointer-events-none">{name}</p>
    </nav>
  );
}

export default BreadCrumb;
