"use client";

import React from "react";
import { TreePine, Waves, Shield, Recycle, ArrowRight } from "lucide-react";

export const FinlandSection: React.FC = () => {
  return (
    <section id="finland" className="py-16 md:py-24 border-b border-[#e6e8e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#e8eef5] text-[#2b4c7e] text-xs font-semibold uppercase tracking-wider border border-[#2b4c7e]/20">
              <span className="w-2 h-2 rounded-full bg-[#2b4c7e]" />
              <span>Nordic Sustainability Heritage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c211f] tracking-tight leading-tight">
              Inspired by Finland’s resource wisdom.
            </h2>

            <p className="text-base text-[#667069] leading-relaxed">
              In Finnish culture, nature (<span className="italic font-serif text-[#1e3a2b]">luonto</span>) is not merely scenery — it is a living system requiring quiet stewardship, resource efficiency, and deep respect.
            </p>

            <p className="text-sm text-[#667069] leading-relaxed">
              From pioneering nationwide deposit-return systems to advanced wood fiber biorefineries and circular textile innovators, Finnish ecological design focuses on pragmatic solutions that leave no material stranded.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-[#e6e8e5]">
                <TreePine className="w-5 h-5 text-[#1e3a2b] mb-2" />
                <h4 className="text-sm font-semibold text-[#1c211f]">Bioeconomy Cascades</h4>
                <p className="text-xs text-[#667069] mt-1">Maximizing value per raw fiber before energy recovery.</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#e6e8e5]">
                <Recycle className="w-5 h-5 text-[#2b4c7e] mb-2" />
                <h4 className="text-sm font-semibold text-[#1c211f]">Systemic Return Models</h4>
                <p className="text-xs text-[#667069] mt-1">Over 90% return efficiency in standardized packaging loops.</p>
              </div>
            </div>
          </div>

          {/* Right Visual / Editorial Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-[#e6e8e5] p-8 sm:p-10 space-y-6 shadow-xs relative overflow-hidden">
              {/* Subtle Nordic Blue Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2b4c7e] via-[#1e3a2b] to-[#2b4c7e]" />

              <div className="flex items-center justify-between border-b border-[#e6e8e5] pb-4">
                <div className="flex items-center space-x-2 text-[#2b4c7e]">
                  <Waves className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-widest font-semibold">
                    Nordic Design Tenets
                  </span>
                </div>
                <span className="text-xs font-mono text-[#667069]">Luonto Principles</span>
              </div>

              <div className="space-y-4 text-sm text-[#1c211f]">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#edf2ee] text-[#1e3a2b] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h5 className="font-semibold">Simplicity & Functionality</h5>
                    <p className="text-xs text-[#667069] mt-0.5">
                      Designing materials and products for unencumbered disassembly and clean remanufacturing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#edf2ee] text-[#1e3a2b] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h5 className="font-semibold">Local Circular Loops</h5>
                    <p className="text-xs text-[#667069] mt-0.5">
                      Connecting regional hotels, restaurants, and tourism sites to nearby processors to slash transport emissions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-[#edf2ee] text-[#1e3a2b] flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h5 className="font-semibold">Honest Environmental Communication</h5>
                    <p className="text-xs text-[#667069] mt-0.5">
                      Rejecting greenwashing in favor of verifiable material pathways and realistic practical assessments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e6e8e5] flex items-center justify-between text-xs text-[#667069]">
                <span className="font-mono">Student Innovation Initiative</span>
                <span className="text-[#1e3a2b] font-medium flex items-center space-x-1">
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
