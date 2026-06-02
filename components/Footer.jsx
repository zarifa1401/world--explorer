export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-space-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          © {currentYear} World Explorer - Real country data from REST Countries API.
        </p>

        <p>
          Built with Next.js App Router and Tailwind CSS with so much ❤️!
        </p>
      </div>
    </footer>
  );
}