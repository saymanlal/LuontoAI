"use client";

import React from "react";
import { MaterialComparison } from "@/lib/types";
import { CheckCircle2, XCircle, DollarSign, Shield, ArrowRight, Repeat } from "lucide-react";

interface AlternativeComparisonProps {
  comparison: MaterialComparison;
  targetGoal?: string;
}

export const AlternativeComparison: React.FC<AlternativeComparisonProps> = ({
  comparison,
  targetGoal
}) => {
  return (
    <div className="space-y-6 pt-4 border-t border-[#243547]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[#38ef7d]">
            <Repeat className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">
              Material Substitution Trade-off Analysis
            </span>
          </div>
          <h4 className="text-xl sm:text-2xl font-serif text-white font-medium">
            Conventional vs Circular Alternative
          </h4>
        </div>
        {targetGoal && (
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#142334] text-[#a5f3fc] border border-[#38bdf8]/30">
            Target: {targetGoal}
          </span>
        )}
      </div>

      {/* Comparison Head-to-Head Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Conventional Baseline */}
        <div className="p-6 rounded-2xl bg-[#121c27] border border-[#243547] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#243547]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8]">
                Conventional Baseline
              </span>
              <h5 className="text-base font-semibold text-[#f87171] mt-0.5">
                {comparison.conventionalMaterial}
              </h5>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-red-950/60 text-red-300 border border-red-800/40 text-[10px] font-mono">
              Fossil / Virgin Depleting
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#cbd5e1] font-medium">
              Limitations & Environmental Cost:
            </span>
            <ul className="space-y-2 text-xs text-[#94a3b8]">
              <li className="flex items-start space-x-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Heavy reliance on crude oil extraction and non-renewable mining.</span>
              </li>
              <li className="flex items-start space-x-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Persistent non-biodegradable pollution in oceans and landfills for centuries.</span>
              </li>
              <li className="flex items-start space-x-2">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>Vulnerable to global commodity price shocks and incoming EU carbon tariffs.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Recommended Circular Replacement */}
        <div className="p-6 rounded-2xl bg-[#0f251c] border border-[#38ef7d]/40 space-y-4 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-[#38ef7d]/20">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#38ef7d]">
                Recommended Circular Solution
              </span>
              <h5 className="text-base font-semibold text-[#38ef7d] mt-0.5">
                {comparison.circularReplacement}
              </h5>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#1b4d3e] text-[#a5f3fc] border border-[#38ef7d]/40 text-[10px] font-mono">
              100% Upcycled Waste
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#a5f3fc] font-medium">
              Verified Circular Advantages (Pros):
            </span>
            <ul className="space-y-2 text-xs text-[#cbd5e1]">
              {comparison.pros.map((pro, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#38ef7d] shrink-0 mt-0.5" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Engineering Trade-offs, Cost Feasibility & Durability */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        {/* Trade-offs / Cons */}
        <div className="p-5 rounded-2xl bg-[#142334] border border-[#243547] space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#38bdf8] font-semibold flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Engineering Trade-Offs (Cons)</span>
          </span>
          <ul className="space-y-1.5 text-xs text-[#94a3b8]">
            {comparison.cons.map((con, i) => (
              <li key={i} className="flex items-start space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Cost Feasibility */}
        <div className="p-5 rounded-2xl bg-[#142334] border border-[#243547] space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#38ef7d] font-semibold flex items-center space-x-1">
            <DollarSign className="w-3.5 h-3.5 text-[#38ef7d]" />
            <span>Cost & Scaling Feasibility</span>
          </span>
          <p className="text-xs text-[#cbd5e1] leading-relaxed font-medium">
            {comparison.costFeasibility}
          </p>
          <p className="text-[10px] text-[#94a3b8]">
            Evaluated for regional municipal & hospitality aggregation.
          </p>
        </div>

        {/* Durability Comparison */}
        <div className="p-5 rounded-2xl bg-[#142334] border border-[#243547] space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#a5f3fc] font-semibold flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-[#a5f3fc]" />
            <span>Durability & Longevity</span>
          </span>
          <p className="text-xs text-[#cbd5e1] leading-relaxed font-medium">
            {comparison.durabilityComparison}
          </p>
          <p className="text-[10px] text-[#94a3b8]">
            Standardized for commercial operations & hospitality lifecycles.
          </p>
        </div>
      </div>
    </div>
  );
};
