"use client ";

import Link from "next/link";

import { navBarLinks } from "@/app/content";
import { ModeToggle } from "@/components/theme-toggle";

const Nav = () => {
  return (
    <nav className="w-full flex justify-around pt-5">
      <div className="flex justify-start  w-1/2 items-center ">
        <a href="/">Aodhan Hamilton</a>
      </div>
      <div className="w-1/2 flex items-center gap-5 justify-center ">
        {navBarLinks.map((link, i) => (
          <Link href={link.url} key={i}>
            {link.title}
          </Link>
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
};

export default Nav;
