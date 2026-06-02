import Link from "next/link";

export default function HeroSection({ featured }) {
  return (
    <section className="home-hero mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 pb-6 pt-8 lg:grid-cols-[360px_560px_280px] lg:gap-5 lg:px-8 xl:grid-cols-[390px_590px_280px]">
      <div className="z-10 flex flex-col justify-center">
        <p className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
          Explore our planet
        </p>

        <h1 className="mt-5 max-w-xl text-5xl font-black leading-[1.04] text-white sm:text-7xl">
          Discover The <span className="text-gradient">World</span>
        </h1>

        <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
          Explore countries around the world and learn about their flags,
          capitals, populations, currencies, languages, and more.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="btn-primary" href="/countries">
            Explore Countries <span aria-hidden="true">-&gt;</span>
          </Link>

          <Link className="btn-secondary" href="/about">
            Learn More
          </Link>
        </div>

        <div className="mt-9 flex items-center gap-4 text-sm text-slate-300">
          <div className="flex -space-x-3">
            {featured.slice(0, 3).map((country) => (
              <img
                key={country.cca3}
                src={country.flags.svg}
                alt=""
                className="h-10 w-10 rounded-full border-2 border-space-950 object-cover"
              />
            ))}
          </div>

          <p>
            Join <span className="font-semibold text-white">50K+</span>{" "}
            explorers around the world
          </p>
        </div>
      </div>

      <div className="hero-globe-wrap relative flex min-h-[500px] items-center justify-center lg:-ml-8 lg:-mr-4">
        <div className="earth">
          <div className="earth-shine" />
        </div>

        <div className="country-pin pin-iceland">Iceland</div>
        <div className="country-pin pin-japan">Japan</div>
        <div className="country-pin pin-egypt">Egypt</div>

        <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-2 rounded-full border border-white/10 bg-black/35 p-2 text-xs text-slate-200 backdrop-blur">
          <span className="control-pill">Rotate</span>
          <span className="control-pill">Zoom</span>
          <span className="control-pill">Explore</span>
        </div>
      </div>

      <aside className="spotlight-card panel self-center overflow-hidden p-4 lg:ml-0">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white">
            Country Spotlight
          </h2>
          <span className="text-slate-500">x</span>
        </div>

        <div className="flex items-center gap-4">
          <img
            src="https://flagcdn.com/jp.svg"
            alt="Japan flag"
            className="h-12 w-16 rounded-md object-cover"
          />

          <div>
            <h3 className="text-2xl font-black text-white">Japan</h3>
            <p className="text-sm text-slate-400">Asia</p>
          </div>
        </div>

        <div className="japan-photo mt-4 h-32 rounded-lg" />

        <p className="mt-4 text-sm leading-6 text-slate-300">
          A beautiful blend of tradition and innovation in the heart of Asia.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
          <div>
            <p className="text-slate-500">Population</p>
            <p className="font-bold text-white">123.3M</p>
          </div>

          <div>
            <p className="text-slate-500">Capital</p>
            <p className="font-bold text-white">Tokyo</p>
          </div>

          <div>
            <p className="text-slate-500">Currency</p>
            <p className="font-bold text-white">JPY</p>
          </div>
        </div>

        <Link className="btn-card mt-4 min-h-10" href="/countries/JPN">
          Explore Japan <span aria-hidden="true">-&gt;</span>
        </Link>
      </aside>
    </section>
  );
}