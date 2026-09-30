"use client";

import React from "react";
import { Gauge, Activity, Trash2, Droplets, Info } from "lucide-react";

interface ImpactMetricsProps {
  circularityScore: number;
  practicalityScore: number;
  wastePotential: string;
  waterImpact: string;
  resourcePotentialEstimate: string;
}

export const ImpactMetrics: React.FC<ImpactMetricsProps> = ({
  circularityScore,
  practicalityScore,
  wastePotential,
  waterImpact,
  resourcePotentialEstimate
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#38ef7d] font-semibold flex items-center space-x-1.5">
          <Activity className="w-3.5 h-3.5" />
          <span>Circular & Practical Feasibility</span>
        </h4>
        <span className="text-[11px] font-mono text-[#94a3b8]">Illustrative assessments</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Circularity Score */}
        <div className="p-5 rounded-2xl bg-[#0e1924] border border-[#243547] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#94a3b8]">
            <span className="text-xs font-mono uppercase tracking-wider">Circularity</span>
            <Gauge className="w-4 h-4 text-[#38ef7d]" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#38ef7d]">
                {circularityScore}
              </span>
              <span className="text-xs font-mono text-[#94a3b8]">/100</span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-[#1b2b3a] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, circularityScore))}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-[#94a3b8] leading-tight">
            Potential for closed or cascaded secondary loops.
          </p>
        </div>

        {/* Metric 2: Practicality Score */}
        <div className="p-5 rounded-2xl bg-[#0e1924] border border-[#243547] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#94a3b8]">
            <span className="text-xs font-mono uppercase tracking-wider">Practicality</span>
            <Activity className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#38bdf8]">
                {practicalityScore}
              </span>
              <span className="text-xs font-mono text-[#94a3b8]">/100</span>
            </div>
            <div className="w-full bg-[#1b2b3a] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#0284c7] to-[#38bdf8] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, practicalityScore))}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-[#94a3b8] leading-tight">
            Readiness of sorting, logistics & processing technology.
          </p>
        </div>

        {/* Metric 3: Waste Diversion */}
        <div className="p-5 rounded-2xl bg-[#0e1924] border border-[#243547] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#94a3b8]">
            <span className="text-xs font-mono uppercase tracking-wider">Waste Potential</span>
            <Trash2 className="w-4 h-4 text-[#cbd5e1]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white leading-snug line-clamp-2">
              {wastePotential}
            </div>
          </div>
          <p className="text-[11px] text-[#94a3b8] leading-tight">
            Relative volume impact when redirected from landfills.
          </p>
        </div>

        {/* Metric 4: Water & Resource Estimate */}
        <div className="p-5 rounded-2xl bg-[#0e1924] border border-[#243547] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#94a3b8]">
            <span className="text-xs font-mono uppercase tracking-wider">Ecological Impact</span>
            <Droplets className="w-4 h-4 text-[#38bdf8]" />
          </div>
          <div>
            <div className="text-xs font-medium text-white leading-snug line-clamp-3">
              {waterImpact || resourcePotentialEstimate}
            </div>
          </div>
          <div className="flex items-center space-x-1 text-[10px] text-[#94a3b8] font-mono">
            <Info className="w-3 h-3 shrink-0" />
            <span>Illustrative estimate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
