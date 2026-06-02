"use client";

import { motion } from "framer-motion";

export default function HeroGlobe() {
  return (
    <div className="relative flex items-center justify-center">

      {/* GLOW */}

      <div className="absolute w-[550px] h-[550px] rounded-full bg-blue-500/20 blur-[120px]" />

      {/* GLOBE */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
      >
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4"
          alt="Earth"
          className="w-[520px] h-[520px] object-cover rounded-full shadow-[0_0_120px_rgba(59,130,246,0.7)]"
        />
      </motion.div>

      {/* ICELAND */}

      <div className="absolute top-24 left-10 marker">
        Iceland
      </div>

      {/* EGYPT */}

      <div className="absolute top-60 right-10 marker">
        Egypt
      </div>

      {/* JAPAN */}

      <div className="absolute top-40 right-[-30px] marker">
        Japan
      </div>

      {/* CONTROLS */}

      <div className="absolute bottom-0 glass-card px-5 py-3 flex gap-6 text-sm">

        <span>🌎 Rotate</span>

        <span>🔍 Zoom</span>

        <span>✨ Explore</span>

      </div>

    </div>
  );
}