"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Nav Bar: Home (input text box), Explore (search page), Contact

const menu = [
  { text: "Home", href: "/" },
  { text: "Explore", href: "/search" },
  { text: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {menu.map(({ text, href }, _) => (
        <Link key={href} href={href}>
          <span
            className={`
              text-sm sm:text-base
            ${
              pathname === href
                ? "text-primary-blue font-bold"
                : "text-black hover:text-gray-500"
            }
          `}
          >
            {text}
          </span>
        </Link>
      ))}
    </nav>
  );
}
