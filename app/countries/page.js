import CountriesExplorer from "@/components/CountriesExplorer";
import { getAllCountries } from "@/lib/countries";

export const metadata = {
  title: "Countries | World Explorer",
};

export default async function CountriesPage({ searchParams }) {
  // Get search query from URL
  const searchQuery = searchParams?.search?.toLowerCase() || "";

  // Fetch all countries (cached)
  const countries = await getAllCountries("force-cache");

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery)
  );

  // Sort filtered results
  const sortedCountries = filteredCountries
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .slice(0, 60);

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

          {/* Optional: show search result info */}
          {searchQuery && (
            <p className="mt-3 text-sm text-cyan-300">
              Results for: <span className="font-semibold">{searchQuery}</span>
            </p>
          )}
        </div>
      </section>

      <CountriesExplorer countries={sortedCountries} />
    </main>
  );
}