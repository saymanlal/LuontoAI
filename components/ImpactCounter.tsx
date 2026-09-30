"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, Layers, Box, RefreshCw, BarChart2 } from "lucide-react";

interface ImpactTrackerProps {
  currentMaterial?: string;
  hasResult: boolean;
}

interface StatsState {
  materialsExplored: number;
  pathwaysDiscovered: number;
  productsIdentified: number;
  wasteStreamsMapped: number;
}

const STORAGE_KEY = "luontoai_circular_demo_stats";

export const ImpactCounter: React.FC<ImpactTrackerProps> = ({ currentMaterial, hasResult }) => {
  const [stats, setStats] = useState<StatsState>({
    materialsExplored: 0,
    pathwaysDiscovered: 0,
    productsIdentified: 0,
    wasteStreamsMapped: 0
  });

  // Load from local storage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setStats(JSON.parse(stored));
      } else {
        const initial = { materialsExplored: 3, pathwaysDiscovered: 6, productsIdentified: 12, wasteStreamsMapped: 4 };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
        setStats(initial);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  // Increment when a new result is analyzed
  useEffect(() => {
    if (!hasResult || !currentMaterial) return;

    setStats((prev) => {
      const updated = {
        materialsExplored: prev.materialsExplored + 1,
        pathwaysDiscovered: prev.pathwaysDiscovered + 2,
        productsIdentified: prev.productsIdentified + 3,
        wasteStreamsMapped: prev.wasteStreamsMapped + 1
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // Safe fallback
      }
      return updated;
    });
  }, [hasResult, currentMaterial]);

  return (
    <section className="py-12 border-y border-[#243547]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="text-left">
            <div className="flex items-center space-x-2 text-[#38ef7d]">
              <BarChart2 className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                Your Circular Exploration
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-semibold mt-1">
              Session Exploration Counter
            </h3>
            <p className="text-xs text-[#94a3b8] mt-0.5">
              Tracking your circular explorations during this browser session. <span className="font-mono text-[#38ef7d] font-medium">(Demo metrics)</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547] text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#38ef7d]">
                {stats.materialsExplored}
              </div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase mt-1">
                Materials Explored
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547] text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#38bdf8]">
                {stats.pathwaysDiscovered}
              </div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase mt-1">
                Pathways Discovered
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547] text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {stats.productsIdentified}
              </div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase mt-1">
                Products Identified
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547] text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#a5f3fc]">
                {stats.wasteStreamsMapped}
              </div>
              <div className="text-[11px] font-mono text-[#94a3b8] uppercase mt-1">
                Waste Streams Mapped
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
