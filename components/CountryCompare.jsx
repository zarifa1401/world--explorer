"use client";

import { useMemo, useState } from "react";
import { formatCurrencies, formatLanguages } from "@/lib/countries";

export default function CountryCompare({ countries }) {
  const sortedCountries = useMemo(
    () => countries.slice().sort((a, b) => a.name.common.localeCompare(b.name.common)),
    [countries]
  );
  const [leftCode, setLeftCode] = useState("AFG");
  const [rightCode, setRightCode] = useState("JPN");
  const left = sortedCountries.find((country) => country.cca3 === leftCode) || sortedCountries[0];
  const right = sortedCountries.find((country) => country.cca3 === rightCode) || sortedCountries[1];

  return (
    <section className="grid gap-5 lg:grid-cols-2">
      <ComparePanel country={left} value={leftCode} onChange={setLeftCode} countries={sortedCountries} />
      <ComparePanel country={right} value={rightCode} onChange={setRightCode} countries={sortedCountries} />
    </section>
  );
}

function ComparePanel({ country, value, onChange, countries }) {
  return (
    <article className="panel overflow-hidden">
      <img
        src={country.flags.svg || country.flags.png}
        alt={country.flags.alt || `${country.name.common} flag`}
        className="h-56 w-full object-cover"
      />
      <div className="p-5">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full rounded-lg border border-white/10 bg-space-950 px-4 py-3 text-white outline-none focus:border-cyan-300"
        >
          {countries.map((option) => (
            <option key={option.cca3} value={option.cca3}>
              {option.name.common}
            </option>
          ))}
        </select>
        <h2 className="mt-5 text-2xl font-black text-white">{country.name.common}</h2>
        <dl className="mt-4 grid gap-3 text-sm">
          <Row label="Capital" value={country.capital?.join(", ") || "No capital"} />
          <Row label="Region" value={country.region} />
          <Row label="Population" value={country.population.toLocaleString()} />
          <Row label="Languages" value={formatLanguages(country.languages) || "Not listed"} />
          <Row label="Currencies" value={formatCurrencies(country.currencies) || "Not listed"} />
          <Row label="Time Zones" value={country.timezones?.join(", ") || "Not listed"} />
        </dl>
      </div>
    </article>
  );
}

function Row({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <dt className="text-slate-400">{label}</dt>
      <dd className="mt-1 font-semibold text-white">{value}</dd>
    </div>
  );
}
