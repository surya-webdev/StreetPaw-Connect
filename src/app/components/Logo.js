import Link from "next/link";

function Logo({ className }) {
  return (
    <div
      className={`${className} flex items-center gap-2 text-xl font-bold md:text-2xl`}
    >
      <Link href="/" className="object-fill font-rubik">
        StreetPaw Connect
      </Link>
      <span>
        <img className="h-10 w-10" src="icon.svg" alt="Logo" />
      </span>
    </div>
  );
}

export default Logo;
