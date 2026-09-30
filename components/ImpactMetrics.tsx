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
        <h4 className="text-xs font-mono uppercase tracking-wider text-[#1e3a2b] font-semibold flex items-center space-x-1.5">
          <Activity className="w-3.5 h-3.5" />
          <span>Circular & Practical Feasibility</span>
        </h4>
        <span className="text-[11px] font-mono text-[#667069]">Illustrative assessments</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Circularity Score */}
        <div className="p-5 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#667069]">
            <span className="text-xs font-mono uppercase tracking-wider">Circularity</span>
            <Gauge className="w-4 h-4 text-[#1e3a2b]" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1e3a2b]">
                {circularityScore}
              </span>
              <span className="text-xs font-mono text-[#667069]">/100</span>
            </div>
            {/* Simple progress bar */}
            <div className="w-full bg-[#e6e8e5] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#1e3a2b] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, circularityScore))}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-[#667069] leading-tight">
            Potential for closed or cascaded secondary loops.
          </p>
        </div>

        {/* Metric 2: Practicality Score */}
        <div className="p-5 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#667069]">
            <span className="text-xs font-mono uppercase tracking-wider">Practicality</span>
            <Activity className="w-4 h-4 text-[#2b4c7e]" />
          </div>
          <div>
            <div className="flex items-baseline space-x-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#2b4c7e]">
                {practicalityScore}
              </span>
              <span className="text-xs font-mono text-[#667069]">/100</span>
            </div>
            <div className="w-full bg-[#e6e8e5] h-1.5 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-[#2b4c7e] h-full rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, Math.max(0, practicalityScore))}%` }}
              />
            </div>
          </div>
          <p className="text-[11px] text-[#667069] leading-tight">
            Readiness of sorting, logistics & processing technology.
          </p>
        </div>

        {/* Metric 3: Waste Diversion */}
        <div className="p-5 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#667069]">
            <span className="text-xs font-mono uppercase tracking-wider">Waste Potential</span>
            <Trash2 className="w-4 h-4 text-[#1c211f]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#1c211f] leading-snug line-clamp-2">
              {wastePotential}
            </div>
          </div>
          <p className="text-[11px] text-[#667069] leading-tight">
            Relative volume impact when redirected from landfills.
          </p>
        </div>

        {/* Metric 4: Water & Resource Estimate */}
        <div className="p-5 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-[#667069]">
            <span className="text-xs font-mono uppercase tracking-wider">Ecological Impact</span>
            <Droplets className="w-4 h-4 text-[#2b4c7e]" />
          </div>
          <div>
            <div className="text-xs font-medium text-[#1c211f] leading-snug line-clamp-3">
              {waterImpact || resourcePotentialEstimate}
            </div>
          </div>
          <div className="flex items-center space-x-1 text-[10px] text-[#667069] font-mono">
            <Info className="w-3 h-3 shrink-0" />
            <span>Illustrative estimate</span>
          </div>
        </div>
      </div>
    </div>
  );
};
