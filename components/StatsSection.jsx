function Stat({ value, label, sublabel, tone }) {
  const tones = {
    cyan: "text-cyan-300",
    violet: "text-violet-300",
    amber: "text-amber-300",
  };

  return (
    <div className="border-white/10 sm:border-r sm:last:border-r-0">
      <p className={`text-3xl font-black ${tones[tone]}`}>{value}</p>
      <p className="mt-1 text-sm font-semibold text-white">{label}</p>
      <p className="text-xs text-slate-400">{sublabel}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <div className="panel grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
      <Stat value="195" label="Countries" sublabel="On Earth" tone="cyan" />
      <Stat value="8.0B+" label="Population" sublabel="Worldwide" tone="violet" />
      <Stat value="7,000+" label="Languages" sublabel="Spoken" tone="cyan" />
      <Stat value="24" label="Time Zones" sublabel="Across Globe" tone="amber" />
    </div>
  );
}