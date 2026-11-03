"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-3 top-4 z-20 flex min-h-16 items-center justify-between rounded-[24px] bg-neutral-800/90 px-4 text-white backdrop-blur-md sm:inset-x-6 sm:top-6 sm:px-8">
      <Link
        href="/"
        className="text-2xl font-medium tracking-tight"
        onClick={() => setIsMenuOpen(false)}
      >
        Bigger
      </Link>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
        <span className="h-0.5 w-6 bg-white" />
      </button>

      <nav
        id="primary-navigation"
        className={`${isMenuOpen ? "flex" : "hidden"} absolute inset-x-0 top-full mt-2 flex-col gap-4 rounded-2xl bg-neutral-800/95 p-5 lg:static lg:mt-0 lg:flex lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0`}
      >
        <Link href="/signup" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
          Sign up
        </Link>
        <Link href="/login" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
          Login
        </Link>
        <Link href="/contact" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
      </nav>
    </header>
  );
}