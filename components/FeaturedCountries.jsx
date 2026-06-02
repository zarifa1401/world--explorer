import Link from "next/link";
import CountryCard from "./CountryCard";

export default function FeaturedCountries({ featured }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold text-white">
          Featured Countries
        </h2>

        <Link
          className="text-sm font-medium text-cyan-200 hover:text-white"
          href="/countries"
        >
          View all countries -&gt;
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {featured.map((country) => (
          <CountryCard
            key={country.cca3}
            country={country}
            compact
          />
        ))}
      </div>
    </section>
  );
}