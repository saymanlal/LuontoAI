"use client";

import React from "react";
import { ArrowRight, Users, Sparkles, Layers } from "lucide-react";

interface CommunityValueProps {
  onExploreClick?: () => void;
}

export const CommunityValue: React.FC<CommunityValueProps> = ({ onExploreClick }) => {
  return (
    <section className="py-16 md:py-24 border-b border-[#243547]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#142334] text-[#a5f3fc] text-xs font-semibold uppercase tracking-wider border border-[#38bdf8]/30">
            <Users className="w-3.5 h-3.5 text-[#38ef7d]" />
            <span>Community Resilience & Local Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
            Waste doesn’t always mean useless.
          </h2>

          {/* Editorial Visual Formula */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0e1924] border border-[#243547] shadow-xl">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-white">
              <span className="px-3.5 py-2 rounded-xl bg-[#142334] border border-[#243547] text-[#cbd5e1]">
                Waste Material
              </span>
              <ArrowRight className="w-4 h-4 text-[#38ef7d]" />
              <span className="px-3.5 py-2 rounded-xl bg-[#0f2820] text-[#38ef7d] border border-[#38ef7d]/30">
                Local Resource
              </span>
              <ArrowRight className="w-4 h-4 text-[#38ef7d]" />
              <span className="px-3.5 py-2 rounded-xl bg-[#142634] text-[#38bdf8] border border-[#38bdf8]/30">
                Local Product
              </span>
              <ArrowRight className="w-4 h-4 text-[#38ef7d]" />
              <span className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#11998e] to-[#38ef7d] text-[#080d13] font-bold">
                Local Value
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-3xl mx-auto">
            Keeping materials in circulation reduces dependence on virgin fossil resources and creates opportunities for regional manufacturing, eco-tourism resilience, and community-led green jobs.
          </p>

          {onExploreClick && (
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="nordic-button-primary inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#a5f3fc]" />
                <span>Explore Local Resource Opportunities</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
