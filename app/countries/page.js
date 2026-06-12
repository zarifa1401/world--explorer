import CountriesExplorer from "@/components/CountriesExplorer";
import { getAllCountries } from "@/lib/countries";

export const metadata = {
  title: "Countries | World Explorer",
};

export default async function CountriesPage({ searchParams }) {
  // Note: searchParams is a Promise, so we need to await it to get the actual parameters
  const resolvedSearchParams = await searchParams;

  // Get search query from URL
  const searchQuery =
    resolvedSearchParams?.search?.toLowerCase() || "";

  // Fetch all countries
  const countries = await getAllCountries("force-cache");

  // Debug: check how many countries are returned
  console.log("Countries fetched:", countries.length);

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery)
  );

  // Sort alphabetically
  const sortedCountries = [...filteredCountries].sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <section className="mb-8 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="section-kicker">Countries</p>

          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Explore Countries
          </h1>

          <p className="mt-4 max-w-2xl text-slate-300">
            Browse flags, capitals, regions, and populations from real REST
            Countries API data.
          </p>

          {searchQuery && (
            <p className="mt-3 text-sm text-cyan-300">
              Results for:{" "}
              <span className="font-semibold">{searchQuery}</span>
            </p>
          )}

          <p className="mt-3 text-sm text-slate-400">
            Total countries: {sortedCountries.length}
          </p>
        </div>
      </section>

      <CountriesExplorer countries={sortedCountries} />
    </main>
  );
}