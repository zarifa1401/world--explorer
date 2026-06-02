export default function WorldMapSection() {
  return (
    <div className="panel relative min-h-[230px] overflow-hidden p-5">
      <div className="relative z-10">
        <h2 className="font-bold text-white">Interactive World Map</h2>
        <p className="text-sm text-slate-400">Hover over a country</p>
      </div>

      <div className="world-map" />

      <div className="absolute right-8 top-20 rounded-lg border border-white/10 bg-space-900/90 p-3 text-sm shadow-panel">
        <p className="font-semibold text-white">India</p>
        <p className="text-xs text-slate-400">Asia</p>

        <p className="mt-2 text-xs text-slate-400">Population</p>
        <p className="font-semibold text-cyan-200">1.43B</p>
      </div>
    </div>
  );
}