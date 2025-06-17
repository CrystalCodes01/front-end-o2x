"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="navContainer">
      <Link href="/feed" className="navLogo">
        o2x
      </Link>
      <ul className="navLinks">
        <li>
          <Link href="/feed" className="navLink">
            Feed
          </Link>
        </li>
      </ul>
    </nav>
  );
}
