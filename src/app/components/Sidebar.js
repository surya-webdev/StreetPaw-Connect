import Link from "next/link";

import { signOutAction } from "../_lib/action";

function Sidebar({ className, user }) {
  return (
    <div className={`${className} j flex flex-col justify-between`}>
      <div className="flex flex-col justify-center gap-10 py-2">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 object-fill font-medium"
        >
          StreetPaw Connect{" "}
          <span>
            <img className="h-5 w-5" src="icon.svg" alt="Logo" />
          </span>
        </Link>
        <ul className="flex flex-col gap-4 self-start px-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Page</Link>
          </li>
          <li>
            <Link href="/">Account</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-5 justify-self-end px-5 py-10">
        <Link href="#">{user?.name}</Link>
        <form action={signOutAction}>
          <button>Sign Out</button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
