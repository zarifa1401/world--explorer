import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-5 py-10 text-center">
      <section className="panel p-10">
        <p className="section-kicker mx-auto">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Country Not Found</h1>
        <p className="mt-4 text-slate-300">
          The page you are looking for is outside this orbit.
        </p>
        <Link className="btn-primary mt-6" href="/countries">
          Explore Countries
        </Link>
      </section>
    </main>
  );
}
