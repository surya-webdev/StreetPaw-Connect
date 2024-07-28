"use client";

import Link from "next/link";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Logo from "./Logo";

const NavLinks = [
  { id: 1, name: "Campions", path: "/campions" },
  { id: 2, name: "Issues", path: "/issues" },
];

function Navigation({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative flex items-center justify-between p-4 sm:px-8 sm:py-4">
      <div>
        <Logo />
      </div>
      <div className="hidden text-xl font-medium md:block">
        <ul className="flex gap-4">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          {user ? (
            <li className="flex items-center justify-center gap-1">
              <img
                className="h-10 w-10 rounded-3xl"
                src={user.image}
                alt={user.name}
              />
              <Link href="/account">Account</Link>
            </li>
          ) : (
            <li>{<Link href="/login">SignUp</Link>}</li>
          )}
        </ul>
      </div>
      {/* mobile nav */}
      <div className="z-10 block md:hidden">
        <button onClick={() => setIsOpen((s) => !s)} className="text-2xl">
          {isOpen ? <IoClose /> : <CgMenuLeft />}
        </button>
      </div>
      {isOpen && (
        <ul className="z-[ 20] absolute right-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 bg-white text-xl font-semibold">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
          {user ? (
            <li className="flex">
              <img
                className="h-6 w-6 rounded-3xl"
                src={user.image}
                alt={user.name}
              />
              <Link href="/account">Account</Link>
            </li>
          ) : (
            <li>{<Link href="/login">SignUp</Link>}</li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
