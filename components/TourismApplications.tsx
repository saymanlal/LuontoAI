"use client";

import React from "react";
import { Hotel, UtensilsCrossed, Compass, Users, ArrowUpRight } from "lucide-react";

interface TourismApplicationsProps {
  onSelectSectorMaterial?: (material: string, goal?: string) => void;
}

const SECTORS = [
  {
    title: "Hotels & Eco-Resorts",
    subtitle: "Hospitality Stream Recovery",
    description: "Identify reusable material streams from daily guest operations, conference packaging, and bed linen cycles.",
    suggestedMaterial: "Old Textile",
    goal: "Regenerated staff uniforms and acoustic insulation",
    icon: Hotel
  },
  {
    title: "Restaurants & Cafes",
    subtitle: "Culinary By-Product Cascades",
    description: "Explore secondary uses for food prep residuals, spent coffee grounds, and compostable takeout packaging.",
    suggestedMaterial: "Coffee Grounds",
    goal: "Bio-composite tableware and mushroom substrates",
    icon: UtensilsCrossed
  },
  {
    title: "Tourist Destinations & Parks",
    subtitle: "Visitor Footprint Reduction",
    description: "Transform festival beverage cans, plastic bottles, and trail infrastructure waste into circular equipment.",
    suggestedMaterial: "Plastic Bottles",
    goal: "Trail signage and durable outdoor seating",
    icon: Compass
  },
  {
    title: "Local Communities",
    subtitle: "Decentralized Regional Loops",
    description: "Discover opportunities for municipal wood offcuts, cardboard baling, and neighborhood bio-fertilizer hubs.",
    suggestedMaterial: "Cardboard",
    goal: "Biodegradable erosion mats and seedling pots",
    icon: Users
  }
];

export const TourismApplications: React.FC<TourismApplicationsProps> = ({ onSelectSectorMaterial }) => {
  return (
    <section id="applications" className="py-16 md:py-20 border-y border-[#243547]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38ef7d] font-semibold">
            Industry Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Built for more than households.
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8]">
            Scalable circular discovery across commercial hospitality, regional tourism hubs, and public sector infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="nordic-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-[#38ef7d]/50 hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#142634] text-[#38ef7d] border border-[#38bdf8]/30 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#a5f3fc] uppercase tracking-wider">
                      {sector.subtitle}
                    </span>
                    <h3 className="text-lg font-semibold text-white mt-0.5">
                      {sector.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {sector.description}
                  </p>
                </div>

                {onSelectSectorMaterial && (
                  <button
                    onClick={() => onSelectSectorMaterial(sector.suggestedMaterial, sector.goal)}
                    className="pt-4 border-t border-[#243547] flex items-center justify-between text-xs font-semibold text-[#38ef7d] hover:text-[#a5f3fc] transition-colors cursor-pointer w-full text-left"
                  >
                    <span>Analyze {sector.suggestedMaterial}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
