"use client";

import React from "react";
import { TreePine, Waves, Shield, Recycle, ArrowRight } from "lucide-react";

export const FinlandSection: React.FC = () => {
  return (
    <section id="finland" className="py-16 md:py-24 border-b border-[#243547]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#142334] text-[#a5f3fc] text-xs font-semibold uppercase tracking-wider border border-[#38bdf8]/30">
              <span className="w-2 h-2 rounded-full bg-[#38ef7d]" />
              <span>Nordic Sustainability Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
              Inspired by Finland’s resource wisdom.
            </h2>

            <p className="text-base text-[#cbd5e1] leading-relaxed">
              In Finnish culture, nature (<span className="italic font-serif text-[#38ef7d]">luonto</span>) is not merely scenery — it is a living system requiring quiet stewardship, resource efficiency, and deep respect.
            </p>

            <p className="text-sm text-[#94a3b8] leading-relaxed">
              From pioneering nationwide deposit-return systems (Palpa) to advanced wood fiber biorefineries and circular textile innovators, Finnish ecological engineering focuses on pragmatic solutions that leave no material stranded.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547]">
                <TreePine className="w-5 h-5 text-[#38ef7d] mb-2" />
                <h4 className="text-sm font-semibold text-white">Bioeconomy Cascades</h4>
                <p className="text-xs text-[#94a3b8] mt-1">Maximizing value per raw fiber before energy recovery.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#0e1924] border border-[#243547]">
                <Recycle className="w-5 h-5 text-[#38bdf8] mb-2" />
                <h4 className="text-sm font-semibold text-white">Systemic Return Models</h4>
                <p className="text-xs text-[#94a3b8] mt-1">Over 90% return efficiency in standardized packaging loops.</p>
              </div>
            </div>
          </div>

          {/* Right Visual / Editorial Card */}
          <div className="lg:col-span-6">
            <div className="nordic-card rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden text-left">
              {/* Subtle Nordic Blue Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#11998e] via-[#38ef7d] to-[#38bdf8]" />

              <div className="flex items-center justify-between border-b border-[#243547] pb-4">
                <div className="flex items-center space-x-2 text-[#a5f3fc]">
                  <Waves className="w-5 h-5 text-[#38ef7d]" />
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                    Nordic Design Tenets
                  </span>
                </div>
                <span className="text-xs font-mono text-[#94a3b8]">Luonto Principles</span>
              </div>

              <div className="space-y-4 text-sm text-[#cbd5e1]">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1b4d3e] text-[#a5f3fc] border border-[#38ef7d]/30 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Simplicity & Material Purity</h5>
                    <p className="text-xs text-[#94a3b8] mt-0.5">
                      Designing materials and composites for unencumbered disassembly and clean remanufacturing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1b4d3e] text-[#a5f3fc] border border-[#38ef7d]/30 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Local Circular Compounding</h5>
                    <p className="text-xs text-[#94a3b8] mt-0.5">
                      Connecting regional hotels, restaurants, and tourism sites to nearby processors to eliminate transport miles.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#1b4d3e] text-[#a5f3fc] border border-[#38ef7d]/30 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Honest Environmental Verification</h5>
                    <p className="text-xs text-[#94a3b8] mt-0.5">
                      Rejecting greenwashing in favor of verifiable material pathways and realistic practical constraints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#243547] flex items-center justify-between text-xs text-[#94a3b8]">
                <span className="font-mono">Student Innovation Initiative</span>
                <span className="text-[#38ef7d] font-medium flex items-center space-x-1">
                  <span>World Tourism Day 2026</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
