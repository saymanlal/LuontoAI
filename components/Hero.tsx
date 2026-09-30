"use client";

import React from "react";
import { ArrowDown, Sparkles, RefreshCw, Layers, Box, Cpu } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onHowItWorksClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onHowItWorksClick }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle Nordic atmospheric background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#edf2ee]/70 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#e8eef5]/60 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#edf2ee] border border-[#cbd2cb]/60 text-xs font-semibold uppercase tracking-wider text-[#1e3a2b]">
              <span className="w-2 h-2 rounded-full bg-[#1e3a2b]" />
              <span>Finland · Circular Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#1c211f] leading-[1.12]">
              What if waste was the <span className="italic font-normal text-[#1e3a2b]">beginning</span>, not the end?
            </h1>

            <p className="text-lg sm:text-xl text-[#667069] max-w-2xl font-normal leading-relaxed">
              LuontoAI discovers sustainable resource and product possibilities hidden inside everyday waste.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-lg bg-[#1e3a2b] hover:bg-[#2d5a43] text-white font-medium text-base transition-all shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] focus:ring-offset-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#edf2ee]" />
                <span>Explore a Material</span>
              </button>

              <button
                onClick={onHowItWorksClick}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#edf2ee] text-[#1c211f] font-medium text-base border border-[#e6e8e5] transition-all focus:outline-none focus:ring-2 focus:ring-[#1e3a2b] cursor-pointer"
              >
                <span>How It Works</span>
                <ArrowDown className="w-4 h-4 text-[#667069]" />
              </button>
            </div>

            {/* Quick trust metrics bar */}
            <div className="pt-6 border-t border-[#e6e8e5] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#667069] font-mono">Approach</div>
                <div className="text-sm font-semibold text-[#1c211f] mt-0.5">Closed-Loop</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#667069] font-mono">Engine</div>
                <div className="text-sm font-semibold text-[#1c211f] mt-0.5">Groq LPU AI</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#667069] font-mono">Context</div>
                <div className="text-sm font-semibold text-[#1c211f] mt-0.5">Nordic Bioeconomy</div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Custom SVG/CSS Circular Loop Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white border border-[#e6e8e5] rounded-2xl p-6 sm:p-8 shadow-xs relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#e6e8e5]">
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-[#1e3a2b] animate-[spin_10s_linear_infinite]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
                    Circular Discovery Cycle
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#667069]">4-Node Loop</span>
              </div>

              {/* Loop Pathway Nodes */}
              <div className="relative space-y-4">
                {/* Node 1: Waste */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#f4f5f2] border border-[#e6e8e5]">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#667069]/15 flex items-center justify-center text-[#1c211f] font-mono font-semibold text-xs">
                      01
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#667069]">Source Input</div>
                      <div className="text-sm font-semibold text-[#1c211f]">WASTE MATERIAL</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#667069] font-serif italic">Residual fraction</span>
                </div>

                <div className="flex justify-center -my-2 text-[#1e3a2b]">
                  <ArrowDown className="w-4 h-4 text-[#1e3a2b]" />
                </div>

                {/* Node 2: AI Analysis */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#e8eef5]/60 border border-[#2b4c7e]/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#2b4c7e] flex items-center justify-center text-white">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#2b4c7e]">Intelligence</div>
                      <div className="text-sm font-semibold text-[#1c211f]">AI RESOURCE DISCOVERY</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-[#2b4c7e] font-medium">Groq Engine</span>
                </div>

                <div className="flex justify-center -my-2 text-[#1e3a2b]">
                  <ArrowDown className="w-4 h-4 text-[#1e3a2b]" />
                </div>

                {/* Node 3: Resource */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#edf2ee] border border-[#1e3a2b]/20">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1e3a2b] flex items-center justify-center text-white">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#1e3a2b]">Refinement</div>
                      <div className="text-sm font-semibold text-[#1c211f]">VALUABLE RESOURCE</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#1e3a2b] font-mono">Biomass / Fiber</span>
                </div>

                <div className="flex justify-center -my-2 text-[#1e3a2b]">
                  <ArrowDown className="w-4 h-4 text-[#1e3a2b]" />
                </div>

                {/* Node 4: Product */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border-2 border-[#1e3a2b]">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-[#1e3a2b] flex items-center justify-center text-white">
                      <Box className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#1e3a2b]">Output</div>
                      <div className="text-sm font-semibold text-[#1c211f]">SUSTAINABLE PRODUCT</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#1e3a2b]">NEW LIFE ↺</span>
                </div>
              </div>

              {/* Loop Footnote */}
              <div className="mt-5 pt-4 border-t border-[#e6e8e5] text-center">
                <p className="text-xs text-[#667069] leading-relaxed">
                  Every output becomes the organic or technical nutrient for the next generation of products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
