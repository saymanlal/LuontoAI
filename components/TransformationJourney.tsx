"use client";

import React from "react";
import { TransformationStep } from "@/lib/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface TransformationJourneyProps {
  steps: TransformationStep[];
}

const STEP_LABELS = ["COLLECT", "SORT", "PROCESS", "CREATE", "REUSE"];

export const TransformationJourney: React.FC<TransformationJourneyProps> = ({ steps }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#38ef7d] font-semibold">
            Sequential Engineering Flow
          </span>
          <h4 className="text-lg sm:text-xl font-serif text-white font-medium">
            Transformation Journey
          </h4>
        </div>
        <span className="text-xs font-mono text-[#94a3b8]">5-Step Closed Loop Pathway</span>
      </div>

      {/* Desktop Horizontal / Mobile Vertical Stepper */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.slice(0, 5).map((stepItem, idx) => {
            const stepName = STEP_LABELS[idx] || `STEP ${idx + 1}`;
            return (
              <div
                key={stepItem.step || idx}
                className="relative bg-[#0e1924] rounded-2xl border border-[#243547] p-5 flex flex-col justify-between space-y-4 hover:border-[#38ef7d]/50 transition-colors"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-[#243547] pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#1b4d3e] text-[#a5f3fc] border border-[#38ef7d]/40 flex items-center justify-center font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[#38ef7d]">
                      {stepName}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-[#243547] -mr-7 z-10" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-white leading-snug">
                    {stepItem.title}
                  </h5>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Subtle bottom check */}
                <div className="pt-2 flex items-center space-x-1 text-[11px] text-[#38ef7d] font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Phase 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
