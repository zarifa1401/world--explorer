"use client";

import { useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard";

export default function CountrySearch({ countries }) {
  const [query, setQuery] = useState("");

  const filteredCountries = useMemo(() => {
    const value = query.trim().toLowerCase();

    if (!value) {
      return countries.slice(0, 12);
    }

    return countries
      .filter((country) => country.name.common.toLowerCase().includes(value))
      .slice(0, 24);
  }, [countries, query]);

  return (
    <section className="panel p-5">
      <div className="relative">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search countries..."
          className="w-full rounded-lg border border-white/10 bg-space-950/80 px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/60 focus:ring-4 focus:ring-cyan-300/10"
        />
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {filteredCountries.length === 0 && (
        <p className="py-14 text-center text-slate-300">No countries found.</p>
      )}
    </section>
  );
}
