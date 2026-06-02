"use client";

import Link from "next/link";
import { Globe, Search, Moon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <nav className="glass-nav">

          <div className="flex items-center gap-3">

            <div className="logo-box">
              <Globe size={24} />
            </div>

            <div>
              <h1 className="font-bold text-xl">
                World Explorer
              </h1>

              <p className="text-xs text-slate-400">
                Explore. Discover. Understand.
              </p>
            </div>

          </div>

          <div className="hidden lg:flex items-center gap-8">

            <Link href="/">Home</Link>

            <Link href="/countries">
              Countries
            </Link>

            <Link href="/search">
              Search
            </Link>

            <Link href="/about">
              About
            </Link>

          </div>

          <div className="hidden md:flex items-center gap-4">

            <div className="search-box">
              <Search size={18} />
              <input
                placeholder="Search countries..."
              />
            </div>

            <button className="icon-btn">
              <Moon size={18} />
            </button>

            <div className="avatar">
              🌍
            </div>

          </div>

        </nav>
      </div>
    </header>
  );
}