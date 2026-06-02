import Link from "next/link";

export default function RegionsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-4 lg:px-8">
      <div className="panel p-4">
        <h2 className="mb-3 font-bold text-white">
          Explore by Region
        </h2>

        <div className="flex flex-wrap gap-2">
          {[
            "All",
            "Asia",
            "Europe",
            "Africa",
            "Americas",
            "Oceania",
          ].map((region) => (
            <Link
              key={region}
              href="/countries"
              className={`rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold transition hover:border-cyan-300/50 ${
                region === "All"
                  ? "bg-blue-500 text-white shadow-glow"
                  : "bg-white/[0.03] text-slate-300"
              }`}
            >
              {region}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}