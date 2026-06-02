export const metadata = {
  title: "About | World Explorer"
};

export default function AboutPage() {
  const topics = [
    "App Router",
    "File-based routing",
    "Shared layouts",
    "Server components",
    "Client components",
    "Dynamic routes",
    "Data fetching with async/await",
    "Static rendering and caching",
    "Dynamic rendering"
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <section className="panel overflow-hidden">
        <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="section-kicker">About</p>
            <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
              World Explorer
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              World Explorer is a Next.js project that uses real API data to
              display countries around the world. It helps users explore flags,
              capitals, populations, regions, languages, currencies, time
              zones, and Google Maps links.
            </p>
            <p className="mt-4 text-slate-400">
              API used: REST Countries API at restcountries.com.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <div key={topic} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-white">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
