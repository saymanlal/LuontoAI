"use client";

import React from "react";
import { AnalysisResponse } from "@/lib/types";
import { ImpactMetrics } from "./ImpactMetrics";
import { TransformationJourney } from "./TransformationJourney";
import { ProductPossibilities } from "./ProductPossibilities";
import { AlternativeComparison } from "./AlternativeComparison";
import {
  Sparkles,
  Layers,
  Repeat,
  ShieldAlert,
  HelpCircle,
  CheckCircle,
  Building2,
  AlertTriangle,
  RotateCcw,
  Boxes,
  Target
} from "lucide-react";

interface AnalysisResultProps {
  data: AnalysisResponse;
  onReset?: () => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ data, onReset }) => {
  return (
    <section id="analysis-result" className="py-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Result Card */}
        <div className="nordic-card-glow rounded-3xl p-6 sm:p-10 space-y-10 relative overflow-hidden transition-all">
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#243547]">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#38ef7d] font-semibold">
                  {data.mode === "multi_blend" ? "Multi-Waste Blend Synthesized" : data.mode === "material_swap" ? "Material Swap Evaluated" : "Material Profile Identified"}
                </span>

                {data.isFallback ? (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#142334] border border-[#243547] text-[10px] font-mono text-[#94a3b8]">
                    Curated Fallback Analysis
                  </span>
                ) : (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b4d3e] border border-[#38ef7d]/40 text-[10px] font-mono text-[#a5f3fc] font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-[#38ef7d]" />
                    <span>Groq LPU Live Analysis</span>
                  </span>
                )}

                {data.targetGoal && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#142334] text-[#38bdf8] border border-[#38bdf8]/30 text-[10px] font-mono flex items-center space-x-1">
                    <Target className="w-3 h-3" />
                    <span>Target: {data.targetGoal}</span>
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-tight">
                {data.material}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#94a3b8]">
                Material Category: <span className="text-[#a5f3fc] font-medium">{data.category}</span>
              </p>
            </div>

            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#142334] hover:bg-[#1c3046] text-[#cbd5e1] text-xs font-medium border border-[#243547] transition-all cursor-pointer self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#38ef7d]" />
                <span>Explore Another</span>
              </button>
            )}
          </div>

          {/* Multi-Blend List Breakdown (if applicable) */}
          {data.materialsList && data.materialsList.length > 1 && (
            <div className="p-4 rounded-2xl bg-[#0e1924] border border-[#38bdf8]/30 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] font-semibold flex items-center space-x-1.5">
                <Boxes className="w-4 h-4" />
                <span>Co-Compounded Waste Feedstocks</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {data.materialsList.map((m, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-[#142634] text-xs font-medium text-white border border-[#38bdf8]/20 flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38ef7d]" />
                    <span>{m}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Blend Synergy Analysis (if applicable) */}
          {data.blendSynergyAnalysis && (
            <div className="p-5 rounded-2xl bg-[#0f2820] border border-[#38ef7d]/30 space-y-2">
              <div className="flex items-center space-x-2 text-[#38ef7d]">
                <Layers className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">
                  Co-Processing & Matrix Synergy
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                {data.blendSynergyAnalysis}
              </p>
            </div>
          )}

          {/* Fallback Notice Banner */}
          {data.isFallback && (
            <div className="p-4 rounded-xl bg-[#142334] border border-[#243547] flex items-start space-x-3 text-xs text-[#94a3b8]">
              <AlertTriangle className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Showing curated Nordic benchmark analysis.</span>
                <p className="mt-0.5">
                  Live AI was unconfigured or offline, so LuontoAI surfaced our verified bioeconomy formulation profile for this material.
                </p>
              </div>
            </div>
          )}

          {/* Section 1: Resource Potential */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[#38ef7d]">
              <Layers className="w-4 h-4" />
              <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">
                Resource Potential
              </h4>
            </div>
            <div className="p-6 rounded-2xl bg-[#0e1924] border border-[#243547] space-y-2">
              <h5 className="text-lg sm:text-xl font-serif text-[#a5f3fc] font-semibold">
                {data.resourcePotential}
              </h5>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {data.resourceDescription}
              </p>
            </div>
          </div>

          {/* Section 2: Material Swap Comparison (Head to Head Pros/Cons if mode is material_swap or available) */}
          {data.materialComparison && (
            <AlternativeComparison
              comparison={data.materialComparison}
              targetGoal={data.targetGoal}
            />
          )}

          {/* Section 3: What Could It Become? (Product ideas) */}
          <ProductPossibilities
            ideas={data.productIdeas}
            targetGoal={data.targetGoal}
          />

          {/* Section 4: Replacement Opportunity & Why Alternative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Replacement */}
            <div className="p-6 rounded-2xl bg-[#0e1924] border border-[#243547] space-y-3">
              <div className="flex items-center space-x-2 text-[#38bdf8]">
                <Repeat className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Replacement Opportunity
                </h4>
              </div>
              <p className="text-sm text-white leading-relaxed font-medium">
                {data.replacementOpportunity}
              </p>
              <p className="text-xs text-[#94a3b8]">
                Displaces resource-intensive virgin extractions and reduces fossil feedstock dependencies.
              </p>
            </div>

            {/* Why This Alternative */}
            <div className="p-6 rounded-2xl bg-[#0e1924] border border-[#243547] space-y-3">
              <div className="flex items-center space-x-2 text-[#38ef7d]">
                <HelpCircle className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Why This Alternative?
                </h4>
              </div>
              <p className="text-sm text-[#cbd5e1] leading-relaxed">
                {data.whyThisAlternative}
              </p>
            </div>
          </div>

          {/* Section 5: Impact Metrics */}
          <ImpactMetrics
            circularityScore={data.circularityScore}
            practicalityScore={data.practicalityScore}
            wastePotential={data.wastePotential}
            waterImpact={data.waterImpact}
            resourcePotentialEstimate={data.resourcePotentialEstimate}
          />

          {/* Section 6: Transformation Journey */}
          <TransformationJourney steps={data.transformationSteps} />

          {/* Section 7: Suitability & Practical Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#243547]">
            {/* Suitable Sectors */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#38ef7d]">
                <Building2 className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Primary Suitable Sectors
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.suitableFor && data.suitableFor.map((sector, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#142634] border border-[#38bdf8]/30 text-xs font-medium text-[#a5f3fc]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Limitations */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#94a3b8]">
                <ShieldAlert className="w-4 h-4 text-[#94a3b8]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-white">
                  Practical Limitations & Constraints
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-[#94a3b8]">
                {data.limitations && data.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38ef7d] mt-1.5 shrink-0" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Confidence & Assessment Disclaimer Footer */}
          <div className="pt-4 border-t border-[#243547] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#94a3b8] font-mono">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#38ef7d]" />
              <span>Assessment Confidence: {data.confidence}</span>
            </div>
            <span className="text-[11px] text-[#94a3b8]">
              Evaluated with LuontoAI Circular Intelligence Engine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
