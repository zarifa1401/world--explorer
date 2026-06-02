import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import WorldMapSection from "./WorldMapSection";
import RegionsSection from "./RegionsSection";
import FeaturedCountries from "./FeaturedCountries";
import { getAllCountries } from "@/lib/countries";

export default async function HomeContent() {
  const countries = await getAllCountries("force-cache");

  const featuredCodes = ["JPN", "ITA", "BRA", "EGY", "CAN", "AUS"];

  const featured = featuredCodes
    .map((code) => countries.find((country) => country.cca3 === code))
    .filter(Boolean);

  return (
    <>
      <HeroSection featured={featured} />

      <section className="mx-auto grid max-w-7xl gap-4 px-5 lg:grid-cols-[0.92fr_1.28fr] lg:px-8">
        <StatsSection />
        <WorldMapSection />
      </section>

      <RegionsSection />

      <FeaturedCountries featured={featured} />
    </>
  );
}