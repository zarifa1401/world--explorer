import CountryCompare from "@/components/CountryCompare";
import { getAllCountries } from "@/lib/countries";

export const metadata = {
  title: "Compare | World Explorer"
};

export default async function ComparePage() {
  const countries = await getAllCountries("force-cache");

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <section className="mb-8">
        <p className="section-kicker">Compare</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
          Compare Countries
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Place two countries side by side and compare population, region,
          capital, languages, currencies, and time zones.
        </p>
      </section>
      <CountryCompare countries={countries} />
    </main>
  );
}
