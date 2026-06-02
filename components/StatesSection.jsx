import {
  Globe,
  Users,
  MessageCircle,
  Clock3,
} from "lucide-react";

export default function StatsSection() {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

      <div className="glass-card p-8">

        <Globe
          className="text-blue-400 mb-4"
          size={36}
        />

        <h3 className="text-4xl font-bold">
          195
        </h3>

        <p className="text-slate-400 mt-2">
          Countries On Earth
        </p>

      </div>

      <div className="glass-card p-8">

        <Users
          className="text-purple-400 mb-4"
          size={36}
        />

        <h3 className="text-4xl font-bold">
          8.0B+
        </h3>

        <p className="text-slate-400 mt-2">
          Population Worldwide
        </p>

      </div>

      <div className="glass-card p-8">

        <MessageCircle
          className="text-cyan-400 mb-4"
          size={36}
        />

        <h3 className="text-4xl font-bold">
          7000+
        </h3>

        <p className="text-slate-400 mt-2">
          Languages Spoken
        </p>

      </div>

      <div className="glass-card p-8">

        <Clock3
          className="text-orange-400 mb-4"
          size={36}
        />

        <h3 className="text-4xl font-bold">
          24
        </h3>

        <p className="text-slate-400 mt-2">
          Time Zones
        </p>

      </div>

    </section>
  );
}