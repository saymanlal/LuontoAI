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
          <span className="text-xs font-mono uppercase tracking-widest text-[#1e3a2b] font-semibold">
            Sequential Pathway
          </span>
          <h4 className="text-lg sm:text-xl font-serif text-[#1c211f] font-medium">
            Transformation Journey
          </h4>
        </div>
        <span className="text-xs font-mono text-[#667069]">5-Step Closed Loop Flow</span>
      </div>

      {/* Desktop Horizontal / Mobile Vertical Stepper */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.slice(0, 5).map((stepItem, idx) => {
            const stepName = STEP_LABELS[idx] || `STEP ${idx + 1}`;
            return (
              <div
                key={stepItem.step || idx}
                className="relative bg-[#fbfbf9] rounded-2xl border border-[#e6e8e5] p-5 flex flex-col justify-between space-y-4 hover:border-[#1e3a2b]/40 transition-colors"
              >
                {/* Step Header */}
                <div className="flex items-center justify-between border-b border-[#e6e8e5] pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-[#1e3a2b] text-white flex items-center justify-center font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[#1e3a2b]">
                      {stepName}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="hidden md:block w-4 h-4 text-[#cbd2cb] -mr-7 z-10" />
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h5 className="text-sm font-semibold text-[#1c211f] leading-snug">
                    {stepItem.title}
                  </h5>
                  <p className="text-xs text-[#667069] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Subtle bottom check */}
                <div className="pt-2 flex items-center space-x-1 text-[11px] text-[#1e3a2b] font-mono">
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
