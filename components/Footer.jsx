import Link from "next/link";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">

      <div className="container-custom py-10">

        <div className="glass-card p-8">

          <div className="flex flex-col md:flex-row justify-between gap-8">

            <div>

              <div className="flex items-center gap-2 mb-3">

                <Globe
                  className="text-blue-400"
                  size={24}
                />

                <h2 className="font-bold text-xl">
                  World Explorer
                </h2>

              </div>

              <p className="text-slate-400 max-w-sm">
                Explore countries around the world,
                learn cultures, languages,
                populations and much more.
              </p>

            </div>

            <div className="flex gap-6">

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

          </div>

          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-500">

            © 2026 World Explorer.
            All Rights Reserved.

          </div>

        </div>

      </div>

    </footer>
  );
}