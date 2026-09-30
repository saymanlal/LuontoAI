"use client";

import React from "react";
import { ProductIdea } from "@/lib/types";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface ProductPossibilitiesProps {
  ideas: ProductIdea[];
  onSelectSample?: (material: string) => void;
}

export const SAMPLE_PRODUCTS = [
  { from: "Coffee Grounds", to: "Compost & Substrate", desc: "Enriched horticultural growing medium and edible mushroom spawn blocks." },
  { from: "Plastic Bottles", to: "Recycled PET Products", desc: "High-tenacity acoustic felt, technical outerwear fleece, and filament." },
  { from: "Cardboard", to: "Recycled Packaging", desc: "Shock-absorbent thermoformed molded pulp cushions replacing Styrofoam." },
  { from: "Old Textile", to: "Recovered Textile Fiber", desc: "Regenerated cellulose fibers and soundproofing insulation panels." },
  { from: "Glass Bottles", to: "New Glass Products", desc: "Remelted circular food jars and lightweight cellular foam-glass aggregates." },
  { from: "Food Waste", to: "Compost / Biogas Feedstock", desc: "Renewable transportation biomethane fuel and pasteurized bio-fertilizer." }
];

export const ProductPossibilities: React.FC<ProductPossibilitiesProps> = ({ ideas, onSelectSample }) => {
  return (
    <div className="space-y-6">
      {/* Generated Ideas from active analysis */}
      {ideas && ideas.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
                Circular Product Pathways
              </span>
              <h4 className="text-lg sm:text-xl font-serif text-[#1c211f] font-medium">
                What Could It Become?
              </h4>
            </div>
            <span className="text-xs font-mono text-[#667069]">
              {ideas.length} Practical Solutions
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ideas.map((idea, index) => (
              <div
                key={index}
                className="bg-[#fbfbf9] rounded-2xl border border-[#e6e8e5] p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-[#1e3a2b]/40 hover:shadow-xs transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h5 className="text-base font-semibold text-[#1c211f] flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-[#1e3a2b]" />
                      <span>{idea.name}</span>
                    </h5>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#edf2ee] text-[#1e3a2b] font-medium border border-[#cbd2cb]/40 shrink-0">
                      Product #{index + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667069] leading-relaxed">
                    {idea.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e6e8e5] flex items-start space-x-2 text-xs text-[#1e3a2b]">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#1e3a2b]" />
                  <span className="font-medium leading-tight">
                    Benefit: <span className="font-normal text-[#1c211f]">{idea.benefit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Static Catalog Examples (Explore sample transformations) */}
      {onSelectSample && (
        <section id="what-we-create" className="pt-10 border-t border-[#e6e8e5] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
              Example Blueprints
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#1c211f] tracking-tight">
              What Could We Create?
            </h3>
            <p className="text-xs sm:text-sm text-[#667069]">
              Click any circular blueprint below to test the full analysis engine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_PRODUCTS.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => onSelectSample(sample.from)}
                className="group p-5 rounded-2xl bg-white border border-[#e6e8e5] hover:border-[#1e3a2b] hover:shadow-xs transition-all text-left flex flex-col justify-between space-y-3 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-[#667069] font-mono mb-2">
                    <span className="text-[#1c211f] font-semibold">{sample.from}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#1e3a2b]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#1e3a2b] group-hover:text-[#2d5a43] transition-colors">
                    {sample.to}
                  </h4>
                  <p className="text-xs text-[#667069] mt-2 leading-relaxed">
                    {sample.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center space-x-1.5 text-[11px] font-mono text-[#1e3a2b]">
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
