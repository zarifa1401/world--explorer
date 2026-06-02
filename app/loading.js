export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
      <div className="panel min-h-[420px] animate-pulse p-8">
        <div className="h-4 w-32 rounded bg-white/10" />
        <div className="mt-6 h-12 w-80 max-w-full rounded bg-white/10" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="h-60 rounded-lg bg-white/10" />
          ))}
        </div>
      </div>
    </main>
  );
}
