const ALL_COUNTRIES_FIELDS = [
  "name",
  "cca3",
  "flags",
  "capital",
  "region",
  "population",
  "languages",
  "currencies",
  "timezones",
  "maps"
].join(",");

const fallbackCountries = [
  {
    cca3: "JPN",
    name: { common: "Japan", official: "Japan" },
    flags: {
      svg: "https://flagcdn.com/jp.svg",
      png: "https://flagcdn.com/w320/jp.png",
      alt: "The flag of Japan."
    },
    capital: ["Tokyo"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 123294513,
    languages: { jpn: "Japanese" },
    currencies: { JPY: { name: "Japanese yen", symbol: "JPY" } },
    timezones: ["UTC+09:00"],
    maps: { googleMaps: "https://goo.gl/maps/NGTLSCSrA8bMrvnX9" },
    latlng: [36, 138],
    area: 377930,
    tld: [".jp"]
  },
  {
    cca3: "ITA",
    name: { common: "Italy", official: "Italian Republic" },
    flags: { svg: "https://flagcdn.com/it.svg", png: "https://flagcdn.com/w320/it.png" },
    capital: ["Rome"],
    region: "Europe",
    subregion: "Southern Europe",
    population: 58870762,
    languages: { ita: "Italian" },
    currencies: { EUR: { name: "Euro", symbol: "EUR" } },
    timezones: ["UTC+01:00"],
    maps: { googleMaps: "https://goo.gl/maps/8M1K27TDj7StTRTq8" }
  },
  {
    cca3: "BRA",
    name: { common: "Brazil", official: "Federative Republic of Brazil" },
    flags: { svg: "https://flagcdn.com/br.svg", png: "https://flagcdn.com/w320/br.png" },
    capital: ["Brasilia"],
    region: "Americas",
    subregion: "South America",
    population: 203062512,
    languages: { por: "Portuguese" },
    currencies: { BRL: { name: "Brazilian real", symbol: "R$" } },
    timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
    maps: { googleMaps: "https://goo.gl/maps/waCKk21HeeqFzkNC9" }
  },
  {
    cca3: "EGY",
    name: { common: "Egypt", official: "Arab Republic of Egypt" },
    flags: { svg: "https://flagcdn.com/eg.svg", png: "https://flagcdn.com/w320/eg.png" },
    capital: ["Cairo"],
    region: "Africa",
    subregion: "Northern Africa",
    population: 102334403,
    languages: { ara: "Arabic" },
    currencies: { EGP: { name: "Egyptian pound", symbol: "EGP" } },
    timezones: ["UTC+02:00"],
    maps: { googleMaps: "https://goo.gl/maps/uoDRhXbsqjG6L7VG7" }
  },
  {
    cca3: "CAN",
    name: { common: "Canada", official: "Canada" },
    flags: { svg: "https://flagcdn.com/ca.svg", png: "https://flagcdn.com/w320/ca.png" },
    capital: ["Ottawa"],
    region: "Americas",
    subregion: "North America",
    population: 36991981,
    languages: { eng: "English", fra: "French" },
    currencies: { CAD: { name: "Canadian dollar", symbol: "$" } },
    timezones: ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30"],
    maps: { googleMaps: "https://goo.gl/maps/jmEVLz4D6K6b4uGQ6" }
  },
  {
    cca3: "AUS",
    name: { common: "Australia", official: "Commonwealth of Australia" },
    flags: { svg: "https://flagcdn.com/au.svg", png: "https://flagcdn.com/w320/au.png" },
    capital: ["Canberra"],
    region: "Oceania",
    subregion: "Australia and New Zealand",
    population: 25687041,
    languages: { eng: "English" },
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } },
    timezones: ["UTC+05:00", "UTC+08:00", "UTC+09:30", "UTC+10:00"],
    maps: { googleMaps: "https://goo.gl/maps/DcjaDa7UbhnZTndH6" }
  },
  {
    cca3: "AFG",
    name: { common: "Afghanistan", official: "Islamic Republic of Afghanistan" },
    flags: { svg: "https://flagcdn.com/af.svg", png: "https://flagcdn.com/w320/af.png" },
    capital: ["Kabul"],
    region: "Asia",
    subregion: "Southern Asia",
    population: 40218234,
    languages: { prs: "Dari", pus: "Pashto", tuk: "Turkmen" },
    currencies: { AFN: { name: "Afghan afghani", symbol: "AFN" } },
    timezones: ["UTC+04:30"],
    maps: { googleMaps: "https://goo.gl/maps/BXBGw7yUUFknCfva9" }
  }
];

export async function getAllCountries(cache = "force-cache") {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/all?fields=${ALL_COUNTRIES_FIELDS}`, {
      cache
    });

    if (!res.ok) {
      return fallbackCountries;
    }

    return res.json();
  } catch {
    return fallbackCountries;
  }
}

export async function getCountryByCode(code) {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      return fallbackCountries.find((country) => country.cca3 === code.toUpperCase()) || null;
    }

    const data = await res.json();
    return data[0];
  } catch {
    return fallbackCountries.find((country) => country.cca3 === code.toUpperCase()) || null;
  }
}

export function formatLanguages(languages = {}) {
  return Object.values(languages).join(", ");
}

export function formatCurrencies(currencies = {}) {
  return Object.values(currencies)
    .map((currency) => `${currency.name}${currency.symbol ? ` (${currency.symbol})` : ""}`)
    .join(", ");
}
