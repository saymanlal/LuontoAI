"use client";

import React, { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const NorthernLightsCanvas: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate gentle snow flakes on client mount
    const flakes: Snowflake[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of viewport width
      size: Math.random() * 3 + 1.5, // 1.5px to 4.5px
      duration: Math.random() * 12 + 8, // 8s to 20s
      delay: Math.random() * 10,
      opacity: Math.random() * 0.6 + 0.2
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Deep Arctic Twilight Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d13] via-[#0b1622] to-[#080f18]" />

      {/* Atmospheric Aurora Borealis Northern Lights Ribbon 1 */}
      <div
        className="aurora-layer-1 absolute -top-[20%] -left-[15%] w-[130%] h-[70%] blur-[80px] rounded-full mix-blend-screen opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(17, 153, 142, 0.45) 0%, rgba(56, 239, 125, 0.3) 40%, rgba(56, 189, 248, 0.15) 70%, transparent 100%)"
        }}
      />

      {/* Atmospheric Aurora Borealis Northern Lights Ribbon 2 (Ice Blue / Cyan Glow) */}
      <div
        className="aurora-layer-2 absolute top-[5%] -right-[10%] w-[110%] h-[60%] blur-[90px] rounded-full mix-blend-screen opacity-45"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(56, 189, 248, 0.4) 0%, rgba(14, 165, 233, 0.25) 45%, rgba(16, 185, 129, 0.15) 75%, transparent 100%)"
        }}
      />

      {/* Soft Mountain Twilight Mist */}
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#080d13] via-transparent to-transparent opacity-80" />

      {/* Falling Snowflakes */}
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snow-flake"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            opacity: flake.opacity,
            boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)"
          }}
        />
      ))}
    </div>
  );
};
