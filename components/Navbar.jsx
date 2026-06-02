"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/countries", label: "Countries" },
  { href: "/search", label: "Search" },
  { href: "/compare", label: "Compare" },
  { href: "/favorites", label: "Favorites" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-space-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-cyan-300/30 bg-cyan-400/15 text-2xl shadow-glow">
            W
          </span>

          <span>
            <span className="block text-xl font-black leading-none text-white">
              World <span className="text-cyan-300">Explorer</span>
            </span>

            <span className="text-xs text-slate-400">
              Explore. Discover. Understand.
            </span>
          </span>
        </Link>

        {/* Working Search Bar */}
        <form
          action="/countries"
          className="hidden min-w-[260px] items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 lg:flex"
        >
          <span className="text-cyan-200">⌕</span>

          <input
            type="text"
            name="search"
            placeholder="Search countries..."
            className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
          />

          <button
            type="submit"
            className="rounded border border-white/10 px-2 py-0.5 text-[10px] text-slate-500 transition hover:border-cyan-300 hover:text-cyan-200"
          >
            Search
          </button>
        </form>

        <div className="flex items-center gap-2 md:order-last">
          <ThemeToggle />

          <div className="hidden h-11 w-11 place-items-center rounded-full border border-cyan-300/30 bg-cyan-400/15 text-sm font-black text-cyan-100 shadow-glow sm:grid">
            WE
          </div>

          <button
            className="rounded-lg border border-white/10 px-3 py-2 text-sm font-semibold text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute left-5 right-5 top-20 flex-col gap-2 rounded-lg border border-white/10 bg-space-900 p-3 shadow-panel md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-blue-500/20 text-white shadow-glow"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}