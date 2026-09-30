"use client";

import React from "react";
import { AnalysisResponse } from "@/lib/types";
import { ImpactMetrics } from "./ImpactMetrics";
import { TransformationJourney } from "./TransformationJourney";
import { ProductPossibilities } from "./ProductPossibilities";
import {
  Sparkles,
  Layers,
  Repeat,
  ShieldAlert,
  HelpCircle,
  CheckCircle,
  Building2,
  AlertTriangle,
  RotateCcw
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
        <div className="bg-white rounded-3xl border border-[#e6e8e5] p-6 sm:p-10 space-y-10 shadow-sm relative overflow-hidden">
          {/* Top Status Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#e6e8e5]">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
                  Material Identified
                </span>
                {data.isFallback && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f4f5f2] border border-[#cbd2cb] text-[10px] font-mono text-[#667069]">
                    Curated Fallback Analysis
                  </span>
                )}
                {!data.isFallback && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#edf2ee] border border-[#1e3a2b]/20 text-[10px] font-mono text-[#1e3a2b] font-semibold flex items-center space-x-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Groq AI Live Analysis</span>
                  </span>
                )}
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#1c211f] tracking-tight">
                {data.material}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#667069]">
                Category: <span className="text-[#1c211f] font-medium">{data.category}</span>
              </p>
            </div>

            {onReset && (
              <button
                onClick={onReset}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#f4f5f2] hover:bg-[#edf2ee] text-[#1c211f] text-xs font-medium border border-[#e6e8e5] transition-all cursor-pointer self-start sm:self-auto"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#667069]" />
                <span>Explore Another</span>
              </button>
            )}
          </div>

          {/* Fallback Notice Banner */}
          {data.isFallback && (
            <div className="p-4 rounded-xl bg-[#fbfbf9] border border-[#cbd2cb] flex items-start space-x-3 text-xs text-[#667069]">
              <AlertTriangle className="w-4 h-4 text-[#2b4c7e] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#1c211f]">Showing a curated fallback analysis.</span>
                <p className="mt-0.5">
                  Live AI API was unavailable or not configured, so LuontoAI surfaced our verified Nordic bioeconomy benchmark profile for this material.
                </p>
              </div>
            </div>
          )}

          {/* Section 1: Resource Potential */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-[#1e3a2b]">
              <Layers className="w-4 h-4" />
              <h4 className="text-xs font-mono uppercase tracking-widest font-semibold">
                Resource Potential
              </h4>
            </div>
            <div className="p-6 rounded-2xl bg-[#edf2ee]/60 border border-[#1e3a2b]/20 space-y-2">
              <h5 className="text-lg sm:text-xl font-serif text-[#1e3a2b] font-semibold">
                {data.resourcePotential}
              </h5>
              <p className="text-sm text-[#1c211f] leading-relaxed">
                {data.resourceDescription}
              </p>
            </div>
          </div>

          {/* Section 2: What Could It Become? (Product ideas) */}
          <ProductPossibilities ideas={data.productIdeas} />

          {/* Section 3: Replacement Opportunity & Why Alternative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Replacement */}
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] space-y-3">
              <div className="flex items-center space-x-2 text-[#2b4c7e]">
                <Repeat className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Replacement Opportunity
                </h4>
              </div>
              <p className="text-sm text-[#1c211f] leading-relaxed font-medium">
                {data.replacementOpportunity}
              </p>
              <p className="text-xs text-[#667069]">
                Displaces resource-intensive virgin extractions and reduces fossil feedstock dependencies.
              </p>
            </div>

            {/* Why This Alternative */}
            <div className="p-6 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] space-y-3">
              <div className="flex items-center space-x-2 text-[#1e3a2b]">
                <HelpCircle className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Why This Alternative?
                </h4>
              </div>
              <p className="text-sm text-[#1c211f] leading-relaxed">
                {data.whyThisAlternative}
              </p>
            </div>
          </div>

          {/* Section 4: Impact Metrics */}
          <ImpactMetrics
            circularityScore={data.circularityScore}
            practicalityScore={data.practicalityScore}
            wastePotential={data.wastePotential}
            waterImpact={data.waterImpact}
            resourcePotentialEstimate={data.resourcePotentialEstimate}
          />

          {/* Section 5: Transformation Journey */}
          <TransformationJourney steps={data.transformationSteps} />

          {/* Section 6: Suitability & Practical Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#e6e8e5]">
            {/* Suitable Sectors */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#1e3a2b]">
                <Building2 className="w-4 h-4" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold">
                  Primary Suitable Sectors
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.suitableFor && data.suitableFor.map((sector, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-[#edf2ee] border border-[#cbd2cb]/40 text-xs font-medium text-[#1e3a2b]"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Limitations */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-[#667069]">
                <ShieldAlert className="w-4 h-4 text-[#667069]" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-[#1c211f]">
                  Practical Limitations
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-[#667069]">
                {data.limitations && data.limitations.map((limitation, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#667069] mt-1.5 shrink-0" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Confidence & Assessment Disclaimer Footer */}
          <div className="pt-4 border-t border-[#e6e8e5] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#667069] font-mono">
            <div className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#1e3a2b]" />
              <span>Assessment Confidence: {data.confidence}</span>
            </div>
            <span className="text-[11px] text-[#667069]">
              Evaluated with LuontoAI Circular Intelligence Engine
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
