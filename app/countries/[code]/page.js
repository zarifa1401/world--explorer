import Link from "next/link";
import { notFound } from "next/navigation";
import { formatCurrencies, formatLanguages, getCountryByCode } from "@/lib/countries";

export async function generateMetadata({ params }) {
  const country = await getCountryByCode(params.code).catch(() => null);

  if (!country) {
    return {
      title: "Country Not Found | World Explorer"
    };
  }

  return {
    title: `${country.name.common} | World Explorer`,
    description: `Explore facts, maps, languages, currencies, and population data for ${country.name.common}.`
  };
}

export default async function CountryDetailsPage({ params }) {
  // This page fetches fresh data every time.
  const country = await getCountryByCode(params.code);

  if (!country) {
    notFound();
  }

  const languages = formatLanguages(country.languages);
  const currencies = formatCurrencies(country.currencies);

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <Link className="mb-6 inline-flex text-sm font-semibold text-cyan-200 hover:text-white" href="/countries">
        &lt;- Back to countries
      </Link>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel overflow-hidden">
          <img
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt || `${country.name.common} flag`}
            className="h-80 w-full object-cover"
          />
          <div className="p-6">
            <p className="section-kicker">{country.region}</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              {country.name.common}
            </h1>
            <p className="mt-3 text-slate-300">{country.name.official}</p>
            <a
              className="btn-primary mt-6"
              href={country.maps.googleMaps}
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          <InfoPanel title="Country Profile">
            <Detail label="Capital" value={country.capital?.join(", ") || "No capital"} />
            <Detail label="Region" value={country.region || "Unknown"} />
            <Detail label="Subregion" value={country.subregion || "Unknown"} />
            <Detail label="Population" value={country.population.toLocaleString()} />
          </InfoPanel>

          <InfoPanel title="Culture And Money">
            <Detail label="Languages" value={languages || "Not listed"} />
            <Detail label="Currencies" value={currencies || "Not listed"} />
            <Detail label="Time Zones" value={country.timezones?.join(", ") || "Not listed"} />
          </InfoPanel>

          <InfoPanel title="Map Coordinates">
            <Detail label="Latitude / Longitude" value={country.latlng?.join(", ") || "Not listed"} />
            <Detail label="Area" value={`${country.area?.toLocaleString() || "Unknown"} km2`} />
            <Detail label="Top-level Domain" value={country.tld?.join(", ") || "Not listed"} />
          </InfoPanel>
        </div>
      </section>
    </main>
  );
}

function InfoPanel({ title, children }) {
  return (
    <section className="panel p-6">
      <h2 className="mb-4 text-xl font-bold text-white">{title}</h2>
      <div className="grid gap-3">{children}</div>
    </section>
  );
}

function Detail({ label, value }) {
  return (
    <div className="grid gap-1 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-[170px_1fr]">
      <span className="text-sm text-slate-400">{label}</span>
      <span className="font-semibold text-slate-100">{value}</span>
    </div>
  );
}
