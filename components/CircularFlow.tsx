"use client";

import React from "react";
import { ArrowDown, RefreshCw, ShoppingCart, Trash, Truck, Factory, PackageCheck, Repeat } from "lucide-react";

export const CircularFlow: React.FC = () => {
  const steps = [
    { label: "CONSUME", sub: "Product utilization", icon: ShoppingCart },
    { label: "WASTE", sub: "Material residual", icon: Trash },
    { label: "COLLECT", sub: "Segregated gathering", icon: Truck },
    { label: "RECOVER", sub: "AI-guided sorting", icon: RefreshCw },
    { label: "CREATE", sub: "Secondary manufacturing", icon: Factory },
    { label: "REUSE", sub: "Renewed utility", icon: PackageCheck }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c211f] tracking-tight">
            From Waste to New Life
          </h2>
          <p className="text-sm sm:text-base text-[#667069]">
            The circular lifecycle replaces linear extraction with continuous regenerative material loops.
          </p>
        </div>

        {/* Circular Sequence Grid */}
        <div className="bg-white rounded-3xl border border-[#e6e8e5] p-6 sm:p-10 md:p-14 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative items-center">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center space-y-3 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#edf2ee] text-[#1e3a2b] flex items-center justify-center border border-[#cbd2cb]/40 group-hover:bg-[#1e3a2b] group-hover:text-white transition-all shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#667069] uppercase tracking-wider">
                      Stage 0{index + 1}
                    </div>
                    <div className="text-sm font-bold tracking-tight text-[#1c211f] mt-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-[#667069] mt-1">
                      {item.sub}
                    </div>
                  </div>

                  {/* Flow arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden pt-2 text-[#1e3a2b]">
                      <ArrowDown className="w-4 h-4 text-[#1e3a2b]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Loop Return Banner */}
          <div className="mt-12 pt-8 border-t border-[#e6e8e5] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#fbfbf9] rounded-2xl p-6 border border-[#e6e8e5]">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#1e3a2b] text-white flex items-center justify-center shrink-0">
                <Repeat className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#1c211f]">
                  Continuous Regenerative Loop (↺)
                </h4>
                <p className="text-xs text-[#667069]">
                  At the REUSE stage, materials re-enter consumption without landfilling or virgin resource depletion.
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#edf2ee] text-[#1e3a2b] font-semibold border border-[#cbd2cb]/40 shrink-0">
              Zero Landfill Mandate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
