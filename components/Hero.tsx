"use client";

import React from "react";
import { ArrowDown, Sparkles, Layers, Box, Cpu, Repeat, ShieldCheck, TreePine } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
  onMultiBlendClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHowItWorksClick, onMultiBlendClick }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#142634] border border-[#38bdf8]/40 text-xs font-mono uppercase tracking-wider text-[#a5f3fc]">
              <span className="w-2 h-2 rounded-full bg-[#38ef7d] animate-pulse" />
              <span>Finland · Circular Bioeconomy & Materials Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white leading-[1.12]">
              What if waste was the <span className="italic font-normal text-[#38ef7d]">beginning</span>, not the end?
            </h1>

            <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl font-normal leading-relaxed">
              LuontoAI engineers regenerative resource pathways from single or combined waste streams. Co-compound multi-waste composites, target exact product ideas, and compare circular replacements against conventional fossil materials.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              <button
                onClick={onExploreClick}
                className="nordic-button-primary inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-xl font-medium text-base shadow-xs hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#38ef7d] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#a5f3fc]" />
                <span>Explore a Waste Stream</span>
              </button>

              <button
                onClick={onMultiBlendClick}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-[#142334] hover:bg-[#1c3046] text-[#a5f3fc] font-medium text-base border border-[#38bdf8]/30 transition-all focus:outline-none focus:ring-2 focus:ring-[#38bdf8] cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#38ef7d]" />
                <span>Compound Multiple Wastes</span>
              </button>

              <button
                onClick={onHowItWorksClick}
                className="inline-flex items-center justify-center space-x-2 px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-[#94a3b8] hover:text-white font-medium text-sm transition-all focus:outline-none cursor-pointer"
              >
                <span>How It Works</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Quick trust metrics bar */}
            <div className="pt-6 border-t border-[#243547] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-mono">Approach</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center space-x-1">
                  <TreePine className="w-3.5 h-3.5 text-[#38ef7d]" />
                  <span>Cascade Loops</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-mono">Intelligence</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center space-x-1">
                  <Cpu className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Groq AI LPU</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#94a3b8] font-mono">Standard</div>
                <div className="text-sm font-semibold text-white mt-0.5 flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38ef7d]" />
                  <span>Honest Metrics</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Frosted Glass Circular Flow Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md nordic-card rounded-2xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              {/* Subtle top ice glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#11998e] via-[#38ef7d] to-[#38bdf8]" />

              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#243547]">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#38ef7d] animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#a5f3fc] font-semibold">
                    Regenerative Cycle
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1b2b3a] text-[#94a3b8] border border-[#243547]">
                  Continuous Loop ↺
                </span>
              </div>

              {/* Loop Pathway Nodes */}
              <div className="space-y-3">
                {/* Node 1: Waste Input */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0e1924] border border-[#243547]">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-[#243547] flex items-center justify-center text-[#cbd5e1] font-mono text-xs font-semibold">
                      01
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#94a3b8]">Input Waste</div>
                      <div className="text-xs font-semibold text-white">Single or Compounded Wastes</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#94a3b8] font-mono">Organic/Tech</span>
                </div>

                <div className="flex justify-center -my-1 text-[#38ef7d]">
                  <ArrowDown className="w-3.5 h-3.5 text-[#38ef7d]" />
                </div>

                {/* Node 2: Groq Intelligence */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#132333] border border-[#38bdf8]/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-[#11998e]/30 border border-[#38ef7d]/40 flex items-center justify-center text-[#38ef7d]">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#a5f3fc]">AI Formulation</div>
                      <div className="text-xs font-semibold text-white">Groq Bio-Compounding Engine</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#38ef7d]">Synthesis</span>
                </div>

                <div className="flex justify-center -my-1 text-[#38ef7d]">
                  <ArrowDown className="w-3.5 h-3.5 text-[#38ef7d]" />
                </div>

                {/* Node 3: Secondary Feedstock */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#0f2820] border border-[#38ef7d]/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-[#2e6047] flex items-center justify-center text-white">
                      <Layers className="w-3.5 h-3.5 text-[#38ef7d]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#38ef7d]">Secondary Resource</div>
                      <div className="text-xs font-semibold text-white">Valuable Micro-Flakes / Bio-Resin</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#a5f3fc] font-mono">Feedstock</span>
                </div>

                <div className="flex justify-center -my-1 text-[#38ef7d]">
                  <ArrowDown className="w-3.5 h-3.5 text-[#38ef7d]" />
                </div>

                {/* Node 4: Finished Product */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#142a3e] border border-[#38bdf8]/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-[#11998e] to-[#38ef7d] flex items-center justify-center text-[#080d13]">
                      <Box className="w-3.5 h-3.5 font-bold" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#a5f3fc]">Alternative Product</div>
                      <div className="text-xs font-bold text-white">Sustainable Replacement</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#38ef7d] font-semibold">New Life ↺</span>
                </div>
              </div>

              {/* Loop Footnote */}
              <div className="mt-4 pt-3 border-t border-[#243547] text-center">
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Eliminates reliance on virgin petrochemicals and locks carbon in durable local products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
