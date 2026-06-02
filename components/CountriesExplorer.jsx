"use client";

import { useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard";

const regions = ["All", "Asia", "Europe", "Africa", "Americas", "Oceania"];

export default function CountriesExplorer({ countries }) {
  const [activeRegion, setActiveRegion] = useState("All");

  const visibleCountries = useMemo(() => {
    return countries.filter((country) => {
      return activeRegion === "All" || country.region === activeRegion;
    });
  }, [activeRegion, countries]);

  return (
    <section>
      <div className="mb-6 flex flex-wrap gap-2 rounded-lg border border-white/10 bg-space-900/70 p-2 shadow-panel">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              activeRegion === region
                ? "bg-blue-500 text-white shadow-glow"
                : "bg-white/[0.03] text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </section>
  );
}
