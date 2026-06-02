"use client";

import { useEffect, useMemo, useState } from "react";
import CountryCard from "@/components/CountryCard";

export default function FavoritesClient({ countries }) {
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState("JPN");

  useEffect(() => {
    const saved = window.localStorage.getItem("world-explorer-favorites");
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("world-explorer-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const sortedCountries = useMemo(
    () => countries.slice().sort((a, b) => a.name.common.localeCompare(b.name.common)),
    [countries]
  );

  const favoriteCountries = favorites
    .map((code) => countries.find((country) => country.cca3 === code))
    .filter(Boolean);

  function addFavorite() {
    setFavorites((current) => (current.includes(selected) ? current : [...current, selected]));
  }

  return (
    <section className="panel p-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="min-h-12 flex-1 rounded-lg border border-white/10 bg-space-950 px-4 text-white outline-none focus:border-cyan-300"
        >
          {sortedCountries.map((country) => (
            <option key={country.cca3} value={country.cca3}>
              {country.name.common}
            </option>
          ))}
        </select>
        <button className="btn-primary" onClick={addFavorite}>
          Add Favorite
        </button>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>

      {favoriteCountries.length === 0 && (
        <p className="py-14 text-center text-slate-300">
          No favorites yet. Add one from the selector above.
        </p>
      )}
    </section>
  );
}
