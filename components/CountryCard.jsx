import Link from "next/link";

export default function CountryCard({ country, compact = false }) {
  const capital = country.capital?.[0] || "No capital";

  return (
    <article className="group overflow-hidden rounded-lg border border-white/10 bg-space-900/70 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-glow">
      <div className={`${compact ? "h-32" : "h-44"} relative overflow-hidden`}>
        <img
          src={country.flags.svg || country.flags.png}
          alt={country.flags.alt || `${country.name.common} flag`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/10 to-transparent" />
        <Link className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur transition hover:bg-cyan-400/20" href="/favorites" aria-label={`Favorite ${country.name.common}`}>
          +
        </Link>
      </div>
      <div className={compact ? "p-4" : "p-5"}>
        <h2 className="text-lg font-bold text-white">{country.name.common}</h2>
        <div className="mt-2 space-y-1 text-sm text-slate-300">
          <p>Capital: {capital}</p>
          {!compact && <p>Region: {country.region}</p>}
          <p>Population: {country.population.toLocaleString()}</p>
        </div>
        {!compact && (
          <Link className="btn-card mt-5" href={`/countries/${country.cca3}`}>
            View Details
          </Link>
        )}
      </div>
    </article>
  );
}
