"use client";

import React from "react";
import { ArrowRight, Leaf, Users, Factory, Sparkles } from "lucide-react";

interface CommunityValueProps {
  onExploreClick?: () => void;
}

export const CommunityValue: React.FC<CommunityValueProps> = ({ onExploreClick }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-[#e6e8e5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#edf2ee] text-[#1e3a2b] text-xs font-semibold uppercase tracking-wider border border-[#cbd2cb]/40">
            <Users className="w-3.5 h-3.5" />
            <span>Community Resilience & Local Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1c211f] tracking-tight leading-tight">
            Waste doesn’t always mean useless.
          </h2>

          {/* Editorial Visual Formula */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fbfbf9] border border-[#e6e8e5] shadow-xs">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm sm:text-base font-semibold text-[#1c211f]">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#f4f5f2] border border-[#e6e8e5]">
                Waste Material
              </span>
              <ArrowRight className="w-4 h-4 text-[#1e3a2b]" />
              <span className="px-3.5 py-1.5 rounded-lg bg-[#edf2ee] text-[#1e3a2b] border border-[#cbd2cb]/40">
                Local Resource
              </span>
              <ArrowRight className="w-4 h-4 text-[#1e3a2b]" />
              <span className="px-3.5 py-1.5 rounded-lg bg-[#e8eef5] text-[#2b4c7e] border border-[#2b4c7e]/20">
                Local Product
              </span>
              <ArrowRight className="w-4 h-4 text-[#1e3a2b]" />
              <span className="px-3.5 py-1.5 rounded-lg bg-[#1e3a2b] text-white">
                Local Value
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#667069] leading-relaxed max-w-3xl mx-auto">
            Keeping materials in circulation can reduce dependence on virgin resources and create opportunities for local reuse, production and community-led solutions.
          </p>

          {onExploreClick && (
            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#1e3a2b] hover:bg-[#2d5a43] text-white font-medium text-sm transition-all shadow-xs cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Local Resource Opportunities</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
