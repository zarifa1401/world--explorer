import FavoritesClient from "@/components/FavoritesClient";
import { getAllCountries } from "@/lib/countries";

export const metadata = {
  title: "Favorites | World Explorer"
};

export default async function FavoritesPage() {
  const countries = await getAllCountries("force-cache");

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <section className="mb-8">
        <p className="section-kicker">Favorites</p>
        <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
          Favorite Countries
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Save countries from this browser and return to them later.
        </p>
      </section>
      <FavoritesClient countries={countries} />
    </main>
  );
}
