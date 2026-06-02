import HeroGlobe from "./HeroGlobe";
import CountrySpotlight from "./CountrySpotlight";

export default function HeroSection() {
  return (
    <section className="grid lg:grid-cols-3 gap-8 items-center py-16">

      {/* LEFT */}

      <div>

        <div className="inline-flex px-4 py-2 rounded-full border border-blue-500/30 text-blue-400 text-sm mb-6">
          EXPLORE OUR PLANET
        </div>

        <h1 className="text-6xl lg:text-7xl font-bold leading-tight">

          Discover

          <br />

          The{" "}
          <span className="gradient-text">
            World
          </span>

        </h1>

        <p className="mt-6 text-slate-300 text-lg leading-8 max-w-lg">

          Explore every country on Earth.
          Learn about cultures, languages,
          populations and more.

        </p>

        <div className="flex gap-4 mt-8">

          <button className="primary-btn">
            Explore Countries
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

        <div className="flex items-center gap-4 mt-10">

          <div className="flex -space-x-3">

            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-10 h-10 rounded-full border-2 border-slate-900"
            />

            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-10 h-10 rounded-full border-2 border-slate-900"
            />

            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-10 h-10 rounded-full border-2 border-slate-900"
            />

          </div>

          <p className="text-slate-400">
            Join 50K+ explorers around the world
          </p>

        </div>

      </div>

      {/* CENTER */}

      <HeroGlobe />

      {/* RIGHT */}

      <CountrySpotlight />

    </section>
  );
}