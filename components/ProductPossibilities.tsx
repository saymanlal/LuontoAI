"use client";

import React from "react";
import { ProductIdea } from "@/lib/types";
import { Sparkles, ArrowRight, ShieldCheck, Target, Layers } from "lucide-react";

interface ProductPossibilitiesProps {
  ideas: ProductIdea[];
  onSelectSample?: (material: string, goal?: string) => void;
  targetGoal?: string;
}

export const SAMPLE_PRODUCTS = [
  { from: "Coffee Grounds", to: "Mushroom Cultivation & Bio-Composites", desc: "Sterilized high-yield oyster mushroom substrates and bio-cups." },
  { from: "Plastic Bottles", to: "Recycled PET Felt & Acoustic Panels", desc: "Architectural sound baffles and outdoor performance thermal fleece." },
  { from: "Cardboard", to: "Molded Fiber Cushion Packaging", desc: "100% compostable shock-absorbent trays replacing Styrofoam packaging." },
  { from: "Old Textile", to: "Regenerated Spun Cellulose Fiber", desc: "Circular virgin-cotton replacement yarn and wall cavity acoustic insulation." },
  { from: "Glass Bottles", to: "Cellular Foam-Glass Gravel (Foamit)", desc: "Lightweight civil frost-insulation backfill and remelted food jars." },
  { from: "Food Waste", to: "Renewable Biomethane & Bio-Fertilizer", desc: "Upgraded transportation fuel (CBG) and pasteurized soil conditioner." }
];

export const ProductPossibilities: React.FC<ProductPossibilitiesProps> = ({
  ideas,
  onSelectSample,
  targetGoal
}) => {
  return (
    <div className="space-y-6">
      {/* Generated Ideas from active analysis */}
      {ideas && ideas.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#38ef7d] font-semibold">
                Circular Formulation Outputs
              </span>
              <h4 className="text-lg sm:text-xl font-serif text-white font-medium">
                What Could It Become?
              </h4>
            </div>
            {targetGoal ? (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#142334] text-[#a5f3fc] border border-[#38bdf8]/30">
                Tailored for: {targetGoal}
              </span>
            ) : (
              <span className="text-xs font-mono text-[#94a3b8]">
                {ideas.length} Practical Solutions
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-[#0e1924] rounded-2xl border border-[#243547] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#38ef7d]/50 hover:shadow-md transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-base font-semibold text-white flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#38ef7d]" />
                      <span>{idea.name}</span>
                    </h5>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#142634] text-[#a5f3fc] font-medium border border-[#38bdf8]/30 shrink-0">
                      Product #{index + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    {idea.description}
                  </p>

                  {idea.suitabilityForTarget && (
                    <div className="p-2.5 rounded-xl bg-[#142334] border border-[#38bdf8]/20 flex items-start space-x-2 text-xs text-[#a5f3fc]">
                      <Target className="w-3.5 h-3.5 text-[#38bdf8] shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-semibold text-white">Target Fit:</strong> {idea.suitabilityForTarget}
                      </span>
                    </div>
                  )}

                  {idea.compositeSynergy && (
                    <div className="p-2.5 rounded-xl bg-[#0f251c] border border-[#38ef7d]/20 flex items-start space-x-2 text-xs text-[#38ef7d]">
                      <Layers className="w-3.5 h-3.5 text-[#38ef7d] shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-semibold text-white">Blend Synergy:</strong> {idea.compositeSynergy}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#243547] flex items-start space-x-2 text-xs text-[#38ef7d]">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#38ef7d]" />
                  <span className="font-medium leading-tight">
                    Circular Benefit: <span className="font-normal text-[#94a3b8]">{idea.benefit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Static Catalog Examples (Explore sample transformations) */}
      {onSelectSample && (
        <section id="what-we-create" className="pt-10 border-t border-[#243547] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38ef7d] font-semibold">
              Example Blueprints
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
              Explore Benchmark Pathways
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Click any circular blueprint below to test the full analysis engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_PRODUCTS.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSample(sample.from)}
                className="group p-5 rounded-2xl bg-[#0e1924] border border-[#243547] hover:border-[#38ef7d] hover:shadow-lg transition-all text-left flex flex-col justify-between space-y-3 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#94a3b8] font-mono mb-2">
                    <span className="text-white font-semibold">{sample.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#38ef7d]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#a5f3fc] group-hover:text-[#38ef7d] transition-colors">
                    {sample.to}
                  </h4>
                  <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                    {sample.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-mono text-[#38ef7d]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Analyze this stream</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
